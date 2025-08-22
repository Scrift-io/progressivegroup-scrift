import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [industrialDropdown, setIndustrialDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'Careers', path: '/careers' },
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
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-pg-red to-red-700 p-0.5 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <img 
                    className="w-6 h-6 object-contain" 
                    src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
                    alt="Progressive Group"
                  />
                </div>
              </div>
              <span className="ml-2 text-lg font-bold text-gray-900 group-hover:text-pg-red transition-colors duration-300">Progressive Group</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? 'text-pg-red'
                    : 'text-gray-700 hover:text-pg-red'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-pg-red transform transition-all duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            {/* Our Businesses Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setBusinessDropdown(true)}
              onMouseLeave={() => setBusinessDropdown(false)}
            >
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-pg-red transition-colors duration-300">
                Our Businesses
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${businessDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-300 ${
                businessDropdown ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                {businessItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Industrial & Commercial Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIndustrialDropdown(true)}
              onMouseLeave={() => setIndustrialDropdown(false)}
            >
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-pg-red transition-colors duration-300">
                Industrial
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${industrialDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-300 ${
                industrialDropdown ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                {industrialItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-pg-red transition-all duration-300"
                    onClick={() => setIndustrialDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-pg-red to-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pg-red transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-fade-in max-h-96 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-pg-red bg-red-50'
                    : 'text-gray-700 hover:text-pg-red hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Our Businesses</div>
            {businessItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 text-sm text-gray-600 hover:text-pg-red hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Industrial</div>
            {industrialItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-2 text-sm text-gray-600 hover:text-pg-red hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="w-full mt-4 mx-3 mb-2 bg-gradient-to-r from-pg-red to-red-600 text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
