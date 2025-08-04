'use client';

import Image from "next/image";
import { useState } from "react";

interface EnhancedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  glowColor?: string;
  hoverEffect?: 'scale' | 'float' | 'glow' | 'rotate';
}

export default function EnhancedImage({ 
  src, 
  alt, 
  width = 300, 
  height = 300, 
  className = "", 
  priority = false,
  glowColor = "neon-blue",
  hoverEffect = "scale"
}: EnhancedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getHoverEffectClass = () => {
    switch (hoverEffect) {
      case 'scale':
        return 'hover:scale-110';
      case 'float':
        return 'hover:-translate-y-2';
      case 'glow':
        return 'hover:shadow-2xl';
      case 'rotate':
        return 'hover:rotate-3';
      default:
        return 'hover:scale-105';
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect background */}
      <div className={`absolute -inset-2 bg-gradient-to-r from-${glowColor}/30 via-${glowColor}/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
      
      {/* Image container */}
      <div className={`relative overflow-hidden rounded-xl border border-${glowColor}/20 group-hover:border-${glowColor}/50 transition-all duration-300 ${getHoverEffectClass()}`}>
        {/* Loading shimmer effect */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-dark-300 via-dark-200 to-dark-300 animate-pulse"></div>
        )}
        
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay effect */}
        <div className={`absolute inset-0 bg-gradient-to-t from-${glowColor}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>
    </div>
  );
}
