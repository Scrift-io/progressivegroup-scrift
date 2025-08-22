
import { useState } from 'react';
import { Linkedin, Users, BookOpen, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('join-us');

  const tabs = [
    { id: 'join-us', label: 'Join Us at PGOC' },
    { id: 'life-at-pgoc', label: 'Life at PGOC' },
    { id: 'career-faqs', label: 'Career FAQs' },
    { id: 'training', label: 'Training & Development' },
  ];

  return (
    <div className="mt-16">
      {/* Header */}
      <PageHeader 
        title="Careers"
        subtitle="Join our team and build your future with Progressive Group"
        backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop"
      />

      {/* Tab Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-pg-red text-pg-red bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-pg-red hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'join-us' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Join Us at Progressive Group</h2>
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  We are always looking for talented individuals who share our values and passion for excellence. Join our dynamic team and be part of Pakistan's leading business group.
                </p>
                <p className="text-gray-600 mb-8">
                  At Progressive Group, we believe in nurturing talent, fostering innovation, and creating opportunities for growth. Our diverse workforce is our greatest asset.
                </p>
              </div>
              
              <div className="bg-pg-red text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-lg mb-6">
                  Visit our LinkedIn page to explore current opportunities and submit your application.
                </p>
                <a
                  href="https://linkedin.com/company/progressive-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-pg-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  View Opportunities on LinkedIn
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <Users className="w-12 h-12 text-pg-red mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Opportunities</h3>
                  <p className="text-gray-600">
                    From manufacturing to trading, we offer diverse career paths across multiple business divisions.
                  </p>
                </div>
                <div className="text-center p-6">
                  <BookOpen className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We invest in your professional development with comprehensive training and skill enhancement programs.
                  </p>
                </div>
                <div className="text-center p-6">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
                  <p className="text-gray-600">
                    Clear career progression paths and opportunities for advancement within our growing organization.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'life-at-pgoc' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Life at Progressive Group</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Work Culture</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      At Progressive Group, we foster a culture of collaboration, innovation, and mutual respect. Our work environment encourages creativity and supports professional growth.
                    </p>
                    <p>
                      We believe in work-life balance and provide our employees with the flexibility they need to excel both professionally and personally.
                    </p>
                    <p>
                      Our values-driven approach ensures that every team member feels valued and contributes meaningfully to our shared success.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Office Environment"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Competitive Benefits</h4>
                  <p className="text-gray-600 text-sm">Comprehensive healthcare, retirement plans, and performance bonuses</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible Schedule</h4>
                  <p className="text-gray-600 text-sm">Work arrangements that support work-life balance</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Team Events</h4>
                  <p className="text-gray-600 text-sm">Regular team building activities and company celebrations</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Professional Growth</h4>
                  <p className="text-gray-600 text-sm">Mentorship programs and career development opportunities</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career-faqs' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Career FAQs</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "What is the recruitment process at Progressive Group?",
                    answer: "Our recruitment process typically includes application review, initial screening, interviews with relevant departments, and final selection. We ensure a fair and transparent process for all candidates."
                  },
                  {
                    question: "Do you offer internship programs?",
                    answer: "Yes, we offer internship programs for students and recent graduates. These programs provide valuable industry experience and potential pathways to full-time employment."
                  },
                  {
                    question: "What benefits do employees receive?",
                    answer: "We offer competitive salaries, healthcare benefits, retirement plans, performance bonuses, professional development opportunities, and a positive work environment."
                  },
                  {
                    question: "How does Progressive Group support career development?",
                    answer: "We provide training programs, mentorship opportunities, skill development workshops, and clear career progression paths to help our employees grow professionally."
                  },
                  {
                    question: "What is the work culture like?",
                    answer: "Our work culture is built on our core values of integrity, excellence, and collaboration. We promote innovation, respect diversity, and maintain high ethical standards."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'training' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Training & Development</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Learning</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      At Progressive Group, we believe that continuous learning is essential for both personal and organizational growth. We invest significantly in the development of our human capital.
                    </p>
                    <p>
                      Our comprehensive training programs are designed to enhance technical skills, leadership capabilities, and professional competencies across all levels of the organization.
                    </p>
                    <p>
                      We partner with leading training institutions and industry experts to deliver world-class learning experiences to our team members.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop"
                    alt="Training Session"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technical Training</h4>
                  <p className="text-gray-600 mb-4">
                    Industry-specific skill development programs to keep our workforce updated with the latest technologies and best practices.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Manufacturing processes</li>
                    <li>• Quality control systems</li>
                    <li>• Safety protocols</li>
                    <li>• Digital tools and systems</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Leadership Development</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive programs to develop the next generation of leaders within our organization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Management skills</li>
                    <li>• Strategic thinking</li>
                    <li>• Team building</li>
                    <li>• Communication excellence</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Certifications</h4>
                  <p className="text-gray-600 mb-4">
                    Support for professional certifications and continuing education to advance career prospects.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Industry certifications</li>
                    <li>• Educational sponsorships</li>
                    <li>• Professional workshops</li>
                    <li>• Conference participation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;
