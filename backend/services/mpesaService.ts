import axios from 'axios';
import crypto from 'crypto';

const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY || '';
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET || '';
const MPESA_MERCHANT_CODE = process.env.MPESA_MERCHANT_CODE || '';
const MPESA_PASSKEY = process.env.MPESA_PASSKEY || '';
const MPESA_ENDPOINT = 'https://sandbox.safaricom.co.ke'; // Use production endpoint in production

export class MPesaService {
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  /**
   * Get access token from M-Pesa
   */
  async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
      const response = await axios.get(`${MPESA_ENDPOINT}/oauth/v1/generate?grant_type=client_credentials`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      this.accessToken = response.data.access_token;
      this.tokenExpiry = Date.now() + (response.data.expires_in * 1000) - 5000; // Refresh 5 seconds before expiry
      return this.accessToken;
    } catch (error) {
      console.error('Failed to get M-Pesa access token:', error);
      throw new Error('M-Pesa authentication failed');
    }
  }

  /**
   * Initiate STK Push for payment
   */
  async initiateStkPush({
    phoneNumber,
    amount,
    reference,
    description,
  }: {
    phoneNumber: string;
    amount: number;
    reference: string;
    description: string;
  }): Promise<any> {
    try {
      const accessToken = await this.getAccessToken();
      const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
      const password = Buffer.from(
        `${MPESA_MERCHANT_CODE}${MPESA_PASSKEY}${timestamp}`
      ).toString('base64');

      const payload = {
        BusinessShortCode: MPESA_MERCHANT_CODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: MPESA_MERCHANT_CODE,
        PhoneNumber: phoneNumber,
        CallBackURL: `${process.env.BACKEND_URL}/api/payments/mpesa/callback`,
        AccountReference: reference,
        TransactionDesc: description,
      };

      const response = await axios.post(
        `${MPESA_ENDPOINT}/mpesa/stkpush/v1/processrequest`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('STK Push failed:', error.response?.data || error.message);
      throw new Error('Failed to initiate payment');
    }
  }

  /**
   * Verify payment callback
   */
  verifyCallback(signature: string, body: string): boolean {
    try {
      const hmac = crypto.createHmac('sha256', MPESA_PASSKEY).update(body).digest('hex');
      return hmac === signature;
    } catch (error) {
      return false;
    }
  }

  /**
   * Query transaction status
   */
  async queryTransactionStatus({
    checkoutRequestID,
  }: {
    checkoutRequestID: string;
  }): Promise<any> {
    try {
      const accessToken = await this.getAccessToken();
      const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
      const password = Buffer.from(
        `${MPESA_MERCHANT_CODE}${MPESA_PASSKEY}${timestamp}`
      ).toString('base64');

      const payload = {
        BusinessShortCode: MPESA_MERCHANT_CODE,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestID,
      };

      const response = await axios.post(
        `${MPESA_ENDPOINT}/mpesa/stkpushquery/v1/query`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Query failed:', error.response?.data || error.message);
      throw new Error('Failed to query transaction');
    }
  }
}

export const mpesaService = new MPesaService();
