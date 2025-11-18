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

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What we do</h2>
        <p className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">Senior operators who have scaled organic programs from 0 → 1 → category leader.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-800/60 border border-blue-500/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
              <s.icon className="w-8 h-8 text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
