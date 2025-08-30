
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

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileNavigation = ({ isOpen, setIsOpen }: MobileNavigationProps) => {
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [mobileIndustrialOpen, setMobileIndustrialOpen] = useState(false);
  const navigate = useNavigate();

  const leftNavItems: NavItem[] = [
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'Careers', path: '/careers' },
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
    <>
      {/* Mobile menu button - Enhanced for touch */}
      <div className="lg:hidden flex items-center justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-pg-red transition-colors duration-300 p-4 z-50 relative touch-target mobile-touch-manipulation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay - Enhanced for mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 animate-fade-in mobile-safe-area">
          <div className="flex flex-col h-full pt-20 pb-6 mobile-viewport-fix">
            <div className="flex-1 overflow-y-auto mobile-smooth-scroll px-4 sm:px-6">
              <div className="space-y-3 max-w-sm mx-auto mobile-space-y">
                {/* Regular navigation items - Enhanced mobile styling */}
                {leftNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="mobile-nav-item bg-white/5 text-white hover:text-pg-red hover:bg-white/10 rounded-xl text-center border border-white/10 hover:border-pg-red/30 mobile-focus-ring mobile-touch-manipulation"
                    onClick={handleMobileNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Our Businesses Collapsible - Enhanced for mobile */}
                <Collapsible open={mobileBusinessOpen} onOpenChange={setMobileBusinessOpen}>
                  <CollapsibleTrigger className="mobile-nav-item bg-white/5 text-white hover:text-pg-red hover:bg-white/10 rounded-xl border border-white/10 hover:border-pg-red/30 mobile-focus-ring mobile-touch-manipulation w-full flex items-center justify-between">
                    <span>Our Businesses</span>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-3 space-y-2 ml-4">
                      {businessItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-4 text-base text-gray-300 hover:text-pg-red hover:bg-white/5 transition-all duration-300 rounded-lg text-center border border-transparent hover:border-white/20 mobile-focus-ring mobile-touch-manipulation"
                          onClick={handleMobileNavClick}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Industrial Collapsible - Enhanced for mobile */}
                <Collapsible open={mobileIndustrialOpen} onOpenChange={setMobileIndustrialOpen}>
                  <CollapsibleTrigger className="mobile-nav-item bg-white/5 text-white hover:text-pg-red hover:bg-white/10 rounded-xl border border-white/10 hover:border-pg-red/30 mobile-focus-ring mobile-touch-manipulation w-full flex items-center justify-between">
                    <span>Industrial</span>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileIndustrialOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-3 space-y-2 ml-4">
                      {industrialItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-4 text-base text-gray-300 hover:text-pg-red hover:bg-white/5 transition-all duration-300 rounded-lg text-center border border-transparent hover:border-white/20 mobile-focus-ring mobile-touch-manipulation"
                          onClick={handleMobileNavClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Contact Button - Enhanced for mobile */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      handleMobileNavClick();
                      navigate('/contact');
                    }}
                    className="mobile-btn-primary bg-gradient-to-r from-pg-red to-red-600 text-white rounded-xl text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl mobile-touch-manipulation"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile footer info */}
            <div className="px-6 py-4 text-center border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Progressive Group of Companies
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Excellence in Business Since 1954
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
