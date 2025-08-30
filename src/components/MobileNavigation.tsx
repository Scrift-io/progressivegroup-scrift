
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMobileNavClick();
    }
  };

  return (
    <>
      {/* Mobile menu button - visible on lg and below */}
      <div className="lg:hidden flex items-center justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-red-500 transition-colors duration-300 p-3 z-50 relative"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 animate-fade-in"
          onClick={handleBackdropClick}
        >
          <div className="flex flex-col h-full pt-20 pb-6">
            <div className="flex-1 overflow-y-auto px-6">
              <div className="space-y-3 max-w-sm mx-auto">
                {/* Regular navigation items */}
                {leftNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white hover:text-red-500 hover:bg-white/10 text-center border border-transparent hover:border-white/20 min-h-[56px] flex items-center justify-center"
                    onClick={handleMobileNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Our Businesses Collapsible */}
                <Collapsible open={mobileBusinessOpen} onOpenChange={setMobileBusinessOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white hover:text-red-500 hover:bg-white/10 border border-transparent hover:border-white/20 min-h-[56px]">
                    Our Businesses
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 space-y-2">
                      {businessItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-8 py-3 text-base text-gray-300 hover:text-red-500 hover:bg-white/10 transition-all duration-300 rounded-lg mx-4 text-center border border-transparent hover:border-white/20 min-h-[48px] flex items-center justify-center"
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
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white hover:text-red-500 hover:bg-white/10 border border-transparent hover:border-white/20 min-h-[56px]">
                    Industrial
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileIndustrialOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 space-y-2">
                      {industrialItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-8 py-3 text-base text-gray-300 hover:text-red-500 hover:bg-white/10 transition-all duration-300 rounded-lg mx-4 text-center border border-transparent hover:border-white/20 min-h-[48px] flex items-center justify-center"
                          onClick={handleMobileNavClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Contact Button */}
                <button
                  onClick={() => {
                    handleMobileNavClick();
                    navigate('/contact');
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[56px] flex items-center justify-center"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
