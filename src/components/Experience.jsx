import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const TimelineItem = ({ role, company, year, icon: Icon }) => (
  <div className="relative pl-10 pb-8">
    <span className="absolute left-3 top-1.5 h-3 w-3 rounded-full bg-indigo-500 shadow ring-4 ring-white"></span>
    <div className="absolute left-4 top-3 bottom-0 w-0.5 bg-gray-200"></div>
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2"><Icon size={16} className="text-indigo-600" />{role}</h4>
        <span className="text-xs text-gray-500">{year}</span>
      </div>
      <p className="mt-1 text-sm text-gray-600">{company}</p>
    </div>
  </div>
)

export default function Experience() {
  const items = [
    { role: 'Frontend Developer', company: 'Tech Nova', year: '2023 - Present', icon: Briefcase },
    { role: 'Associate Software Engineer', company: 'CloudSpark', year: '2021 - 2023', icon: Briefcase },
    { role: 'Intern', company: 'Pixel Labs', year: '2020 - 2021', icon: Briefcase },
    { role: 'BS Information Technology', company: 'State University', year: '2016 - 2020', icon: GraduationCap },
  ]

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
      <div className="mt-4">
        {items.map((it, idx) => (
          <TimelineItem key={idx} {...it} />
        ))}
      </div>
    </section>
  )
}
