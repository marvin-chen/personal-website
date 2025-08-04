import React from 'react';
import { FaGlobeAmericas, FaMountain, FaRobot } from 'react-icons/fa';
import { SiPokemon } from 'react-icons/si';
import PhotoGallery from '../components/photo-gallery';

export default function Fun() {
  const funFacts = [
    {
      icon: FaGlobeAmericas,
      title: "Polyglot",
      description: "I can speak three languages fluently: English, Mandarin, and Cantonese! I love learning languages and am currently learning Korean, Japanese, and thinking on starting Spanish.",
      color: "accent-blue"
    },
    {
      icon: SiPokemon,
      title: "Pokémon Fan", 
      description: "My (arguably) favorite Pokémon is Dragonite, which inspired my Pokémon Classifier project.",
      color: "accent-emerald"
    },
    {
      icon: FaMountain,
      title: "Mountain Climber",
      description: "I'm an avid hiker and have climbed several mountains in South Korea. I have been to South Korea two summers in a row!",
      color: "accent-purple"
    },
    {
      icon: FaRobot,
      title: "AI Enthusiast",
      description: "In my free time, I enjoy reading tech blog posts about the latest trends in AI and machine learning. I got to see Dr. Fei-Fei Li in person at a tech talk, who inspired my interest in AI after reading her book 'The Worlds I See'.",
      color: "accent-amber"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Beyond the Code
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Beyond code and algorithms - here's what makes me tick
        </p>
      </div>

      {/* Fun Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
        {funFacts.map((fact, index) => {
          const IconComponent = fact.icon;
          return (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex items-start gap-4">
                <IconComponent className={`w-8 h-8 text-${fact.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className={`text-2xl font-bold text-${fact.color} mb-3`}>
                    {fact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo Gallery Section */}
      <div className="mb-16">
        <div className="text-center mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-emerald to-accent-blue bg-clip-text text-transparent">
            Photo Memories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A glimpse into my adventures and experiences
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.25s'}}>
          <PhotoGallery />
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center animate-fade-in-up max-w-4xl mx-auto" style={{animationDelay: '0.3s'}}>
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 mb-4">
            "The best way to predict the future is to create it."
          </blockquote>
          <cite className="text-accent-blue font-semibold">- Peter Drucker</cite>
        </div>
      </div>
    </div>
  );
}