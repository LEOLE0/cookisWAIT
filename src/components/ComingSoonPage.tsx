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
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-20 sm:pt-32 px-4 sm:px-6 lg:px-8 text-center pb-12">
        
        {/* Logo */}
        <div className="mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img src="/logo.png" alt="cook'is" className="h-24 sm:h-32 w-auto drop-shadow-lg" />
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
        <div className="w-full animate-fade-in mb-16" style={{ animationDelay: '0.8s' }}>
          <EmailCapture 
            onSubmit={(email) => console.log('Email captured:', email)} 
            placeholder="Préviens-moi quand c’est prêt"
          />
        </div>

        {/* Social Links */}
        <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.9s' }}>
          <p className="text-white text-lg sm:text-xl font-medium tracking-wide drop-shadow-md">
            Envie de cookies tout de suite ? Commandez sur nos réseaux :
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.tiktok.com/@cookis.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6 fill-white group-hover:fill-accent-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/cookis.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-white group-hover:fill-accent-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://www.snapchat.com/add/cookis.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              aria-label="Snapchat"
            >
              <svg className="w-6 h-6 fill-white group-hover:fill-accent-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.003 2c-2.928 0-5.503 1.638-5.503 4.914 0 1.697.838 3.12 1.737 3.993.064.062.057.172-.023.237-.37.295-.826.545-1.428.694-.482.119-.806.268-.992.593-.277.487-.106 1.134.197 1.543.14.19.336.27.387.525.048.243-.139.51-.314.735-.427.549-1.033.79-1.636 1.05-.595.257-1.12.57-1.116 1.309.006.877.94 1.652 2.457 2.039.467.119.98.204 1.465.317.47.11.916.273 1.25.688.583.722 1.348.918 2.222.92.835.002 1.399-.444 1.942-.903.542.459 1.107.905 1.942.903.874-.002 1.639-.198 2.222-.92.334-.415.78-.578 1.25-.688.485-.113.998-.198 1.465-.317 1.517-.387 2.451-1.162 2.457-2.039.004-.739-.521-1.052-1.116-1.309-.603-.26-1.209-.501-1.636-1.05-.175-.225-.362-.492-.314-.735.051-.255.247-.335.387-.525.303-.409.474-1.056.197-1.543-.186-.325-.51-.474-.992-.593-.602-.149-1.058-.399-1.428-.694-.08-.065-.087-.175-.023-.237.899-.873 1.737-2.296 1.737-3.993C17.506 3.638 14.931 2 12.003 2z"/>
              </svg>
            </a>
          </div>
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