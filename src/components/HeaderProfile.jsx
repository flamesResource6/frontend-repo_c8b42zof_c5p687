import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, MapPin, Mail, FileText, Linkedin, Calendar, Briefcase, Layers } from 'lucide-react'

const Stat = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm">
    <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-600">
      <Icon size={16} />
    </div>
    <div>
      <p className="text-[10px] text-gray-500 leading-none">{label}</p>
      <p className="text-xs font-semibold text-gray-800 leading-none mt-0.5">{value}</p>
    </div>
  </div>
)

export default function HeaderProfile() {
  return (
    <section className="relative w-full">
      <div className="relative h-[260px] overflow-hidden rounded-3xl shadow-md">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="-mt-20 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl overflow-hidden ring-4 ring-white shadow-md flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=400&auto=format&fit=crop"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold text-gray-900">Alex Johnson</h1>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                <Check size={12} /> Verified
              </span>
            </div>
            <p className="mt-0.5 text-gray-500 flex items-center gap-1 text-sm"><MapPin size={14} className="text-gray-400" /> Manila, Philippines</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a href="mailto:alex.johnson@example.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors shadow-sm text-sm">
                <Mail size={14} /> Email
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm text-sm">
                <FileText size={14} /> Resume
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm text-sm">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Experience" value="4+ yrs" icon={Calendar} />
            <Stat label="Projects" value="25+" icon={Briefcase} />
            <Stat label="Stack" value="15+" icon={Layers} />
          </div>
          <p className="mt-3 text-xs text-gray-700">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-medium mr-2 align-middle">Open to work</span>
            Available for new opportunities
          </p>
        </div>
      </div>
    </section>
  )
}
