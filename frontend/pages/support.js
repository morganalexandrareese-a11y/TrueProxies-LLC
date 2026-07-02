import React, { useState } from 'react';
import Head from 'next/head';

export default function Support() {
  const [showTelegram, setShowTelegram] = useState(false);

  return (
    <>
      <Head>
        <title>Support - TrueProxies LLC</title>
        <meta name="description" content="Get support and assistance from TrueProxies" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Navigation */}
        <nav className="bg-slate-950 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">TrueProxies LLC</h1>
            <div className="space-x-4">
              <a href="/" className="text-white hover:text-slate-300">Home</a>
              <a href="/proxies" className="text-white hover:text-slate-300">Proxies</a>
              <a href="/support" className="text-blue-400 font-semibold">Support</a>
            </div>
          </div>
        </nav>

        {/* Support Header */}
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Support</h2>
          <p className="text-xl text-slate-300">We're here to help 24/7</p>
        </div>

        {/* Support Methods */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Telegram Support */}
            <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Telegram Support</h3>
              <p className="text-slate-300 mb-6">
                Chat with our support team instantly. Available 24/7 for quick assistance.
              </p>
              <a
                href="https://t.me/giantDigitalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded text-center transition"
              >
                Join Telegram
              </a>
              <div className="text-sm text-slate-400 mt-4">
                <p>✅ Response time: ~1 hour</p>
                <p>✅ 24/7 availability</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-slate-300 mb-6">
                Send detailed support tickets. Perfect for complex issues.
              </p>
              <a
                href="mailto:support@trueproxies.com"
                className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded text-center transition"
              >
                Send Email
              </a>
              <div className="text-sm text-slate-400 mt-4">
                <p>✅ Response time: 24 hours</p>
                <p>✅ Detailed support</p>
              </div>
            </div>

            {/* Support Portal */}
            <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Support Portal</h3>
              <p className="text-slate-300 mb-6">
                Access your account and manage support tickets in one place.
              </p>
              <button
                onClick={() => setShowTelegram(true)}
                className="inline-block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded text-center transition"
              >
                View Tickets
              </button>
              <div className="text-sm text-slate-400 mt-4">
                <p>✅ Account management</p>
                <p>✅ Ticket tracking</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">How do I get started?</h4>
                <p className="text-slate-300">
                  Create an account, browse available proxies, and make a purchase. Once complete, you'll receive your proxy credentials immediately.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">What if my proxy stops working?</h4>
                <p className="text-slate-300">
                  Contact us immediately on Telegram. Provide your order ID and payment reference (0117358581). We'll investigate and provide a replacement or refund.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">How do I renew my proxy?</h4>
                <p className="text-slate-300">
                  You'll receive a notification 7 days before expiry. You can renew directly from your dashboard or contact support for renewal options.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Is there a refund policy?</h4>
                <p className="text-slate-300">
                  Yes! If a proxy doesn't meet our quality standards, contact support within 7 days for a full refund or replacement.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Immediately?</h3>
            <p className="text-blue-100 mb-6">Join our Telegram community for instant support and updates</p>
            <a
              href="https://t.me/giantDigitalcenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
            >
              Message Us on Telegram
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-950 mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
            <p>© 2026 TrueProxies LLC. All rights reserved.</p>
            <p className="mt-2 text-sm">Payment Reference: 0117358581</p>
          </div>
        </footer>
      </main>
    </>
  );
}