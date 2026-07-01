import express, { Request, Response } from 'express';
import { mpesaService } from '../services/mpesaService';

const router = express.Router();

interface PaymentRequest extends Request {
  body: {
    amount: number;
    phone: string;
    planId: string;
    userId: string;
  };
}

/**
 * POST /api/payments/mpesa
 * Initiate M-Pesa payment
 */
router.post('/mpesa', async (req: PaymentRequest, res: Response) => {
  try {
    const { amount, phone, planId, userId } = req.body;

    // Validate inputs
    if (!amount || amount < 100 || amount > 100000) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    if (!phone || !/^254\d{9}$/.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    // Initiate STK Push
    const result = await mpesaService.initiateStkPush({
      phoneNumber: phone,
      amount,
      reference: `${userId}-${planId}-${Date.now()}`,
      description: `TrueProxies ${planId} plan`,
    });

    if (result.ResponseCode === '0') {
      // Store transaction in database (to be implemented)
      res.json({
        success: true,
        checkoutRequestId: result.CheckoutRequestID,
        message: 'Payment initiated. Check your phone for M-Pesa prompt.',
      });
    } else {
      res.status(400).json({
        success: false,
        message: result.ResponseMessage || 'Payment initiation failed',
      });
    }
  } catch (error: any) {
    console.error('Payment error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Payment processing failed',
    });
  }
});

/**
 * POST /api/payments/mpesa/callback
 * Handle M-Pesa callback
 */
router.post('/mpesa/callback', async (req: Request, res: Response) => {
  try {
    const { Body } = req.body;

    // Extract transaction data
    const stk_callback = Body.stkCallback;
    const { CheckoutRequestID, ResultCode, CallbackMetadata } = stk_callback;

    if (ResultCode === 0) {
      // Payment successful
      const metadata = CallbackMetadata?.Item || [];
      const transactionData: any = {};

      metadata.forEach((item: any) => {
        transactionData[item.Name] = item.Value;
      });

      // Update transaction in database (to be implemented)
      console.log('Payment successful:', {
        CheckoutRequestID,
        Amount: transactionData.Amount,
        MpesaReceiptNumber: transactionData.MpesaReceiptNumber,
        PhoneNumber: transactionData.PhoneNumber,
      });

      // Activate proxy for user (to be implemented)
    } else {
      // Payment failed
      console.log('Payment failed:', {
        CheckoutRequestID,
        ResultCode,
        ResultDesc: stk_callback.ResultDesc,
      });
    }

    // Return success response to M-Pesa
    res.json({ success: true });
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ success: false });
  }
});

export default router;
