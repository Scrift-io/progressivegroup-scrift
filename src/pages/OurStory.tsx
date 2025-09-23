import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const OurStory = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [currentAward, setCurrentAward] = useState(0);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      title: "Brand of the Year 2025",
      category: "Excellence Award"
    },
    {
      title: "Best Brand Activation Program Award 2024", 
      category: "Marketing Excellence"
    }
  ];

  const checkScrollIndicators = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftIndicator(scrollLeft > 0);
      setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollIndicators();
    window.addEventListener('resize', checkScrollIndicators);
    return () => window.removeEventListener('resize', checkScrollIndicators);
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };
  const tabs = [{
    id: 'who-we-are',
    label: 'Who We Are'
  }, {
    id: 'leadership',
    label: 'Leadership'
  }, {
    id: 'culture',
    label: 'Our Culture'
  }, {
    id: 'quality',
    label: 'Quality & Safety'
  }];
  return <div className="mt-16">
      {/* Header */}
      <PageHeader title="Our Story" subtitle="Seven decades of excellence and innovation" backgroundImage="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=1200&h=600&fit=crop" />

      {/* Tab Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative">
            {/* Left scroll indicator */}
            {showLeftIndicator && (
              <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center lg:hidden">
                <button
                  onClick={scrollLeft}
                  className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 ml-2 hover:bg-white transition-colors duration-200"
                  aria-label="Scroll tabs left"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}
            
            {/* Right scroll indicator */}
            {showRightIndicator && (
              <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center lg:hidden">
                <button
                  onClick={scrollRight}
                  className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 mr-2 hover:bg-white transition-colors duration-200"
                  aria-label="Scroll tabs right"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}

            {/* Gradient fade indicators */}
            {showLeftIndicator && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-5 pointer-events-none lg:hidden" />
            )}
            {showRightIndicator && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-5 pointer-events-none lg:hidden" />
            )}

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth"
              onScroll={checkScrollIndicators}
            >
              {tabs.map(tab => 
                <button 
                  key={tab.id} 
                  onClick={() => setActiveTab(tab.id)} 
                  className={`
                    flex-shrink-0 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 
                    text-sm sm:text-base font-semibold whitespace-nowrap 
                    border-b-2 transition-all duration-300 
                    min-h-[48px] flex items-center justify-center
                    ${activeTab === tab.id 
                      ? 'border-pg-red text-pg-red bg-red-50' 
                      : 'border-transparent text-gray-600 hover:text-pg-red hover:bg-gray-50'
                    }
                  `}
                >
                  {tab.label}
                </button>
              )}
            </div>
            
            {/* Mobile swipe hint */}
            <div className="text-center py-2 text-xs text-gray-500 lg:hidden">
              <span className="inline-flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" />
                Swipe to see more
                <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'who-we-are' && <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Who Are We?</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Progressive Traders (Pvt.) Ltd was established in 1954 in Karachi, Pakistan as a partnership firm with a modest purpose of sourcing raw materials, equipment and technologies which would contribute to modernization and growth of the leather tanning industry in Pakistan.
                  </p>
                  <p>
                    The group has grown in stature and now has an umbrella of companies with several divisions actively engaged in their specialized area of pursuit and with a versatile approach, we are making inroads in the field of manufacture, import distribution and trading.
                  </p>
                  <p>
                    Our 3 satellite companies are Progressive Traders (Pvt) Ltd; Power Plus (Pvt.) Ltd and Pak Ghiza (Pvt.) Ltd.
                  </p>
                  <p>
                    Each company operates in a distinct sector, and our target audience includes B2B clients, consumers, partners, and industry stakeholders.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
                <img alt="Progressive Group Corporate Buildings" className="rounded-2xl shadow-2xl w-full mb-8 transform hover:scale-105 transition-transform duration-500" src="/lovable-uploads/progressive-group-corporate-buildings.png" />
                {/* Awards Carousel */}
                <div className="relative bg-gradient-to-br from-pg-red/10 to-pg-red/5 p-8 rounded-2xl shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Awards and Recognitions</h3>
                    <div className="w-16 h-1 bg-pg-red mx-auto"></div>
                  </div>
                  
                  <div className="relative overflow-hidden">
                    <div className="transition-all duration-500 ease-in-out">
                      <div className="text-center">
                        <div className="inline-block bg-pg-red/20 text-pg-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {awards[currentAward].category}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                          {awards[currentAward].title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-6">
                    <button
                      onClick={() => setCurrentAward(prev => (prev - 1 + awards.length) % awards.length)}
                      className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-pg-red hover:text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex space-x-2">
                      {awards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentAward(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentAward ? 'bg-pg-red scale-125' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setCurrentAward(prev => (prev + 1) % awards.length)}
                      className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-pg-red hover:text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>}

          {activeTab === 'leadership' && <div className="space-y-16">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
                <p className="text-xl text-gray-600">Meet our visionary leaders</p>
              </div>
              
              {/* Chairman */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Chairman Message</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="italic border-l-4 border-pg-red pl-6">
                      "السلام عليكم ورحمة الله وبركاته<br/>
                      I wish you peace, blessings, and prosperity."
                    </p>
                    <p>
                      "Welcome to the luminous perfumed garden of the Progressive Group, a Value-Driven virtue-oriented fair and friendly economic pursuit."
                    </p>
                    <p>
                      "It is a shari'ah compliant, law of the land abiding environmentally conscious and socially responsible company."
                    </p>
                    <p>
                      "Our Quality Policy is crystal clear: We aspire to Gold Standards supported with money-back assurance."
                    </p>
                  </div>
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <p className="font-bold text-xl text-gray-900">Mr. Muhammad Siddique Sheikh</p>
                    <p className="text-pg-red font-semibold">Chairman</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                  <img src="/lovable-uploads/b71c0b2f-9cf5-4b86-87cc-ff6efbdd3b67.png" alt="Haji Muhammad Safdar Sheikh - Chairman" className="w-full object-contain rounded-2xl shadow-xl" />
                </div>
              </div>

              {/* Vice Chairman */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <img src="/lovable-uploads/25ed6148-9fea-490c-a452-28fb859469a1.png" alt="Waqas Muhammad Sheikh - Vice Chairman" className="w-full object-contain rounded-2xl shadow-xl" />
                </div>
                <div className="animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Co-Chairman Message</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="italic border-l-4 border-pg-red pl-6">
                      "السلام عليكم ورحمة الله وبركاته"
                    </p>
                    <p>
                      "Welcome to the Progressive Group. We're a company that is driven by our values. We offer you peace of mind, you are working with an organization that cares about its people and the world around us."
                    </p>
                    <p>
                      "We have strict quality control standards that is why we offer a money-back guarantee for our products."
                    </p>
                  </div>
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <p className="font-bold text-xl text-gray-900">Mr. Muhammad Ashraf</p>
                    <p className="text-pg-red font-semibold">Co-Chairman</p>
                  </div>
                </div>
              </div>
            </div>}

          {activeTab === 'culture' && <div className="space-y-16">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Built on strong foundations and values that guide our operations and define our character
                </p>
              </div>

              {/* Foundation Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-pg-red mb-4">Foundation of Progressive Group</h3>
                  <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                    <div className="w-16 h-16 bg-gradient-to-br from-pg-red to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">1954</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Established Heritage</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Founded in Karachi with a vision to modernize Pakistan's industrial landscape through quality sourcing and innovation.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{
                animationDelay: '0.1s'
              }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-pg-red to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Partnership Approach</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Built on strong partnerships and collaborative relationships that foster mutual growth and success.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-pg-red to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">🚀</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovation Drive</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Commitment to bringing modern technologies and progressive solutions to traditional industries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Canons Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Canons of Progressive Group</h3>
                  <div className="w-24 h-1 bg-gray-700 mx-auto mb-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg animate-fade-in">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Ethical Business Practices</h4>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Maintaining transparency in all business dealings</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Adhering to Shariah-compliant business principles</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Respecting local laws and regulations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg animate-fade-in" style={{
                animationDelay: '0.1s'
              }}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Stakeholder Value</h4>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Creating value for customers, employees, and communities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Building long-term sustainable relationships</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>Contributing to economic growth and development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                  <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    These fundamental principles guide every decision we make and every action we take
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[{
                title: "Speak the Truth",
                icon: "💬",
                description: "Honesty and transparency in all communications"
              }, {
                title: "Keep Promises",
                icon: "🤝",
                description: "Reliability and commitment to our word"
              }, {
                title: "Respect Others",
                icon: "🙏",
                description: "Treating everyone with dignity and consideration"
              }, {
                title: "Avoid Back Biting",
                icon: "🚫",
                description: "Maintaining professional discourse and integrity"
              }, {
                title: "Do Justice & Deliverance",
                icon: "⚖️",
                description: "Fair dealing and timely fulfillment of obligations"
              }, {
                title: "Uphold Morality & Professionalism",
                icon: "🎯",
                description: "Maintaining high ethical standards in all endeavors"
              }].map((value, index) => <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                      <div className="text-3xl mb-4 text-center">{value.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">{value.description}</p>
                    </div>)}
                </div>
              </div>
            </div>}

          {activeTab === 'quality' && <div className="space-y-16">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality & Safety</h2>
                <p className="text-xl text-gray-600">Committed to excellence in all we do</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="border-l-4 border-pg-red pl-6 italic">
                      Our Quality Policy is crystal clear: We are committed to establishing excellence in standards, delivering measurable value, and ensuring unwavering reliability in all our operations.
                    </p>
                    <p>
                      We maintain strict quality control standards across all our business divisions and offer money-back guarantees for our products.
                    </p>
                    <p>
                      Safety is paramount in all our operations, ensuring the well-being of our employees, customers, and communities.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                  <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop" alt="Quality Control" className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>}

        </div>
      </section>
    </div>;
};
export default OurStory;