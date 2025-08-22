
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const OurBusinesses = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Our Business Divisions"
        subtitle="Diversified excellence across multiple industries"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* FMCG - Power Plus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FMCG - Power Plus</h2>
              <p className="text-lg text-gray-600 mb-6">
                Starting its journey with battery cells in 1999, Power Plus division is serving Pakistan's consumers segment for more than two decades. The portfolio of 130+ products with our flagship brand endorses the real meaning of a Progressive Group.
              </p>
              <p className="text-gray-600 mb-8">
                With a versatile approach, they are engaged in final manufactured products of manufacturing, import, export, distribution, trading, distribution and export of a diverse range of food products, specialty retail importers, Instant Dry Yeast, Bread Preservatives, Cocoa Powders, etc.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-pg-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Learn More <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border border-pg-red text-pg-red px-6 py-3 rounded-lg font-semibold hover:bg-pg-red hover:text-white transition-colors duration-300"
                >
                  Shop Now <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                alt="Power Plus Products"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Pak Ghiza */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop"
                alt="Pak Ghiza Products"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pak Ghiza</h2>
              <p className="text-lg text-gray-600 mb-6">
                Pak Ghiza is a mission-oriented & value-driven organization, manufacturing, food ingredients, relevant to the baking industry especially Instant Improvers, Instant Dry Yeast, Bread Preservatives, Cocoa Powders, etc.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
                >
                  Learn More <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  Shop Now <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Industrial Chemical & Building Material */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industrial Chemical & Building Material</h2>
              <p className="text-lg text-gray-600 mb-6">
                Manufacturing industrial chemicals and building materials of global standards and distributing them whether it be local ventures or international.
              </p>
              <p className="text-gray-600 mb-8">
                Our division focuses on providing high-quality industrial solutions for construction, manufacturing, and infrastructure development projects across Pakistan and beyond.
              </p>
              <a
                href="/building-material"
                className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
              >
                Learn More <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Industrial Building Material"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8">Get in touch with our business development team for partnerships and collaboration opportunities.</p>
          <a
            href="/contact"
            className="inline-block bg-pg-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurBusinesses;
