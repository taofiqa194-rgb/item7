/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { useCartStore } from './store/useCartStore';
import { ShoppingBag, ChevronRight, AlertCircle } from 'lucide-react';
import { isStoreOpen } from './lib/utils';
import { motion } from 'motion/react';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore(state => state.items);
  const isOpen = isStoreOpen();
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-brand-slate-50 selection:bg-brand-red selection:text-white">
      {!isOpen && (
        <div className="bg-orange-600 text-white py-1.5 px-4 text-center text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>Currently Closed • Opening 7:30 AM Tomorrow</span>
        </div>
      )}
      
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        <MenuSection />
        
        {/* Conversion Section */}
        <section className="py-24 px-4 bg-brand-red text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
              HUNGRY YET?<br />GO FOR IT.
            </h2>
            <p className="text-white/80 text-xl mb-12 font-medium">Join over 12,000 customers ordering weekly across Nigeria.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-white text-brand-red rounded-xl font-black text-xl hover:bg-brand-slate-50 transition-all shadow-2xl shadow-red-900/40 cursor-pointer uppercase tracking-tight"
              >
                START MY ORDER
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
      {totalItems > 0 && !isCartOpen && (
        <motion.button
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-brand-slate-900 text-white p-5 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:bg-brand-red group cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-slate-900 group-hover:border-brand-red transition-all">
              {totalItems}
            </span>
          </div>
          <span className="font-black text-lg pr-2 uppercase tracking-tighter">
            VIEW TRAY
          </span>
        </motion.button>
      )}
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-brand-black">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-bold">{label}</p>
    </div>
  );
}
