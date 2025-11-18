import { motion } from 'framer-motion'

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.12),transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
            >
              Grow faster with an SEO agency that ships results
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-blue-100"
            >
              Technical SEO, content that ranks, and authority-building PR — stitched together into one predictable growth engine.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onCtaClick} className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20">
                Get a free growth plan
              </button>
              <a href="#work" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20">
                See our wins
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-blue-200/90">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+5}`} alt="client" className="w-8 h-8 rounded-full border-2 border-slate-900" />
                ))}
              </div>
              <p className="text-sm">Trusted by 120+ startups and category leaders</p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTRU8lMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzQ1MTA4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="SEO dashboard" className="rounded-xl shadow-2xl border border-white/10" />
            <div className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-white/10">
              <p className="text-xs text-blue-100">Average 132% organic growth in 6 months</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
