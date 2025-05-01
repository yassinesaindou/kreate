"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Our Services" },
    { href: "#industries", label: "Industries" },
    { href: "#partnership", label: "Why us" },
    { href: "#technologies", label: "Technologies" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="py-3 px-6 md:px-8 border-b flex items-center justify-between sticky top-0 bg-white z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="#home">Kreate</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 items-center">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <li className="hover:text-blue-600 transition cursor-pointer">
              {link.label}
            </li>
          </Link>
        ))}
        <Button
          className="bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
          asChild>
          <Link href="#contact">Get Started</Link>
        </Button>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}>
                <li className="hover:text-blue-600 transition cursor-pointer">
                  {link.label}
                </li>
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              <Button className="bg-blue-600 rounded-full text-white w-full mt-2 hover:bg-blue-700 transition">
                Get Started
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
