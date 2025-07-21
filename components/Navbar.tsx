'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-pacifico text-green-700">Feathers of Hope</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/gallery" label="Gallery" />
              <NavLink href="/testimonials" label="Testimonials" />
              <NavLink href="/sponsors" label="Sponsors" />
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
          <NavLink href="/" label="Home" mobile />
          <NavLink href="/about" label="About" mobile />
          <NavLink href="/gallery" label="Gallery" mobile />
          <NavLink href="/testimonials" label="Testimonials" mobile />
          <NavLink href="/sponsors" label="Sponsors" mobile />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  label,
  mobile = false,
}: {
  href: string;
  label: string;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    className={`${
      mobile
        ? 'block text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-base font-medium'
        : 'text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium'
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
