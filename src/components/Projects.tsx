import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'This E-Commerce Platform is a comprehensive website offering secure user authentication, product browsing, cart management, and a streamlined checkout process.',
    image: "./assets/ecomm.png",
    tags: ['React', 'Node.js', 'Express.js', 'Tailwind'],
    github: 'https://github.com/brijendra04/E-Commerce',
    live: 'https://e-commerce-app-six-opal.vercel.app/',
  },
  {
    title: 'ByteBooks - Online Library',
    description: 'This web app allows users to browse, search, and manage books. It also feature book details with filtering and sorting options, offering a streamlined library experience.',
    image: "./assets/lib.png",
    tags: ['React', 'Node.js', 'Postman', 'MongoDB'],
    github: 'https://github.com/brijendra04/libraryApp',
    live: 'https://libraryapp-eosin.vercel.app/',
  },
  {
    title: 'Notes Making Web-Application',
    description: 'A notes making web application that allows users to create, edit, and manage their notes. It offers a user-friendly interface. Users can edit, and delete notes across different devices.',
    image: "./assets/note.png",
    tags: ['Reactjs', 'Javascript', 'CSS'],
    github: 'https://github.com/brijendra04/Notes-App',
    live: 'https://notes-app-brijendra.netlify.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}