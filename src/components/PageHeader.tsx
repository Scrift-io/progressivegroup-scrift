
import { useEffect, useState } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
            <span className="inline-block animate-fade-in">{title}</span>
          </h1>
          {subtitle && (
            <p className={`text-xl md:text-2xl font-light ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`} 
               style={{ animationDelay: '0.3s' }}>
              {subtitle}
            </p>
          )}
          <div className={`w-24 h-1 mx-auto mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'} ${backgroundImage ? 'bg-white' : 'bg-pg-red'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
