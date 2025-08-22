import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
const IndustrialChemicals = () => {
  const chemicals = [{
    id: 1,
    name: 'Premium Phosphorus Compounds',
    description: 'High-purity phosphorus chemicals for advanced manufacturing processes and industrial applications',
    image: '/lovable-uploads/c1b417f2-5a7d-408e-93a5-6743e87d1988.png',
    features: ['99.9% Purity', 'Industrial Grade', 'ISO Certified', 'Custom Formulations']
  }, {
    id: 2,
    name: 'Industrial Grade Sulphur',
    description: 'Pure sulphur compounds for chemical processing, fertilizer production, and industrial manufacturing',
    image: '/lovable-uploads/a72c0325-362e-41e4-a03e-776a6ac23552.png',
    features: ['High Purity', 'Consistent Quality', 'Bulk Supply', 'Technical Support']
  }, {
    id: 3,
    name: 'Specialty Chemical Powders',
    description: 'Advanced chemical powders including pigments, catalysts, and specialty compounds for diverse industrial needs',
    image: '/lovable-uploads/28872cc4-035d-452a-91ae-ef028cf90c32.png',
    features: ['Custom Formulations', 'Quality Assured', 'Technical Expertise', 'Timely Delivery']
  }, {
    id: 4,
    name: 'Specialized Chemical Compounds',
    description: 'Premium red oxide and specialty compounds for manufacturing, construction, and industrial applications',
    image: '/lovable-uploads/4d7b2955-6151-449f-8a33-673af3acd74c.png',
    features: ['Premium Grade', 'Consistent Supply', 'Technical Data Sheets', 'Quality Control']
  }, {
    id: 5,
    name: 'Laboratory Chemical Solutions',
    description: 'High-grade laboratory chemicals and solutions for research, testing, and precision applications',
    image: '/lovable-uploads/713d2059-32e1-49f8-bf0d-a3b8d0430934.png',
    features: ['Lab Grade', 'Analytical Purity', 'Certificate of Analysis', 'Safe Packaging']
  }, {
    id: 6,
    name: 'Industrial Salt & Minerals',
    description: 'Premium industrial salts and mineral compounds for chemical processing and manufacturing industries',
    image: '/lovable-uploads/8e21adbe-885d-479a-872d-8f00036f88f1.png',
    features: ['Food Grade Available', 'Bulk Quantities', 'Custom Packaging', 'Regulatory Compliance']
  }];
  return <div className="mt-16 min-h-screen">
      {/* Header */}
      <PageHeader title="Industrial Chemical Excellence" subtitle="Premium chemical solutions for modern manufacturing" backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop" />

      {/* Enhanced Category Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chemical <span className="bg-gradient-to-r from-pg-red to-red-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our precision-engineered chemical solutions for advanced manufacturing applications
            </p>
          </div>

          {/* Category Pills */}
          
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-pg-red">Chemical Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemicals.map((chemical, index) => <div key={chemical.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={chemical.image} alt={chemical.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {chemical.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {chemical.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {chemical.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-pg-red rounded-full mr-3"></div>
                        {feature}
                      </div>)}
                  </div>
                  
                  <Button className="w-full bg-pg-red hover:bg-red-700 text-white rounded-lg font-semibold py-3 transition-all duration-300 transform hover:scale-105">
                    Request Quote
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Marquee Animation Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Chemical <span className="text-pg-red">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our chemical solutions represent cutting-edge innovation in manufacturing, 
              combining scientific excellence with industrial-grade quality for superior performance.
            </p>
          </div>

          {/* Marquee Animations */}
          <div className="space-y-8">
            <MarqueeAnimation direction="left" baseVelocity={-2} className="text-pg-red py-4">
              SCIENTIFIC EXCELLENCE • CHEMICAL INNOVATION • INDUSTRIAL QUALITY
            </MarqueeAnimation>
            
            <MarqueeAnimation direction="right" baseVelocity={-2} className="text-white py-4">
              ANALYTICAL PURITY • TECHNICAL EXPERTISE • RELIABLE SUPPLY
            </MarqueeAnimation>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      

      {/* Call to Action */}
      
    </div>;
};
export default IndustrialChemicals;