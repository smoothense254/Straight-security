import { Building2, Store, Cross, Landmark } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Corporate',
    description: 'Enterprise-grade security for offices and corporate facilities'
  },
  {
    icon: Store,
    name: 'Retail',
    description: 'Loss prevention and customer safety solutions'
  },
  {
    icon: Cross,
    name: 'Healthcare',
    description: 'HIPAA-compliant security for medical facilities'
  },
  {
    icon: Landmark,
    name: 'Financial',
    description: 'High-security solutions for financial institutions'
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored security strategies for your industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all"
            >
              <industry.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-400">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
