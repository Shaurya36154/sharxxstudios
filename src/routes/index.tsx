import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, ArrowDown, Play } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[100px]" />
          {/* Vertical lines decoration */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 80px)',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="opacity-0-init animate-fade-in delay-100">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase mb-6 border border-amber-400/30 px-3 py-1">
              Video & Content Editor
            </span>
          </div>

          <h1 className="opacity-0-init animate-fade-in-up delay-200 font-display text-[clamp(4rem,15vw,14rem)] leading-[0.9] tracking-tight mb-6 uppercase">
            Sharxx<br />
            <span className="text-amber-400">Studios</span>
          </h1>

          <p className="opacity-0-init animate-fade-in-up delay-300 text-lg md:text-xl text-white/50 max-w-xl mb-10 leading-relaxed font-light">
            Crafting cinematic stories through the lens of precision editing.
            From raw footage to polished masterpieces — every frame intentional.
          </p>

          <div className="opacity-0-init animate-fade-in-up delay-400 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-8 py-4 hover:bg-amber-300 transition-all duration-300 hover:scale-105"
            >
              <Play size={16} />
              View Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold tracking-widest uppercase text-sm px-8 py-4 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <ArrowDown size={20} />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10+', label: 'Projects Delivered' },
            { number: '20+', label: 'Happy Clients' },
            { number: '2', label: 'Years Experience' },
            { number: '∞', label: 'Frames of Passion' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-amber-400">{stat.number}</div>
              <div className="text-xs tracking-widest uppercase text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">Featured Work</span>
              <h2 className="font-display text-5xl md:text-7xl uppercase mt-2">Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/50 hover:text-amber-400 transition-colors border-b border-white/20 hover:border-amber-400 pb-1"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, i) => (
              <ProjectCard key={project._meta.path} project={project} index={i} />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/50 hover:text-amber-400 transition-colors border-b border-white/20 hover:border-amber-400 pb-1"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Skills */}
      <section className="py-24 px-6 md:px-16 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">What I Do</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-2">Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                icon: '🎬',
                title: 'Video Editing',
                desc: 'Feature films, short films, documentaries — cut with precision and purpose.',
              },
              {
                icon: '✨',
                title: 'Color Grading',
                desc: 'Cinematic color work that gives your footage its signature visual identity.',
              },
              {
                icon: '🎞',
                title: 'Motion Graphics',
                desc: 'Dynamic titles, transitions, and visual effects that elevate production value.',
              },
              {
                icon: '📱',
                title: 'Social Content',
                desc: 'Scroll-stopping short-form content optimized for every platform.',
              },
              {
                icon: '🎙',
                title: 'Audio Design',
                desc: 'Sound editing, mixing, and design to make every scene come alive.',
              },
              {
                icon: '🚀',
                title: 'Fast Delivery',
                desc: 'Tight deadlines, zero compromise. Professional results, every time.',
              },
            ].map((s) => (
              <div key={s.title} className="bg-[#080808] p-8 hover:bg-amber-400/5 transition-colors group cursor-default">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">Ready to Create</span>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] uppercase leading-tight mt-2 mb-6">
            Let's Make<br />
            <span className="text-amber-400">Something</span><br />
            Epic
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            Have a project in mind? Let's talk about how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-amber-400 text-black font-black tracking-widest uppercase text-sm px-10 py-5 hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-2xl tracking-widest uppercase">Sharxx<span className="text-amber-400">.</span></span>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Sharxx Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof allProjects[number]; index: number }) {
  const colors = ['from-amber-900/40', 'from-red-900/40', 'from-slate-800/60', 'from-purple-900/30']
  const gradient = colors[index % colors.length]

  return (
    <div className={`relative group overflow-hidden bg-gradient-to-br ${gradient} to-[#0f0f0f] border border-white/10 hover:border-amber-400/30 transition-all duration-500`}>
      <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/5 transition-all duration-500" />

      {/* Project number */}
      <div className="absolute top-6 right-6 font-display text-6xl text-white/5 group-hover:text-amber-400/10 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs tracking-widest uppercase text-amber-400/70 border border-amber-400/20 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400/70 hover:text-amber-400 transition-colors"
            >
              <ExternalLink size={14} />
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
