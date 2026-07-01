'use client';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Ultra-low latency connections optimized for speed and performance.',
    },
    {
      icon: '🔒',
      title: 'Maximum Security',
      description: 'Military-grade encryption ensures your data stays private and protected.',
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Proxy servers across Canada, USA, and Australia for worldwide access.',
    },
    {
      icon: '💳',
      title: 'Easy M-Pesa Payment',
      description: 'Simple and secure M-Pesa integration for Kenyan customers.',
    },
    {
      icon: '🎯',
      title: 'Instant Activation',
      description: 'Get your proxy credentials immediately after payment verification.',
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 customer support team on Telegram and email ready to help.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose TrueProxies?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-accent transition hover:shadow-xl hover:shadow-accent/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
