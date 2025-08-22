
import { useState } from 'react';
import { Play, Image, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Awards = () => {
  const [activeTab, setActiveTab] = useState('press-releases');

  const tabs = [
    { id: 'press-releases', label: 'Press Releases', icon: FileText },
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'images', label: 'Images', icon: Image },
  ];

  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Awards & Recognition"
        subtitle="Celebrating our achievements and milestones"
        backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop"
      />

      {/* Tab Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-pg-red text-pg-red bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-pg-red hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'press-releases' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Press Releases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in" style={{ animationDelay: `${item * 0.1}s` }}>
                    <div className="p-8">
                      <div className="text-sm text-pg-red font-semibold mb-3">March 15, 2024</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pg-red transition-colors duration-300">Progressive Group Announces New Partnership</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">Progressive Group has entered into a strategic partnership to expand its operations...</p>
                      <a href="#" className="text-pg-red font-semibold hover:text-red-700 transition-colors duration-300 inline-flex items-center">
                        Read More 
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in" style={{ animationDelay: `${item * 0.1}s` }}>
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/photo-149739784${item}038-7bd202a2afeb?w=400&h=250&fit=crop`}
                        alt={`Video ${item}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-pg-red ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pg-red transition-colors duration-300">Company Overview Video</h3>
                      <p className="text-gray-600">Learn about Progressive Group's journey and achievements</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="relative group cursor-pointer animate-fade-in" style={{ animationDelay: `${item * 0.05}s` }}>
                    <img
                      src={`https://images.unsplash.com/photo-149739784${item}038-7bd202a2afeb?w=300&h=300&fit=crop`}
                      alt={`Award ${item}`}
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold">View Full Size</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Awards;
