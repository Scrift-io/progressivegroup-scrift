
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
const MobileNavigation = ({
  isOpen,
  setIsOpen
}: MobileNavigationProps) => {
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const navigate = useNavigate();
  const leftNavItems: NavItem[] = [{
    name: 'Our Story',
    path: '/our-story'
  }, {
    name: 'Our Impact',
    path: '/our-impact'
  }, {
    name: 'Careers',
    path: '/careers'
  }, {
    name: 'Media',
    path: '/media'
  }];
  const businessItems: NavItem[] = [{
    name: 'PowerPlus',
    path: 'https://preview--powerplus-scrift.lovable.app/',
    isExternal: true
  }, {
    name: 'PakGhiza',
    path: 'https://preview--pakghiza-scrift.lovable.app/',
    isExternal: true
  }];
  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileBusinessOpen(false);
  };
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMobileNavClick();
    }
  };
  return <>
      {/* Mobile menu button - visible on mobile and tablet (below lg) with enhanced visibility */}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="relative bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white hover:text-red-500 hover:bg-black/90 transition-all duration-300 z-50 shadow-lg touch-manipulation" type="button" aria-label="Toggle mobile menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} className="drop-shadow-lg" /> : <Menu size={24} className="drop-shadow-lg" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black z-40" onClick={handleBackdropClick}>
          {/* Full height container with proper spacing */}
          <div className="flex flex-col min-h-screen bg-black">
            {/* Header spacer to account for fixed navigation */}
            <div className="h-20 flex-shrink-0"></div>
            
            {/* Scrollable content area that takes remaining height */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-3 max-w-sm mx-auto">
                {/* Regular navigation items */}
                {leftNavItems.map(item => <Link key={item.name} to={item.path} className="block px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white hover:text-red-500 hover:bg-white/10 text-center border border-white/20 hover:border-white/40 min-h-[56px] flex items-center justify-center touch-manipulation bg-gray-900" onClick={handleMobileNavClick}>
                    {item.name}
                  </Link>)}
                
                {/* Our Businesses Collapsible */}
                <Collapsible open={mobileBusinessOpen} onOpenChange={setMobileBusinessOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 text-white hover:text-red-500 hover:bg-white/10 border border-white/20 hover:border-white/40 min-h-[56px] touch-manipulation bg-gray-900">
                    Our Businesses
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-3 space-y-2">
                      {businessItems.map(item => <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" className="block px-8 py-3 text-base text-gray-200 hover:text-red-500 hover:bg-white/10 transition-all duration-300 rounded-lg mx-2 text-center border border-white/10 hover:border-white/30 min-h-[48px] flex items-center justify-center touch-manipulation bg-gray-800" onClick={handleMobileNavClick}>
                          {item.name}
                        </a>)}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Awards & Recognition */}
                

                {/* Contact Button */}
                <button onClick={() => {
              handleMobileNavClick();
              navigate('/contact');
            }} className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[56px] flex items-center justify-center touch-manipulation">
                  Contact
                </button>
              </div>
            </div>

            {/* Bottom padding for safe area */}
            <div className="h-6 flex-shrink-0"></div>
          </div>
        </div>}
    </>;
};
export default MobileNavigation;
