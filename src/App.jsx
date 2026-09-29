import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-aura-beige">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;