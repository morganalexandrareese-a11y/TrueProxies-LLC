'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 100,
      period: '/KSH',
      description: 'Perfect for individuals testing proxies',
      features: [
        '1 concurrent connection',
        '5 GB bandwidth',
        'Access to all 3 regions',
        'Email support',
        '7 days validity',
      ],
      cta: 'Buy Now',
      priceId: 'price_starter',
    },
    {
      name: 'Basic',
      price: 500,
      period: '/KSH',
      description: 'Great for small projects',
      features: [
        '3 concurrent connections',
        '50 GB bandwidth',
        'Access to all 3 regions',
        'Email & chat support',
        '30 days validity',
      ],
      cta: 'Buy Now',
      priceId: 'price_basic',
    },
    {
      name: 'Professional',
      price: 1000,
      period: '/KSH',
      description: 'Ideal for growing businesses',
      features: [
        '10 concurrent connections',
        '500 GB bandwidth',
        'Access to all 3 regions',
        'Priority support',
        'Advanced analytics',
        '30 days validity',
      ],
      cta: 'Buy Now',
      priceId: 'price_professional',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 5000,
      period: '/KSH',
      description: 'For serious operations',
      features: [
        '50 concurrent connections',
        '5 TB bandwidth',
        'Access to all 3 regions',
        'Dedicated support',
        'Custom rotation settings',
        '30 days validity',
      ],
      cta: 'Buy Now',
      priceId: 'price_business',
    },
    {
      name: 'Enterprise',
      price: 10000,
      period: '/KSH',
      description: 'Large-scale operations',
      features: [
        '200 concurrent connections',
        '20 TB bandwidth',
        'Access to all 3 regions',
        'Account manager',
        '24/7 phone support',
        'Custom solutions',
        '30 days validity',
      ],
      cta: 'Buy Now',
      priceId: 'price_enterprise',
    },
    {
      name: 'Custom',
      price: 50000,
      period: 'to 100,000 KSH',
      description: 'For maximum operations',
      features: [
        'Unlimited connections',
        'Unlimited bandwidth',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom analytics',
        'SLA guarantee',
        'Flexible duration',
      ],
      cta: 'Contact Sales',
      priceId: 'price_custom',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Flexible Pricing in KSH</h2>
        <p className="text-center text-slate-300 mb-12">Choose the perfect plan for your proxy needs. All prices in Kenyan Shillings.</p>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 border transition flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 border-purple-400 shadow-xl md:scale-105'
                  : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-4 ${
                plan.highlighted ? 'text-purple-100' : 'text-slate-300'
              }`}>{plan.description}</p>
              <div className="mb-6 flex-grow">
                <span className="text-4xl font-bold">KSH {plan.price.toLocaleString()}</span>
                <span className={`text-sm ${
                  plan.highlighted ? 'text-purple-100' : 'text-slate-300'
                }`}> {plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-slate-100'
                    : 'border border-slate-500 hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${
                    plan.highlighted ? 'text-white' : 'text-slate-200'
                  }`}>
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-slate-700/50 border border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-300 mb-4">Have questions about pricing? Join our community for support:</p>
          <a
            href="https://t.me/giantDigitalcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.42 0-.34-.25-.477-.784l-2.09-6.869c-.184-.61.032-.861.625-1.084l15.126-5.83c.57-.22.898.032.732.773l-.05.258z"/>
            </svg>
            Join Telegram: @giantDigitalcenter
          </a>
        </div>
      </div>
    </section>
  );
}
