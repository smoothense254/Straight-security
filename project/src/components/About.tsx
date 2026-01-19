import { CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    '24/7 Security Operations Center',
    'Certified Security Professionals',
    'Rapid Incident Response',
    'Compliance & Regulatory Expertise'
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Leading Security Expertise
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              For over 25 years, SecureGuard has been at the forefront of security innovation.
              Our team of certified experts combines deep industry knowledge with cutting-edge
              technology to deliver unparalleled protection.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We understand that every organization faces unique security challenges. That's why
              we develop customized solutions that address your specific needs while staying
              ahead of evolving threats.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8761590/pexels-photo-8761590.jpeg"
                alt="Security Operations Center"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-8 shadow-2xl">
              <div className="text-4xl font-bold text-white mb-1">ISO 27001</div>
              <div className="text-blue-100">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
