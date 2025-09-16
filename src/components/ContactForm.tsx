
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building, Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission with delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-pg-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-pg-red/10 text-pg-red px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Get In Touch
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Ready to Start Your <span className="text-pg-red">Project?</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Connect with our experts for industrial chemicals, building materials, and comprehensive industrial solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's Build Something Great Together
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Whether you need industrial chemicals, building materials, or custom solutions, our team of experts is ready to help you achieve your project goals.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="flex items-start group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pg-red to-red-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Visit Our Offices</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    <strong>Karachi Head office:</strong> LC-40, Landhi Indstrial  Area, Near Opal Laboratory, Karachi, Pakistan Post Code 71500 — Tel 021-35026618-20 , 35026622, 021-35026602<br />
                    <strong>Lahore Regional Office:</strong> Lahore”60th Mall Road. Shahrah-e-Quaid-e-Azam, Lahore Pakistan — Tel: 042-36361067-9<br />
                    <strong>Rawalpindi Regional Office:</strong> Rawalpindi House No. 51,Street #5, Khan Avenue Behind Shell filling Station, Chaklala scheme III. — Tel: 051-5145024
                  </p>
                </div>
              </div>

              <div className="flex items-start group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Call Us</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Karachi: 021-35026618-20 , 35026622, 021-35026602<br />
                    Lahore: 042-36361067-9<br />
                    Rawalpindi: 051-5145024
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Email Us</h4>
                  <p className="text-sm sm:text-base text-gray-600">info@pgtraders.com</p>
                  <p className="text-xs sm:text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll get back to you shortly</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                    placeholder="Your Company Name"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full h-10 sm:h-12 px-3 border border-gray-200 rounded-md focus:border-pg-red focus:ring-pg-red bg-white text-sm sm:text-base"
                >
                  <option value="general">General Inquiry</option>
                  <option value="industrial-chemicals">Industrial Chemicals</option>
                  <option value="building-materials">Building Materials</option>
                  <option value="machinery">Machinery & Equipment</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="careers">Careers</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="h-10 sm:h-12 border-gray-200 focus:border-pg-red focus:ring-pg-red text-sm sm:text-base"
                  placeholder="Brief subject of your inquiry"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="border-gray-200 focus:border-pg-red focus:ring-pg-red resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project requirements, specifications, or any questions you have..."
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-pg-red text-white py-3 sm:py-4 h-12 sm:h-14 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
