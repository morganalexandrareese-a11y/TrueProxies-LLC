import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrueProxies LLC - Premium Proxy Services</title>
        <meta name="description" content="Premium proxy services for USA, Canada, and Australia" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <nav className="bg-slate-950 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">TrueProxies LLC</h1>
            <div className="space-x-4">
              <a href="/proxies" className="text-white hover:text-slate-300">Proxies</a>
              <a href="/support" className="text-white hover:text-slate-300">Support</a>
              <a href="/login" className="text-white hover:text-slate-300">Login</a>
              <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Proxy Services</h2>
          <p className="text-xl text-slate-300 mb-12">Fast, Reliable, and Secure Proxies for USA, Canada, and Australia</p>
          <div className="space-x-4 flex justify-center">
            <a href="/proxies" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 font-semibold">Explore Proxies</a>
            <a href="https://t.me/giantDigitalcenter" target="_blank" rel="noopener noreferrer" className="bg-slate-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-slate-700 font-semibold">Get Support</a>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose TrueProxies?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Lightning Fast</h4>
              <p className="text-slate-300">Ultra-low latency connections for optimal performance</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold text-white mb-2">Secure</h4>
              <p className="text-slate-300">Enterprise-grade encryption and privacy protection</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
              <p className="text-slate-300">Chat with our support team anytime on Telegram</p>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 max-w-7xl mx-auto mx-4 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Need Assistance?</h3>
          <p className="text-blue-100 mb-6">Join our Telegram community for instant support and updates</p>
          <a
            href="https://t.me/giantDigitalcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
          >
            💬 Message Us on Telegram
          </a>
        </div>
      </main>
    </>
  );
}