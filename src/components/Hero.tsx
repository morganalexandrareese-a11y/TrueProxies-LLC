export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Premium Proxy Services
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Lightning-fast, secure, and reliable proxy solutions for Canada, USA, and Australia. Perfect for businesses and individuals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border border-slate-500 rounded-lg font-semibold hover:bg-slate-700 transition">
            View Pricing
          </button>
        </div>
      </div>
      
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-3xl opacity-20"></div>
        <div className="relative bg-slate-800 rounded-lg p-8 border border-slate-700 backdrop-blur">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">150+</div>
              <p className="text-slate-400">Global Locations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <p className="text-slate-400">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">10M+</div>
              <p className="text-slate-400">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
