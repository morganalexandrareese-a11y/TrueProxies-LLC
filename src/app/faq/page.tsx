'use client';

import { useState, useEffect } from 'react';
import { supportAPI, FAQItem } from '@/api/support';

export default function FAQPage() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadFAQ();
  }, [selectedCategory]);

  const loadFAQ = async () => {
    try {
      setLoading(true);
      const category = selectedCategory === 'all' ? undefined : selectedCategory;
      const data = await supportAPI.getFAQ(category);
      setFaqItems(data);
    } catch (err) {
      console.error('Failed to load FAQ:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'setup', label: 'Setup & Configuration' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
    { id: 'billing', label: 'Billing & Payments' },
    { id: 'account', label: 'Account Management' },
  ];

  const filteredItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg">Find answers to common questions about TrueProxies</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-400"
          />
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-slate-400">Loading FAQ...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400">No matching questions found</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <details
                key={item.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition cursor-pointer group"
              >
                <summary className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold group-open:text-blue-400 transition">
                    {item.question}
                  </h3>
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-700 text-slate-300 space-y-2">
                  <p className="whitespace-pre-wrap">{item.answer}</p>
                </div>
              </details>
            ))
          )}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
          <p className="text-slate-300 mb-6">Our AI assistant is available 24/7 to help you with any issues</p>
          <a
            href="/support"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Chat with AI Assistant
          </a>
        </div>
      </main>
    </div>
  );
}
