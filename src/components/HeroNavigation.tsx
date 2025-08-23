
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const HeroNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [industrialDropdown, setIndustrialDropdown] = useState(false);
  const navigate = useNavigate();

  const leftNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Impact', path: '/our-impact' },
  ];

  const rightNavItems = [
    { name: 'Careers', path: '/careers' },
    { name: 'Our Businesses', path: '/our-businesses', hasDropdown: true },
    { name: 'Industrial', path: '#', hasDropdown: true, isIndustrial: true },
    { name: 'Contact', path: '/contact', isButton: true },
  ];

  const businessItems = [
    { name: 'PowerPlus', path: 'https://powerplus.com', external: true },
    { name: 'PakGhiza', path: 'https://pakghiza.com', external: true },
  ];

  const industrialItems = [
    { name: 'Building Material', path: '/building-material' },
    { name: 'Industrial Chemicals', path: '/industrial-chemicals' },
    { name: 'Machineries', path: '/machineries' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white font-medium text-lg hover:text-pg-red transition-all duration-300 px-4 py-2 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pg-red transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          
          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full bg-white p-2 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                <img 
                  className="w-full h-full object-contain" 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {rightNavItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.isIndustrial ? setIndustrialDropdown(true) : setBusinessDropdown(true)}
                  onMouseLeave={() => item.isIndustrial ? setIndustrialDropdown(false) : setBusinessDropdown(false)}
                >
                  <button className="flex items-center text-white font-medium text-lg hover:text-pg-red transition-all duration-300 px-4 py-2">
                    {item.name}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      (item.isIndustrial && industrialDropdown) || (!item.isIndustrial && businessDropdown) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-300 ${
                    (item.isIndustrial && industrialDropdown) || (!item.isIndustrial && businessDropdown) ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  }`}>
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      {item.name}
                    </div>
                    {(item.isIndustrial ? industrialItems : businessItems).map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.name}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300"
                          onClick={() => {
                            setBusinessDropdown(false);
                            setIndustrialDropdown(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : item.isButton ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="bg-pg-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white font-medium text-lg hover:text-pg-red transition-all duration-300 px-4 py-2 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pg-red transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pg-red transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/20 animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {leftNavItems.concat(rightNavItems.filter(item => !item.isButton)).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide">Our Businesses</div>
            {businessItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 text-sm text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide">Industrial</div>
            {industrialItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-2 text-sm text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="block mx-3 mt-4 bg-pg-red text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-red-700 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeroNavigation;
