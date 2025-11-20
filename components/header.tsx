"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#d9d9d9] border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#222222]">
            Vertices Engineering Partners
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#666666] hover:text-[#222222] transition-all text-sm font-medium hover:scale-110 duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-[#222222] text-white rounded font-medium hover:opacity-90 transition-all duration-300 hover:scale-110"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#222222]" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

          {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#666666] hover:text-[#222222] transition-all duration-300 font-medium hover:scale-105 hover:pl-2 menu-item animate"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-6 py-2 bg-[#222222] text-white rounded font-medium text-center hover:opacity-90 transition-all duration-300 hover:scale-105 menu-item animate"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${navLinks.length * 80}ms` }}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
