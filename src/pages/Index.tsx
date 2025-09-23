
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Heart, ArrowRight, Users, Globe, Leaf, CheckCircle, BookOpen, Shield, Zap, Star, GraduationCap, Link2, Cross, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFoundation, setCurrentFoundation] = useState(0);
  
  const slides = [{
    image: "/lovable-uploads/143b80d2-6d93-4587-9f30-5c72e09315fc.png",
    title: "Building Tomorrow",
    subtitle: "Progressive Group - 70 Years of Excellence"
  }, {
    image: "/lovable-uploads/2f284504-8f25-483d-845c-91f5f598c0e3.png",
    title: "Innovation Driven", 
    subtitle: "Leading Pakistan's Industrial Growth"
  }, {
    image: "/lovable-uploads/b16f8622-afbc-40ee-b32f-4afc78415412.png",
    title: "Value Creation",
    subtitle: "Mission-Oriented Business Solutions"
  }, {
    image: "/lovable-uploads/9352f4ae-108e-4b85-8728-afb8bdd5960a.png",
    title: "Quality Excellence",
    subtitle: "Premium Products for Every Need"
  }, {
    image: "/lovable-uploads/320c91c9-6ff1-4fed-aacb-8afa4c620ec5.png",
    title: "Trusted Solutions",
    subtitle: "Powering Growth Across Industries"
  }, {
    image: "/lovable-uploads/37e5891b-706e-46b0-ab9d-8f36a7e01bb0.png",
    title: "Global Standards",
    subtitle: "Delivering Excellence Worldwide"
  }];

  const foundationItems = [
    { id: 'faith', keyword: 'Faith', icon: Heart },
    { id: 'knowledge', keyword: 'Knowledge', icon: GraduationCap },
    { id: 'unity', keyword: 'Unity', icon: Users },
    { id: 'discipline', keyword: 'Discipline', icon: Shield }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const foundationTimer = setInterval(() => {
      setCurrentFoundation(prev => (prev + 1) % foundationItems.length);
    }, 4000);
    return () => clearInterval(foundationTimer);
  }, [foundationItems.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return <div className="mt-0">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000" style={{
          backgroundImage: `url(${slide.image})`
        }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>)}
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-200 font-light px-4" style={{
              animationDelay: '0.5s'
            }}>
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4" style={{
              animationDelay: '1s'
            }}>
                <Link to="/our-story" className="group inline-flex items-center justify-center bg-pg-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/our-businesses" className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  Our Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        
        

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-pg-red scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
        </div>
      </section>

      {/* Company Overview - Enhanced Mobile Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="inline-block bg-pg-red/10 text-pg-red px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                EST. 1954
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Growth over <span className="text-pg-red">Six Decades</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Progressive Traders has substantially contributed to the improvement, growth and expansion of the safety match industry, through quality enhancement and strategic promotion for export, with the result that Pakistan is now a significant exporter of safety matches to the global market place.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                With a versatile approach, they are engaged in their specialized pursuits of manufacturing, import, import substitution, trading, distribution and export of a diverse product range comprising industrial raw materials, food ingredients, building products and fast moving consumer goods.
              </p>
              <Link to="/our-story" className="group inline-flex items-center bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-pg-red transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                Discover Our Journey
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative animate-fade-in order-1 lg:order-2" style={{
            animationDelay: '0.3s'
          }}>
              <div className="relative">
                <img alt="Progressive Group Corporate Building" className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" src="/lovable-uploads/progressive-group-corporate.png" />
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-pg-red text-white p-3 sm:p-4 rounded-xl shadow-xl">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">70+</div>
                  <div className="text-xs opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values - Enhanced Mobile Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-pg-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Foundation of <span className="text-pg-red">PGOC</span>
            </h2>
            
            <div className="mb-6 sm:mb-8 relative">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 sm:p-8 mx-auto max-w-2xl shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 mt-2">Vision</h3>
                <p className="text-lg sm:text-xl text-green-300 font-medium italic leading-relaxed">
                  "Fair Friendly Benevolent Economic Pursuit"
                </p>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Progressive Group of Company's Constitution is based on Shari'ah, Law of land and industry best practices shall be the source of strength.
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto px-4 mt-4 leading-relaxed">
              Following values shall serve as the guiding principles for all the contextualized operations. Upholding these values in every business matter shall be considered equivalent to actualizing the Divine Mandate in the light of Quran and Sunnah:
            </p>
            <div className="w-16 sm:w-24 h-1 bg-pg-red mx-auto mt-4 sm:mt-6"></div>
          </div>
          
          <div className="relative h-32 sm:h-40 lg:h-48">
            {foundationItems.map((item, index) => {
            const Icon = item.icon;
            return <div key={item.id} className={`absolute inset-0 transition-all duration-1000 ${index === currentFoundation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-gradient-to-r from-pg-red/20 to-red-900/20 backdrop-blur-sm border border-pg-red/30 rounded-2xl px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 shadow-2xl">
                      <div className="flex items-center justify-center text-white">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pg-red mr-4 sm:mr-6 flex-shrink-0" />
                        <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide">{item.keyword}</span>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CSR Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Corporate Social <span className="text-pg-red">Responsibility</span>
            </h2>
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Progressive Group of Companies, we recognize that our success as a business is closely tied to the well-being of the communities in which we operate. Guided by a strong sense of responsibility and a commitment to sustainable development, our Corporate Social Responsibility (CSR) initiatives are an integral part of our corporate philosophy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We firmly believe that meaningful corporate citizenship extends beyond business performance—it involves active participation in efforts that uplift society and address critical needs in areas such as health, education, and social welfare.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through these efforts, Progressive Group of Companies reaffirms its pledge to contribute positively to the communities we serve. We are committed to continuing our journey as a responsible corporate citizen, dedicated to creating lasting value—not only for our stakeholders but for society at large.
              </p>
            </div>
            <div className="w-24 h-1 bg-pg-red mx-auto mt-8"></div>
          </div>

          {/* CSR Initiatives */}
          <div className="space-y-12">
            {/* Health Care Initiatives */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pg-red to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Health Care Initiatives</h3>
                  <div className="w-20 h-1 bg-pg-red mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are proud to support hospitals and healthcare institutions that provide critical medical services to underserved and vulnerable communities. Our contributions help facilitate access to quality healthcare, the expansion of medical facilities, procurement of essential medical equipment, and the improvement of patient care services.
              </p>
            </div>

            {/* Education and Academic Support */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Education and Academic Support</h3>
                  <div className="w-20 h-1 bg-blue-500 mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Education is the cornerstone of a prosperous and progressive society. Progressive Group of Companies extends financial and institutional support to universities, schools, and educational programs that promote academic excellence, innovation, and equal access to learning opportunities. Through scholarships, infrastructure development, and resource provisioning, we aim to empower the next generation of leaders and professionals.
              </p>
            </div>

            {/* Social Welfare Engagements */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Social Welfare Engagements</h3>
                  <div className="w-20 h-1 bg-green-500 mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our CSR commitments also encompass a broad range of social welfare initiatives. These include partnerships with nonprofit organizations, support for community development programs, and assistance for marginalized groups. By addressing issues such as poverty, disability, and disaster relief, we strive to create meaningful change in the lives of those who need it most.
              </p>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Commitment to Society</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-pg-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pg-red" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Social Responsibility</h4>
                <p className="text-gray-600">Giving back to communities through social initiatives and charitable activities that create lasting positive impact.</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Environmental Stewardship</h4>
                <p className="text-gray-600">Operations guided by environmental protection and sustainable development principles for future generations.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Community Development</h4>
                <p className="text-gray-600">Active participation in community programs that uplift society and address critical social needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <ContactForm />
    </div>;
};

export default Index;
