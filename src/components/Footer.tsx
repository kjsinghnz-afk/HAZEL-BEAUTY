import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hazel-green text-hazel-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Leaf className="w-6 h-6 text-hazel-gold" />
            <span className="text-2xl font-serif tracking-widest uppercase">Hazel Beauty</span>
          </Link>
          <p className="text-hazel-cream/70 text-sm leading-relaxed mb-8">
            Auckland's premier skincare destination, dedicated to revealing your natural radiance through botanical excellence and modern innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-hazel-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-hazel-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-hazel-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm uppercase tracking-widest">
            <li><Link to="/" className="hover:text-hazel-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-hazel-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-hazel-gold transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-hazel-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-hazel-gold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-hazel-cream/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-hazel-gold shrink-0" />
              <span>Glenfield Mall, Auckland, New Zealand</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-hazel-gold shrink-0" />
              <span>02041330168</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-hazel-gold shrink-0" />
              <span>hello@hazelbeauty.co.nz</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-hazel-gold">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-hazel-cream/70">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 7:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 5:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-hazel-cream/10 text-center text-xs text-hazel-cream/40 uppercase tracking-widest">
        © {new Date().getFullYear()} Hazel Beauty Auckland. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
