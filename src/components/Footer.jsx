import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-blue-900 text-white pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-serif tracking-wide text-white">ASO</span>
              <span className="text-sm font-medium text-amber-400 tracking-wider">PUBLICATION</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted exam preparation partner. We provide high-quality study materials crafted by experts to help you ace your competitive exams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-serif text-amber-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/books" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">All Books</Link>
              </li>
              <li>
                <Link to="/books" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">Categories</Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold font-serif text-amber-400 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-blue-200 text-sm group">
                <Mail className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span>support@asopublication.com</span>
              </li>
              <li className="flex items-start text-blue-200 text-sm group">
                <Phone className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span>+91 9140798306</span>
              </li>
              <li className="flex items-start text-blue-200 text-sm group">
                <MapPin className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span>123 Knowledge Park,<br />Education City, Delhi - 110001</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold font-serif text-amber-400 mb-6">Follow Us</h3>
            <p className="text-blue-200 text-sm mb-4">Stay updated with latest exam notifications and book releases.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-2 rounded-full text-amber-400 hover:bg-amber-400 hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full text-amber-400 hover:bg-amber-400 hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full text-amber-400 hover:bg-amber-400 hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full text-amber-400 hover:bg-amber-400 hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © 2026 <span className="text-amber-400 font-semibold">ASO Publication</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
