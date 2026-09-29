import React from 'react';

// Icônes SVG inline pour les réseaux sociaux (car Lucide ne les fournit plus)
const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-aura-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-serif font-bold tracking-widest mb-4">AURA-BELLE</h2>
            <p className="text-gray-400 text-sm font-light max-w-sm">
              Maison de parfums de luxe. Des fragrances d'exception pour homme et femme.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-aura-gold">Boutique</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Nouveautés</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Best-sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Coffrets</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-aura-gold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-aura-gold transition-colors duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-aura-gold transition-colors duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-aura-gold transition-colors duration-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-light">
          &copy; {new Date().getFullYear()} Aura-Belle. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;