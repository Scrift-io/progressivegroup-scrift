import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
const Machineries = () => {
  const tillers = [{
    id: 1,
    name: 'Professional Tiller GM 500-1A',
    model: '7.0 HP Honda Engine',
    image: '/lovable-uploads/787792ad-2a71-4e12-a9bb-2a7d52dae62e.png',
    features: ['7.0 HP Honda Engine', 'Heavy-Duty Construction', 'Professional Grade Performance', 'Easy Maintenance'],
    description: 'High-performance agricultural tiller designed for professional farming applications with reliable Honda engine technology.'
  }, {
    id: 2,
    name: 'Advanced Tiller System',
    model: 'Multi-Purpose Agricultural Unit',
    image: '/lovable-uploads/aed535a8-ff07-4f42-b02b-f2b6ec745841.png',
    features: ['Versatile Applications', 'Robust Design', 'Efficient Operation', 'Proven Reliability'],
    description: 'Versatile tilling solution engineered for various agricultural needs with superior build quality and performance.'
  }];
  const milkingMachines = [{
    id: 1,
    name: 'Professional Milking System GB-80352',
    model: 'Industrial Grade Dairy Solution',
    image: '/lovable-uploads/dcd680ac-2379-4bc3-86aa-1bbe5694b7a1.png',
    features: ['High Efficiency Operation', 'Hygienic Design', 'Easy Maintenance', 'Consistent Performance'],
    description: 'State-of-the-art milking system designed for modern dairy operations with focus on hygiene and efficiency.'
  }];
  return <div className="mt-16 min-h-screen">
      {/* Header */}
      <PageHeader title="Agricultural & Industrial Machinery" subtitle="Precision engineering for enhanced productivity" backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop" />

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
              Machinery <span className="bg-gradient-to-r from-pg-red to-red-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our precision-engineered machinery solutions for agricultural and industrial applications
            </p>
          </div>

          {/* Category Pills */}
          
        </div>
      </section>

      {/* Agricultural Tillers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-pg-red text-white py-3 px-8 rounded-full mb-6">
              <h2 className="text-2xl font-bold">Agricultural Tillers</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional-grade tillers engineered for superior soil preparation and agricultural productivity
            </p>
          </div>

          {/* Tillers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {tillers.map((tiller, index) => <div key={tiller.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img src={tiller.image} alt={tiller.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tiller.name}
                    </h3>
                    <p className="text-pg-red font-semibold text-lg">{tiller.model}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tiller.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {tiller.features.map((feature, idx) => <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-medium">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button className="w-full bg-pg-red hover:bg-red-700 text-white rounded-xl font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105">
                    Request Information
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Dairy Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full mb-6">
              <h2 className="text-2xl font-bold">Dairy Equipment Solutions</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced milking systems designed for modern dairy operations with emphasis on hygiene and efficiency
            </p>
          </div>

          {/* Milking Machine */}
          <div className="max-w-2xl mx-auto">
            {milkingMachines.map(machine => <div key={machine.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img src={machine.image} alt={machine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {machine.name}
                    </h3>
                    <p className="text-gray-700 font-semibold text-lg">{machine.model}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {machine.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {machine.features.map((feature, idx) => <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-4"></div>
                        <span className="font-medium">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105">
                    Get Technical Specifications
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
              Precision <span className="text-pg-red">Engineering</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our machinery solutions represent the pinnacle of engineering innovation, 
              combining advanced technology with proven reliability for superior performance.
            </p>
          </div>

          {/* Marquee Animations */}
          <div className="space-y-8">
            <MarqueeAnimation direction="left" baseVelocity={-2} className="text-pg-red py-4">
              PRECISION ENGINEERING • AGRICULTURAL INNOVATION • INDUSTRIAL EXCELLENCE
            </MarqueeAnimation>
            
            <MarqueeAnimation direction="right" baseVelocity={-2} className="text-white py-4">
              ROBUST CONSTRUCTION • TECHNICAL SUPPORT • PROVEN RELIABILITY
            </MarqueeAnimation>
          </div>

          {/* Feature Grid */}
          
        </div>
      </section>

      {/* Call to Action */}
      
    </div>;
};
export default Machineries;