import React, { useState } from 'react'

const techs = ['All','React','Vue','Next.js','TypeScript','JavaScript','HTML5','CSS3','Tailwind','Node.js','MySQL','Git','GitHub','REST APIs']

const Pill = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
    {label}
  </span>
)

export default function TechStack() {
  const [filter, setFilter] = useState('All')
  const filtered = techs.filter(t => filter === 'All' || t === filter)

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Tech Stack</h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-2 rounded-xl border border-gray-200 text-sm bg-white">
          {techs.map(t => (<option key={t} value={t}>{t}</option>))}
        </select>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {filtered.map(t => (
          t !== 'All' && <Pill key={t} label={t} />
        ))}
      </div>
    </section>
  )
}
