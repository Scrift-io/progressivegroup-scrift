
import { Linkedin, Users, BookOpen, TrendingUp, Target, Award, Heart, Lightbulb, Shield, Building, GraduationCap, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Careers at Progressive Group"
        subtitle="Join our team and be part of a 70-year legacy of excellence, innovation, and professional growth"
        backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop"
      />

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Progressive Group</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="border-l-4 border-pg-red pl-6 italic text-xl">
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
                    href="https://www.linkedin.com/company/72101038/admin/dashboard/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-pg-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Linkedin className="mr-3 w-6 h-6" />
                    View Open Positions on LinkedIn
                    <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Progressive Group?</h2>
            <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values your growth, celebrates your achievements, and invests in your future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-pg-red to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Opportunities</h3>
              <p className="text-gray-600">
                From manufacturing to trading, we offer diverse career paths across multiple business divisions including Industrial Chemicals, Machinery Solutions, and Building Materials.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Clear career progression paths and opportunities for advancement within our growing organization. We believe in promoting from within.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                We invest in your professional development with comprehensive training programs, skill enhancement workshops, and professional certification support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at PGOC Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img 
                src="/lovable-uploads/careers-workspace.jpg" 
                alt="Life at Progressive Group" 
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold mb-8">Life at Progressive Group</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  At Progressive Group, we believe in creating an environment where our employees can thrive both professionally and personally. Our workplace culture is built on our core values of integrity, respect, and excellence.
                </p>
                <p>
                  We foster a culture of collaboration, innovation, and mutual respect. Our work environment encourages creativity and supports professional growth while maintaining work-life balance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-3">
                      <Handshake className="w-6 h-6 text-pg-red mr-3" />
                      <h4 className="font-bold text-white">Collaborative Environment</h4>
                    </div>
                    <p className="text-sm text-gray-300">Work alongside experienced professionals in a supportive team atmosphere</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-3">
                      <Target className="w-6 h-6 text-blue-400 mr-3" />
                      <h4 className="font-bold text-white">Growth Opportunities</h4>
                    </div>
                    <p className="text-sm text-gray-300">Clear career progression paths and skill development programs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-3">
                      <Heart className="w-6 h-6 text-green-400 mr-3" />
                      <h4 className="font-bold text-white">Work-Life Balance</h4>
                    </div>
                    <p className="text-sm text-gray-300">Flexible working arrangements and employee wellness programs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                      <h4 className="font-bold text-white">Innovation Focus</h4>
                    </div>
                    <p className="text-sm text-gray-300">Encourage creative thinking and innovative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career FAQs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-pg-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about careers at Progressive Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">What divisions can I work in?</h4>
                <p className="text-gray-600">Progressive Group has opportunities across Industrial Chemicals, Machinery Solutions, Building Materials, and corporate functions including HR, Finance, and Operations.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Do you offer internship programs?</h4>
                <p className="text-gray-600">Yes, we offer structured internship programs for students and fresh graduates to gain hands-on experience in their chosen field.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">What benefits do you provide?</h4>
                <p className="text-gray-600">We offer competitive salaries, health insurance, professional development opportunities, and performance-based incentives.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">How do I apply for a position?</h4>
                <p className="text-gray-600">Visit our LinkedIn company page to view current openings and submit your application directly through the platform.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">What is the work culture like?</h4>
                <p className="text-gray-600">Our culture is based on Islamic values, professionalism, mutual respect, and continuous learning. We maintain a collaborative and supportive environment.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Are there remote work options?</h4>
                <p className="text-gray-600">Depending on the role, we offer flexible working arrangements including hybrid options for suitable positions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training and Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Training & Development</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="border-l-4 border-pg-red pl-6 italic text-xl">
                  "We invest in our people because we believe that employee growth drives company success."
                </p>
                <p>
                  Progressive Group is committed to the continuous development of our employees through comprehensive training programs, skill enhancement workshops, and professional certification support.
                </p>
                <p>
                  We partner with leading training institutions and industry experts to deliver world-class learning experiences to our team members.
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

          {/* Training Programs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Technical Training</h3>
              <p className="text-gray-600 mb-6 text-center">
                Industry-specific skill development programs to keep our workforce updated with the latest technologies and best practices.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pg-red mr-2 flex-shrink-0" />
                  Manufacturing processes & quality control
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pg-red mr-2 flex-shrink-0" />
                  Safety protocols & compliance
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pg-red mr-2 flex-shrink-0" />
                  Digital tools and systems
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pg-red mr-2 flex-shrink-0" />
                  Industry best practices
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Leadership Development</h3>
              <p className="text-gray-600 mb-6 text-center">
                Comprehensive programs to develop the next generation of leaders within our organization.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Target className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Management & strategic thinking
                </li>
                <li className="flex items-center">
                  <Target className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Team building & communication
                </li>
                <li className="flex items-center">
                  <Target className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Decision making skills
                </li>
                <li className="flex items-center">
                  <Target className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Change management
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Professional Certifications</h3>
              <p className="text-gray-600 mb-6 text-center">
                Support for professional certifications and continuing education to advance career prospects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  Industry certifications
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  Educational sponsorships
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  Professional workshops
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  Conference participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pg-red to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Ready to Start Your Journey?</h2>
          <p className="text-xl text-red-100 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join Progressive Group and become part of a team that's shaping Pakistan's industrial future
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://www.linkedin.com/company/progressive-group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-pg-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-6 h-6 mr-3" />
              Explore Career Opportunities
              <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
