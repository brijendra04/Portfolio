import React from 'react';
import { GraduationCap, Code, Database, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a final-year B.Tech (CSE) student at VIT Bhopal University, passionate about creating innovative solutions through technology. My journey in software development has equipped me with a strong foundation in both frontend and backend technologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-orange-500" />
                <span>B.Tech CSE</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-orange-500" />
                <span>Full Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="text-orange-500" />
                <span>Data Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="text-orange-500" />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
            <div className="space-y-2">
              {[
                { skill: 'Frontend Development', level: 90 },
                { skill: 'Backend Development', level: 85 },
                { skill: 'Database Management', level: 80 },
                { skill: 'Cloud Services', level: 75 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{item.skill}</span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-orange-500 rounded"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}