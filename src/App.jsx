import React from 'react'
import HeaderProfile from './components/HeaderProfile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <HeaderProfile />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <About />
            <Experience />
            <Projects />
          </div>
          <div className="space-y-6">
            <TechStack />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
