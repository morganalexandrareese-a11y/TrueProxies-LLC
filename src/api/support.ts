import apiClient from '@/lib/apiClient';

export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  helpful?: boolean;
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  category: 'technical' | 'billing' | 'account' | 'other';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  messages: ChatMessage[];
  createdAt: Date;
  resolvedAt?: Date;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  helpful: number;
  unhelpful: number;
}

export const supportAPI = {
  sendMessage: async (message: string, ticketId?: string): Promise<ChatMessage> => {
    const response = await apiClient.post('/support/chat', {
      message,
      ticketId,
    });
    return response.data;
  },

  getChatHistory: async (limit: number = 50): Promise<ChatMessage[]> => {
    const response = await apiClient.get(`/support/chat/history?limit=${limit}`);
    return response.data;
  },

  getTickets: async (): Promise<SupportTicket[]> => {
    const response = await apiClient.get('/support/tickets');
    return response.data;
  },

  createTicket: async (data: {
    subject: string;
    description: string;
    category: string;
  }): Promise<SupportTicket> => {
    const response = await apiClient.post('/support/tickets', data);
    return response.data;
  },

  getTicket: async (ticketId: string): Promise<SupportTicket> => {
    const response = await apiClient.get(`/support/tickets/${ticketId}`);
    return response.data;
  },

  closeTicket: async (ticketId: string): Promise<SupportTicket> => {
    const response = await apiClient.post(`/support/tickets/${ticketId}/close`);
    return response.data;
  },

  rateMessage: async (messageId: string, helpful: boolean): Promise<void> => {
    await apiClient.post(`/support/chat/${messageId}/rate`, { helpful });
  },

  getFAQ: async (category?: string): Promise<FAQItem[]> => {
    const url = category ? `/support/faq?category=${category}` : '/support/faq';
    const response = await apiClient.get(url);
    return response.data;
  },

  getSuggestedSolutions: async (issue: string): Promise<any[]> => {
    const response = await apiClient.post('/support/suggestions', { issue });
    return response.data;
  },
};
