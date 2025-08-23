
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [mobileIndustrialOpen, setMobileIndustrialOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileBusinessOpen(false);
    setMobileIndustrialOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1">
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
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <Link to="/" className="group">
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
          <div className="hidden lg:flex items-center justify-end space-x-8 xl:space-x-12 flex-1">
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
            {/* Regular navigation items (excluding dropdown items) */}
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10"
                onClick={handleMobileNavClick}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Our Businesses Collapsible */}
            <Collapsible open={mobileBusinessOpen} onOpenChange={setMobileBusinessOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10">
                Our Businesses
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-4 space-y-1">
                  {businessItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300 rounded-lg"
                      onClick={handleMobileNavClick}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            {/* Industrial Collapsible */}
            <Collapsible open={mobileIndustrialOpen} onOpenChange={setMobileIndustrialOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10">
                Industrial
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileIndustrialOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-4 space-y-1">
                  {industrialItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-pg-red hover:bg-white/10 transition-all duration-300 rounded-lg"
                      onClick={handleMobileNavClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Contact */}
            <Link
              to="/contact"
              className="block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white hover:text-pg-red hover:bg-white/10"
              onClick={handleMobileNavClick}
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
