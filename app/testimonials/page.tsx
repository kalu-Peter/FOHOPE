'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Garcia',
      role: 'Local Restaurant Owner',
      company: 'Garden Bistro',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Maria%20Garcia%2C%20Hispanic%20female%20restaurant%20owner%20in%20her%2040s%2C%20wearing%20chef%20coat%2C%20warm%20smile%20in%20restaurant%20kitchen%20setting%2C%20professional%20culinary%20environment&width=300&height=300&seq=maria-testimonial&orientation=squarish',
      quote: 'Feathers of Hope has transformed our breakfast menu. Their eggs are consistently fresh, with rich golden yolks that our customers absolutely love. The quality and reliability have made them our exclusive egg supplier.',
      rating: 5
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Family Father',
      company: 'Local Resident',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20David%20Chen%2C%20Asian%20male%20in%20his%2030s%2C%20casual%20family%20man%20attire%2C%20holding%20fresh%20eggs%2C%20happy%20expression%20in%20home%20kitchen%20setting%2C%20family-oriented%20atmosphere&width=300&height=300&seq=david-testimonial&orientation=squarish',
      quote: 'As a father of three, I want the best nutrition for my family. These eggs taste incredible and I feel good knowing they come from chickens raised with such care and ethical practices. My kids love visiting the farm!',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      role: 'Nutritionist',
      company: 'Wellness Center',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Sarah%20Mitchell%2C%20Caucasian%20female%20nutritionist%20in%20her%2030s%2C%20wearing%20professional%20attire%2C%20confident%20pose%20in%20modern%20wellness%20clinic%2C%20health%20professional%20environment&width=300&height=300&seq=sarah-testimonial&orientation=squarish',
      quote: 'I recommend Feathers of Hope eggs to all my clients. The nutritional profile is outstanding - higher omega-3s, better protein quality, and no harmful additives. You can taste the difference that sustainable farming makes.',
      rating: 5
    },
    {
      id: 4,
      name: 'Robert Thompson',
      role: 'Grocery Store Manager',
      company: 'Green Valley Market',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Robert%20Thompson%2C%20middle-aged%20Caucasian%20male%20store%20manager%2C%20wearing%20business%20casual%20attire%2C%20standing%20in%20grocery%20store%20produce%20section%2C%20retail%20management%20setting&width=300&height=300&seq=robert-testimonial&orientation=squarish',
      quote: 'Our customers specifically ask for Feathers of Hope eggs. They sell faster than any other brand we carry. The farm\'s commitment to sustainability aligns perfectly with our store\'s values.',
      rating: 5
    },
    {
      id: 5,
      name: 'Jennifer Rodriguez',
      role: 'School Cafeteria Director',
      company: 'Green Valley Elementary',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Jennifer%20Rodriguez%2C%20Hispanic%20female%20school%20cafeteria%20director%20in%20her%2040s%2C%20wearing%20food%20service%20uniform%2C%20caring%20expression%20in%20school%20kitchen%20setting&width=300&height=300&seq=jennifer-testimonial&orientation=squarish',
      quote: 'We serve over 500 students daily, and Feathers of Hope provides us with fresh, healthy eggs at a fair price. The educational farm tours have been amazing for our students to learn about sustainable agriculture.',
      rating: 5
    },
    {
      id: 6,
      name: 'Michael O\'Brien',
      role: 'Local Baker',
      company: 'Sunrise Bakery',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Michael%20O%20Brien%2C%20Caucasian%20male%20baker%20in%20his%2050s%2C%20wearing%20baker%20apron%20and%20hat%2C%20flour-dusted%20hands%2C%20warm%20smile%20in%20artisan%20bakery%20setting&width=300&height=300&seq=michael-testimonial&orientation=squarish',
      quote: 'As a baker, egg quality is crucial for my pastries and breads. Feathers of Hope eggs give me consistent results every time. The rich yolks create beautiful colors and amazing texture in my baked goods.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-pacifico text-green-700">Feathers of Hope</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">About</Link>
                <Link href="/gallery" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">Gallery</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">Testimonials</Link>
                <Link href="/sponsors" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">Sponsors</Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/gallery" className="block text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
            <Link href="/testimonials" className="block text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
            <Link href="/sponsors" className="block text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium">Sponsors</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Customer Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our valued customers about their experience with our fresh eggs 
              and sustainable farming practices.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover object-top shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-6 max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-green-600 font-medium">{testimonials[activeTestimonial].role}</p>
                  <p className="text-gray-500">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 cursor-pointer ${
                    index === activeTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Read more reviews from our satisfied customers across the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Satisfaction</h2>
            <p className="text-xl text-gray-600">
              Our commitment to quality shows in our customer relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-fill text-3xl text-green-600"></i>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-3xl text-green-600"></i>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-repeat-line text-3xl text-green-600"></i>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Repeat Customers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-green-600"></i>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-700 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Happy Customers</h2>
          <p className="text-xl text-green-100 mb-8">
            Experience the difference that sustainable farming and fresh, quality eggs can make for your family or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Contact Us Today
            </Link>
            <Link href="/gallery" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Visit Our Farm
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
            <p>&copy; 2024 Feathers of Hope Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}