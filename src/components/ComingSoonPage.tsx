import React, { useState, useEffect } from 'react';
import { getRandomCopy } from '@/utils/copyVariants';

export const ComingSoonPage: React.FC = () => {
  const [copy, setCopy] = useState({ headline: '', subheadline: '' });
  
  useEffect(() => {
    setCopy(getRandomCopy());
  }, []);

  const imageUrl = "/BG3.png";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black font-body">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Premium Cookie Background" 
          className="w-full h-full object-cover object-[55%_center] sm:object-center opacity-85 sm:opacity-80 scale-100 animate-scale-up duration-[40s]" 
        />
        {/* Cinematic dark gradient - reduced opacity to show more image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        
        {/* Vignette effect to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        
        {/* Grain texture - ultra subtle */}
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Section: Logo */}
        <div className="w-full flex justify-center animate-fade-in pt-8 pb-12" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/logo.png" 
              alt="cook'is" 
              className="h-44 sm:h-52 md:h-60 lg:h-72 w-auto drop-shadow-2xl hover:scale-105 transition-all duration-700" 
            />
        </div>

        {/* Center Section: Main Content - No Card, Pure Text */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center space-y-16 sm:space-y-24">
          
          <div className="relative">
            <h2 
              className="font-headline text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-widest text-white/90 animate-fade-in drop-shadow-2xl uppercase mix-blend-overlay"
              style={{ animationDelay: '0.4s' }}
            >
              {copy.headline || "Chargement..."}
            </h2>
            
            <div className="mt-12 sm:mt-16 space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-[2px] bg-white mx-auto rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <p className="text-sm sm:text-lg text-white font-bold tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {copy.subheadline}
              </p>
            </div>
          </div>

          {/* Email Capture Section - REMOVED */}

        </div>

        {/* Social Links */}
        <div className="animate-fade-in space-y-8 pb-12 w-full max-w-lg mx-auto text-center px-4" style={{ animationDelay: '1s' }}>
          <p className="text-white text-base sm:text-lg font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
            Envie de cookies tout de suite ? Commandez sur nos réseaux :
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
              {[
                { url: "https://www.tiktok.com/@cookis.fr", label: "TikTok", icon: "/tiktok.png" },
                { url: "https://www.instagram.com/cookis.fr", label: "Instagram", icon: "/instagram.png" },
                { url: "https://www.snapchat.com/add/cookis.fr", label: "Snapchat", icon: "/snapchat.png" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-2xl"
                  aria-label={social.label}
                >
                  <img 
                    src={social.icon} 
                    alt={social.label} 
                    className={`w-10 h-10 sm:w-14 sm:h-14 object-contain ${social.label === 'TikTok' ? 'brightness-0 invert' : ''}`}
                  />
                </a>
              ))}
            </div>
        </div>

        {/* Footer */}
        <footer className="w-full text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium mix-blend-overlay">
            © cookis.fr – Cuisson en cours
          </p>
        </footer>
      </div>
    </div>
  );
};
