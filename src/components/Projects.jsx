import React from 'react'
import { ArrowRight } from 'lucide-react'

const ProjectCard = ({ title, desc }) => (
  <div className="group bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-all">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
      <div className="p-2 rounded-lg bg-gray-50 text-gray-600 group-hover:bg-gray-100">
        <ArrowRight size={16} />
      </div>
    </div>
  </div>
)

export default function Projects() {
  const projects = [
    { title: 'Digital business website builder', desc: 'No-code builder for small businesses.' },
    { title: 'Coffee shop e-commerce', desc: 'Full-stack web store with payments.' },
    { title: 'Time tracking system', desc: 'Track tasks, timesheets, and reports.' },
    { title: 'Color picker tool', desc: 'Interactive palette generator.' },
  ]

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
