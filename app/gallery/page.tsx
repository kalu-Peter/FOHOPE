'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'chickens', name: 'Our Chickens' },
    { id: 'farm', name: 'Farm Life' },
    { id: 'eggs', name: 'Fresh Eggs' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const photos = [
    {
      id: 1,
      category: 'chickens',
      title: 'Healthy Chickens',
      description: 'Our healthy chickens enjoying their spacious environment',
      image: '/assets/chicken.jpg'
    },
    {
      id: 2,
      category: 'chickens',
      title: 'Growing Chicks',
      description: 'Young chicks in their early stages of development',
      image: '/assets/chick1.jpg'
    },
    {
      id: 3,
      category: 'chickens',
      title: 'Free Range Chickens',
      description: 'Our chickens freely roaming in the open space',
      image: '/assets/chicken3.jpg'
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Modern Facilities',
      description: 'Our state-of-the-art farming facilities',
      image: '/assets/background1.jpg'
    },
    {
      id: 5,
      category: 'chickens',
      title: 'Happy Chicks',
      description: 'Healthy and active chicks in their environment',
      image: '/assets/chicks.jpg'
    },
    {
      id: 6,
      category: 'farm',
      title: 'Farm Products',
      description: 'Fresh produce from our sustainable farm',
      image: '/assets/product.jpg'
    },
    {
      id: 7,
      category: 'eggs',
      title: 'Fresh Eggs',
      description: 'Farm fresh eggs collected daily',
      image: '/assets/egg.jpg'
    },
    {
      id: 8,
      category: 'chickens',
      title: 'Growing Strong',
      description: 'Our chickens thriving in their natural habitat',
      image: '/assets/fullygrown.jpg'
    },
    {
      id: 9,
      category: 'farm',
      title: 'Farm Life',
      description: 'Daily activities on our sustainable farm',
      image: '/assets/product1.jpg'
    },
    {
      id: 10,
      category: 'chickens',
      title: 'Healthy Flock',
      description: 'Our well-cared-for flock enjoying the farm',
      image: '/assets/chicks4.jpg'
    },
    {
      id: 11,
      category: 'chickens',
      title: 'Young Ones',
      description: 'New additions to our growing family',
      image: '/assets/chick2.jpg'
    },
    {
      id: 12,
      category: 'chickens',
      title: 'Happy Family',
      description: 'Our chickens living their best life',
      image: '/assets/chicken4.jpg'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar /> {/* ✅ Use reusable sticky*/}

      {/* Hero Section */}
      <div className="relative py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Farm Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our sustainable farm operations, from our happy chickens 
              to our modern facilities and daily farm life.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Farm by the Numbers</h2>
            <p className="text-xl text-gray-600">
              A snapshot of our sustainable farming operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,000+</div>
              <div className="text-gray-700 font-medium">Happy Chickens</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500</div>
              <div className="text-gray-700 font-medium">Dozen Eggs Weekly</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50</div>
              <div className="text-gray-700 font-medium">Acres of Pasture</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">See It All in Person</h2>
          <p className="text-xl text-green-100 mb-8">
            Schedule a farm tour to experience our sustainable operations firsthand and meet our feathered friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Schedule Tour
            </Link>
            <Link href="/testimonials" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Read Reviews
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