import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-aura-beige">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail size={32} className="mx-auto text-aura-gold mb-6" />
        <h2 className="text-3xl font-serif font-bold text-aura-black mb-4">Rejoignez le Cercle Aura-Belle</h2>
        <p className="text-gray-600 mb-8 font-light">
          Inscrivez-vous pour recevoir en avant-première nos nouveautés et offres exclusives.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            className="flex-1 px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-aura-gold transition-colors duration-300"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-3 bg-aura-black text-white text-sm font-medium hover:bg-aura-gold transition-colors duration-300"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;