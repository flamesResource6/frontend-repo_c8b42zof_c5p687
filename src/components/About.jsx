import React from 'react'

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  pink: 'bg-pink-50 text-pink-700 border-pink-100',
}

const Pill = ({ children, color = 'blue' }) => (
  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium border ${colorMap[color]}`}>{children}</span>
)

export default function About() {
  const tags = [
    { label: 'React', color: 'blue' },
    { label: 'Vue', color: 'emerald' },
    { label: 'Optimization', color: 'violet' },
    { label: 'TypeScript', color: 'indigo' },
    { label: 'Scalable Apps', color: 'pink' },
  ]

  return (
    <section className="bg-white rounded-2xl shadow-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900">About</h2>
      <p className="mt-2 text-gray-600 leading-relaxed text-sm">
        Frontend engineer with experience in React, Vue, Angular, and TypeScript. Passionate about performance optimization and building scalable frontend applications with Tailwind CSS and modern tooling.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t.label} color={t.color}>{t.label}</Pill>
        ))}
      </div>
    </section>
  )
}
