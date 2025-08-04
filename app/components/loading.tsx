'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function LoadingSpinner({ size = 'md', color = 'neon-blue' }: LoadingSpinnerProps) {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'md':
        return 'w-10 h-10';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-10 h-10';
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${getSizeClass()} relative`}>
        {/* Outer ring */}
        <div className={`absolute inset-0 border-2 border-${color}/30 rounded-full`}></div>
        
        {/* Spinning ring */}
        <div className={`absolute inset-0 border-2 border-transparent border-t-${color} rounded-full animate-spin`}></div>
        
        {/* Inner glow */}
        <div className={`absolute inset-2 bg-${color}/20 rounded-full animate-pulse`}></div>
      </div>
    </div>
  );
}

export function NeonLoader() {
  return (
    <div className="fixed inset-0 bg-dark-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-neon-blue/30 rounded-full"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-neon-pink rounded-full animate-spin"></div>
          <div className="absolute inset-2 w-20 h-20 border-4 border-transparent border-t-neon-green rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          <div className="absolute inset-4 w-16 h-16 border-4 border-transparent border-t-neon-cyan rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
        </div>
        
        <h2 className="text-2xl font-heading font-bold text-gradient animate-pulse">
          Loading...
        </h2>
      </div>
    </div>
  );
}
