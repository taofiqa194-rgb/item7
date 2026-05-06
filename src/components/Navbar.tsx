import { ShoppingBag, MapPin, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { isStoreOpen } from '../lib/utils';
import { motion } from 'motion/react';

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const cartItems = useCartStore(state => state.items);
  const isOpen = isStoreOpen();
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col w-full">
      {/* Top Promo Bar */}
      <div className="bg-brand-red text-white py-2.5 px-6 flex justify-between items-center text-[10px] sm:text-xs font-black tracking-widest uppercase relative z-[60]">
        <span>⚡ FASTEST PICKUP IN NIGERIA • 7:30 AM - 10:00 PM</span>
        <div className="hidden lg:flex gap-6">
          <span>LAGOS</span>
          <span>ILORIN</span>
          <span>IBADAN</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-brand-slate-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <div className="text-brand-red font-black text-3xl tracking-tighter flex items-center">
                <span className="bg-brand-red text-white px-2 py-0.5 rounded mr-1">ITEM7</span>GO
              </div>
            </motion.div>
            
            <div className="hidden lg:flex bg-brand-slate-50 border border-brand-slate-200 px-5 py-2.5 rounded-full items-center gap-3 cursor-pointer hover:border-brand-red/30 transition-all group">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-bold text-brand-slate-900 tracking-tight">Branch: Challenge, Ilorin</span>
              <ChevronDown className="w-4 h-4 text-brand-slate-400 group-hover:text-brand-red transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-sm font-black text-brand-slate-500 cursor-pointer hover:text-brand-red transition-colors uppercase tracking-widest">Track Order</div>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative bg-brand-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-brand-red transition-all shadow-lg shadow-brand-slate-900/10"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-black text-sm hidden sm:inline">{totalItems} ITEMS</span>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-red rounded-full border-2 border-white text-[10px] flex items-center justify-center font-black">
                {totalItems}
              </div>
            </motion.button>
          </div>
        </div>
      </nav>
    </div>
  );
}
