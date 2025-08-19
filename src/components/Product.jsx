

import React from 'react';
import Flower from '../assets/Background/Flower.jpeg';
import LookBook1 from '../assets/LookBookMen/LookBookMen1.jpeg';
import LookBook2 from '../assets/LookBookMen/LookBookMen2.jpeg';
import LookBook3 from '../assets/LookBookMen/LookBookMen3.jpeg';
import LookBook4 from '../assets/LookBookMen/LookBookMen4.jpeg';
import LookBook5 from '../assets/LookBookMen/LookBookMen6.jpeg';
import LinenJacket from '../assets/Clothing/MD1.jpeg';
import SuedeJacket from '../assets/Clothing/MD2.jpeg';
import SuedeJacketModel from '../assets/Clothing/MD3.jpeg';
import PleatedJacket from '../assets/Clothing/MD4.jpeg';
import LeatherJacket1 from '../assets/Clothing/MD5.jpeg';
import BackgroundImage from '../assets/Clothing/MD6.jpeg';
import w1 from "../assets/Clothing/MD7.jpeg";
import w4 from "../assets/Clothing/MD8.jpeg";
import w3 from "../assets/Clothing/MD9.jpeg";
import w2 from "../assets/Clothing/MD10.jpeg";
import w5 from "../assets/Clothing/Men1.jpeg";
import w6 from "../assets/Clothing/Men2.jpeg";
import w7 from "../assets/Clothing/M3.jpeg";
import w8 from "../assets/Clothing/Men4.jpeg";
import w9 from "../assets/Clothing/Men5.jpeg";
import w10 from "../assets/Clothing/M1.jpeg";
import w11 from "../assets/Clothing/M2.jpeg";

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
    <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${Flower})` }}>
      <div className="min-h-screen bg-white w-[Full] mx-auto py-10">
        <Header />

        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Style that Works
            </h1>
            <p className="text-xl italic text-gray-600 mb-8">premium fabrics with smart design so you can own every moment in style.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                 Step into sophistication with our men’s clothing collection, where timeless style meets modern comfort. From tailored suits and crisp shirts to versatile casual wear, every piece is crafted to help you look sharp and feel confident.
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                  Whether you’re dressing for the boardroom, a night out, or a laid-back weekend,
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

    
    </div>
  );
};

export default CombinedHomepage;