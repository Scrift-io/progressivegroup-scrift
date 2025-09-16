
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Heart, ArrowRight, CheckCircle, Award, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Timeline } from '@/components/ui/timeline';
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

  const foundationItems = [{
    id: 'vision',
    title: 'VISION',
    icon: Target,
    color: 'from-pg-red/20 to-red-900/20 border-pg-red/30',
    iconBg: 'bg-pg-red',
    titleColor: 'text-pg-red',
    content: 'To be a globally renowned institution of invaluable value creation for profitable growth.'
  }, {
    id: 'mission',
    title: 'MISSION',
    icon: Eye,
    color: 'from-gray-800/20 to-gray-900/20 border-gray-600/30',
    iconBg: 'bg-gray-800',
    titleColor: 'text-gray-200',
    content: 'Passion to promote trade & production of intrinsically beneficial products & services, meeting or exceeding industry norms of quality and deliver right value for money through professional excellence.'
  }, {
    id: 'values',
    title: 'VALUES',
    icon: Heart,
    color: 'from-gray-700/20 to-gray-800/20 border-gray-500/30',
    iconBg: 'bg-gray-700',
    titleColor: 'text-gray-300',
    content: ['Speak the Truth', 'Keep Promises', 'Respect Others', 'Avoid Back Biting', 'Do Justice & Deliverance', 'Uphold Morality & Professionalism']
  }];

  const timelineData = [{
    title: "Industrial Chemical Manufacturing",
    content: <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Leading manufacturer of premium industrial chemicals, providing high-purity compounds and specialty solutions for diverse manufacturing sectors across Pakistan and international markets.
          </p>
          <div className="mb-6 space-y-3">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-pg-red to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-3 h-3 text-white" />
              </div>
              <span>Premium Phosphorus Compounds & Specialty Chemicals</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span>ISO-Certified Quality Control & Testing Laboratories</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span>Custom Chemical Formulations & Technical Support</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span>International Export Quality Standards & Compliance</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/lovable-uploads/c1b417f2-5a7d-408e-93a5-6743e87d1988.png" alt="Premium Phosphorus Compounds" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
            <img src="/lovable-uploads/a72c0325-362e-41e4-a03e-776a6ac23552.png" alt="Industrial Grade Sulphur" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
          </div>
        </div>
  }, {
    title: "Advanced Machinery Solutions",
    content: <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Cutting-edge agricultural and industrial machinery designed for enhanced productivity. Our precision-engineered solutions combine innovative technology with robust construction for superior performance.
          </p>
          <div className="mb-6 space-y-3">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-pg-red to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-3 h-3 text-white" />
              </div>
              <span>Professional Agricultural Tillers & Farm Equipment</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span>Advanced Dairy Equipment & Milking Systems</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span>Technical Support & Maintenance Services</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span>Precision Engineering & Quality Assurance</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/lovable-uploads/55902ae3-9e31-43d6-a623-503ff574931a.png" alt="Professional Agricultural Tillers" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
            <img src="/lovable-uploads/afb940ca-fde6-4445-ba52-af589496fbff.png" alt="Advanced Dairy Equipment" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
          </div>
        </div>
  }, {
    title: "Premium Building Materials",
    content: <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Comprehensive building materials and construction solutions for residential, commercial, and industrial projects. We deliver quality materials that meet international construction standards.
          </p>
          <div className="mb-6 space-y-3">
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-pg-red to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-3 h-3 text-white" />
              </div>
              <span>Glass Blocks & Advanced Glazing Solutions</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span>UPVC Roofing & Polycarbonate Sheet Systems</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span>Premium Wood Flooring & Mosaic Solutions</span>
            </div>
            <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm group">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span>Project Consultation & Technical Support</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/lovable-uploads/1221495a-3a55-4cc2-bb90-5e9e4b3e01dc.png" alt="Glass Blocks & Glazing Solutions" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
            <img src="/lovable-uploads/0a74d2ce-682c-4f0e-ba89-478f2048e1e8.png" alt="UPVC Roofing Systems" className="rounded-lg object-cover h-32 lg:h-40 w-full shadow-lg" />
          </div>
        </div>
  }];

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
                Seven Decades of <span className="text-pg-red">Industrial Excellence</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Progressive Traders was established in Karachi, Pakistan in 1954 as a partnership firm with a visionary purpose of sourcing advanced raw materials, cutting-edge equipment, and innovative technologies to modernize and accelerate the growth of Pakistan's industrial landscape.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                Today, Progressive Group stands as a diversified industrial conglomerate with multiple specialized divisions and three subsidiary companies, serving diverse markets with unwavering commitment to quality and innovation.
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
              Foundation of <span className="text-pg-red">Progressive Group</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our core principles guide every decision and drive our commitment to excellence
            </p>
            <div className="w-16 sm:w-24 h-1 bg-pg-red mx-auto mt-4 sm:mt-6"></div>
          </div>
          
          <div className="relative h-80 sm:h-96">
            {foundationItems.map((item, index) => {
            const Icon = item.icon;
            return <div key={item.id} className={`absolute inset-0 transition-all duration-1000 ${index === currentFoundation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className={`max-w-4xl mx-auto bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-3xl border p-6 sm:p-8 lg:p-12 text-center shadow-2xl`}>
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${item.titleColor} mb-6 sm:mb-8`}>
                      {item.title}
                    </h3>
                    {Array.isArray(item.content) ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {item.content.map((value, idx) => <div key={idx} className="flex items-center text-gray-300 text-left">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pg-red mr-2 sm:mr-3 flex-shrink-0" />
                            <span className="text-sm sm:text-base lg:text-lg">{value}</span>
                          </div>)}
                      </div> : <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
                        {item.content}
                      </p>}
                  </div>
                </div>;
          })}
          </div>
          
          {/* Foundation Navigation */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-4">
            {foundationItems.map((_, index) => <button key={index} onClick={() => setCurrentFoundation(index)} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${index === currentFoundation ? 'bg-pg-red scale-125 shadow-lg' : 'bg-white/30 hover:bg-white/50'}`} />)}
          </div>
        </div>
      </section>

      {/* Business Divisions Timeline */}
      <Timeline data={timelineData} />

      {/* Enhanced Contact Form */}
      <ContactForm />
    </div>;
};

export default Index;
