import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ image, name, subtitle, price, bgColor }) => {
  return (
    <div className="group cursor-pointer">
      {/* Conteneur Image */}
      <div className={`relative overflow-hidden mb-6 ${bgColor} h-[400px] flex items-center justify-center p-8`}>
        <img 
          src={image} 
          alt={name} 
          className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Bouton Ajout Rapide (apparaît au survol) */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-aura-black text-white py-3 text-sm font-medium flex items-center justify-center hover:bg-aura-gold transition-colors duration-300">
            <ShoppingCart size={16} className="mr-2" />
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* Infos Produit */}
      <div className="text-center space-y-1">
        <h3 className="font-serif text-xl font-semibold text-aura-black">{name}</h3>
        <p className="text-xs text-gray-500 uppercase tracking-widest">{subtitle}</p>
        <p className="text-aura-gold font-medium mt-2">{price} €</p>
      </div>
    </div>
  );
};

export default ProductCard;