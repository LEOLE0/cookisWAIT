import React, { useState, useEffect } from 'react';
import { EmailCapture } from './EmailCapture';
import { getRandomCopy } from '@/utils/copyVariants';

export const ComingSoonPage: React.FC = () => {
  const [copy, setCopy] = useState({ headline: '', subheadline: '' });
  
  useEffect(() => {
    setCopy(getRandomCopy());
  }, []);

  const imageUrl = "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close-up%20of%20a%20premium%20dark%20chocolate%20cookie%20with%20melting%20chunks%2C%20professional%20food%20photography%2C%20dark%20moody%20lighting%2C%20cinematic%2C%208k&image_size=landscape_16_9";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-chocolate-primary text-white selection:bg-accent-gold selection:text-chocolate-primary font-body">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Premium Cookie Background" 
          className="w-full h-full object-cover opacity-30 sm:opacity-40 scale-105 animate-scale-up duration-[20s]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-primary via-chocolate-primary/80 to-transparent" />
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center py-12">
        
        {/* Logo */}
        <div className="mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-white select-none">
              cook<span className="text-accent-gold">’</span>is
            </h1>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 
            className="font-headline text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 animate-fade-in drop-shadow-lg"
            style={{ animationDelay: '0.4s' }}
          >
            {copy.headline || "Chargement..."}
          </h2>
          <p 
            className="text-lg sm:text-xl text-white/70 font-light tracking-wide max-w-2xl mx-auto animate-fade-in leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            {copy.subheadline}
          </p>
        </div>

        {/* Email Capture */}
        <div className="w-full animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <EmailCapture onSubmit={(email) => console.log('Email captured:', email)} />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center animate-fade-in px-4" style={{ animationDelay: '1s' }}>
          <p className="text-[10px] sm:text-xs text-white/20 uppercase tracking-[0.2em] font-medium">
            © cookis.fr – Cuisson en cours
          </p>
        </footer>
      </div>
    </div>
  );
};