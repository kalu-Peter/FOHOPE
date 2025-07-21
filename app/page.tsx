'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Leaf,
  Heart,
  Users,
  Check,
  Facebook,
  Instagram,
  X,
  Menu
} from 'lucide-react';

export default function Home() {
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
      <div className="relative min-h-screen flex items-center justify-center"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/background.jpg')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Feathers of Hope</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Sustainable Poultry Farming for a Better Tomorrow</p>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
            Discover our commitment to eco-friendly farming practices, premium chicken breeds, 
            and fresh egg production while building stronger community connections through agricultural innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              Learn About Us
            </Link>
            <Link href="/gallery" className="border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap">
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Farm Operations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Farm Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to sustainable agriculture and innovative farming practices that benefit both our community and the environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement eco-friendly farming methods including rotational grazing, 
                organic feed programs, and renewable energy systems to minimize our environmental impact.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Animal Welfare</h3>
              <p className="text-gray-600 leading-relaxed">
                Our chickens enjoy spacious free-range environments with access to natural foraging areas, 
                clean water, and comfortable housing designed for their wellbeing.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with local businesses, schools, and families to provide fresh, 
                healthy products while supporting the local economy and food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining content (Hero, Gallery, Egg Section, etc.) remains unchanged */}

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
                <Facebook className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
                <X className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
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