import React from 'react';
import { FaUniversity, FaBuilding, FaChartLine, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Information Technology Intern",
    company: "L'Oréal",
    date: "June 2025 - August 2025",
    type: "Technology",
    icon: FaBuilding,
    description: "AMER Retail Omnisales Technology Team. Streamlined legacy POS integrations by producing technical documentation for 5+ interconnected systems. Piloted clienteling prototypes, streamlining online-to-offline customer flow for 3+ retail locations.",
    techStack: ["Confluence", "POS Systems (Retail Tech)", "React", "Node.js"],
    color: "orange-500"
  },
  {
    title: "Computer Science Undergraduate Course Assistant",
    company: "Princeton University",
    date: "Ongoing",
    type: "Academic",
    icon: FaUniversity,
    description: "Grade and provide feedback for CS courses, including Intro CS and Advanced Programming Techniques. Assist students with programming concepts and debugging.",
    techStack: ["Java", "Python", "HTML/CSS", "JavaScript"],
    color: "accent-blue"
  },
  {
    title: "Trading System Development Intern",
    company: "Mirae Asset Securities",
    date: "June 2024 - August 2024",
    type: "Technology",
    icon: FaChartLine,
    description: "Enhanced trading platform performance and improved end-to-end critical path latency. Worked on high-frequency trading systems and optimization.",
    techStack: ["C++"],
    color: "accent-emerald"
  },
  {
    title: "Business Fellow",
    company: "Alariss Global",
    date: "Winter 2023",
    type: "Research",
    icon: FaBriefcase,
    description: "Performed research and data analysis, compiled salary benchmark reports using Tableau/Excel. Analyzed market trends and compensation data.",
    techStack: ["Tableau", "Excel"],
    color: "accent-purple"
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Work Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My journey through academia, technology, and business; simultaneously building skills and making an impact
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon;
          
          // Define explicit color styles based on the color value
          const getColorClasses = (color) => {
            switch(color) {
              case 'orange-500':
                return {
                  bgClass: 'bg-orange-500/10',
                  textClass: 'text-orange-500'
                };
              case 'purple-600':
                return {
                  bgClass: 'bg-purple-600/10',
                  textClass: 'text-purple-600'
                };
              case 'accent-blue':
                return {
                  bgClass: 'bg-blue-500/10',
                  textClass: 'text-blue-500'
                };
              case 'accent-emerald':
                return {
                  bgClass: 'bg-emerald-500/10',
                  textClass: 'text-emerald-500'
                };
              case 'accent-purple':
                return {
                  bgClass: 'bg-purple-500/10',
                  textClass: 'text-purple-500'
                };
              default:
                return {
                  bgClass: 'bg-gray-500/10',
                  textClass: 'text-gray-500'
                };
            }
          };
          
          const colorClasses = getColorClasses(exp.color);
          
          return (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`${colorClasses.bgClass} p-4 rounded-xl flex-shrink-0`}>
                  <IconComponent className={`w-8 h-8 ${colorClasses.textClass}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-3">
                        <h4 className={`text-lg font-semibold ${colorClasses.textClass}`}>{exp.company}</h4>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-gray-500 dark:text-gray-400 font-medium">{exp.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-3">
                      {exp.techStack.map((tech, techIndex) => {
                        return (
                          <div 
                            key={techIndex}
                            className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                          >
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and exciting challenges!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/about#resume" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300"
            >
              View Full Resume
            </a>
            <a 
              href="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue/10 transition-colors duration-300"
            >
              See My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}