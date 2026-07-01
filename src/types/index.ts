export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
}

export interface ProxyServer {
  id: string;
  region: 'canada' | 'usa' | 'australia';
  ip: string;
  port: number;
  status: 'active' | 'inactive';
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}
