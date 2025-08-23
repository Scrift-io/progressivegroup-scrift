
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const HeroNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [industrialDropdown, setIndustrialDropdown] = useState(false);
  const navigate = useNavigate();

  const leftNavItems = [
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Impact', path: '/our-impact' },
  ];

  const rightNavItems = [
    { name: 'Careers', path: '/careers' },
    { name: 'Our Businesses', path: '/our-businesses', hasDropdown: true },
    { name: 'Industrial', path: '#', hasDropdown: true, isIndustrial: true },
    { name: 'Contact', path: '/contact' },
  ];

  const businessItems = [
    { name: 'PowerPlus', path: 'https://powerplus.com', isExternal: true },
    { name: 'PakGhiza', path: 'https://pakghiza.com', isExternal: true },
  ];

  const industrialItems = [
    { name: 'Building Material', path: '/building-material' },
    { name: 'Industrial Chemicals', path: '/industrial-chemicals' },
    { name: 'Machineries', path: '/machineries' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20 lg:h-24">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center justify-start space-x-12">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white font-semibold text-base hover:text-pg-red transition-all duration-300 px-3 py-2 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pg-red transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          
          {/* Center Logo - Serves as Home button */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 overflow-hidden rounded-full bg-white p-2 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                <img 
                  className="w-full h-full object-contain" 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group - Home"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center justify-end space-x-12">
            {rightNavItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.isIndustrial ? setIndustrialDropdown(true) : setBusinessDropdown(true)}
                  onMouseLeave={() => item.isIndustrial ? setIndustrialDropdown(false) : setBusinessDropdown(false)}
                >
                  <button className="flex items-center text-white font-semibold text-base hover:text-pg-red transition-all duration-300 px-3 py-2 whitespace-nowrap">
                    {item.name}
                    <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                      (item.isIndustrial && industrialDropdown) || (!item.isIndustrial && businessDropdown) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`absolute top-full right-0 mt-2 w-56 bg-white/96 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-100 py-3 z-50 transition-all duration-300 ${
                    (item.isIndustrial && industrialDropdown) || (!item.isIndustrial && businessDropdown) ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-4'
                  }`}>
                    <div className="px-5 py-3 text-sm font-bold text-gray-600 uppercase tracking-wider border-b border-gray-100">
                      {item.name}
                    </div>
                    {(item.isIndustrial ? industrialItems : businessItems).map((subItem) => (
                      subItem.isExternal ? (
                        <a
                          key={subItem.name}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300 font-medium"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300 font-medium"
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
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white font-semibold text-base hover:text-pg-red transition-all duration-300 px-3 py-2 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pg-red transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pg-red transition-colors duration-300 p-3"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/20 animate-fade-in">
          <div className="px-6 pt-4 pb-6 space-y-2 max-h-96 overflow-y-auto">
            {leftNavItems.concat(rightNavItems).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-4 py-3 text-sm font-bold text-gray-400 uppercase tracking-wider border-t border-white/20 mt-4">Our Businesses</div>
            {businessItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-8 py-2 text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="px-4 py-3 text-sm font-bold text-gray-400 uppercase tracking-wider border-t border-white/20">Industrial</div>
            {industrialItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-8 py-2 text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeroNavigation;
