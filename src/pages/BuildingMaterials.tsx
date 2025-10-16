import { Boxes, Home, Leaf, CheckCircle, Shield, Award, ArrowRight, Sparkles, Trees, Sun } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import glassBlocksBlue from '@/assets/glass-blocks-blue.jpg';
import glassBlocksMosaic from '@/assets/glass-blocks-mosaic.jpg';

const BuildingMaterials = () => {
  const products = [
    {
      title: "Glass Blocks",
      description: "Durable architectural glass blocks that combine aesthetics with functionality, perfect for modern interior and exterior applications.",
      icon: Boxes,
      features: ["Light transmission", "Sound insulation", "Fire resistance", "Low maintenance"],
      image: glassBlocksBlue
    },
    {
      title: "UPVC Roofing Sheets",
      description: "High-quality, weather-resistant roofing solutions offering superior durability and thermal insulation for residential and commercial buildings.",
      icon: Home,
      features: ["UV protected", "Corrosion resistant", "Lightweight", "Energy efficient"],
      image: null
    },
    {
      title: "Polycarbonate Sheets",
      description: "Versatile, impact-resistant sheets ideal for skylights, canopies, and greenhouse applications with excellent light transmission.",
      icon: Sun,
      features: ["Impact resistant", "UV stabilized", "Crystal clear", "Weather proof"],
      image: null
    },
    {
      title: "Wood Flooring",
      description: "Elegant and sustainable wood flooring solutions that bring warmth and natural beauty to any interior space.",
      icon: Trees,
      features: ["Natural elegance", "Durable finish", "Easy installation", "Eco-friendly"],
      image: null
    },
    {
      title: "Mosaic Solutions",
      description: "Stylish mosaic tiles and patterns that add artistic flair and sophisticated design elements to walls and floors.",
      icon: Sparkles,
      features: ["Designer patterns", "Color variety", "Water resistant", "Premium quality"],
      image: glassBlocksMosaic
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Strength & Durability",
      description: "All our materials are tested for long-lasting performance in Pakistan's climate"
    },
    {
      icon: Sparkles,
      title: "Style & Elegance",
      description: "Modern designs that enhance the aesthetic appeal of any construction project"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly materials that contribute to green building practices"
    }
  ];

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24">
      <PageHeader 
        title="Building Materials"
        subtitle="Premium solutions for modern construction and interior design"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-pg-red/10 text-pg-red px-6 py-3 rounded-full text-sm font-semibold mb-6">
              Premium Building Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future with <span className="text-pg-red">Quality Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A diverse range of premium building materials designed to meet modern construction and interior needs. Our product line includes durable Glass Blocks, high-quality UPVC Roofing Sheets, versatile Polycarbonate Sheets, elegant Wood Flooring, and stylish Mosaic solutions ensuring strength, style, and sustainability for every project.
            </p>
          </div>

          {/* Hero Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={glassBlocksBlue} 
                alt="Premium Glass Blocks - Blue tinted architectural glass" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Glass Blocks</h3>
                  <p className="text-sm opacity-90">Modern architectural solutions</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={glassBlocksMosaic} 
                alt="Mosaic Glass Blocks - Premium mosaic tile patterns" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Facundo Kostelak</h3>
                  <p className="text-sm opacity-90">Artistic design elements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive building materials tailored for modern construction excellence
            </p>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                    product.image ? 'grid md:grid-cols-2 gap-0' : ''
                  }`}
                >
                  {product.image && (
                    <div className={`${!isEven ? 'md:order-2' : ''} relative h-64 md:h-auto overflow-hidden`}>
                      <img 
                        src={product.image} 
                        alt={`${product.title} - Premium building material`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${!product.image ? 'text-center' : ''}`}>
                    <div className={`w-16 h-16 bg-pg-red/10 rounded-2xl flex items-center justify-center mb-6 ${!product.image ? 'mx-auto' : ''}`}>
                      <Icon className="w-8 h-8 text-pg-red" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {product.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className={`grid grid-cols-2 gap-3 ${!product.image ? 'max-w-md mx-auto' : ''}`}>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pg-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Strength, Style & Sustainability
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Three pillars that define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-pg-red/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-pg-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Project
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our materials are trusted across diverse applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Residential Buildings', 'Commercial Spaces', 'Industrial Facilities', 'Interior Design'].map((application, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-pg-red/30"
              >
                <div className="w-12 h-12 bg-pg-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pg-red/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-pg-red" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pg-red to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to explore our premium building materials range
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-pg-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+92-123-4567890" 
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pg-red transition-all duration-300 transform hover:scale-105"
            >
              Call: +92-123-4567890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingMaterials;