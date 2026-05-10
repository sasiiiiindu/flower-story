import React from 'react';

export default function Bicycle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Wheels */}
      <g className="wheel" style={{ transformOrigin: '20px 40px' }}>
        <circle cx="20" cy="40" r="16" />
        <circle cx="20" cy="40" r="14" strokeWidth="0.5" />
        <line x1="20" y1="24" x2="20" y2="56" strokeWidth="0.5" />
        <line x1="4" y1="40" x2="36" y2="40" strokeWidth="0.5" />
        <line x1="8" y1="28" x2="32" y2="52" strokeWidth="0.5" />
        <line x1="32" y1="28" x2="8" y2="52" strokeWidth="0.5" />
      </g>

      <g className="wheel" style={{ transformOrigin: '80px 40px' }}>
        <circle cx="80" cy="40" r="16" />
        <circle cx="80" cy="40" r="14" strokeWidth="0.5" />
        <line x1="80" y1="24" x2="80" y2="56" strokeWidth="0.5" />
        <line x1="64" y1="40" x2="96" y2="40" strokeWidth="0.5" />
        <line x1="68" y1="28" x2="92" y2="52" strokeWidth="0.5" />
        <line x1="92" y1="28" x2="68" y2="52" strokeWidth="0.5" />
      </g>

      <circle cx="20" cy="40" r="1" fill="currentColor" />
      <circle cx="80" cy="40" r="1" fill="currentColor" />

      {/* Frame */}
      <path d="M20 40 L45 40 L35 15 Z" />
      <path d="M45 40 L70 15 L35 15" />
      <line x1="80" y1="40" x2="70" y2="15" />

      {/* Handlebars */}
      <path d="M68 15 L72 10 Q78 5 80 12" />

      {/* Seat */}
      <path d="M30 15 L40 15" strokeWidth="3" />
      <line x1="35" y1="15" x2="35" y2="10" strokeWidth="3" />

      {/* Chain/Pedal */}
      <circle cx="45" cy="40" r="3" strokeWidth="1" />
      <circle cx="45" cy="40" r="1" />
    </svg>
  );
}
