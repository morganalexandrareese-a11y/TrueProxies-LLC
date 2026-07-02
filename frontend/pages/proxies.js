import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Proxies() {
  const [proxies, setProxies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('USA');

  useEffect(() => {
    fetchProxies();
  }, [filter]);

  const fetchProxies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/proxies?country=${filter}`);
      setProxies(response.data);
    } catch (error) {
      console.error('Error fetching proxies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Available Proxies</h1>

        <div className="mb-8 flex gap-4">
          {['USA', 'Canada', 'Australia'].map((country) => (
            <button
              key={country}
              onClick={() => setFilter(country)}
              className={`px-4 py-2 rounded ${
                filter === country
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-white text-center">Loading proxies...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proxies.map((proxy) => (
              <div key={proxy._id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition">
                <p className="text-white font-semibold">{proxy.ip}:{proxy.port}</p>
                <p className="text-slate-300 text-sm mt-2">Country: {proxy.country}</p>
                <p className="text-slate-300 text-sm">Speed: {proxy.speed}ms</p>
                <p className="text-slate-300 text-sm">Uptime: {proxy.uptime}%</p>
                <p className="text-blue-400 font-bold mt-4">${proxy.price}/month</p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
