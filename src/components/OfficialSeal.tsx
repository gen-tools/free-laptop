import React from 'react';

interface OfficialSealProps {
  className?: string;
  size?: number;
}

export default function OfficialSeal({ className = '', size = 80 }: OfficialSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} text-gov-gold`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="gov-official-seal-svg"
    >
      {/* Outer Golden Border */}
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="4" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="100" cy="100" r="83" stroke="#14532d" strokeWidth="2" fill="#14532d" />

      {/* Circular Text Path (simplified with elegant placement or central elements) */}
      <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Emblem Central Elements */}
      {/* Laurel Wreath Left */}
      <path
        d="M 60,140 Q 45,100 65,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M 60,140 L 55,130" stroke="currentColor" strokeWidth="2" />
      <path d="M 54,120 L 48,122" stroke="currentColor" strokeWidth="2" />
      <path d="M 50,100 L 42,104" stroke="currentColor" strokeWidth="2" />
      <path d="M 52,80 L 45,82" stroke="currentColor" strokeWidth="2" />
      <path d="M 60,65 L 53,65" stroke="currentColor" strokeWidth="2" />

      {/* Laurel Wreath Right */}
      <path
        d="M 140,140 Q 155,100 135,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M 140,140 L 145,130" stroke="currentColor" strokeWidth="2" />
      <path d="M 146,120 L 152,122" stroke="currentColor" strokeWidth="2" />
      <path d="M 150,100 L 158,104" stroke="currentColor" strokeWidth="2" />
      <path d="M 148,80 L 155,82" stroke="currentColor" strokeWidth="2" />
      <path d="M 140,65 L 147,65" stroke="currentColor" strokeWidth="2" />

      {/* Star Elements */}
      <polygon points="100,28 103,35 111,35 105,40 107,48 100,43 93,48 95,40 89,35 97,35" fill="currentColor" />
      <polygon points="40,100 42,103 47,103 43,106 45,111 40,108 35,111 37,106 33,103 38,103" fill="currentColor" />
      <polygon points="160,100 162,103 167,103 163,106 165,111 160,108 155,111 157,106 153,103 158,103" fill="currentColor" />

      {/* Laptop & Book Icon in Center */}
      {/* Book (Base) */}
      <path
        d="M 75,120 Q 100,128 125,120 L 125,100 Q 100,108 75,100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M 100,105 L 100,123" stroke="currentColor" strokeWidth="2" />
      
      {/* Laptop screen standing on the book */}
      <rect x="75" y="65" width="50" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="78" y1="88" x2="122" y2="88" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
      
      {/* Small glowing star inside laptop screen */}
      <polygon points="100,74 101.5,77.5 105,77.5 102.5,79.5 103.5,83 100,81 96.5,83 97.5,79.5 95,77.5 98.5,77.5" fill="currentColor" />

      {/* Ribbon Banner */}
      <path d="M 35,150 L 165,150 L 155,168 L 100,162 L 45,168 Z" fill="#D4AF37" />
      <path d="M 35,150 L 45,168 L 25,160 Z" fill="#B3922E" />
      <path d="M 165,150 L 155,168 L 175,160 Z" fill="#B3922E" />
      
      {/* Banner Text - INITIATIVE */}
      <text
        x="100"
        y="160"
        fill="#14532d"
        fontSize="8"
        fontWeight="bold"
        textAnchor="middle"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        GOVERNMENT APPROVED
      </text>

      {/* Department Circular Labels */}
      <path id="textPathUpper" d="M 40,100 A 60,60 0 1,1 160,100" fill="none" />
      <text fill="currentColor" fontSize="8" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.2">
        <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
          FEDERAL EDUCATION PORTAL
        </textPath>
      </text>
    </svg>
  );
}
