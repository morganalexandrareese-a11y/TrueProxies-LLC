'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
          <span className="text-xl font-bold">TrueProxies</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-accent transition">Features</a>
          <a href="#pricing" className="hover:text-accent transition">Pricing</a>
          <a href="#" className="hover:text-accent transition">About</a>
          <a href="#" className="hover:text-accent transition">Contact</a>
        </nav>
        
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 rounded-lg hover:bg-slate-700 transition">Sign In</button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg transition">Get Started</button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 p-4">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="hover:text-accent transition">Features</a>
            <a href="#pricing" className="hover:text-accent transition">Pricing</a>
            <a href="#" className="hover:text-accent transition">About</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-full">Get Started</button>
          </nav>
        </div>
      )}
    </header>
  );
}
