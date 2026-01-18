import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmailCaptureProps {
  onSubmit?: (email: string) => void;
  placeholder?: string;
  microCopy?: string;
  className?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  onSubmit,
  placeholder = "Votre email...",
  microCopy = "Promis, pas de spam. Juste des cookies.",
  className
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      if (onSubmit) onSubmit(email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {isSubmitted ? (
        <div className="flex items-center justify-center p-4 bg-emerald-500/20 text-emerald-200 rounded-2xl border border-emerald-500/30 animate-fade-in backdrop-blur-md shadow-xl">
          <Check className="w-5 h-5 mr-2" />
          <span className="font-medium tracking-wide">Bien reçu ! On vous tient au courant.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative flex items-center group-focus-within:scale-[1.02] transition-transform duration-500 ease-out">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full px-8 py-5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/50 transition-all duration-500 backdrop-blur-md shadow-2xl hover:bg-white/15 text-xs sm:text-sm uppercase tracking-[0.15em] font-medium text-center placeholder:text-center"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-white text-black rounded-full hover:scale-105 hover:bg-gray-200 transition-all duration-500 shadow-lg active:scale-95 opacity-0 group-focus-within:opacity-100 translate-x-4 group-focus-within:translate-x-0"
              aria-label="S'inscrire"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {microCopy && (
            <p className="mt-4 text-sm text-white/40 text-center font-light tracking-widest uppercase text-[10px]">
              {microCopy}
            </p>
          )}
        </form>
      )}
    </div>
  );
};
