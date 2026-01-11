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
        <div className="flex items-center justify-center p-4 bg-green-900/20 text-green-400 rounded-full border border-green-800 animate-fade-in backdrop-blur-sm">
          <Check className="w-5 h-5 mr-2" />
          <span className="font-medium">Bien reçu ! On vous tient au courant.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 focus:border-accent-gold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-accent-gold text-chocolate-primary rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 active:scale-95"
              aria-label="S'inscrire"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          {microCopy && (
            <p className="mt-3 text-sm text-white/30 text-center font-light tracking-wide">
              {microCopy}
            </p>
          )}
        </form>
      )}
    </div>
  );
};