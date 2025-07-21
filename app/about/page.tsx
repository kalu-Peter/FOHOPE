'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-pacifico text-green-700 cursor-pointer">Feathers of Hope</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Home</Link>
                <Link href="/about" className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium cursor-pointer">About</Link>
                <Link href="/gallery" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Gallery</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Testimonials</Link>
                <Link href="/sponsors" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Sponsors</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

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