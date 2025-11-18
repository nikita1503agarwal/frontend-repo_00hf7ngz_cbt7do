import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', budget: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks — we will reach out shortly!')
      setForm({ name: '', email: '', company: '', website: '', budget: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white text-center">Get your free growth plan</h2>
          <p className="text-blue-200/80 text-center mt-2">Tell us about your goals — we’ll reply within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white" required />
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white" required />
            <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white" />
            <input name="website" value={form.website} onChange={onChange} placeholder="Website" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white" />
            <input name="budget" value={form.budget} onChange={onChange} placeholder="Monthly budget" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white md:col-span-2" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="What are you trying to achieve?" rows="4" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white md:col-span-2" />

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-center">
              <button type="submit" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold w-full sm:w-auto">Request plan</button>
              <span className="text-blue-200/80 text-sm">No contracts • Cancel anytime</span>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-blue-200">{status}</p>}
        </div>
      </div>
    </section>
  )
}
