import React from 'react';

const About = () => {
  return (
    <section id="histoire" className="py-24 bg-aura-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="h-[500px] w-full bg-gray-800">
             <img 
               src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1000&auto=format&fit=crop" 
               alt="Savoir-faire Aura-Belle" 
               className="w-full h-full object-cover opacity-80"
             />
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-aura-gold uppercase">Notre Histoire</h2>
            <h3 className="text-4xl font-serif font-bold leading-tight">
              L'art de la <br /> parfumerie.
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Chez Aura-Belle, nous croyons que le parfum est une signature invisible, un souvenir impérissable. 
              Chaque essence est sélectionnée avec soin, chaque flacon est pensé comme une œuvre d'art.
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              Notre maison s'inspire des traditions ancestrales tout en embrassant la modernité pour créer des 
              fragrances uniques qui vous ressemblent.
            </p>
            <div className="pt-4">
              <button className="border border-aura-gold text-aura-gold px-8 py-3 text-sm font-medium hover:bg-aura-gold hover:text-aura-black transition-colors duration-300">
                En savoir plus
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;