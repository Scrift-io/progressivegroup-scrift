import { useState } from 'react';
import { Play, ExternalLink, Image, Video, FileText, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import mediaCenterBg from '../assets/media-center-hero.jpg';
import YouTubeClean from '../components/YouTubeClean';
import { CuratedGallery } from '@/components/ui/curated-gallery';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', label: 'TVC', icon: Video },
    { id: 'gallery', label: 'Corporate Events', icon: Image },
    { id: 'collaborations', label: 'Brand & Collaborations', icon: Handshake },
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
      image: '/lovable-uploads/award-ceremony-1.jpg'
    },
    {
      id: 2,
      image: '/lovable-uploads/sports-team-trophy.jpg'
    },
    {
      id: 3,
      image: '/lovable-uploads/award-ceremony-2.jpg'
    },
    {
      id: 4,
      image: '/lovable-uploads/brand-of-the-year-award.jpg'
    },
    {
      id: 5,
      image: '/lovable-uploads/business-meeting.jpg'
    },
    {
      id: 6,
      image: '/lovable-uploads/annual-meeting-2024.jpg'
    },
    {
      id: 7,
      image: '/lovable-uploads/team-meeting.jpg'
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
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-center items-center gap-1 sm:gap-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-pg-red text-pg-red bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-pg-red hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Tele-Vision Commercials</h2>
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
                          <YouTubeClean videoId="GX0DJ4egJqQ" title={video.title} />
                        <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      </div>
                     ) : index === 1 ? (
                        <div className="relative">
                          <YouTubeClean videoId="ajxrgbNEoeI" title={video.title} />
                         <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                           {video.category}
                         </div>
                       </div>
                     ) : index === 2 ? (
                        <div className="relative">
                          <YouTubeClean videoId="UTJDteTYNiM" title={video.title} />
                         <div className="absolute top-2 left-2 bg-pg-red text-white text-xs px-2 py-1 rounded">
                           {video.category}
                         </div>
                       </div>
                     ) : index === 3 ? (
                        <div className="relative">
                          <YouTubeClean videoId="4rUAH_l79Hs" title={video.title} />
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Events</h2>
              </div>

              <div className="max-w-7xl mx-auto">
                <CuratedGallery data={brandGallery} />
              </div>
            </div>
          )}

          {/* Brand & Collaborations Tab */}
          {activeTab === 'collaborations' && (
            <div className="space-y-12">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand & Collaborations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our strategic partnerships and collaborations that drive innovation and excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div 
                    key={item}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-pg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Handshake className="w-10 h-10 text-pg-red" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership {item}</h3>
                      <p className="text-gray-600">Strategic collaboration driving mutual growth and innovation</p>
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