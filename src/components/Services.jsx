import { motion } from 'framer-motion'
import { Rocket, Search, PenTool, BarChart3 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO Audits',
      desc: 'Full-site diagnostics to uncover crawl issues, speed problems, and structural blockers.'
    },
    {
      icon: PenTool,
      title: 'Content & Keyword Strategy',
      desc: 'Topic clusters, briefs, and production workflows that earn traffic and conversions.'
    },
    {
      icon: Rocket,
      title: 'Digital PR & Link Earning',
      desc: 'High-authority placements that compound your domain strength the right way.'
    },
    {
      icon: BarChart3,
      title: 'Reporting & Growth Ops',
      desc: 'Transparent dashboards with weekly sprints and clear ROI tracking.'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="services" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* floating gradient accents */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center">
          What we do
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">
          Senior operators who have scaled organic programs from 0 → 1 → category leader.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group bg-slate-800/60 border border-blue-500/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-blue-900/20"
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-3 ring-1 ring-inset ring-blue-500/20">
                <s.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
