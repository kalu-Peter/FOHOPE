'use client';

import Link from 'next/link';

export default function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: 'SMILE KENYA',
      category: 'Primary Sponsor',
      description: 'A leading Kenyan NGO dedicated to empowering communities through sustainable agriculture and youth development initiatives.',
      logo: '/assets/smile-kenya-logo.jpg',
      website: 'www.smilekenya.org',
      contribution: 'Infrastructure Development & Training Support'
    }
  ];

  const sponsorLevels = [
    {
      level: 'Primary Sponsor Benefits',
      benefits: [
        'Exclusive recognition on all FOH materials',
        'Dedicated project progress reports',
        'Priority access to farm demonstrations',
        'Joint community outreach programs',
        'Collaborative training initiatives',
        'Featured success story sharing'
      ],
      color: 'border-green-300 bg-green-50'
    }
  ];

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
                <Link href="/about" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">About</Link>
                <Link href="/gallery" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Gallery</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium cursor-pointer">Testimonials</Link>
                <Link href="/sponsors" className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium cursor-pointer">Sponsors</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Primary Sponsor</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with SMILE KENYA in our mission to transform agricultural practices 
              and empower the Kinango community through sustainable farming initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsor Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You to Our Partners</h2>
            <p className="text-xl text-gray-600">
              These outstanding organizations make our sustainable farming mission possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-32 object-cover object-center rounded-lg mb-4"
                    />
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      sponsor.category === 'Platinum Sponsor' ? 'bg-gray-100 text-gray-800' :
                      sponsor.category === 'Gold Sponsor' ? 'bg-yellow-100 text-yellow-800' :
                      sponsor.category === 'Silver Sponsor' ? 'bg-gray-200 text-gray-700' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {sponsor.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{sponsor.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{sponsor.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Contribution:</h4>
                      <p className="text-sm text-green-600">{sponsor.contribution}</p>
                    </div>
                    <div className="text-center">
                      <a href={`https://${sponsor.website}`} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer">
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to promote sustainable agriculture and support our local farming community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorLevels.map((level, index) => (
              <div key={index} className={`rounded-xl p-8 ${level.color} border-2`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{level.level}</h3>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <i className="ri-check-line text-green-600 text-xl mr-3 flex-shrink-0 mt-0.5"></i>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsor Impact</h2>
            <p className="text-xl text-gray-600">
              How our sponsors help us make a difference in the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-funds-line text-3xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Farmers Trained</div>
              <p className="text-gray-600 text-sm mt-2">Through collaborative training programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-3xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Youth Engaged</div>
              <p className="text-gray-600 text-sm mt-2">In agricultural skills development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-3xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-700 font-medium">Model Farms</div>
              <p className="text-gray-600 text-sm mt-2">Established in Kinango community</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-3xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-700 font-medium">Income Growth</div>
              <p className="text-gray-600 text-sm mt-2">Average increase for participating farmers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-heart-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h3>
                    <p className="text-gray-600">Support sustainable agriculture and strengthen the local food system while building community connections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-trophy-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Recognition</h3>
                    <p className="text-gray-600">Align your brand with sustainability and agricultural innovation while reaching engaged local audiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-line-chart-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Growth</h3>
                    <p className="text-gray-600">Network with other local businesses and tap into the growing market for sustainable products.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-check-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                    <p className="text-gray-600">Partner with an organization committed to open communication and measurable impact reporting.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src="/assets/sponsor.jpg" 
                   alt="Partnership Benefits" className="rounded-xl shadow-lg object-cover object-top w-full h-96"/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Become a Sponsor Today</h2>
          <p className="text-xl text-green-100 mb-8">
            Join our community of partners supporting sustainable agriculture and making a positive impact on our local food system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
            <Link href="/about" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Learn More
            </Link>
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