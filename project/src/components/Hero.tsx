import { ArrowRight, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')] opacity-10 bg-cover bg-center"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Trusted Security Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Protecting Your Assets in a Digital World
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Comprehensive security solutions combining cutting-edge technology with expert analysis.
            We safeguard your physical and digital infrastructure 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              View Our Services
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Clients Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
