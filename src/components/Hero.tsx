'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const TELEGRAM_URL = 'https://t.me/giantDigitalcenter';

export default function Hero() {
  const { user } = useAuth();

  return (
    <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Premium Proxy Services
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Lightning-fast, secure, and reliable proxy solutions for Canada, USA, and Australia. Affordable pricing in KSH.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <Link
              href="/checkout"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 inline-block"
            >
              Buy Proxies Now
            </Link>
          ) : (
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 inline-block"
            >
              Get Started
            </Link>
          )}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-500 rounded-lg font-semibold hover:bg-slate-700 transition inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.42 0-.34-.25-.477-.784l-2.09-6.869c-.184-.61.032-.861.625-1.084l15.126-5.83c.57-.22.898.032.732.773l-.05.258z"/>
            </svg>
            Join Telegram
          </a>
        </div>
      </div>

      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-3xl opacity-20"></div>
        <div className="relative bg-slate-800 rounded-lg p-8 border border-slate-700 backdrop-blur">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">150+</div>
              <p className="text-slate-400">Global Locations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <p className="text-slate-400">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">10M+</div>
              <p className="text-slate-400">Active Users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm mb-4">📍 Pricing in Kenyan Shillings (KSH)</p>
        <p className="text-slate-400 text-sm">✓ M-Pesa payments accepted | ✓ Instant activation | ✓ 24/7 Support</p>
      </div>
    </section>
  );
}
