import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { MenuItem } from '../types';

export default function MenuSection() {
  const addItem = useCartStore(state => state.addItem);

  const categories = [
    { id: 'all', label: 'GUEST FAVORITES' },
    { id: 'mains', label: 'Mains' },
    { id: 'sides', label: 'Sides' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <section className="py-20 bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-black text-brand-slate-900 tracking-tight uppercase">THE GOOD STUFF</h2>
            <p className="text-brand-slate-500 font-medium lowercase">Ready for pickup in <span className="text-brand-red font-bold">15 mins</span></p>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {categories.map(cat => (
              <button 
                key={cat.id}
                className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-sm ${
                  cat.id === 'all' 
                    ? 'bg-white border border-brand-slate-200 text-brand-slate-900' 
                    : 'bg-brand-slate-200 text-brand-slate-500 hover:bg-brand-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <MenuItemCard 
              key={item.id} 
              item={item} 
              addItem={addItem} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, addItem, index }: { item: MenuItem; addItem: (item: MenuItem) => void; index: number; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white p-4 rounded-2xl shadow-sm border border-brand-slate-100 flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-40 bg-brand-slate-50 rounded-xl mb-4 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.badge && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded shadow-sm">
            BESTSELLER
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="font-black text-lg text-brand-slate-900 mb-1 leading-tight tracking-tight">{item.name}</h3>
        <p className="text-[11px] text-brand-slate-500 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-slate-50">
          <span className="text-xl font-black text-brand-red">
            {formatCurrency(item.price)}
          </span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              addItem(item);
            }}
            className="w-10 h-10 bg-brand-slate-900 text-white rounded-xl flex items-center justify-center font-bold hover:bg-brand-red transition-colors cursor-pointer shadow-md"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
