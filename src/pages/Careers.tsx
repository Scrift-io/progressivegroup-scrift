import { Linkedin, Users, BookOpen, TrendingUp, Target, Award, Heart, Lightbulb, Shield, Building, GraduationCap, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
const Careers = () => {
  return <div className="mt-16">
      {/* Header */}
      <PageHeader title="Careers at Progressive Group" subtitle="Join our team and be part of a 70-year legacy of excellence, innovation, and professional growth" backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop" />

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
                  <a href="https://www.linkedin.com/company/72101038/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-pg-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Linkedin className="mr-3 w-6 h-6" />
                    View Open Positions on LinkedIn
                    <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <img src="/lovable-uploads/careers-office-environment.jpg" alt="Progressive Group Office Environment" className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" />
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
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Clear career progression paths and opportunities for advancement within our growing organization. We believe in promoting from within.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
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
              <img src="/lovable-uploads/careers-workspace.jpg" alt="Life at Progressive Group" className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
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
                  "We invest in our companions so that they get all the required skills while performing their job."
                </p>
                <p>
                  Our learning journey continues to grow and we have covered following skills via external and internal trainings:
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
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src="/lovable-uploads/careers-training-room.jpg" alt="Training Facilities" className="rounded-xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
                <img src="/lovable-uploads/careers-conference-room.jpg" alt="Conference and Meeting Rooms" className="rounded-xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* HR Approach and Job Application Form */}
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Human Resources Approach</h3>
              <div className="space-y-4 text-gray-600 text-lg max-w-4xl mx-auto">
                <p>We want to be preferred by the most qualified manpower in the fields in which we operate.</p>
                <p>We are together with people who constantly improve themselves and always want better.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Join US at PGOC</h4>
                <h5 className="text-xl font-semibold text-pg-red mb-4">Job Application Form</h5>
                <p className="text-gray-600">(*) Required Fields</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*E-mail address</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Mobile phone</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">*Address</label>
                  <textarea rows={3} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*CNIC #</label>
                    <input type="text" required placeholder="XXXXX-XXXXXXX-X" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Date of Birth</label>
                    <input type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Place of Birth</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Religion</label>
                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                      <option value="">Select Religion</option>
                      <option value="Islam">Islam</option>
                      <option value="Christianity">Christianity</option>
                      <option value="Hinduism">Hinduism</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Education</label>
                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                      <option value="">Select Education Level</option>
                      <option value="Matriculation">Matriculation</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="PhD">PhD</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Institute Name</label>
                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                      <option value="">Select Institute</option>
                      <option value="University of Punjab">University of Punjab</option>
                      <option value="LUMS">LUMS</option>
                      <option value="UET Lahore">UET Lahore</option>
                      <option value="Government College University">Government College University</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                      <option value="">Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Children (if married)</label>
                    <input type="number" min="0" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have a driving license?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input type="radio" name="driving_license" value="yes" className="mr-2 text-pg-red focus:ring-pg-red" />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="driving_license" value="no" className="mr-2 text-pg-red focus:ring-pg-red" />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Language Skills</label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Language Name</label>
                        <input type="text" placeholder="e.g., English" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Understanding</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                          <option value="">Select Level</option>
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Native">Native</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Speaking</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                          <option value="">Select Level</option>
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Native">Native</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Writing</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent">
                          <option value="">Select Level</option>
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Native">Native</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Computer Skills</label>
                  <textarea rows={3} placeholder="Describe your computer skills, software proficiency, etc." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary</label>
                    <input type="text" placeholder="e.g., 50,000 PKR" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Previous Workplace</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-transparent" />
                  </div>
                </div>

                <div className="text-center pt-6">
                  <button type="submit" className="bg-pg-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pg-red to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Ready to Start Your Journey?</h2>
          <p className="text-xl text-red-100 mb-8 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Join Progressive Group and become part of a team that's shaping Pakistan's industrial future
          </p>
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <a href="https://www.linkedin.com/company/72101038/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-pg-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Linkedin className="w-6 h-6 mr-3" />
              Explore Career Opportunities
              <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Careers;