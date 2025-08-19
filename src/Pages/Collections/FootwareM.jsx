
import React from 'react';

import LookBook1 from '../../assets/Footware/FW1.jpeg';
import LookBook2 from '../../assets/Footware/FW2.jpeg';
import LookBook3 from '../../assets/Footware/FW3.jpeg';
import LookBook4 from '../../assets/Footware/FW19.jpeg';
import LookBook5 from '../../assets/Footware/FW5.jpeg';
import LinenJacket from '../../assets/Footware/FW6.jpeg';
import SuedeJacket from '../../assets/Footware/FW7.jpeg';
import SuedeJacketModel from '../../assets/Footware/FW8.jpeg';
import PleatedJacket from '../../assets/Footware/FW9.jpeg';
import LeatherJacket1 from '../../assets/Footware/FW10.jpeg';
import BackgroundImage from '../../assets/Background/Flower.jpeg';
import w1 from "../../assets/Footware/Fw11.jpeg";
import w4 from "../../assets/Footware/ShoeMen.jpeg";
import w3 from "../../assets/Footware/Shoes.jpeg";
import w2 from "../../assets/Footware/FW11.jpeg";
import w5 from "../../assets/Footware/FW12.jpeg";
import w6 from "../../assets/Footware/FW13.jpeg";
import w7 from "../../assets/Footware/FW14.jpeg";
import w8 from "../../assets/Footware/FW15.jpeg";
import w9 from "../../assets/Footware/FW16.jpeg";
import w10 from "../../assets/Footware/FW17.jpeg";
import w11 from "../../assets/Footware/FW18.jpeg";

const Header = () => (
  // The line border class 'border-b border-gray-200' has been removed
  <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
    <nav className="hidden md:flex items-center space-x-6"></nav>
  </header>
);

const ProductCard = ({ product }) => {
  const { imageUrl, name, price, collection } = product;
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="relative pb-[125%] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 p-1 bg-white bg-opacity-75 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          +
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-xs text-gray-500 mb-1 uppercase">{collection}</p>
        <h3 className="text-base font-medium mb-1">{name}</h3>
        <p className="text-sm font-semibold">{price} EUR</p>
      </div>
    </div>
  );
};

const ProductListing = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <ProductCard key={product.id + product.name} product={product} />
    ))}
  </div>
);

const CombinedHomepage = () => {
  const products = [
    { id: 1, imageUrl: LinenJacket, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
    { id: 2, imageUrl: SuedeJacket, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
    { id: 3, imageUrl: SuedeJacketModel, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
    { id: 4, imageUrl: PleatedJacket, collection: 'PLEATED JACKET WITH TABS ZW COLLECTION', name: 'LIMITED EDITION', price: '89.95' },
    { id: 5, imageUrl: LeatherJacket1, collection: 'ZW COLLECTION', name: 'LEATHER JACKET LOOK 1', price: '149.95' },
    { id: 6, imageUrl: w1, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
    { id: 7, imageUrl: w3, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
    { id: 8, imageUrl: w4, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
    { id: 9, imageUrl: w2, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
    { id: 10, imageUrl: w5, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
    { id: 11, imageUrl: w6, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
    { id: 12, imageUrl: w7, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
    { id: 13, imageUrl: w8, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
    { id: 14, imageUrl: w9, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
    { id: 15, imageUrl: w10, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
    { id: 16, imageUrl: w11, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
  ];

  return (
    <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
        <Header />

        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Walk Bold
            </h1>
            <p className="text-xl italic text-gray-600 mb-8">Elevate Your Look: Stylish & Comfortable Men’s Shoes</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Our collection of men’s footwear combines style, comfort, and durability. From formal shoes perfect for the office to casual sneakers for everyday wear, each pair is crafted to meet high-quality standards. We focus on ergonomic designs, premium materials, and timeless aesthetics to ensure that every step you take is both stylish and comfortable
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                 Walk Confidently: Shoes for Every Occasion
                </p>
              </div>
            </div>
          </main>
        </div>

        <div className="py-12">
          <div className="w-full mx-auto rounded-xl p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[LookBook1, LookBook3, LookBook2, LookBook4, LookBook5].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                  <img src={img} alt={`Lookbook ${idx + 1}`} className="w-full h-auto object-cover aspect-square md:aspect-auto" />
                </div>
              ))}

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">TRY <br /> SOMETHING <br /> NEW</h2>
                <p className="text-gray-700 mb-4 text-sm">
                  GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
                </p>
                <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
                  SHOP NEW ARRIVALS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex justify-end p-4 pr-6">
            <div className="flex space-x-4 text-sm"></div>
          </div>
          <ProductListing products={products} />
        </div>

        <footer className="mt-24 text-center mb-10">
          <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
          <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
        </footer>
      </div>

      {/* <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
        <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm uppercase hidden md:block">CHAT</button>
        <button className="bg-black text-white p-3 rounded-full shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default CombinedHomepage;