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

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Recent wins</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((item, i) => (
            <div key={i} className="bg-slate-800/60 border border-white/10 rounded-xl p-6">
              <img src={item.logo} alt={item.title} className="h-8 w-auto" />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-emerald-400 font-semibold mt-1">{item.result}</p>
              <p className="text-blue-200/80 mt-3 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
