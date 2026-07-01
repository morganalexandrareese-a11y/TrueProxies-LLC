import apiClient from '@/lib/apiClient';
import { Subscription } from '@/types';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  bandwidth: number;
  connections: number;
  features: string[];
}

export const subscriptionAPI = {
  getPlans: async (): Promise<SubscriptionPlan[]> => {
    const response = await apiClient.get('/subscriptions/plans');
    return response.data;
  },

  getUserSubscription: async (userId: string): Promise<Subscription | null> => {
    const response = await apiClient.get(`/subscriptions/user/${userId}`);
    return response.data;
  },

  createSubscription: async (planId: string, paymentMethodId: string): Promise<Subscription> => {
    const response = await apiClient.post('/subscriptions', {
      planId,
      paymentMethodId,
    });
    return response.data;
  },

  cancelSubscription: async (subscriptionId: string): Promise<void> => {
    await apiClient.post(`/subscriptions/${subscriptionId}/cancel`);
  },
};
