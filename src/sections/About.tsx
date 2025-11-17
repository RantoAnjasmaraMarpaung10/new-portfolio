'use client'

import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern web technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with Node.js and database management"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams using Git, Agile methodologies, and clear communication"
    }
  ];

  return (
    <section id='about' className="py-20 px-4 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/2 right-1/3 text-cyan-400 text-2xl opacity-30">✦</div>
      <div className="absolute bottom-32 right-10 text-cyan-400 text-3xl opacity-20">✦</div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">👋</span>
                Hello There!
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed ">
                <p>
                  I am <span className="text-cyan-400 font-semibold">Ranto Anjasmara Marpaung</span>, a passionate web developer 
                  dedicated to crafting exceptional digital experiences. With a keen eye for design and 
                  a love for clean code, I transform ideas into beautiful, functional websites.
                </p>
                <p>
                During my internship at PT Pertamina Hulu Rokan, I contributed to developing a web-based patrol application that improved operational efficiency. I also took part in creating SIMAGANG, an internship management system for the Central Bureau of Statistics (Badan Pusat Statistik) of Riau Province.
                </p>
                <p>
                  I believe in writing code that is not only functional but also maintainable and 
                  scalable. Every project is an opportunity to learn something new and push the 
                  boundaries of what is possible on the web.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-700/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-gradient-to-br from-slate-700/30 to-slate-900/30 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'Node.js', 'mySQL'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-100 {
          animation-delay: 0.5s;
        }
        .delay-200 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}