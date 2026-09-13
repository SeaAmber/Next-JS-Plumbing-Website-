'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();

  return (
    <header className="relative w-full bg-blue-600 p-4 flex items-center justify-between">
       <img src="/plumber.png" alt="plumbing" className="h-22 w-22"/>

      {/* Desktop / Tablet Nav */}
      <nav className="hidden md:flex gap-6">
        <Link href="/"
        className = {`
          ${pathname === '/'
             ? ' text-red-200 font-bold active: text-red-600'
             :  'text-red-400 font-bold active: text-red-800'

          }
          hover:text-red-400
          `}
        >
          Home
          </Link>

        <Link href="/about"
          className = {`
          ${pathname === '/about'
             ? ' text-red-200 font-bold active: text-red-600'
             :  'text-red-400 font-bold active: text-red-800'

          }
          hover:text-red-400
          `}
        >
          About
          </Link>

        <Link href="/services"
         className = {`
          ${pathname === '/services'
             ? ' text-red-200 font-bold active: text-red-600'
             :  'text-red-400 font-bold active: text-red-800'

          }
          hover:text-red-400
          `}
        >
          Services
          </Link>

        <Link href="/contact"
         className = {`
          ${pathname === '/contact'
             ? ' text-red-200 font-bold active: text-red-600'
             :  'text-red-400 font-bold active: text-red-800'

          }
          hover:text-red-400
          `}
        >
          Contact
          </Link>
      </nav>

      {/* Hamburger Button (Mobile + Tablet) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-2 right-5 text-6xl md:hidden text-white text-3xl"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
       {isOpen ? "x":"☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-5 bg-white shadow-md p-4 space-y-3 md:hidden">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}
