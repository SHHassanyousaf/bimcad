"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#d9d9d9] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Company Summary */}
          <div className="text-center md:text-left">
            <h3 className="text-[#222222] font-bold text-lg mb-4">Vertices Engineering Partners (VEP)</h3>
            <p className="text-[#666666] text-sm leading-relaxed">
              Vertices Engineering Partners is a multidisciplinary design and engineering service provider, established in
              2019, specializing in high-quality CAD drafting and BIM solutions for infrastructure projects, from
              concept to construction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#222222] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666666] hover:text-[#222222] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Offices (order matches Contact page: Dubai, USA, Pakistan) */}
          <div className="text-center md:text-left">
            <h3 className="text-[#222222] font-bold text-lg mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#222222]">Dubai Office</p>
                <p className="text-[#666666] mb-2">1504 – 15th Floor – B Block</p>
                <p className="text-[#666666] mb-4">Al Qadesia Tower, Dubai, UAE</p>
                <p className="font-semibold text-[#222222]">Mobile: 00971 56 572.1504</p>
              </div>

              <div>
                <p className="font-semibold text-[#222222]">USA Office</p>
                <p className="text-[#666666] mb-2">433336 Chokeberry Square</p>
                <p className="text-[#666666] mb-4">Ashburn, Virginia 20146, USA</p>
                <p className="font-semibold text-[#222222]">Phone: +1 571 334 9416</p>
              </div>

              <div>
                <p className="font-semibold text-[#222222]">Pakistan Office</p>
                <p className="text-[#666666] mb-2">18 – UG – Samama Mall & Residency</p>
                <p className="text-[#666666] mb-4">Gulberg, Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center text-[#666666] text-sm">
          <p> © 2025 Vertices Engineering Partners (VEP) – “Connecting Nodes”. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
