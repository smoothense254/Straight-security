import { Shield, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">SecureGuard</span>
            </div>
            <p className="text-gray-400">
              Protecting what matters most with cutting-edge security solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Physical Security</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Training</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SecureGuard Security Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
