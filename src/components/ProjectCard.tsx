import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Card3D from './ui/Card3D';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  category: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card3D className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="group relative">
        <div className="relative h-48 overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{props.title}</h3>
            <span className="text-sm text-orange-500">{props.category}</span>
          </div>
          
          <p className="text-gray-600 mb-4">{props.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm transform hover:scale-105 transition-transform"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={props.github}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              Code
            </a>
            <a
              href={props.live}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Card3D>
  );
}