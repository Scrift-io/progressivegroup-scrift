
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  isIndustrial?: boolean;
  isExternal?: boolean;
}

const HeroNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [industrialDropdown, setIndustrialDropdown] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const leftNavItems: NavItem[] = [
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'Careers', path: '/careers' },
  ];

  const rightNavItems: NavItem[] = [
    { name: 'Our Businesses', path: '/our-businesses', hasDropdown: true },
    { name: 'Industrial', path: '#', hasDropdown: true, isIndustrial: true },
    { name: 'Contact', path: '/contact' },
  ];

  const businessItems: NavItem[] = [
    { name: 'PowerPlus', path: 'https://powerplus.com', isExternal: true },
    { name: 'PakGhiza', path: 'https://pakghiza.com', isExternal: true },
  ];

  const industrialItems: NavItem[] = [
    { name: 'Building Material', path: '/building-material' },
    { name: 'Industrial Chemicals', path: '/industrial-chemicals' },
    { name: 'Machineries', path: '/machineries' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Left Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-12 flex-1">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white font-semibold text-sm xl:text-base hover:text-red-500 transition-all duration-300 px-3 py-2 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          
          {/* Center Logo */}
          <div className="flex items-center justify-center flex-shrink-0 px-2 sm:px-4">
            <Link to="/" className="group touch-manipulation">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 overflow-hidden rounded-full bg-white p-1 sm:p-1.5 md:p-2 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                <img 
                  className="w-full h-full object-contain" 
                  src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                  alt="Progressive Group - Home"
                  loading="eager"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-end space-x-6 xl:space-x-12 flex-1">
            {rightNavItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.isIndustrial ? setIndustrialDropdown(true) : setBusinessDropdown(true)}
                  onMouseLeave={() => item.isIndustrial ? setIndustrialDropdown(false) : setBusinessDropdown(false)}
                >
                  <button className="flex items-center text-white font-semibold text-sm xl:text-base hover:text-red-500 transition-all duration-300 px-3 py-2 whitespace-nowrap">
                    {item.name}
                    <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                      (item.isIndustrial && industrialDropdown) || (!item.isIndustrial && businessDropdown) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`absolute top-full right-0 mt-2 w-56 bg-white/98 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 py-3 z-50 transition-all duration-300 ${
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
                          className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium"
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
                  className="text-white font-semibold text-sm xl:text-base hover:text-red-500 transition-all duration-300 px-3 py-2 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default HeroNavigation;
