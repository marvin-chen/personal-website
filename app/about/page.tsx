import React from 'react';
import { FaGraduationCap, FaCode, FaUsers, FaGlobeAmericas, FaDownload, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

export default function About() {
  const resumeLink = "https://drive.google.com/file/d/11IFZPgodvg4nvAYTpNK8aUfzt3xMWazl/view?usp=sharing";

  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Computer Science student at Princeton University with focus on AI and software engineering",
      color: "accent-blue"
    },
    {
      icon: FaCode,
      title: "Technical Skills",
      description: "Proficient in Python, Java, JavaScript, and modern web development frameworks",
      color: "accent-emerald"
    }
  ];

  const technologies = [
    { icon: SiPython, name: "Python", color: "text-blue-600" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-700" }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm Marvin! 
          My passion lies in leveraging technology to solve complex problems and create innovative solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in programming, I'm always eager to learn 
              and apply new technologies. My academic journey has equipped me with skills in machine learning, data analysis, 
              and software development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond academics, I enjoy contributing to open-source projects, reading up on the latest tech trends, and engaging with 
              the tech community. I believe in the power of collaboration and continuous learning to drive innovation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating impactful solutions that bridge the gap between technology and real-world problems, 
              particularly in areas like AI, web development, and data science.
            </p>
          </div>

          {/* Technologies */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-6 text-center">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <IconComponent className={`w-12 h-12 ${tech.color} mx-auto mb-3`} />
                    <h4 className="font-semibold">{tech.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{animationDelay: `${0.3 + index * 0.05}s`}}
            >
              <div className="flex items-start gap-4">
                <IconComponent className={`w-8 h-8 text-${highlight.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className={`text-xl font-bold text-${highlight.color} mb-3`}>
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resume Section */}
      <div id="resume" className="mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-accent-emerald to-accent-blue bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-accent-blue/10 p-6 rounded-full">
                <FaFileAlt className="w-12 h-12 text-accent-blue" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">Professional Resume</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              View my complete resume with detailed experience, education, and qualifications below.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center">
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300 font-medium"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Online
              </a>
            </div>

            {/* Note */}
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              Last updated: October 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}