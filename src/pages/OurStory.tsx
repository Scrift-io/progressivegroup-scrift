import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  BookOpen, 
  Users, 
  Shield, 
  Target, 
  Award, 
  Zap, 
  DollarSign, 
  Mountain, 
  CheckCircle, 
  Lightbulb, 
  Scale 
} from 'lucide-react';
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
              className="flex overflow-x-auto scrollbar-hide scroll-smooth lg:justify-center"
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

          {activeTab === 'culture' && (
          <div className="space-y-20">
            {/* Foundation Section */}
            <section>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Foundation of PGOC</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our foundation is built upon Islamic principles that guide every aspect of our business operations, 
                  relationships, and commitment to creating value for all stakeholders.
                </p>
              </div>

              {/* Faith */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-pg-red/10 rounded-full flex items-center justify-center mr-6">
                        <Heart className="w-8 h-8 text-pg-red" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900">FAITH</h3>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        Allah SWT has bestowed upon human beings the status of being superior to all other creations 
                        (ASHRAF UL MAKHLOOQAT). With that status certain duties towards The Creator and Sustainer of 
                        the universe Himself, and His creatures, have also been enjoined upon humans.
                      </p>
                      <p>
                        The fulfilment of Faith requirements are based on both Huquq Allah (obligations towards Allah) 
                        and equally important 'Huquq al-Ibad' (ethical and legal rights towards one another). 
                        Piety, Equality/Equity, kindness, compassion, respect and dignity for humankind form 
                        the fundamental bedrock upon which the 'Huquq ul Ibad' are based.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pg-red/5 to-pg-red/10 rounded-2xl p-8 border border-pg-red/20">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Contextual Behavioral Practices:</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-red mr-3 mt-1 flex-shrink-0" />
                        <span>Conducting fair, friendly, benevolent, sustainable and inclusive economic pursuit</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-red mr-3 mt-1 flex-shrink-0" />
                        <span>Creation of value through inclusive prosperity and equitable distribution of profits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-red mr-3 mt-1 flex-shrink-0" />
                        <span>Fulfilling moral and ethical obligations towards environment and stakeholders through CSR</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-red mr-3 mt-1 flex-shrink-0" />
                        <span>Ensuring obligations towards employees through 360-degree care and growth model</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Knowledge */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2 animate-fade-in">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-pg-blue/10 rounded-full flex items-center justify-center mr-6">
                        <BookOpen className="w-8 h-8 text-pg-blue" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900">KNOWLEDGE</h3>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        Acquisition of Knowledge has been enjoined upon believers by Quran for it is a prerequisite 
                        for the creation of a just world where peace and harmony prevail. The spirit of seeking 
                        knowledge led to the rise and glory of the Islamic Era.
                      </p>
                      <p>
                        It was the learning, relentless research and scientific enquiry of great Muslim scholars, 
                        thinkers, researchers and scientists that enabled the progress of humanity at large. 
                        Knowledge is reflected in our contextualized operations.
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1 bg-gradient-to-br from-pg-blue/5 to-pg-blue/10 rounded-2xl p-8 border border-pg-blue/20">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Knowledge Practices:</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-blue mr-3 mt-1 flex-shrink-0" />
                        <span>Research, training, resource development and innovation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-blue mr-3 mt-1 flex-shrink-0" />
                        <span>Constant knowledge expansion and skill development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-blue mr-3 mt-1 flex-shrink-0" />
                        <span>Development inspired by justice, good governance, and continued education</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-blue mr-3 mt-1 flex-shrink-0" />
                        <span>Identification and sponsorship of competent students with keen interest in learning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pg-blue mr-3 mt-1 flex-shrink-0" />
                        <span>Guiding young generation to prepare for future responsibilities and challenges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Unity */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900">UNITY</h3>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        Islamic teachings foster unity and consciousness of the Muslim Ummah to create an environment 
                        of togetherness, perseverance, clemency and forbearance. Islam has gathered all Muslims 
                        together in a string of fraternity.
                      </p>
                      <p>
                        Members of the Islamic Ummah are torchbearers of compassion and fellow-feeling, true specimens 
                        of faith and fraternization. Unity teaches us to desist from conflicts that affect cohesion.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Unity Practices:</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Upholding family cohesion above everything else</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Effectively resolving conflicts within bounds of Shariah and law of the land</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Formulating plans for future transitioning and overcoming challenges</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Ensuring business sustainability and longevity through strategic planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Discipline */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2 animate-fade-in">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                        <Shield className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900">DISCIPLINE</h3>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        The spirit of Discipline as defined by Islamic teachings includes obedience, self-control, 
                        accountability, sense of responsibility, support for values, adherence to laws and compliance 
                        with Divine laws (Shariah).
                      </p>
                      <p>
                        Islamic concept of 'Discipline' makes one a man of virtue, embodiment of faith and champion 
                        of truth. The essence of 'Discipline' is reflected in 'Excellence' - acquiring perfection 
                        through continuous improvement.
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Excellence Operations:</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Ultimate power to enforce Company's Constitution rests with BODs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                        <span>HODs provide strength through practical inputs and faithful implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Ensuring Shariah, legal compliance and industry best practices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Justice and good governance as criteria for assessment and rewards</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                        <span>ISO, PS, PSQCA certification standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Canons Section */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 -mx-8 px-8 py-20 rounded-3xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Canons of PGOC</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Five fundamental principles that guide our operational excellence and strategic decision-making processes.
                </p>
              </div>
              
              <div className="max-w-7xl mx-auto">
                {/* Top 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-pg-red/10 rounded-full flex items-center justify-center mr-4">
                        <Target className="w-7 h-7 text-pg-red" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Contextual Relevance</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Stay focused on objectives and guard against distractions to maintain strategic clarity and purpose.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-pg-blue/10 rounded-full flex items-center justify-center mr-4">
                        <Award className="w-7 h-7 text-pg-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Ensure top-of-the-line world-class prime standards in every product, service, and process we deliver.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Zap className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Speed</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      From concept to implementation in conformity with agreed deliverables and established timelines.
                    </p>
                  </div>
                </div>

                {/* Bottom 2 Cards Centered */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                          <DollarSign className="w-7 h-7 text-orange-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Cost-Effectiveness</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Ensure realization of objectives within available and budgeted resources for optimal efficiency.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                          <Mountain className="w-7 h-7 text-teal-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Perseverance</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Ensure realization of purpose despite odds and temporary reversals through unwavering commitment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
                Five core values that drive our decisions, shape our culture, and define who we are as an organization 
                committed to excellence and integrity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                <div className="bg-gradient-to-br from-pg-red/10 to-pg-red/20 rounded-2xl p-6 lg:p-8 text-center border-2 border-pg-red/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-pg-red/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-pg-red" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Truth</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">Honesty and transparency in all our dealings</p>
                </div>
                
                <div className="bg-gradient-to-br from-pg-blue/10 to-pg-blue/20 rounded-2xl p-6 lg:p-8 text-center border-2 border-pg-blue/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-pg-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-pg-blue" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Benevolence</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">Acting with kindness and goodwill toward others</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 lg:p-8 text-center border-2 border-green-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Empathy</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">Understanding and sharing the feelings of others</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 lg:p-8 text-center border-2 border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Innovation</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">Continuously improving and finding new solutions</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 lg:p-8 text-center border-2 border-orange-300 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Scale className="w-6 h-6 lg:w-8 lg:h-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Accountability</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">Taking responsibility for our actions and results</p>
                </div>
              </div>
            </section>
          </div>
        )}

          {activeTab === 'quality' && (
          <div className="space-y-20">
            {/* Header Section */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Quality & Safety</h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At PGOC we thrive to create value and to effectively and efficiently build trust
              </p>
            </div>

            {/* Main Quality Statement */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pg-blue/5 to-pg-blue/15 border border-pg-blue/20">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10 p-12 lg:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="w-20 h-20 bg-pg-blue/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Award className="w-10 h-10 text-pg-blue" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Quality Foundation</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Delivering the best-in-class quality for our products and meeting ultimate quality expectations of our consumers is our priority.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our company's foundation is Quality and we are fully embedded in our purpose and values. 
                    We Strive for zero defects and no waste by constantly improving our process with an approach to deliver competitive advantage to our customers.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Commitment Section */}
            <section>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Commitment Content */}
                <div className="animate-fade-in">
                  <div className="space-y-8">
                    {[
                      "Our company aims to achieve the ultimate customer satisfaction by offering products that can satisfy customer expectations 100%.",
                      "We understand the different needs and expectations of our consumers and customers and strive to develop and deliver superior brands to ensure they're the preferred choice.",
                      "To be quality conscious and customer oriented by continuously training and developing all employees.",
                      "Working as a team with all internal and external stakeholders.",
                      "To provide a perfect product and service to its customers by constantly following the innovations and developing technology in its field.",
                      "To be an exemplary organization sensitive to society and the environment."
                    ].map((commitment, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-pg-red hover:shadow-xl transition-shadow duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-pg-red/10 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="w-5 h-5 text-pg-red" />
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{commitment}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Content */}
                <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.2s' }}>
                  {/* Quality Control Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop&crop=center" 
                      alt="Quality Control Laboratory" 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-bold">Quality Control</h4>
                        <p className="text-sm opacity-90">Advanced testing facilities</p>
                      </div>
                    </div>
                  </div>

                  {/* Safety Standards Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center" 
                      alt="Safety Standards" 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-bold">Safety Standards</h4>
                        <p className="text-sm opacity-90">Industry-leading protocols</p>
                      </div>
                    </div>
                  </div>

                  {/* Statistics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center border border-green-200">
                      <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                      <div className="text-sm font-medium text-green-600">Customer Satisfaction Goal</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center border border-blue-200">
                      <div className="text-3xl font-bold text-blue-700 mb-2">Zero</div>
                      <div className="text-sm font-medium text-blue-600">Defects Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality Certifications */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 -mx-8 px-8 py-16 rounded-3xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Quality Certifications & Standards</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We maintain the highest industry standards through internationally recognized certifications and continuous improvement processes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-pg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-pg-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">ISO Standards</h4>
                  <p className="text-gray-600">Certified quality management systems ensuring consistent excellence</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">PSQCA Certified</h4>
                  <p className="text-gray-600">Pakistan Standards and Quality Control Authority compliance</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Continuous Improvement</h4>
                  <p className="text-gray-600">Ongoing process optimization and quality enhancement initiatives</p>
                </div>
              </div>
            </section>
          </div>
        )}

        </div>
      </section>
    </div>;
};
export default OurStory;