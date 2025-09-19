import { useState } from 'react';
import { Play, ExternalLink, Image, Video, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import mediaCenterBg from '../assets/media-center-bg.jpg';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'gallery', label: 'Brand Gallery', icon: Image },
  ];

  const videos = [
    {
      id: 1,
      title: 'PowerPlus TVC - Brand Excellence',
      description: 'PowerPlus television commercial showcasing our commitment to quality and innovation in FMCG products.',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop',
      duration: '3:45',
      category: 'TVC'
    },
    {
      id: 2,
      title: 'PowerPlus TVC - Family Values',
      description: 'PowerPlus TV commercial highlighting how our products bring families together with trust and quality.',
      thumbnail: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=300&fit=crop',
      duration: '2:30',
      category: 'TVC'
    },
    {
      id: 3,
      title: 'PowerPlus TVC - Product Innovation',
      description: 'PowerPlus television commercial featuring our latest product innovations and manufacturing excellence.',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=300&fit=crop',
      duration: '4:15',
      category: 'TVC'
    },
    {
      id: 4,
      title: 'PowerPlus TVC - Brand Legacy',
      description: 'PowerPlus TV commercial celebrating our brand heritage and commitment to Pakistani households.',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=300&fit=crop',
      duration: '5:20',
      category: 'TVC'
    }
  ];

  const brandGallery = [
    {
      id: 1,
      title: 'Progressive Group Headquarters',
      image: '/lovable-uploads/progressive-group-corporate-buildings.png',
      description: 'Our main corporate office showcasing Progressive Group, PowerPlus, and PakGhiza brands'
    },
    {
      id: 2,
      title: 'Leadership Team',
      image: '/lovable-uploads/b71c0b2f-9cf5-4b86-87cc-ff6efbdd3b67.png',
      description: 'Our visionary leadership guiding the company forward'
    },
    {
      id: 3,
      title: 'Manufacturing Facility',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop',
      description: 'State-of-the-art manufacturing facilities maintaining international standards'
    },
    {
      id: 4,
      title: 'Product Innovation',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      description: 'Our commitment to innovation and product development'
    },
    {
      id: 5,
      title: 'Quality Control',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      description: 'Rigorous quality control processes ensuring excellence'
    },
    {
      id: 6,
      title: 'Team Excellence',
      image: '/lovable-uploads/careers-office-environment.jpg',
      description: 'Our dedicated team working towards shared goals'
    }
  ];


  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Media Center"
        subtitle="Explore our brand story through videos, images, and press coverage"
        backgroundImage={mediaCenterBg}
      />

      {/* Tab Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
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
          
          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-12">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Videos</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Watch our story unfold through engaging videos showcasing our journey, products, and impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* First and second videos with embedded iframes */}
                    {index === 0 ? (
                        <div className="relative">
                          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.250%' }}>
                            <iframe 
                              src="https://www.youtube.com/embed/GX0DJ4egJqQ?si=QI6skXf_zredOy-X&modestbranding=1&showinfo=0&rel=0"
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerPolicy="strict-origin-when-cross-origin" 
                              allowFullScreen
                              width="100%" 
                              height="100%"
                              style={{ 
                                border: 'none', 
                                width: '100%', 
                                height: '100%', 
                                position: 'absolute', 
                                left: 0, 
                                top: 0, 
                                overflow: 'hidden' 
                              }}
                            />
                          </div>
                        <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      </div>
                     ) : index === 1 ? (
                        <div className="relative">
                          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.250%' }}>
                            <iframe 
                              src="https://www.youtube.com/embed/ajxrgbNEoeI?si=sfpYw7fpBNnx3ydw&modestbranding=1&showinfo=0&rel=0"
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerPolicy="strict-origin-when-cross-origin" 
                              allowFullScreen
                              width="100%" 
                              height="100%"
                              style={{ 
                                border: 'none', 
                                width: '100%', 
                                height: '100%', 
                                position: 'absolute', 
                                left: 0, 
                                top: 0, 
                                overflow: 'hidden' 
                              }}
                            />
                          </div>
                         <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                           {video.category}
                         </div>
                       </div>
                     ) : index === 2 ? (
                        <div className="relative">
                          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.250%' }}>
                            <iframe 
                              src="https://www.youtube.com/embed/UTJDteTYNiM?si=mina_fpZZApgYmEo&modestbranding=1&showinfo=0&rel=0"
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerPolicy="strict-origin-when-cross-origin" 
                              allowFullScreen
                              width="100%" 
                              height="100%"
                              style={{ 
                                border: 'none', 
                                width: '100%', 
                                height: '100%', 
                                position: 'absolute', 
                                left: 0, 
                                top: 0, 
                                overflow: 'hidden' 
                              }}
                            />
                          </div>
                         <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                           {video.category}
                         </div>
                       </div>
                     ) : index === 3 ? (
                        <div className="relative">
                          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.250%' }}>
                            <iframe 
                              src="https://www.youtube.com/embed/4rUAH_l79Hs?si=xPKzqEOWSU6YrjEN&modestbranding=1&showinfo=0&rel=0"
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerPolicy="strict-origin-when-cross-origin" 
                              allowFullScreen
                              width="100%" 
                              height="100%"
                              style={{ 
                                border: 'none', 
                                width: '100%', 
                                height: '100%', 
                                position: 'absolute', 
                                left: 0, 
                                top: 0, 
                                overflow: 'hidden' 
                              }}
                            />
                          </div>
                         <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                           {video.category}
                         </div>
                       </div>
                     ) : (
                      /* Other videos with thumbnail and play button */
                      <div className="relative group">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                            <Play className="w-6 h-6 text-pg-red ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Brand Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-12">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Visual showcase of our facilities, team, and brand presence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brandGallery.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Follow our social media channels for the latest updates, behind-the-scenes content, and company news
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;