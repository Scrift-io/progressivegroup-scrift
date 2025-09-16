import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pg-red/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-lg mr-3">
                <img 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Progressive Group</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Established in 1954, Progressive Group is a mission-oriented & value-driven business organization committed to excellence and innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              {/* Karachi Office */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pg-red rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Karachi Head office:</div>
                  <div className="text-gray-300 leading-relaxed">
                    LC-40, Landhi Indstrial Area, Near Opal Laboratory, Karachi, Pakistan Post Code 71500<br />
                    <span className="text-gray-400">Tel 021-35026618-20, 35026622, 021-35026602</span>
                  </div>
                </div>
              </div>

              {/* Lahore Office */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pg-red rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Lahore Regional Office:</div>
                  <div className="text-gray-300 leading-relaxed">
                    Lahore"60th Mall Road. Shahrah-e-Quaid-e-Azam, Lahore Pakistan<br />
                    <span className="text-gray-400">Tel: 042-36361067-9</span>
                  </div>
                </div>
              </div>

              {/* Rawalpindi Office */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pg-red rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Rawalpindi Regional Office:</div>
                  <div className="text-gray-300 leading-relaxed">
                    Rawalpindi House No. 51,Street #5, Khan Avenue Behind Shell filling Station, Chaklala scheme III.<br />
                    <span className="text-gray-400">Tel: 051-5145024</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pg-red rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail size={14} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">info@pgtraders.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Story</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Media</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link to="/our-impact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Impact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Progressive Group. All rights reserved.
              </p>
              
              {/* Powered by Scrift Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-1.5 rounded-md border border-slate-600 hover:border-slate-500 transition-colors duration-300 group">
                <span className="text-gray-300 text-xs font-medium mr-2">Powered by</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-1.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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