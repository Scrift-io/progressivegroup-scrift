import { Building2, Package, Warehouse, CheckCircle, Shield, Award, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';

const BuildingMaterials = () => {
  const productCategories = [
    {
      title: "Industrial Chemicals",
      description: "High-quality industrial chemicals for construction and manufacturing",
      icon: Package,
      items: ["Adhesives & Sealants", "Concrete Additives", "Waterproofing Compounds", "Surface Treatments"]
    },
    {
      title: "Building Materials",
      description: "Premium construction materials for residential and commercial projects",
      icon: Building2,
      items: ["Steel & Metal Products", "Insulation Materials", "Roofing Solutions", "Finishing Materials"]
    },
    {
      title: "Equipment & Tools",
      description: "Professional-grade tools and equipment for construction sites",
      icon: Warehouse,
      items: ["Power Tools", "Safety Equipment", "Measurement Instruments", "Material Handling"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All materials meet international quality standards and certifications"
    },
    {
      icon: CheckCircle,
      title: "Reliable Supply",
      description: "Consistent availability and timely delivery of all products"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Technical guidance and support from industry professionals"
    }
  ];

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24">
      <PageHeader 
        title="Building Materials & Industrial Solutions"
        subtitle="Premium construction materials and industrial chemicals for every project"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Empowering Pakistan's <span className="text-pg-red">Construction Industry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Progressive Group provides comprehensive building materials and industrial chemicals that meet the highest quality standards. Our extensive product range supports construction projects of all scales across Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From raw materials to finished products, we ensure that every item in our inventory contributes to building a stronger, more sustainable future for Pakistan's infrastructure.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-pg-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/progressive-group-corporate-buildings.png" 
                alt="Building Materials and Construction" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your construction and industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-pg-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-pg-red/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-pg-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Progressive Group?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Decades of experience in delivering quality materials to Pakistan's construction industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-pg-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-pg-red" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pg-red to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your building material requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-pg-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
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