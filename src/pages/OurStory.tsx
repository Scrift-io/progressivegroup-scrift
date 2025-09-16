import { useState } from 'react';
import PageHeader from '../components/PageHeader';
const OurStory = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');
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
  }, {
    id: 'careers',
    label: 'Careers'
  }];
  return <div className="mt-16">
      {/* Header */}
      <PageHeader title="Our Story" subtitle="Seven decades of excellence and innovation" backgroundImage="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=1200&h=600&fit=crop" />

      {/* Tab Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${activeTab === tab.id ? 'border-pg-red text-pg-red bg-red-50' : 'border-transparent text-gray-600 hover:text-pg-red hover:bg-gray-50'}`}>
                {tab.label}
              </button>)}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'who-we-are' && <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Progressive Group History</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Progressive Traders was established in Karachi, Pakistan in 1954 as a partnership firm with a modest purpose of sourcing raw materials, equipment and technologies which would contribute to modernization and growth of the leather tanning industry in Pakistan.
                  </p>
                  <p>
                    Progressive Traders has now grown into a responsible group with several departments within the main entity and three satellite companies.
                  </p>
                  <p>
                    With a versatile approach, they are engaged in final manufactured products of manufacturing, import, export, distribution, trading, distribution and export of a diverse range of food products, specialty retail importers, Instant Dry Yeast, preservatives, beverage ingredients, textiles, consumer goods, and real estate.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
                <img alt="Company History" className="rounded-2xl shadow-2xl w-full mb-8 transform hover:scale-105 transition-transform duration-500" src="/lovable-uploads/18d1cb87-983f-4b1e-b3ad-56fc6e6da49f.png" />
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Growth Over Six Decades</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Initially, Progressive Traders has substantially contributed to the improvement, growth and expansion of the energy sector industry, through diversified supply of chemicals, machinery and equipment.
                  </p>
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
                      "Within your person, blessings and prosperity. Welcome to the luminous perfumed gardens of the Progressive Group, a value-driven virtue-oriented far and friendly economic portal."
                    </p>
                    <p>
                      "It is a shariah compliant, law of the land abiding, environmentally conscious and socially responsible company."
                    </p>
                    <p>
                      "Our Quality Policy is crystal clear: We aspire to build standards, beneficial with money, back assurance."
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
                  <img src="/lovable-uploads/b71c0b2f-9cf5-4b86-87cc-ff6efbdd3b67.png" alt="Haji Muhammad Safdar Sheikh - Chairman" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                </div>
              </div>

              {/* Vice Chairman */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <img src="/lovable-uploads/25ed6148-9fea-490c-a452-28fb859469a1.png" alt="Waqas Muhammad Sheikh - Vice Chairman" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                </div>
                <div className="animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Vice Chairman Message</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="italic border-l-4 border-pg-red pl-6">
                      "Welcome to the Progressive Group. We are a company that is driven by our values. We offer you progressive products and we are working with an organization that cares about its people and the world around us."
                    </p>
                    <p>
                      "We have a strict quality control standards that is why we offer a money-back guarantee for our products."
                    </p>
                  </div>
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <p className="font-bold text-xl text-gray-900">Mr. Muhammad Ashraf</p>
                    <p className="text-pg-red font-semibold">Vice Chairman</p>
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
                      Our Quality Policy is crystal clear: We aspire to build standards, beneficial with money, back assurance.
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

          {activeTab === 'careers' && <div className="space-y-20">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Careers at Progressive Group</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our team and be part of a 70-year legacy of excellence, innovation, and professional growth
                </p>
              </div>

              {/* Join Us Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Join Us at Progressive Group</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="border-l-4 border-pg-red pl-6 italic">
                      "Be part of something bigger. Join Progressive Group and contribute to Pakistan's industrial growth while building your career with us."
                    </p>
                    <p>
                      Progressive Group offers exciting career opportunities across multiple divisions - from industrial chemicals and machinery to building materials. We're looking for passionate individuals who share our values and commitment to excellence.
                    </p>
                    <p>
                      Whether you're a fresh graduate or an experienced professional, we provide a platform for growth, learning, and making a meaningful impact in the industry.
                    </p>
                    <div className="mt-8">
                      <a 
                        href="https://www.linkedin.com/company/progressive-group" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center bg-pg-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        View Open Positions on LinkedIn
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <img 
                    src="/lovable-uploads/careers-office-environment.jpg" 
                    alt="Progressive Group Office Environment" 
                    className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Life at PGOC Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <img 
                    src="/lovable-uploads/careers-workspace.jpg" 
                    alt="Life at Progressive Group" 
                    className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Life at PGOC</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      At Progressive Group, we believe in creating an environment where our employees can thrive both professionally and personally. Our workplace culture is built on our core values of integrity, respect, and excellence.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Collaborative Environment</h4>
                        <p className="text-sm text-gray-600">Work alongside experienced professionals in a supportive team atmosphere</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Growth Opportunities</h4>
                        <p className="text-sm text-gray-600">Clear career progression paths and skill development programs</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Work-Life Balance</h4>
                        <p className="text-sm text-gray-600">Flexible working arrangements and employee wellness programs</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Innovation Focus</h4>
                        <p className="text-sm text-gray-600">Encourage creative thinking and innovative solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career FAQs Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Career FAQs</h3>
                  <div className="w-24 h-1 bg-pg-red mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">What divisions can I work in?</h4>
                      <p className="text-gray-600 text-sm">Progressive Group has opportunities across Industrial Chemicals, Machinery Solutions, Building Materials, and corporate functions including HR, Finance, and Operations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">Do you offer internship programs?</h4>
                      <p className="text-gray-600 text-sm">Yes, we offer structured internship programs for students and fresh graduates to gain hands-on experience in their chosen field.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">What benefits do you provide?</h4>
                      <p className="text-gray-600 text-sm">We offer competitive salaries, health insurance, professional development opportunities, and performance-based incentives.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">How do I apply for a position?</h4>
                      <p className="text-gray-600 text-sm">Visit our LinkedIn company page to view current openings and submit your application directly through the platform.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">What is the work culture like?</h4>
                      <p className="text-gray-600 text-sm">Our culture is based on Islamic values, professionalism, mutual respect, and continuous learning. We maintain a collaborative and supportive environment.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">Are there remote work options?</h4>
                      <p className="text-gray-600 text-sm">Depending on the role, we offer flexible working arrangements including hybrid options for suitable positions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training and Development Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Training & Development</h3>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p className="border-l-4 border-pg-red pl-6 italic">
                      "We invest in our people because we believe that employee growth drives company success."
                    </p>
                    <p>
                      Progressive Group is committed to the continuous development of our employees through comprehensive training programs, skill enhancement workshops, and professional certification support.
                    </p>
                    <div className="space-y-4 mt-8">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-semibold">Technical Skills Training</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-semibold">Leadership Development Programs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-semibold">Industry Certification Support</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-semibold">Mentorship and Coaching</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pg-red rounded-full mr-4"></div>
                        <span className="font-semibold">Cross-functional Exposure</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img 
                      src="/lovable-uploads/careers-training-room.jpg" 
                      alt="Training Facilities" 
                      className="rounded-xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" 
                    />
                    <img 
                      src="/lovable-uploads/careers-conference-room.jpg" 
                      alt="Conference and Meeting Rooms" 
                      className="rounded-xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </section>
    </div>;
};
export default OurStory;