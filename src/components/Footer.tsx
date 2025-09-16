import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pg-red/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-lg mr-3">
                <img 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold">Progressive Group</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Established in 1954, Progressive Group is a mission-oriented & value-driven business organization committed to excellence and innovation.
            </p>

            {/* Essential Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0">
                  <Mail size={12} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">info@pgtraders.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0">
                  <Phone size={12} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">021-35026618</span>
              </div>
              <Link to="/contact" className="inline-flex items-center text-sm text-pg-red hover:text-red-400 transition-colors mt-2">
                <MapPin size={12} className="mr-1" />
                View All Locations
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Story</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Media</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link to="/our-impact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Impact</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
            
            {/* Powered by Scrift Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-1.5 rounded-md border border-slate-600 hover:border-slate-500 transition-colors duration-300 group">
              <span className="text-gray-300 text-xs font-medium mr-2">Powered by</span>
              <div className="flex items-center">
                <div className="w-3 h-3 mr-1.5 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/efe7484f-5766-4526-83eb-d58ed6aa2d1e.png" 
                    alt="Scrift" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs font-semibold">Scrift</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Progressive Group. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-3 md:mt-0">
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