import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import TypewriterText from './ui/TypewriterText';

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Enthusiast",
    "Full-Stack Creator"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-orange-500">Brijendra</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300">
            I'm a <TypewriterText phrases={roles} />
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1tjRCzHXRzYXPhZ-iq_40qujmgReIHBqb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FileText size={20} />
              Resume
            </a>
            <a
              href="https://linkedin.com/in/brijendra30"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/brijendra04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <img
            src="https://drive.google.com/file/d/1E_WnfsGbK7Dg8nBM-8W9P4itiDBkDm1U/view?usp=sharing"
            alt="Brijendra"
            className="relative rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover mx-auto shadow-2xl ring-4 ring-orange-500/50"
          />
        </div>
      </div>
    </section>
  );
}
