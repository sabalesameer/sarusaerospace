// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/SARUS LOGO.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AboutUs', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'DroneCare', path: '/DroneCare'},
    { name: 'Contact', path: '/Contact'},
    { name: 'Trening', path: '/Trening' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Sarus Aerospace" className="h-8 w-8" />
          <span className="text-black font-bold text-lg">SARUS AEROSPACE</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-black hover:text-white'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle navigation"
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {/* Backdrop Transition */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        aria-hidden={!isOpen}
      />

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-2xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col p-6 gap-6`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Sarus Aerospace" className="h-8 w-8" />
            <span className="text-black font-bold text-lg">SARUS AEROSPACE</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-3 rounded text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-black hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
