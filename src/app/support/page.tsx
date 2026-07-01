'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supportAPI, SupportTicket } from '@/api/support';

export default function SupportPage() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: 'technical',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTickets();
  }, [user]);

  const loadTickets = async () => {
    try {
      if (user) {
        const data = await supportAPI.getTickets();
        setTickets(data);
      }
    } catch (err) {
      console.error('Failed to load tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.subject || !formData.description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const newTicket = await supportAPI.createTicket(formData);
      setTickets([newTicket, ...tickets]);
      setFormData({ subject: '', description: '', category: 'technical' });
      setShowCreateForm(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create ticket');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <p className="text-white">Please log in to access support</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-slate-400">Create tickets and track your support requests</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a
            href="/faq"
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition"
          >
            <div className="text-3xl mb-3">❓</div>
            <h3 className="font-bold mb-2">FAQ</h3>
            <p className="text-slate-400 text-sm">Find answers to common questions</p>
          </a>
          <a
            href="#"
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold mb-2">Knowledge Base</h3>
            <p className="text-slate-400 text-sm">Read detailed guides and tutorials</p>
          </a>
          <a
            href="https://t.me/giantDigitalcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold mb-2">Telegram</h3>
            <p className="text-slate-400 text-sm">Chat with our team directly</p>
          </a>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold mb-8 transition"
        >
          {showCreateForm ? 'Cancel' : 'Create New Ticket'}
        </button>

        {showCreateForm && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Create Support Ticket</h2>
            {error && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg">
                <p className="text-red-400">{error}</p>
              </div>
            )}
            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Issue</option>
                  <option value="account">Account Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide detailed information about your issue"
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        )}

        <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold">Your Tickets ({tickets.length})</h2>
          </div>
          <div className="divide-y divide-slate-700">
            {loading ? (
              <div className="p-6 text-center text-slate-400">Loading tickets...</div>
            ) : tickets.length === 0 ? (
              <div className="p-6 text-center text-slate-400">No support tickets yet</div>
            ) : (
              tickets.map((ticket) => (
                <div key={ticket.id} className="p-6 hover:bg-slate-700/50 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-blue-400">{ticket.subject}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      ticket.status === 'open' ? 'bg-blue-500/20 text-blue-400' :
                      ticket.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      ticket.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{ticket.description}</p>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span>Category: {ticket.category}</span>
                    <span>Priority: {ticket.priority}</span>
                    <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
