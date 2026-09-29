import React from 'react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-aura-beige/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-widest text-aura-black">
              AURA-BELLE
            </h1>
          </div>

          {/* Liens Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-sm font-medium hover:text-aura-gold transition-colors duration-300">Accueil</a>
            <a href="#collection" className="text-sm font-medium hover:text-aura-gold transition-colors duration-300">Collection</a>
            <a href="#histoire" className="text-sm font-medium hover:text-aura-gold transition-colors duration-300">Notre Histoire</a>
          </div>

          {/* Icônes */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-aura-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="hover:text-aura-gold transition-colors duration-300 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-2 bg-aura-gold text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-aura-black">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;