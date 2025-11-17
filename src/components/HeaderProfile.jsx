import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, MapPin, Mail, FileText, Linkedin, Calendar, Briefcase, Layers } from 'lucide-react'

const Stat = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-600">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  </div>
)

export default function HeaderProfile() {
  return (
    <section className="relative w-full">
      <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-md">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="-mt-24 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <div className="h-24 w-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=400&auto=format&fit=crop"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-semibold text-gray-900">Alex Johnson</h1>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                <Check size={14} /> Verified
              </span>
            </div>
            <p className="mt-1 text-gray-500 flex items-center gap-1"><MapPin size={16} className="text-gray-400" /> Manila, Philippines</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="mailto:alex.johnson@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors shadow-sm">
                <Mail size={16} /> Send Email
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <FileText size={16} /> View Resume
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <Linkedin size={16} /> View LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Years of Experience" value="4+" icon={Calendar} />
            <Stat label="Projects Completed" value="25+" icon={Briefcase} />
            <Stat label="Tech Stack Count" value="15+" icon={Layers} />
          </div>
          <p className="mt-4 text-sm text-gray-700">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mr-2 align-middle">Open to work</span>
            Available for new opportunities – Open to work
          </p>
        </div>
      </div>
    </section>
  )
}
