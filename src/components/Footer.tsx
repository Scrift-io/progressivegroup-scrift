import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pg-red/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* PowerPlus Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-lg mr-3">
                <img 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">PowerPlus</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Delivering premium quality products that enhance daily life with innovation and excellence.
            </p>

            {/* Contact Email */}
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0">
                <Mail size={12} className="text-white" />
              </div>
              <span className="text-sm text-gray-300">info@powerplus.com.pk</span>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pg-red hover:text-white transition-all duration-300">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/our-impact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Impact</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Products
            </h3>
            <ul className="space-y-3">
              <li><Link to="/air-fresheners" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Air Fresheners</Link></li>
              <li><Link to="/battery-cells" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Battery Cells</Link></li>
              <li><Link to="/cleaning-household" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Cleaning & Household</Link></li>
              <li><Link to="/insecticides" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Insecticides</Link></li>
              <li><Link to="/shoe-polishers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Shoe Polishers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-4">
              {/* Karachi Head Office */}
              <div>
                <div className="flex items-start mb-2">
                  <div className="w-4 h-4 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <MapPin size={10} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-pg-red">Karachi Head Office</span>
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-1">
                  LC-40, Landhi Industrial Area, Near Opal Laboratory, Karachi, Pakistan Post Code 71500
                </p>
                <div className="flex items-center">
                  <Phone size={10} className="text-pg-red mr-1" />
                  <span className="text-xs text-gray-400">021-35026618-20, 35026622, 021-35026602</span>
                </div>
              </div>

              {/* Lahore Regional Office */}
              <div>
                <div className="flex items-start mb-2">
                  <div className="w-4 h-4 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <MapPin size={10} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-pg-red">Lahore Office</span>
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-1">
                  60th Mall Road, Shahrah-e-Quaid-e-Azam, Lahore Pakistan
                </p>
                <div className="flex items-center">
                  <Phone size={10} className="text-pg-red mr-1" />
                  <span className="text-xs text-gray-400">042-36361067-9</span>
                </div>
              </div>

              {/* Rawalpindi Regional Office */}
              <div>
                <div className="flex items-start mb-2">
                  <div className="w-4 h-4 bg-pg-red rounded flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <MapPin size={10} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-pg-red">Rawalpindi Office</span>
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-1">
                  House No. 51, Street #5, Khan Avenue Behind Shell filling Station, Chaklala scheme III
                </p>
                <div className="flex items-center">
                  <Phone size={10} className="text-pg-red mr-1" />
                  <span className="text-xs text-gray-400">051-5145024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PowerPlus. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-4">
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Use</Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</Link>
              </div>
              
              {/* Powered by Scrift Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-1.5 rounded-md border border-slate-600 hover:border-slate-500 transition-colors duration-300">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;