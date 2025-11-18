import { motion } from 'framer-motion'

export default function CaseStudies() {
  const items = [
    {
      logo: 'https://dummyimage.com/100x32/0ea5e9/ffffff&text=SAAS+',
      title: 'SaaS platform',
      result: '+212% organic signups',
      summary: 'Shipped a technical overhaul and built a content engine around product-led keywords.'
    },
    {
      logo: 'https://dummyimage.com/100x32/22c55e/ffffff&text=FINTECH',
      title: 'Fintech startup',
      result: '8→62 top-3 rankings',
      summary: 'Authority PR + topic clusters increased money-term coverage and conversions.'
    },
    {
      logo: 'https://dummyimage.com/100x32/f59e0b/ffffff&text=E-COM',
      title: 'E‑commerce brand',
      result: '+134% revenue from organic',
      summary: 'Resolved crawl bloat and launched category content — revenue followed.'
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  }
  const card = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center">
          Recent wins
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={card} whileHover={{ y: -4 }} className="relative overflow-hidden bg-slate-800/60 border border-white/10 rounded-xl p-6">
              {/* subtle shine */}
              <motion.div
                aria-hidden
                initial={{ x: '-100%' }}
                whileHover={{ x: '120%' }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <img src={item.logo} alt={item.title} className="h-8 w-auto" />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-emerald-400 font-semibold mt-1">{item.result}</p>
              <p className="text-blue-200/80 mt-3 text-sm">{item.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
