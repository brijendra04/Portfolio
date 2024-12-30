import React from 'react';
import { Code2, Database, Server, Layers, Cloud, Wrench } from 'lucide-react';
import Card3D from './ui/Card3D';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', "MySQL", 'PostgreSQL', 'Firebase'],
  },

  {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'Postman', 'Figma','Git', 'GitHub', 'Windows'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card3D key={category.title}>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm transform hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}