import React, { useState, useEffect } from 'react';
import { getRandomCopy } from '@/utils/copyVariants';

export const ComingSoonPage: React.FC = () => {
  const [copy, setCopy] = useState({ headline: '', subheadline: '' });
  
  useEffect(() => {
    setCopy(getRandomCopy());
  }, []);

  const imageUrl = "/BG2.JPG";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black font-body">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Premium Cookie Background" 
          className="w-full h-full object-cover opacity-90 scale-100 animate-scale-up duration-[40s]" 
        />
        {/* Cinematic dark gradient - reduced opacity to show more image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        
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
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-2xl hover:scale-105 transition-all duration-700" 
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
                { url: "https://www.tiktok.com/@cookis.fr", label: "TikTok", icon: (
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                )},
                { url: "https://www.instagram.com/cookis.fr", label: "Instagram", icon: (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                )},
                { url: "https://www.snapchat.com/add/cookis.fr", label: "Snapchat", icon: (
                  <path d="M12.003 2c-2.928 0-5.503 1.638-5.503 4.914 0 1.697.838 3.12 1.737 3.993.064.062.057.172-.023.237-.37.295-.826.545-1.428.694-.482.119-.806.268-.992.593-.277.487-.106 1.134.197 1.543.14.19.336.27.387.525.048.243-.139.51-.314.735-.427.549-1.033.79-1.636 1.05-.595.257-1.12.57-1.116 1.309.006.877.94 1.652 2.457 2.039.467.119.98.204 1.465.317.47.11.916.273 1.25.688.583.722 1.348.918 2.222.92.835.002 1.399-.444 1.942-.903.542.459 1.107.905 1.942.903.874-.002 1.639-.198 2.222-.92.334-.415.78-.578 1.25-.688.485-.113.998-.198 1.465-.317 1.517-.387 2.451-1.162 2.457-2.039.004-.739-.521-1.052-1.116-1.309-.603-.26-1.209-.501-1.636-1.05-.175-.225-.362-.492-.314-.735.051-.255.247-.335.387-.525.303-.409.474-1.056.197-1.543-.186-.325-.51-.474-.992-.593-.602-.149-1.058-.399-1.428-.694-.08-.065-.087-.175-.023-.237.899-.873 1.737-2.296 1.737-3.993C17.506 3.638 14.931 2 12.003 2z"/>
                )},
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-white/10 shadow-lg backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <svg className="w-6 h-6 fill-white/80 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {social.icon}
                  </svg>
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
