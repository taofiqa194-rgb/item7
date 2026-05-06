import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-slate-100">
      {/* Trust Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 lg:h-24">
        <div className="flex flex-col sm:flex-row items-center gap-12">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-[10px] font-black text-brand-slate-400 uppercase tracking-widest">Joined the Queue</span>
            <span className="text-lg font-black text-brand-red whitespace-nowrap">1,208 Orders <span className="text-brand-slate-900">Today</span></span>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-brand-slate-200"></div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-slate-300 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="user" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-slate-500 font-bold text-[8px] flex items-center justify-center text-white">+5k</div>
            </div>
            <span className="text-xs font-bold text-brand-slate-500">Satisfied customers today</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-[10px] font-black text-brand-slate-400 uppercase tracking-wide">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 
            Online Ordering Active
          </span>
          <span>Secure Bank Transfer</span>
          <span>Guest Checkout Available</span>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-brand-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
               <div className="text-brand-red font-black text-2xl tracking-tighter flex items-center">
                <span className="bg-brand-red text-white px-2 py-0.5 rounded mr-1">ITEM7</span>GO
              </div>
              <p className="text-brand-slate-400 leading-relaxed text-sm">
                Nigeria's most reliable quick-service brand. Massive portions, local taste, and high-speed pickup.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Instagram} />
              </div>
            </div>

            <div>
              <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3 text-brand-slate-400 text-sm">
                <li><FooterLink>Our Menu</FooterLink></li>
                <li><FooterLink>About Us</FooterLink></li>
                <li><FooterLink>Branches</FooterLink></li>
                <li><FooterLink>Franchise</FooterLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Support</h4>
              <ul className="space-y-3 text-brand-slate-400 text-sm">
                <li><FooterLink>Track Order</FooterLink></li>
                <li><FooterLink>Help Center</FooterLink></li>
                <li><FooterLink>Contact Us</FooterLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Contact</h4>
              <ul className="space-y-3 text-brand-slate-400 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                  <span>Post Office Road, Ilorin.</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-brand-red shrink-0" />
                  <span>0800-ITEM7-GO</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-brand-slate-500 text-xs font-bold uppercase tracking-widest">
              © 2026 ITEM7 NIGERIA
            </p>
            <div className="flex gap-6 text-xs text-brand-slate-500 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-red hover:text-white transition-all text-gray-400">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="hover:text-brand-red transition-all inline-block hover:translate-x-1 decoration-0">
      {children}
    </a>
  );
}
