import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">SecureGuard</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#solutions" className="block text-gray-300 hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
