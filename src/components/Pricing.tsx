export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '10 concurrent connections',
        '100 GB bandwidth/month',
        'Access to all 3 regions',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '50 concurrent connections',
        '1 TB bandwidth/month',
        'Access to all 3 regions',
        'Priority email & chat support',
        'Advanced analytics',
        'Custom rotation settings',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: [
        'Unlimited connections',
        'Unlimited bandwidth',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom analytics',
        'API access',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border transition ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 border-purple-400 shadow-xl scale-105'
                  : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-300 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-300"> {plan.period}</span>
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
                  <li key={i} className="flex items-center gap-3 text-slate-200">
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
      </div>
    </section>
  );
}
