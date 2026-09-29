import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 min-h-screen flex items-center bg-aura-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="space-y-8">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-aura-gold uppercase">
              Nouvelle Collection
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-aura-black">
              L'élégance <br /> en flacon.
            </h1>
            <p className="text-gray-600 text-lg max-w-md font-light leading-relaxed">
              Découvrez des parfums d'exception, conçus pour révéler votre essence unique. Une expérience olfactive inoubliable.
            </p>
            <div className="flex space-x-4">
              <a href="#collection" className="inline-flex items-center justify-center px-8 py-4 bg-aura-black text-white text-sm font-medium hover:bg-aura-gold transition-colors duration-300">
                Découvrir
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Image (Image 2 - Brave) */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
             <img 
               
               className="object-cover w-full h-full shadow-2xl"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}
             />
             {/* Fallback si l'image ne charge pas, on met un fond */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;