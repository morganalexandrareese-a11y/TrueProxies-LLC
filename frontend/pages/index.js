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
              <a href="/login" className="text-white hover:text-slate-300">Login</a>
              <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Proxy Services</h2>
          <p className="text-xl text-slate-300 mb-12">Fast, Reliable, and Secure Proxies for USA, Canada, and Australia</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 font-semibold">
            Explore Proxies
          </button>
        </div>
      </main>
    </>
  );
}
