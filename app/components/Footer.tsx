import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:underline">
                Industries We Serve
              </a>
            </li>
            <li>
              <a href="#partnership" className="hover:underline">
                Why Should You Choose Us
              </a>
            </li>
            <li>
              <a href="#technologies" className="hover:underline">
                Technologies We Use
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Socials */}
        <div>
          <h3 className="font-semibold mb-3">Our Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="font-semibold mb-3">Our Locations</h3>
          <ul className="space-y-2">
            <li>Moroni</li>
            <li>Mutsamudu</li>
            <li>Fomboni</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="mb-1">+269 4875834</p>
          <p>kreate@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
