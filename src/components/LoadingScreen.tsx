
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="mb-8 relative">
        <div className="w-32 h-32 bg-gradient-to-r from-pg-red to-pg-blue rounded-full p-1 animate-spin" style={{ animation: 'spin 3s linear infinite' }}>
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png" 
              alt="Progressive Group Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pg-red to-pg-blue transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading Progressive Group...</p>
    </div>
  );
};

export default LoadingScreen;
