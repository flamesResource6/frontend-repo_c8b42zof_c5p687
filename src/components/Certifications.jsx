import React from 'react'

const CertCard = ({ title, desc }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
    <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    <p className="mt-1 text-sm text-gray-600">{desc}</p>
  </div>
)

export default function Certifications() {
  const certs = [
    { title: 'Hackathon Award', desc: 'Winner of regional web app hackathon.' },
    { title: 'Excellence Award', desc: 'Recognized for outstanding performance.' },
  ]

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {certs.map((c) => (
          <CertCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
