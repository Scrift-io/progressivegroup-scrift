
import { Users, Globe, Leaf, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const OurImpact = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Our Impact"
        subtitle="Making a difference in communities and the environment"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Impact Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Individuals & Families */}
            <div>
              <div className="flex items-center mb-8">
                <Users className="w-12 h-12 text-pg-red mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Individuals & Families</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Employment Generation</h3>
                  <p className="text-gray-600">
                    Progressive Group provides direct employment to hundreds of families across Pakistan, contributing to economic stability and growth in local communities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Products</h3>
                  <p className="text-gray-600">
                    Our commitment to quality ensures that families across Pakistan have access to reliable, affordable products that improve their daily lives.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
                  <p className="text-gray-600">
                    Through our training and development programs, we enhance the skills and capabilities of our workforce, creating opportunities for career advancement.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Community Impact"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* For the Planet */}
            <div>
              <div className="flex items-center mb-8">
                <Globe className="w-12 h-12 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">For the Planet</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Responsibility</h3>
                  <p className="text-gray-600">
                    We are committed to sustainable business practices that minimize our environmental footprint and contribute to a cleaner, greener Pakistan.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Manufacturing</h3>
                  <p className="text-gray-600">
                    Our manufacturing processes are designed to be environmentally conscious, reducing waste and optimizing resource utilization.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Green Innovation</h3>
                  <p className="text-gray-600">
                    We continuously invest in research and development to create more sustainable products and processes that benefit both consumers and the environment.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
                  alt="Environmental Impact"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 bg-gradient-to-r from-pg-red to-red-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">70+</div>
                <div className="text-lg">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Employees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">130+</div>
                <div className="text-lg">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-lg">Business Divisions</div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment to Society</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <Heart className="w-12 h-12 text-pg-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Responsibility</h3>
                <p className="text-gray-600">
                  We believe in giving back to the communities that support us through various social initiatives and charitable activities.
                </p>
              </div>
              <div className="p-6">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  Our operations are guided by principles of environmental protection and sustainable development.
                </p>
              </div>
              <div className="p-6">
                <Users className="w-12 h-12 text-pg-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Development</h3>
                <p className="text-gray-600">
                  We actively participate in community development programs that create lasting positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
