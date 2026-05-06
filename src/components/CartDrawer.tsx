import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, CreditCard, Landmark, Wallet } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { useState } from 'react';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, updateQuantity, removeItem, total, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = total();
  const deliveryFee = 500;
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-slate-900/60 backdrop-blur-md" 
      />
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b border-brand-slate-100 flex items-center justify-between">
          <h2 className="text-2xl font-black text-brand-slate-900 tracking-tight uppercase">YOUR TRAY</h2>
          <button onClick={onClose} className="p-2 hover:bg-brand-slate-50 rounded-xl transition-all cursor-pointer">
            <X className="w-6 h-6 text-brand-slate-400" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-brand-slate-50 rounded-3xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-brand-slate-300" />
              </div>
              <p className="text-brand-slate-500 font-bold uppercase tracking-widest text-xs">Your tray is empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-brand-red font-black hover:underline uppercase text-sm tracking-tight"
              >
                Start Adding Items
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-brand-slate-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between font-black text-brand-slate-900 mb-1">
                    <h3 className="tracking-tight">{item.name}</h3>
                    <span className="text-brand-red">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4 bg-brand-slate-50 px-4 py-1.5 rounded-xl border border-brand-slate-100">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-brand-red cursor-pointer p-1"><Minus className="w-4 h-4" /></button>
                      <span className="font-black text-sm min-w-[20px] text-center text-brand-slate-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-brand-red cursor-pointer p-1"><Plus className="w-4 h-4" /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-brand-slate-400 hover:text-red-500 transition-colors cursor-pointer p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-brand-slate-50 border-t border-brand-slate-100 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-brand-slate-500 text-xs font-bold uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-brand-slate-900">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-brand-slate-500 text-xs font-bold uppercase tracking-widest">
                <span>Service Fee</span>
                <span className="text-brand-slate-900">{formatCurrency(deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-2xl font-black text-brand-slate-900 pt-4 border-t border-brand-slate-200 uppercase tracking-tighter">
                <span>Total</span>
                <span className="text-brand-red">{formatCurrency(subtotal + deliveryFee)}</span>
              </div>
            </div>

            <button 
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-5 bg-brand-red text-white rounded-xl font-black text-lg hover:bg-brand-red-dark transition-all shadow-xl shadow-brand-red/20 uppercase tracking-tight cursor-pointer"
            >
              Checkout Now
            </button>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isCheckingOut && (
          <CheckoutOverlay 
            total={subtotal + deliveryFee} 
            onBack={() => setIsCheckingOut(false)} 
            onSuccess={() => {
              clearCart();
              onClose();
              setIsCheckingOut(false);
              alert('Order Placed! Check your phone for confirmation.');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function CheckoutOverlay({ total, onBack, onSuccess }: { total: number; onBack: () => void; onSuccess: () => void }) {
  const [method, setMethod] = useState<'card' | 'transfer' | 'pos'>('card');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="absolute inset-0 z-20 bg-white flex flex-col p-8 overflow-y-auto"
    >
       <div className="flex items-center gap-4 mb-10">
        <button onClick={onBack} className="p-3 hover:bg-brand-slate-50 rounded-full cursor-pointer transition-all border border-transparent hover:border-brand-slate-100">
          <ArrowLeft className="w-6 h-6 text-brand-slate-900" />
        </button>
        <h2 className="text-2xl font-black text-brand-slate-900 tracking-tight uppercase">GUEST CHECKOUT</h2>
      </div>

      <div className="space-y-8 pb-12">
        <section>
          <h3 className="font-black text-brand-slate-900 uppercase text-xs tracking-widest mb-6">Payment Method</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'card', label: 'Pay with Card', icon: CreditCard, desc: 'Quick and Automated' },
              { id: 'transfer', label: 'Bank Transfer', icon: Landmark, desc: 'Pay via USSD/Bank App' },
              { id: 'pos', label: 'Pay at Branch (POS)', icon: Wallet, desc: 'Pay when picking up' }
            ].map(pm => (
              <button 
                key={pm.id}
                onClick={() => setMethod(pm.id as any)}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left cursor-pointer ${
                  method === pm.id ? 'border-brand-red bg-brand-red/5 shadow-md shadow-brand-red/5' : 'border-brand-slate-100 hover:border-brand-slate-200'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${method === pm.id ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'bg-brand-slate-100 text-brand-slate-400'}`}>
                  <pm.icon className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <p className={`font-black text-lg ${method === pm.id ? 'text-brand-slate-900' : 'text-brand-slate-500'}`}>{pm.label}</p>
                  <p className="text-[10px] uppercase font-bold text-brand-slate-400 tracking-wider">{pm.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-black text-brand-slate-900 uppercase text-xs tracking-widest mb-6">Details</h3>
          <div className="space-y-3">
            <input type="text" placeholder="Your Full Name" className="w-full p-5 bg-brand-slate-50 rounded-xl border border-brand-slate-100 focus:outline-none focus:border-brand-red focus:bg-white transition-all font-bold text-brand-slate-900 placeholder:text-brand-slate-400 uppercase text-xs tracking-widest" />
            <input type="tel" placeholder="Phone Number (WhatsApp Preferred)" className="w-full p-5 bg-brand-slate-50 rounded-xl border border-brand-slate-100 focus:outline-none focus:border-brand-red focus:bg-white transition-all font-bold text-brand-slate-900 placeholder:text-brand-slate-400 uppercase text-xs tracking-widest" />
            <div className="relative">
              <select className="w-full p-5 bg-brand-slate-50 rounded-xl border border-brand-slate-100 focus:outline-none focus:border-brand-red focus:bg-white transition-all font-black text-brand-slate-900 uppercase text-xs tracking-widest appearance-none">
                <option>Select Pickup Branch</option>
                <option>Item7 Ilorin Main</option>
                <option>Item7 Ikeja Allen</option>
                <option>Item7 Ibadan South</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate-400 pointer-events-none" />
            </div>
          </div>
        </section>

        <div className="pt-4">
          <button 
            onClick={onSuccess}
            className="w-full py-5 bg-brand-slate-900 text-white rounded-xl font-black text-xl hover:bg-brand-red transition-all shadow-xl uppercase tracking-tighter cursor-pointer"
          >
            Confirm Order {formatCurrency(total)}
          </button>
          <p className="text-center text-[10px] text-brand-slate-400 font-bold uppercase tracking-widest mt-6">By confirming, you agree to Item7's Terms of Service.</p>
        </div>
      </div>
    </motion.div>
  );
}

// Helper icons missing from imports
import { ShoppingBag, ArrowLeft, ChevronDown } from 'lucide-react';
