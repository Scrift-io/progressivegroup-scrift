
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="mt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Contact <span className="text-pg-red">Us</span>
            </h1>
            <p className="text-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Get in touch with Progressive Group for all your industrial needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-pg-red">Touch</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to discuss your industrial requirements? Our team of experts is here to help you find the right solutions for your business needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-pg-red rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Our Offices</h3>
                    <div className="text-gray-600 space-y-4">
                      <div>
                        <strong>Karachi Head office</strong><br />
                        LC-40, Landhi Indstrial  Area, Near Opal Laboratory, Karachi, Pakistan Post Code 71500<br />
                        Tel 021-35026618-20 , 35026622, 021-35026602
                      </div>
                      <div>
                        <strong>Lahore Regional Office:</strong><br />
                        Lahore”60th Mall Road.<br />
                        Shahrah-e-Quaid-e-Azam, Lahore Pakistan<br />
                        Tel: 042-36361067-9
                      </div>
                      <div>
                        <strong>Rawalpindi Regional Office:</strong><br />
                        Rawalpindi House No. 51,Street #5, Khan Avenue Behind Shell filling Station, Chaklala scheme III.<br />
                        Tel: 051-5145024
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+92-123-4567890</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@pgtraders.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-pg-red rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday – Friday: 9:00 AM to 5:00 PM<br />Saturday: 9:00 AM to 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-pg-red hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
