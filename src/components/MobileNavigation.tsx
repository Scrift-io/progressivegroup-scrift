
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

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (path: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
    handleMobileNavClick();
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center justify-end">
        <button
          onClick={handleToggleMenu}
          className="text-white hover:text-red-500 transition-colors duration-300 p-2 z-50 relative touch-manipulation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={handleMobileNavClick}
          />
          
          {/* Navigation Panel */}
          <div className="lg:hidden fixed inset-0 z-50 pointer-events-none">
            <div className="flex flex-col h-full pt-20 pb-6 pointer-events-auto">
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md">
                <div className="space-y-4 max-w-sm mx-auto py-8">
                  {/* Regular navigation items */}
                  {leftNavItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavItemClick(item.path)}
                      className="w-full bg-white/10 text-white hover:text-red-500 hover:bg-white/20 rounded-xl py-4 px-6 text-center border border-white/20 hover:border-red-500/50 transition-all duration-300 font-medium text-base touch-manipulation"
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  {/* Our Businesses Collapsible */}
                  <Collapsible open={mobileBusinessOpen} onOpenChange={setMobileBusinessOpen}>
                    <CollapsibleTrigger className="w-full bg-white/10 text-white hover:text-red-500 hover:bg-white/20 rounded-xl py-4 px-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 font-medium text-base touch-manipulation flex items-center justify-between">
                      <span>Our Businesses</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-3 space-y-3 ml-4">
                        {businessItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavItemClick(item.path, item.isExternal)}
                            className="block w-full px-6 py-3 text-base text-gray-300 hover:text-red-500 hover:bg-white/10 transition-all duration-300 rounded-lg text-center border border-transparent hover:border-white/30 touch-manipulation"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  {/* Industrial Collapsible */}
                  <Collapsible open={mobileIndustrialOpen} onOpenChange={setMobileIndustrialOpen}>
                    <CollapsibleTrigger className="w-full bg-white/10 text-white hover:text-red-500 hover:bg-white/20 rounded-xl py-4 px-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 font-medium text-base touch-manipulation flex items-center justify-between">
                      <span>Industrial</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileIndustrialOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-3 space-y-3 ml-4">
                        {industrialItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavItemClick(item.path)}
                            className="block w-full px-6 py-3 text-base text-gray-300 hover:text-red-500 hover:bg-white/10 transition-all duration-300 rounded-lg text-center border border-transparent hover:border-white/30 touch-manipulation"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Contact Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleNavItemClick('/contact')}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl py-4 px-6 text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-xl touch-manipulation"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>

                {/* Mobile footer info */}
                <div className="px-6 py-6 text-center border-t border-white/20 mt-8">
                  <p className="text-gray-300 text-sm font-medium">
                    Progressive Group of Companies
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Excellence in Business Since 1954
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavigation;
