import { useState } from 'react';
import { Linkedin, Users, BookOpen, TrendingUp, Target, Award, Heart, Lightbulb, Shield, Building, GraduationCap, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
const Careers = () => {
  const [languages, setLanguages] = useState<Array<{ id: number }>>([{ id: 1 }]);
  const addLanguage = () => setLanguages((prev) => [...prev, { id: Date.now() }]);
  const removeLanguage = (id: number) => setLanguages((prev) => prev.filter((l) => l.id !== id));
  return (
    <div className="mt-16">
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
              <img src="/lovable-uploads/progressive-group-careers-hero.png" alt="Progressive Group Office Environment" className="rounded-2xl shadow-2xl w-full object-contain transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Alert Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign up for Job Alerts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                For job opportunities just leave a few details below to stay up to date with jobs that suit you and your skills.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address*</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Category*</label>
                  <Select>
                    <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                      <SelectValue placeholder="Select a job category" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white shadow-lg border">
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="sales-marketing">Sales & Marketing</SelectItem>
                      <SelectItem value="finance-accounting">Finance & Accounting</SelectItem>
                      <SelectItem value="human-resources">Human Resources</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="quality-assurance">Quality Assurance</SelectItem>
                      <SelectItem value="quality-control">Quality Control</SelectItem>
                      <SelectItem value="research-development">Research & Development</SelectItem>
                      <SelectItem value="information-technology">Information Technology</SelectItem>
                      <SelectItem value="procurement">Procurement</SelectItem>
                      <SelectItem value="supply-chain">Supply Chain</SelectItem>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location*</label>
                  <Select>
                    <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                      <SelectValue placeholder="Select a location (city)" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white shadow-lg border max-h-60 overflow-y-auto">
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                      <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                      <SelectItem value="faisalabad">Faisalabad</SelectItem>
                      <SelectItem value="multan">Multan</SelectItem>
                      <SelectItem value="peshawar">Peshawar</SelectItem>
                      <SelectItem value="quetta">Quetta</SelectItem>
                      <SelectItem value="sialkot">Sialkot</SelectItem>
                      <SelectItem value="gujranwala">Gujranwala</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="bahawalpur">Bahawalpur</SelectItem>
                      <SelectItem value="sargodha">Sargodha</SelectItem>
                      <SelectItem value="sukkur">Sukkur</SelectItem>
                      <SelectItem value="larkana">Larkana</SelectItem>
                      <SelectItem value="sheikhupura">Sheikhupura</SelectItem>
                      <SelectItem value="gujrat">Gujrat</SelectItem>
                      <SelectItem value="kasur">Kasur</SelectItem>
                      <SelectItem value="rahim-yar-khan">Rahim Yar Khan</SelectItem>
                      <SelectItem value="sahiwal">Sahiwal</SelectItem>
                      <SelectItem value="okara">Okara</SelectItem>
                      <SelectItem value="wah-cantonment">Wah Cantonment</SelectItem>
                      <SelectItem value="dera-ghazi-khan">Dera Ghazi Khan</SelectItem>
                      <SelectItem value="mirpur-khas">Mirpur Khas</SelectItem>
                      <SelectItem value="nawabshah">Nawabshah</SelectItem>
                      <SelectItem value="mingora">Mingora</SelectItem>
                      <SelectItem value="chiniot">Chiniot</SelectItem>
                      <SelectItem value="kamoke">Kamoke</SelectItem>
                      <SelectItem value="mandi-bahauddin">Mandi Bahauddin</SelectItem>
                      <SelectItem value="jhelum">Jhelum</SelectItem>
                      <SelectItem value="sadiqabad">Sadiqabad</SelectItem>
                      <SelectItem value="jacobabad">Jacobabad</SelectItem>
                      <SelectItem value="shikarpur">Shikarpur</SelectItem>
                      <SelectItem value="khanewal">Khanewal</SelectItem>
                      <SelectItem value="hafizabad">Hafizabad</SelectItem>
                      <SelectItem value="kohat">Kohat</SelectItem>
                      <SelectItem value="muzaffargarh">Muzaffargarh</SelectItem>
                      <SelectItem value="khanpur">Khanpur</SelectItem>
                      <SelectItem value="gojra">Gojra</SelectItem>
                      <SelectItem value="mianwali">Mianwali</SelectItem>
                      <SelectItem value="pakpattan">Pakpattan</SelectItem>
                      <SelectItem value="abbottabad">Abbottabad</SelectItem>
                      <SelectItem value="tando-adam">Tando Adam</SelectItem>
                      <SelectItem value="jaranwala">Jaranwala</SelectItem>
                      <SelectItem value="khairpur">Khairpur</SelectItem>
                      <SelectItem value="chishtian">Chishtian</SelectItem>
                      <SelectItem value="daska">Daska</SelectItem>
                      <SelectItem value="dadu">Dadu</SelectItem>
                      <SelectItem value="mandi-burewala">Mandi Burewala</SelectItem>
                      <SelectItem value="tando-allahyar">Tando Allahyar</SelectItem>
                      <SelectItem value="toba-tek-singh">Toba Tek Singh</SelectItem>
                      <SelectItem value="ahmadpur-east">Ahmadpur East</SelectItem>
                      <SelectItem value="kamalia">Kamalia</SelectItem>
                      <SelectItem value="mailsi">Mailsi</SelectItem>
                      <SelectItem value="pattoki">Pattoki</SelectItem>
                      <SelectItem value="vehari">Vehari</SelectItem>
                      <SelectItem value="hasilpur">Hasilpur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <button 
                  type="button"
                  className="bg-pg-red text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
                >
                  Add Alert
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8">
              </div>
            </form>
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
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*E-mail address</label>
                    <input type="email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Mobile phone</label>
                    <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">*Address</label>
                  <textarea rows={3} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*CNIC #</label>
                    <input type="text" required placeholder="XXXXX-XXXXXXX-X" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm mb-3" />
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-600 mb-2">Upload CNIC Image</label>
                      <input 
                        type="file" 
                        accept="image/*"
                        className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-pg-red transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-pg-red file:text-white hover:file:bg-red-700 file:cursor-pointer cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Date of Birth</label>
                    <input type="date" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Place of Birth</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Religion</label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                        <SelectValue placeholder="Select Religion" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white shadow-lg border">
                        <SelectItem value="Islam">Islam</SelectItem>
                        <SelectItem value="Christianity">Christianity</SelectItem>
                        <SelectItem value="Hinduism">Hinduism</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Education</label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                        <SelectValue placeholder="Select Education Level" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white shadow-lg border">
                        <SelectItem value="Matriculation">Matriculation</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Bachelor's">Bachelor's Degree</SelectItem>
                        <SelectItem value="Master's">Master's Degree</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                        <SelectItem value="Certificate">Certificate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">*Institute Name</label>
                    <input type="text" required placeholder="Enter your institute name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                </div>

                {/* Education/Certification Documents Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Education Documents</label>
                  <p className="text-xs text-gray-500 mb-3">Upload your certificates, degrees, diplomas, or other educational documents</p>
                  <input 
                    type="file" 
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-pg-red transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-pg-red file:text-white hover:file:bg-red-700 file:cursor-pointer cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white shadow-lg border">
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm">
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white shadow-lg border">
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Married">Married</SelectItem>
                        <SelectItem value="Divorced">Divorced</SelectItem>
                        <SelectItem value="Widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Children (if married)</label>
                    <input type="number" min="0" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have a driving license?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="driving_license" value="yes" className="mr-2 text-pg-red focus:ring-pg-red w-4 h-4" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="driving_license" value="no" className="mr-2 text-pg-red focus:ring-pg-red w-4 h-4" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Language Skills</label>
                    <button
                      type="button"
                      className="bg-pg-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200"
                      onClick={addLanguage}
                    >
                      Add Language
                    </button>
                  </div>

                  <div className="space-y-4">
                    {languages.map((row, idx) => (
                      <div key={row.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Language Name</label>
                          <input type="text" placeholder="e.g., English" className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Understanding</label>
                          <Select>
                            <SelectTrigger className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white shadow-sm">
                              <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white shadow-lg border">
                              <SelectItem value="Basic">Basic</SelectItem>
                              <SelectItem value="Intermediate">Intermediate</SelectItem>
                              <SelectItem value="Advanced">Advanced</SelectItem>
                              <SelectItem value="Native">Native</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Speaking</label>
                          <Select>
                            <SelectTrigger className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white shadow-sm">
                              <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white shadow-lg border">
                              <SelectItem value="Basic">Basic</SelectItem>
                              <SelectItem value="Intermediate">Intermediate</SelectItem>
                              <SelectItem value="Advanced">Advanced</SelectItem>
                              <SelectItem value="Native">Native</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Writing</label>
                          <Select>
                            <SelectTrigger className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white shadow-sm">
                              <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white shadow-lg border">
                              <SelectItem value="Basic">Basic</SelectItem>
                              <SelectItem value="Intermediate">Intermediate</SelectItem>
                              <SelectItem value="Advanced">Advanced</SelectItem>
                              <SelectItem value="Native">Native</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-center">
                          {languages.length > 1 ? (
                            <button type="button" onClick={() => removeLanguage(row.id)} className="bg-red-100 text-red-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                              Remove
                            </button>
                          ) : (
                            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">Default Row</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Computer Skills</label>
                  <textarea rows={3} placeholder="Describe your computer skills, software proficiency, etc." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary</label>
                    <input type="text" placeholder="e.g., 50,000 PKR" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Previous Workplace</label>
                    <input type="text" placeholder="Enter your previous workplace" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pg-red focus:border-pg-red transition-all duration-200 bg-white shadow-sm" />
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
    </div>
  );
};
export default Careers;