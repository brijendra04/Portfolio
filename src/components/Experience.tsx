import React from 'react';
import { Award, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'NPTEL Cloud Computing',
    organization: 'IIT Kharagpur',
    date: 'Apr 2024',
    description: 'Achieved Elite cerification in NPTEL Cloud Computing course, demonstrating expertise in cloud computing concepts.',
  },
  
  
  {
    title: 'Bits & Bytes of Computer Networking',
    organization: 'Google',
    date: 'Jan 2024',
    description: 'Completed Bits & Bytes of Computer Networking certification, demonstrating expertise in computer networking.',
  },
  
  {
    title: 'Azure Administrator Certification',
    organization: 'Microsoft',
    date: 'Nov 2023',
    description: 'Achieved Azure Administrator Associate certification, demonstrating expertise in cloud infrastructure management.',
  },
  
  {
    title: 'Applied Machine Learning in python',
    organization: 'University of Michigan',
    date: 'Jan 2023',
    description: 'Completed Applied Machine Learning in python course, demonstrating expertise in machine learning algorithms.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Experience & Achievements</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-orange-500 last:pb-0"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-orange-500 rounded-full" />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-500 mb-2">
                  <Award size={16} />
                  <span>{exp.organization}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}