import React from 'react';

export default function FlowerShop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Base Structure */}
      <rect x="15" y="30" width="70" height="60" />
      
      {/* Awning */}
      <path d="M10 30 L20 15 L80 15 L90 30" />
      {/* Scalloped edge */}
      <path d="M10 30 Q15 35 20 30 Q25 35 30 30 Q35 35 40 30 Q45 35 50 30 Q55 35 60 30 Q65 35 70 30 Q75 35 80 30 Q85 35 90 30" />
      <line x1="20" y1="15" x2="30" y2="30" strokeWidth="0.8" />
      <line x1="40" y1="15" x2="50" y2="30" strokeWidth="0.8" />
      <line x1="60" y1="15" x2="70" y2="30" strokeWidth="0.8" />
      <line x1="80" y1="15" x2="90" y2="30" strokeWidth="0.8" />

      {/* Sign */}
      <rect x="30" y="22" width="40" height="12" fill="var(--background)" stroke="currentColor" rx="1" />
      <text x="50" y="30" fontSize="8" fontFamily="var(--font-caveat), sans-serif" textAnchor="middle" stroke="none" fill="currentColor">FLOWERS</text>

      {/* Display Table */}
      <line x1="15" y1="65" x2="85" y2="65" />
      <line x1="25" y1="65" x2="25" y2="90" strokeWidth="0.8" />
      <line x1="35" y1="65" x2="35" y2="90" strokeWidth="0.8" />
      <line x1="45" y1="65" x2="45" y2="90" strokeWidth="0.8" />
      <line x1="55" y1="65" x2="55" y2="90" strokeWidth="0.8" />
      <line x1="65" y1="65" x2="65" y2="90" strokeWidth="0.8" />
      <line x1="75" y1="65" x2="75" y2="90" strokeWidth="0.8" />

      {/* Flowers on Display */}
      {/* Bouquet 1 */}
      <path d="M30 65 L25 50 M30 65 L35 50 M30 65 L30 45" strokeWidth="1" />
      <circle cx="25" cy="50" r="4" fill="var(--background)" />
      <circle cx="35" cy="50" r="3" fill="var(--background)" />
      <circle cx="30" cy="45" r="5" fill="var(--background)" />
      <circle cx="30" cy="45" r="1" />

      {/* Bouquet 2 */}
      <path d="M70 65 L65 50 M70 65 L75 50 M70 65 L70 45" strokeWidth="1" />
      <circle cx="65" cy="50" r="3" fill="var(--background)" />
      <circle cx="75" cy="50" r="4" fill="var(--background)" />
      <circle cx="70" cy="45" r="4" fill="var(--background)" />
      <circle cx="70" cy="45" r="1" />
      
      {/* Hanging Basket 1 */}
      <path d="M15 35 L15 45" strokeWidth="0.5" />
      <path d="M10 45 Q15 50 20 45 Z" fill="var(--background)" stroke="currentColor" />
      <circle cx="12" cy="42" r="2" fill="var(--background)" />
      <circle cx="18" cy="42" r="2" fill="var(--background)" />
      <circle cx="15" cy="40" r="2" fill="var(--background)" />

      {/* Hanging Basket 2 */}
      <path d="M85 35 L85 45" strokeWidth="0.5" />
      <path d="M80 45 Q85 50 90 45 Z" fill="var(--background)" stroke="currentColor" />
      <circle cx="82" cy="42" r="2" fill="var(--background)" />
      <circle cx="88" cy="42" r="2" fill="var(--background)" />
      <circle cx="85" cy="40" r="2" fill="var(--background)" />

      {/* Ground Line */}
      <line x1="5" y1="90" x2="95" y2="90" strokeWidth="1.5" />
    </svg>
  );
}
