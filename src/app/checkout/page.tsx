'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface PaymentOption {
  method: 'mpesa' | 'card';
  name: string;
  icon: string;
}

const MPESA_PHONE = '0117358581';
const TELEGRAM_URL = 'https://t.me/giantDigitalcenter';

const paymentPlans = [
  { id: 'starter', name: 'Starter', price: 100 },
  { id: 'basic', name: 'Basic', price: 500 },
  { id: 'professional', name: 'Professional', price: 1000 },
  { id: 'business', name: 'Business', price: 5000 },
  { id: 'enterprise', name: 'Enterprise', price: 10000 },
  { id: 'custom', name: 'Custom', price: null },
];

export default function CheckoutPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Please log in to purchase proxies</p>
          <Link href="/login" className="px-6 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const getPlanPrice = () => {
    if (selectedPlan === 'custom') {
      return customAmount ? parseInt(customAmount) : null;
    }
    const plan = paymentPlans.find(p => p.id === selectedPlan);
    return plan?.price || null;
  };

  const handleMPesaPayment = async () => {
    if (!phoneNumber) {
      setError('Please enter your M-Pesa phone number');
      return;
    }

    if (!selectedPlan) {
      setError('Please select a plan');
      return;
    }

    const amount = getPlanPrice();
    if (!amount) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/payments/mpesa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          phone: phoneNumber,
          planId: selectedPlan,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Payment failed');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard?payment=success');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Payment processing failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold">TrueProxies</span>
          </div>
          <Link href="/dashboard" className="text-slate-300 hover:text-white">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Select Plan</h2>
            <div className="space-y-3">
              {paymentPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    if (plan.id !== 'custom') setCustomAmount('');
                  }}
                  className={`w-full p-4 rounded-lg border-2 transition text-left ${
                    selectedPlan === plan.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{plan.name}</p>
                      {plan.price && <p className="text-slate-400 text-sm">KSH {plan.price.toLocaleString()}</p>}
                      {!plan.price && <p className="text-slate-400 text-sm">Custom amount</p>}
                    </div>
                    <input
                      type="radio"
                      name="plan"
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="w-5 h-5"
                    />
                  </div>
                </button>
              ))}
            </div>

            {selectedPlan === 'custom' && (
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Enter Custom Amount (KSH)</label>
                <input
                  type="number"
                  min="50000"
                  max="100000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount between 50,000 - 100,000"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-500"
                />
                {customAmount && (
                  <p className="text-slate-300 text-sm mt-2">Amount: KSH {parseInt(customAmount).toLocaleString()}</p>
                )}
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

            {success ? (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-center">
                <p className="text-green-400 font-semibold mb-2">✓ Payment Initiated</p>
                <p className="text-sm text-green-300">Complete the M-Pesa prompt on your phone.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* M-Pesa Option */}
                <div className="bg-slate-700/50 rounded-lg p-6 border-2 border-slate-600 hover:border-blue-500 transition">
                  <div className="flex items-start gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-5 h-5 mt-1"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">M-Pesa</h3>
                      <p className="text-slate-300 text-sm mb-4">Pay securely using M-Pesa</p>
                      {paymentMethod === 'mpesa' && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium mb-2">M-Pesa Phone Number</label>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="07XXXXXXXX"
                            className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Order Summary */}
                {selectedPlan && getPlanPrice() && (
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-300 text-sm mb-3">Order Summary</p>
                    <div className="space-y-2 border-t border-slate-600 pt-3">
                      <div className="flex justify-between text-sm">
                        <span>Plan:</span>
                        <span className="font-semibold">{paymentPlans.find(p => p.id === selectedPlan)?.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Amount:</span>
                        <span className="font-semibold">KSH {getPlanPrice()?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Button */}
                <button
                  onClick={handleMPesaPayment}
                  disabled={!selectedPlan || !paymentMethod || loading || !getPlanPrice()}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : `Pay KSH ${getPlanPrice()?.toLocaleString() || '0'}`}
                </button>

                <p className="text-slate-400 text-xs text-center">
                  Payment will be processed to: {MPESA_PHONE}
                </p>
              </div>
            )}

            {/* Support */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-3">Need help?</p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.42 0-.34-.25-.477-.784l-2.09-6.869c-.184-.61.032-.861.625-1.084l15.126-5.83c.57-.22.898.032.732.773l-.05.258z"/>
                </svg>
                Contact Support on Telegram
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
