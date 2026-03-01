import React from 'react';
import { FaUserTie, FaUsers, FaLightbulb, FaCode, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';

const extracurriculars = [
  {
    title: "COS (Computer Science) Council",
    role: "President",
    description: "Spearhead initiatives to improve students' academic experiences and bridge communication between students and faculty.",
    icon: FaUserTie,
    color: "accent-blue",
    category: "Leadership"
  },
  {
    title: "Chinese Language Association",
    role: "President and Senior Advisor",
    description: "Expanded club by 250% and onboarded current board members. Led cultural events and language learning initiatives.",
    icon: FaUsers,
    color: "accent-emerald",
    category: "Leadership"
  },
  {
    title: "Koko Pops Dance Company",
    role: "Production Team - Lighting Operator",
    description: "Controlled the lighting system for a dance performance with 100+ attendees. Managed technical aspects of live performances.",
    icon: FaLightbulb,
    color: "accent-purple",
    category: "Arts & Culture"
  },
  {
    title: "Association of Computing Machinery (ACM)",
    role: "Workshop Chair",
    description: "Regularly practiced competitive programming skills and enhanced data structures and algorithms knowledge through workshops and competitions.",
    icon: FaCode,
    color: "accent-amber",
    category: "Technical"
  },
  {
    title: "BSE Interactor",
    role: "Student Advisor",
    description: "Advised 10+ freshmen on the engineering track regarding courses and academic life. Provided mentorship and academic guidance.",
    icon: FaGraduationCap,
    color: "accent-blue",
    category: "Mentorship"
  },
  {
    title: "Community Action Freshman Orientation",
    role: "Orientation Leader",
    description: "Guided freshmen through orientation and provided tips about campus life and beyond. Facilitated smooth transition to university life.",
    icon: FaHandsHelping,
    color: "accent-emerald",
    category: "Community Service"
  }
];

export default function Extracurriculars() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Extracurricular Activities
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Campus involvement and leadership experiences that have shaped my personal and professional growth
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {extracurriculars.map((activity, index) => {
          const IconComponent = activity.icon;
          return (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <IconComponent className={`w-10 h-10 text-${activity.color} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 bg-${activity.color}/10 border border-${activity.color}/20 rounded-full text-xs font-medium text-${activity.color}`}>
                      {activity.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-1">{activity.title}</h2>
                  <h3 className={`text-lg text-${activity.color} font-semibold mb-3`}>
                    {activity.role}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {activity.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Impact at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-emerald mb-2">200%</div>
              <div className="text-gray-600 dark:text-gray-300">Club Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-purple mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}