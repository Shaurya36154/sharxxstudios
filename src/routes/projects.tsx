import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Page Header */}
      <section className="relative py-24 px-6 md:px-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">Portfolio</span>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] uppercase leading-tight mt-2">
            Our Work
          </h1>
          <p className="text-white/40 text-lg mt-4 max-w-xl leading-relaxed">
            A curated showcase of projects where creativity meets craft — each one a story told through meticulous editing.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          {allProjects.map((project, i) => (
            <ProjectRow key={project._meta.path} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-16 border-t border-white/10 text-center">
        <p className="text-white/30 text-sm tracking-widest uppercase mb-2">Have a project?</p>
        <a
          href="/contact"
          className="font-display text-4xl md:text-6xl uppercase text-white hover:text-amber-400 transition-colors"
        >
          Let's Collaborate →
        </a>
      </section>
    </div>
  )
}

function ProjectRow({ project, index }: { project: typeof allProjects[number]; index: number }) {
  const accentColors = ['border-amber-400', 'border-red-500', 'border-cyan-500', 'border-purple-500']
  const accent = accentColors[index % accentColors.length]
  const bgColors = ['bg-amber-400/5', 'bg-red-500/5', 'bg-cyan-500/5', 'bg-purple-500/5']
  const bgHover = bgColors[index % bgColors.length]

  return (
    <div className={`group relative border border-white/10 hover:${accent.replace('border-', 'border-')} transition-all duration-500 overflow-hidden`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${bgHover} transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-0">
        {/* Index */}
        <div className={`hidden md:flex items-center justify-center w-24 border-r border-white/10 group-hover:${accent.replace('border-', 'border-')} transition-colors`}>
          <span className="font-display text-5xl text-white/10 group-hover:text-white/20 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs tracking-widest uppercase text-white/30 border border-white/10 px-2 py-0.5 group-hover:text-amber-400/70 group-hover:border-amber-400/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
            {project.title}
          </h2>
          <p className="text-white/40 max-w-2xl leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-0.5"
              >
                <Github size={14} />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400/70 hover:text-amber-400 transition-colors border-b border-amber-400/30 hover:border-amber-400 pb-0.5"
              >
                <ExternalLink size={14} />
                View Live
              </a>
            )}
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="hidden md:flex items-center justify-center w-16 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-amber-400 text-2xl">→</span>
        </div>
      </div>
    </div>
  )
}
