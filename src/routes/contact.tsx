import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="font-display text-5xl uppercase mb-4">Message Sent</h2>
          <p className="text-white/40 mb-8 leading-relaxed">
            Thanks for reaching out. The team will get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold tracking-widest uppercase text-sm px-8 py-4 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
          >
            Send Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">Get in Touch</span>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] uppercase leading-tight mt-2">
            Contact
          </h1>
          <p className="text-white/40 text-lg mt-4 max-w-lg leading-relaxed">
            Ready to start your next project? Drop a message and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Availability</h3>
              <p className="text-white/60 leading-relaxed">
                Currently accepting new projects. Typical response time is within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Services</h3>
              <ul className="space-y-2 text-white/60">
                {['Video Editing', 'Color Grading', 'Motion Graphics', 'Social Content', 'Audio Design'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Based In</h3>
              <p className="text-white/60">Available worldwide — remote friendly.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3 group-focus-within:text-amber-400 transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-400 py-3 text-white placeholder-white/20 outline-none transition-colors"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3 group-focus-within:text-amber-400 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-400 py-3 text-white placeholder-white/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="project" className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3 group-focus-within:text-amber-400 transition-colors">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full bg-transparent border-b border-white/20 focus:border-amber-400 py-3 text-white outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#080808]">Select a service...</option>
                  <option value="video-editing" className="bg-[#080808]">Video Editing</option>
                  <option value="color-grading" className="bg-[#080808]">Color Grading</option>
                  <option value="motion-graphics" className="bg-[#080808]">Motion Graphics</option>
                  <option value="social-content" className="bg-[#080808]">Social Content</option>
                  <option value="audio-design" className="bg-[#080808]">Audio Design</option>
                  <option value="other" className="bg-[#080808]">Other</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3 group-focus-within:text-amber-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 focus:border-amber-400 py-3 text-white placeholder-white/20 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-amber-400 text-black font-black tracking-widest uppercase text-sm px-10 py-5 hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
