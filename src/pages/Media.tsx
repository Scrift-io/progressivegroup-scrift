import { useState } from 'react';
import { Play, ExternalLink, Image, Video, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import mediaCenterBg from '../assets/media-center-bg.jpg';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'gallery', label: 'Brand Gallery', icon: Image },
    { id: 'press', label: 'Press Releases', icon: FileText },
  ];

  const videos = [
    {
      id: 1,
      title: 'Progressive Group - Company Overview',
      description: 'Discover our 70-year journey of excellence and innovation in Pakistan\'s industrial landscape.',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop',
      duration: '3:45',
      category: 'Corporate'
    },
    {
      id: 2,
      title: 'PowerPlus Brand Story',
      description: 'Learn about our FMCG division and how PowerPlus became a household name in Pakistan.',
      thumbnail: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=300&fit=crop',
      duration: '2:30',
      category: 'Brand'
    },
    {
      id: 3,
      title: 'PakGhiza Manufacturing Excellence',
      description: 'Behind the scenes look at our food ingredients manufacturing and quality standards.',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=300&fit=crop',
      duration: '4:15',
      category: 'Manufacturing'
    },
    {
      id: 4,
      title: 'Industrial Solutions Showcase',
      description: 'Explore our industrial chemicals and building materials division capabilities.',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=300&fit=crop',
      duration: '5:20',
      category: 'Industrial'
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

  const pressReleases = [
    {
      id: 1,
      title: 'Progressive Group Celebrates 70 Years of Excellence',
      date: '2024-03-15',
      excerpt: 'Progressive Group marks seven decades of serving Pakistan\'s industrial sector with innovation and integrity.',
      category: 'Corporate News'
    },
    {
      id: 2,
      title: 'PowerPlus Launches New Product Line',
      date: '2024-02-28',
      excerpt: 'PowerPlus expands its FMCG portfolio with innovative consumer products designed for Pakistani families.',
      category: 'Product Launch'
    },
    {
      id: 3,
      title: 'PakGhiza Receives Quality Certification',
      date: '2024-01-20',
      excerpt: 'PakGhiza division achieves international quality standards certification for food ingredients manufacturing.',
      category: 'Achievement'
    },
    {
      id: 4,
      title: 'Sustainability Initiative Launch',
      date: '2024-01-10',
      excerpt: 'Progressive Group announces comprehensive sustainability program to reduce environmental impact.',
      category: 'Sustainability'
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
                            allow="fullscreen" 
                            allowFullScreen 
                            height="100%" 
                            src="https://streamable.com/e/5irbkb?" 
                            width="100%" 
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
                             allow="fullscreen" 
                             allowFullScreen 
                             height="100%" 
                             src="https://streamable.com/e/vn9pjv?" 
                             width="100%" 
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
                             allow="fullscreen" 
                             allowFullScreen 
                             height="100%" 
                             src="https://streamable.com/e/dqexcr?" 
                             width="100%" 
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

          {/* Press Releases Tab */}
          {activeTab === 'press' && (
            <div className="space-y-12">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Releases</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Latest news and announcements from Progressive Group
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pressReleases.map((press, index) => (
                  <article 
                    key={press.id} 
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-pg-red/10 text-pg-red text-sm font-semibold px-3 py-1 rounded-full">
                        {press.category}
                      </span>
                      <time className="text-gray-500 text-sm">
                        {new Date(press.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-pg-red transition-colors duration-300 cursor-pointer">
                      {press.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{press.excerpt}</p>
                    <button className="inline-flex items-center text-pg-red hover:text-red-700 font-semibold transition-colors duration-300">
                      Read Full Article
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-pg-red to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View All Press Releases
                </button>
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