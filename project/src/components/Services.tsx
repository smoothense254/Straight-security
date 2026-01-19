import { Shield, Lock, Eye, AlertTriangle, Users, Cloud } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat detection, vulnerability assessments, and penetration testing to protect your digital assets.'
  },
  {
    icon: Lock,
    title: 'Physical Security',
    description: 'On-site security personnel, access control systems, and comprehensive surveillance solutions.'
  },
  {
    icon: Eye,
    title: 'Threat Intelligence',
    description: 'Real-time monitoring and analysis of emerging threats to keep you one step ahead.'
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment',
    description: 'Comprehensive evaluation of vulnerabilities and strategic planning to minimize security risks.'
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Employee awareness programs and security best practices training for your team.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure management and compliance monitoring for cloud-based operations.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive protection tailored to your unique security needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
