import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to enhance your security posture? Contact our team for a
              comprehensive security assessment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <div className="text-gray-400">contact@secureguard.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Location</div>
                  <div className="text-gray-400">123 Security Blvd, Suite 500<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your security needs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
