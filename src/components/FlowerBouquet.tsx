import React from 'react';
import styles from './FlowerBouquet.module.css';

type FlowerProps = {
  color: string;
  name: string;
};

export default function FlowerBouquet({ color, name }: FlowerProps) {
  return (
    <div className={styles.bouquetContainer}>
      <svg viewBox="0 0 100 120" className={styles.bouquetSvg} fill="none" stroke="currentColor">
        {/* Pot/Vase */}
        <path d="M20 80 L80 80 L70 110 L30 110 Z" fill="#e8ddd4" stroke="#d5c0b0" strokeWidth="2" />
        <path d="M15 80 L85 80 L85 70 L15 70 Z" fill="#e8ddd4" stroke="#d5c0b0" strokeWidth="2" />
        <line x1="25" y1="80" x2="25" y2="110" stroke="#d5c0b0" strokeWidth="0.5" />
        <line x1="45" y1="80" x2="45" y2="110" stroke="#d5c0b0" strokeWidth="0.5" />
        <line x1="65" y1="80" x2="65" y2="110" stroke="#d5c0b0" strokeWidth="0.5" />
        
        {/* Stems */}
        <path d="M35 70 L35 30" stroke="#689f38" strokeWidth="3" />
        <path d="M50 70 L50 20" stroke="#689f38" strokeWidth="3" />
        <path d="M65 70 L65 35" stroke="#689f38" strokeWidth="3" />

        <path d="M35 50 L25 45" stroke="#689f38" strokeWidth="2" />
        <path d="M50 40 L60 35" stroke="#689f38" strokeWidth="2" />
        <path d="M65 55 L75 50" stroke="#689f38" strokeWidth="2" />
        
        {/* Leaves */}
        <path d="M25 45 Q20 40 25 35 Q30 40 25 45" fill="#689f38" stroke="none" />
        <path d="M60 35 Q65 30 60 25 Q55 30 60 35" fill="#689f38" stroke="none" />
        <path d="M75 50 Q80 45 75 40 Q70 45 75 50" fill="#689f38" stroke="none" />

        {/* Flowers */}
        {/* We use a tulip/rose hybrid shape */}
        <g stroke="none">
          <path d="M25 25 Q35 15 45 25 Q35 35 25 25" fill={color} />
          <path d="M35 15 Q40 5 45 15 Q40 25 35 15" fill={color} opacity="0.8" />
          <path d="M25 25 Q30 15 35 25 Q30 35 25 25" fill={color} opacity="0.6" />
        </g>
        
        <g stroke="none" transform="translate(15, -10)">
          <path d="M25 25 Q35 15 45 25 Q35 35 25 25" fill={color} />
          <path d="M35 15 Q40 5 45 15 Q40 25 35 15" fill={color} opacity="0.8" />
          <path d="M25 25 Q30 15 35 25 Q30 35 25 25" fill={color} opacity="0.6" />
        </g>

        <g stroke="none" transform="translate(30, 5)">
          <path d="M25 25 Q35 15 45 25 Q35 35 25 25" fill={color} />
          <path d="M35 15 Q40 5 45 15 Q40 25 35 15" fill={color} opacity="0.8" />
          <path d="M25 25 Q30 15 35 25 Q30 35 25 25" fill={color} opacity="0.6" />
        </g>
      </svg>
      <div className={styles.line}></div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
