'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Squash as Hamburger } from 'hamburger-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-16 sm:h-20 md:h-24 bg-black/70 backdrop-blur border-b border-white/10 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
        }`}>
        <nav className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-10 gap-2"
          >
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-[40px] w-[40px]  object-contain"
            />
            <span className="text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg">
              WGTECSOL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center space-x-2 xl:space-x-4 z-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 xl:px-5 py-2 xl:py-3 font-semibold rounded-lg transition-all duration-200 text-sm xl:text-base hover:text-[#9EFF00] ${pathname === item.href
                  ? 'text-[#9EFF00]'
                  : 'text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block z-10">
            <Link
              href="/contact"
              className={`px-4 xl:px-5 py-2 xl:py-3 font-semibold rounded-lg transition-all duration-200 text-sm xl:text-base ${pathname === '/contact'
                ? 'bg-[#8CE600] text-black ring-2 ring-white'
                : 'bg-[#8CE600] text-black hover:bg-[#9eff00] hover:scale-105'
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-10">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
              size={20}
              duration={0.4}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Now outside of header */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Spacer to account for navbar height */}
        <div className="h-[62px] sm:h-[76px] md:h-[93px]"></div>

        <div className="flex flex-col h-[calc(100%-62px)] sm:h-[calc(100%-76px)] md:h-[calc(100%-93px)]">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-stretch px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`w-full text-center py-3 sm:py-4 font-semibold rounded-lg transition-all duration-200 text-base sm:text-lg ${pathname === item.href
                    ? 'bg-gray-800 text-[#9EFF00]'
                    : 'text-white hover:bg-gray-800 active:bg-gray-700'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Contact Button */}
          <div className="px-4 sm:px-6 pb-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`block w-full text-center py-3 sm:py-4 font-semibold rounded-lg transition-all duration-200 text-base sm:text-lg ${pathname === '/contact'
                ? 'bg-[#9EFF00] text-black ring-2 ring-white'
                : 'bg-[#9EFF00] text-black hover:bg-[#8CE600] active:bg-[#7CD600]'
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}