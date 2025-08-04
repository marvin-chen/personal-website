'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease',
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      {/* Trailing cursor with neon effect */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 1.2 : 1})`,
          transition: 'transform 0.3s ease',
        }}
      >
        <div className="w-10 h-10 border-2 border-neon-cyan rounded-full opacity-50 animate-pulse"></div>
      </div>

      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transform: `scale(${isHovering ? 1.1 : 1})`,
          transition: 'transform 0.4s ease',
        }}
      >
        <div className="w-15 h-15 border border-neon-pink/30 rounded-full animate-spin-slow"></div>
      </div>
    </>
  );
}
