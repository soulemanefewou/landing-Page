import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  // Données basées sur vos images
  const products = [
    {
      id: 1,
      name: "Mukhallat Raghba",
      subtitle: "Eau de Parfum",
      price: "15000.00",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop", // Remplacez par l'image du flacon ambré
      bgColor: "bg-amber-50/50",
    },
    {
      id: 2,
      name: "Brave",
      subtitle: "Eau de Toilette",
      price: "5000.00",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop", // Remplacez par l'image du flacon bleu
      bgColor: "bg-slate-100",
    },
    {
      id: 3,
      name: "Gissaty",
      subtitle: "Be Strong",
      price: "35000.00",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop", // Remplacez par l'image du flacon orange
      bgColor: "bg-orange-50/50",
    },
    {
      id: 4,
      name: "Khumrati",
      subtitle: "Al Aqeeq",
      price: "25000.00",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop", // Remplacez par l'image du flacon noir/doré
      bgColor: "bg-stone-100",
    },
  ];

  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-aura-black mb-4">
            Notre Collection
          </h2>
          <div className="w-16 h-0.5 bg-aura-gold mx-auto"></div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
