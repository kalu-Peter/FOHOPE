'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar'; // ✅ import reusable Navbar

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar /> {/* ✅ Use reusable sticky*/}


    {/* Hero Section */}
    <div className="relative py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Feathers of Hope (FOH)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A community-driven agricultural initiative transforming lives through sustainable farming in Kinango, Kwale County
          </p>
        </div>
      </div>
    </div>

    {/* Main About Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About FOH Model Farm</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Feathers of Hope (FOH) Model Farm is a community-driven agricultural initiative in Kinango, Kwale County, 
                dedicated to empowering local farmers through sustainable poultry farming and climate-smart agricultural practices.
              </p>
              <p>
                The farm serves as a training and demonstration center, equipping farmers, youth, and women with knowledge 
                and resources to improve productivity, enhance food security, and create employment opportunities.
              </p>
              <p>
                By integrating advanced poultry farming techniques with climate-smart agriculture, FOH Model Farm is 
                revolutionizing local farming, making it more resilient, cost-effective, and environmentally friendly.
              </p>
            </div>
          </div>
          <div>
            <img src="/assets/chicken.jpg" 
                 alt="FOH Model Farm" className="rounded-xl shadow-lg object-cover object-center w-full h-96"/>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission Section */}
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              "To build a self-sustaining Kinango community through innovative and ethical farming, 
              ensuring food security, employment, and economic empowerment."
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              "To provide training, resources, and support to farmers in Kinango, enabling them to develop 
              sustainable poultry and agricultural enterprises that uplift their livelihoods and the broader community."
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Focus Areas */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Focus Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming local agriculture through sustainable practices and community empowerment
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Poultry Farming</h3>
            <div className="space-y-4 text-gray-600">
              <p>FOH Model Farm specializes in high-quality poultry breeding and organic feeding solutions, offering:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improved kienyeji, layers, and guinea fowls for local farmers</li>
                <li>Azolla integration in poultry feed, reducing costs by 70%</li>
                <li>Solar-powered incubation for sustainable hatching</li>
                <li>Biosecurity and disease control measures to ensure healthy flocks</li>
                <li>Farmer training programs on poultry management and business skills</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Climate-Smart Agriculture (CSA)</h3>
            <div className="space-y-4 text-gray-600">
              <p>FOH integrates CSA techniques to increase farm resilience and productivity in Kinango's semi-arid climate, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agroforestry: Planting trees to improve soil health and provide shade</li>
                <li>Water Conservation: Rainwater harvesting and drip irrigation systems to combat water scarcity</li>
                <li>Soil Management: Organic composting and manure application to enhance fertility</li>
                <li>Drought-Resistant Fodder: Growing Lucerne Aurora and other high-protein crops for livestock feed</li>
                <li>Integrated Farming: Recycling poultry waste as organic fertilizer for crops</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Training & Capacity Building</h3>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-6 space-y-2">
                <li>Workshops for youth and farmers on poultry and CSA best practices</li>
                <li>Hands-on training in organic feed formulation and disease prevention</li>
                <li>Business mentorship programs to turn farming into profitable enterprises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Impact & Community Engagement */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact & Community Engagement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating lasting positive change in Kinango community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Benefits</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mr-2 mt-1"></i>
                <span>Providing affordable, improved poultry breeds to farmers</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mr-2 mt-1"></i>
                <span>Enhancing food security through sustainable farming methods</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mr-2 mt-1"></i>
                <span>Creating employment and entrepreneurship opportunities for youth and women</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mr-2 mt-1"></i>
                <span>Promoting environmental conservation through regenerative agriculture</span>
              </li>
            </ul>
          </div>
          
          <div>
            <img src="/assets/chick1.jpg" 
                 alt="Community Impact" className="rounded-xl shadow-lg object-cover h-full w-full"/>
          </div>
        </div>
      </div>
    </section>

    {/* Our Team */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to agricultural excellence and community development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="mb-6">
              <img src="/assets/team/director.jpg" alt="Farm Director" 
                   className="w-32 h-32 rounded-full mx-auto object-cover"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Joseph Kimani</h3>
            <p className="text-green-600 font-medium mb-2">Farm Director</p>
            <p className="text-gray-600 text-sm">Agricultural expert with over 15 years of experience in sustainable farming</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="mb-6">
              <img src="/assets/team/manager.jpg" alt="Operations Manager" 
                   className="w-32 h-32 rounded-full mx-auto object-cover"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Grace Mwende</h3>
            <p className="text-green-600 font-medium mb-2">Operations Manager</p>
            <p className="text-gray-600 text-sm">Specializes in community engagement and agricultural training programs</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="mb-6">
              <img src="/assets/team/vet.jpg" alt="Lead Veterinarian" 
                   className="w-32 h-32 rounded-full mx-auto object-cover"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. David Ochieng</h3>
            <p className="text-green-600 font-medium mb-2">Lead Veterinarian</p>
            <p className="text-gray-600 text-sm">Expert in poultry health and disease management</p>
          </div>
        </div>
      </div>
    </section>

    {/* Awards & Certifications */}
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for our commitment to excellence in sustainable farming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-fill text-3xl text-yellow-600"></i>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Organic Certified</h3>
            <p className="text-gray-600 text-sm">USDA Organic certification for feed and farming practices</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-leaf-fill text-3xl text-green-600"></i>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Sustainable Farm Award</h3>
            <p className="text-gray-600 text-sm">2023 State Agricultural Sustainability Excellence Award</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-fill text-3xl text-blue-600"></i>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Animal Welfare Approved</h3>
            <p className="text-gray-600 text-sm">Highest standard for farm animal welfare certification</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-star-fill text-3xl text-purple-600"></i>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Local Food Hero</h3>
            <p className="text-gray-600 text-sm">2024 Community Choice Award for local food production</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs or want to partner with us? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">Kinango-Kwale, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+254 740 118047</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@feathersofhope.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-green-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 resize-none"
                  placeholder="Tell us about your inquiry, partnership ideas, or how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">✓ Thank you! Your message has been sent successfully.</p>
                <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">✗ Sorry, there was an error sending your message.</p>
                <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-pacifico text-green-400 mb-4">Feathers of Hope</h3>
            <p className="text-gray-400 mb-4">
              Committed to sustainable poultry farming and building stronger communities through 
              agricultural innovation and eco-friendly practices.
            </p>
            <div className="flex space-x-4">
              <i className="ri-facebook-fill text-2xl text-gray-400 hover:text-green-400 cursor-pointer transition duration-300"></i>
              <i className="ri-twitter-fill text-2xl text-gray-400 hover:text-green-400 cursor-pointer transition duration-300"></i>
              <i className="ri-instagram-line text-2xl text-gray-400 hover:text-green-400 cursor-pointer transition duration-300"></i>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 cursor-pointer">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-green-400 cursor-pointer">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-green-400 cursor-pointer">Testimonials</Link></li>
              <li><Link href="/sponsors" className="text-gray-400 hover:text-green-400 cursor-pointer">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Kinango-Kwale, Kenya</p>
              <p>Phone: +254 740 118047</p>
              <p>Email: info@feathersofhope.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Feathers of Hope Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);
}