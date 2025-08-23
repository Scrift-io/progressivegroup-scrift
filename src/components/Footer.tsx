
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pg-red/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-lg">
                <img 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="ml-4 text-2xl font-bold">Progressive Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Established in 1954, Progressive Group is a mission-oriented & value-driven business organization committed to excellence and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">L-66, LDA Industrial Area, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">+92-123-4567890</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">info@pgtraders.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-pg-red"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Our Story</Link></li>
              <li><Link to="/our-businesses" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Our Businesses</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Careers</Link></li>
              <li><Link to="/our-impact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Our Impact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Follow Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-pg-red"></div>
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Progressive Group. All rights reserved.
              </p>
              
              {/* Powered by Scrift Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-1.5 rounded-md border border-slate-600 hover:border-slate-500 transition-colors duration-300 group">
                <span className="text-gray-300 text-xs font-medium mr-2">Powered by</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded mr-1.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                  </div>
                  <span className="text-white text-xs font-semibold">Scrift</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Use</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
