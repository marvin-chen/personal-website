import React from 'react';
import { FaDownload, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

export default function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1n8N75ERAceBj_ZuXHF6Jeaur0aIvRXkg/view?usp=sharing";

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Resume
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Download or view my complete professional resume with detailed experience and qualifications
        </p>
      </div>

      {/* Resume Section */}
      <div className="max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-accent-blue/10 p-8 rounded-full">
              <FaFileAlt className="w-16 h-16 text-accent-blue" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">Marvin Chen - Resume</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, skills, and achievements in computer science and software development.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300 font-semibold"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              View Resume Online
            </a>
            
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue/10 transition-colors duration-300 font-semibold"
            >
              <FaDownload className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          {/* Note */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-8">
            Last updated: December 2024
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-4xl mx-auto mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-6">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/experience" 
              className="text-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="text-accent-blue text-2xl mb-2">💼</div>
              <h4 className="font-semibold mb-1">Work Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Detailed work history</p>
            </a>
            
            <a 
              href="/projects" 
              className="text-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="text-accent-emerald text-2xl mb-2">🚀</div>
              <h4 className="font-semibold mb-1">Projects</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Portfolio showcase</p>
            </a>
            
            <a 
              href="/extracurriculars" 
              className="text-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="text-accent-purple text-2xl mb-2">🎯</div>
              <h4 className="font-semibold mb-1">Activities</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Leadership & involvement</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}