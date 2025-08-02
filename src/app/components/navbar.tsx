'use client';
import React, { useState } from 'react';
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
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-auto fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <span className="text-white font-medium text-sm md:text-base">
            WGTECSOL
          </span>
        </Link>

      
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-4 z-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-3 font-semibold rounded-lg transition text-sm md:text-base ${
                pathname === item.href
                  ? 'text-[#9EFF00]'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        
        <div className="hidden md:block z-10">
          <Link
            href="/contact"
            className={`px-5 py-3 font-medium rounded-lg transition text-sm md:text-base ${
              pathname === '/contact'
                ? 'bg-[#9EFF00] text-black ring-2 ring-white'
                : 'bg-[#9EFF00] text-black hover:bg-[#8CE600]'
            }`}
          >
            Contact Us
          </Link>
        </div>

       
        <div className="md:hidden z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={24} />
        </div>
      </nav>

    
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`w-full text-center py-2 font-medium transition text-sm ${
                  pathname === item.href
                    ? 'bg-gray-800 text-[#9EFF00]'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`w-[90%] text-center py-2 font-medium rounded-lg transition text-sm ${
                pathname === '/contact'
                  ? 'bg-[#9EFF00] text-black ring-2 ring-white'
                  : 'bg-[#9EFF00] text-black hover:bg-[#8CE600]'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}