'use client';

import Link from 'next/link';

const TELEGRAM_URL = 'https://t.me/giantDigitalcenter';
const MPESA_PHONE = '0117358581';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="font-bold">TrueProxies</span>
            </div>
            <p className="text-slate-400 text-sm">Premium proxy services for businesses and individuals in Kenya and worldwide.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/checkout" className="hover:text-white transition">Buy Now</Link></li>
              <li><a href="/API.md" className="hover:text-white transition">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Telegram Support</a></li>
              <li><a href={`mailto:support@trueproxies.com`} className="hover:text-white transition">Email Support</a></li>
              <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Join Community</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Payment</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><p className="text-slate-300">💳 M-Pesa Accepted</p></li>
              <li><p className="text-slate-300">📱 {MPESA_PHONE}</p></li>
              <li><p className="text-slate-300">🇰🇪 Prices in KSH</p></li>
              <li><p className="text-slate-300">✓ Instant Setup</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <p className="text-slate-400 text-sm">
              © 2024 TrueProxies LLC. All rights reserved.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.42 0-.34-.25-.477-.784l-2.09-6.869c-.184-.61.032-.861.625-1.084l15.126-5.83c.57-.22.898.032.732.773l-.05.258z"/>
              </svg>
              @giantDigitalcenter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
