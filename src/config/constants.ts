export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
export const TELEGRAM_CHANNEL = 'https://t.me/giantDigitalcenter';
export const MPESA_PHONE = '0117358581';
export const CURRENCY = 'KSH';

export const PROXY_PLANS = {
  starter: { id: 'starter', name: 'Starter', price: 100, bandwidth: 5, connections: 1 },
  basic: { id: 'basic', name: 'Basic', price: 500, bandwidth: 50, connections: 3 },
  professional: { id: 'professional', name: 'Professional', price: 1000, bandwidth: 500, connections: 10 },
  business: { id: 'business', name: 'Business', price: 5000, bandwidth: 5000, connections: 50 },
  enterprise: { id: 'enterprise', name: 'Enterprise', price: 10000, bandwidth: 20000, connections: 200 },
  custom: { id: 'custom', name: 'Custom', price: null, bandwidth: null, connections: null },
};
