"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-3 px-6 md:px-8 border-b flex items-center justify-between sticky top-0 bg-inherit z-50">
      <div className="text-2xl font-bold text-blue-600">Kreate</div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 items-center">
        <li className="hover:text-blue-600 transition">Our Services</li>
        <li className="hover:text-blue-600 transition">Industries</li>
        <li className="hover:text-blue-600 transition">Why us</li>
        <li className="hover:text-blue-600 transition">Technologies</li>
        <li className="hover:text-blue-600 transition">FAQ</li>
        <Button className="bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
          Get Started
        </Button>
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className=" absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li className="hover:text-blue-600 transition">Our Services</li>
            <li className="hover:text-blue-600 transition">Industries</li>
            <li className="hover:text-blue-600 transition">Why us</li>
            <li className="hover:text-blue-600 transition">Technologies</li>
            <li className="hover:text-blue-600 transition">FAQ</li>
            <Button className="bg-blue-600 rounded-full text-white w-full mt-2 hover:bg-blue-700 transition">
              Get Started
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}
