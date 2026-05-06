import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[480px] md:h-[520px] bg-brand-slate-900 flex items-center overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E51636 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate-900 via-transparent to-brand-slate-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-brand-red font-bold text-sm tracking-[0.2em] mb-4 uppercase">The People's Choice</div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            PARTY JOLLOF<br /><span className="text-brand-slate-400">SHAWARMA</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red text-white px-8 py-5 rounded-xl font-black text-lg shadow-lg shadow-red-900/40 hover:bg-brand-red-dark transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight">
              ORDER FOR PICKUP
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer">
              VIEW MENU
            </button>
          </div>
        </motion.div>
        
        <div className="hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] text-white flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="bg-brand-red w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl shadow-lg shadow-brand-red/30">5.0</div>
              <div>
                <div className="font-bold flex items-center gap-2">
                  <span>Google Verified</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />)}
                  </div>
                </div>
                <div className="text-xs text-brand-slate-400">4.8/5.0 Stars (2,400+ Reviews)</div>
              </div>
            </div>
            <p className="italic text-brand-slate-300 leading-relaxed text-lg">
              "Massive portions, local taste! The only place for real Jollof in town."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
