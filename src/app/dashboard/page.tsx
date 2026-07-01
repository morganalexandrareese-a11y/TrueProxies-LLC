'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold">TrueProxies Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">{user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Bandwidth Used</div>
            <div className="text-3xl font-bold">2.4 GB</div>
            <div className="text-slate-400 text-xs mt-2">of 100 GB/month</div>
          </div>
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Active Connections</div>
            <div className="text-3xl font-bold">5</div>
            <div className="text-slate-400 text-xs mt-2">of 10 available</div>
          </div>
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Uptime</div>
            <div className="text-3xl font-bold">99.9%</div>
            <div className="text-slate-400 text-xs mt-2">Last 30 days</div>
          </div>
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Plan</div>
            <div className="text-3xl font-bold">Pro</div>
            <div className="text-slate-400 text-xs mt-2">$99/month</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800 rounded-lg border border-slate-700">
          <div className="border-b border-slate-700 flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'overview'
                  ? 'border-b-2 border-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('proxies')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'proxies'
                  ? 'border-b-2 border-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              My Proxies
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'billing'
                  ? 'border-b-2 border-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Billing
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 font-semibold transition ${
                activeTab === 'settings'
                  ? 'border-b-2 border-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Settings
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Account Overview</h3>
                <p className="text-slate-300 mb-4">Welcome back, {user.name}!</p>
                <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                  <p className="text-slate-300">Your current subscription is active and all services are running normally.</p>
                </div>
              </div>
            )}

            {activeTab === 'proxies' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Proxy Credentials</h3>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-2">Canada Region</p>
                    <p className="font-mono text-sm">proxy-ca.trueproxies.com:8080</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-2">USA Region</p>
                    <p className="font-mono text-sm">proxy-us.trueproxies.com:8080</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-2">Australia Region</p>
                    <p className="font-mono text-sm">proxy-au.trueproxies.com:8080</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Billing & Subscriptions</h3>
                <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                  <p className="text-slate-300 mb-2">Current Plan: Professional - $99/month</p>
                  <p className="text-slate-400 text-sm">Next billing date: August 1, 2024</p>
                </div>
                <button className="px-4 py-2 border border-slate-500 rounded-lg hover:bg-slate-700 transition">
                  Manage Subscription
                </button>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      disabled
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                    Update Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
