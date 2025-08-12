import React from "react";
import type { Metadata } from "next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

const projects = [
  {
    title: "Signable",
    description: "ASL flashcard app with side-by-side comparison feature designed to help users learn American Sign Language through interactive visual learning.",
    techStack: ["HTML", "CSS", "Javascript", "Bootstrap", "Flask", "Jinja2", "Docker"],
    color: "accent-blue",
    category: "Web Application"
  },
  {
    title: "Pokémon Classifier",
    description: "Novel multimodal neural network that combines image recognition and numerical data analysis to accurately classify Pokémon species.",
    techStack: ["Matplotlib", "Scikit-learn", "Python", "TensorFlow"],
    github: "https://github.com/marvin-chen/cos-independent-work",
    color: "accent-emerald",
    category: "Machine Learning"
  },
  {
    title: "TigerRetail",
    description: "User-friendly interface for peer-to-peer commerce on campus, facilitating safe and convenient transactions between students.",
    techStack: ["Svelte", "Typescript"],
    github: "https://github.com/tigerappsorg/tigerretail-2",
    color: "accent-purple",
    category: "E-commerce Platform"
  },
  {
    title: "Hoagie Mail",
    description: "Official email distribution system for clubs and organizations, efficiently serving over 5,000 students across campus.",
    techStack: ["Typescript", "Go"],
    github: "https://github.com/HoagieClub/mail",
    color: "accent-amber",
    category: "Communication System"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent leading-relaxed pb-2">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my technical work spanning web development, machine learning, and software engineering
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {project.title}
                    </h2>
                    <span className={`text-${project.color} text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-gray-500 dark:text-gray-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-${project.color}/10 border border-${project.color}/20 rounded-full text-sm text-${project.color} font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-${project.color} text-white rounded-lg hover:bg-${project.color}/90 transition-colors duration-300`}
                  >
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          <a 
            href="https://github.com/marvin-chen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}