


// src/components/ProductPage.jsx
import React from 'react';
import G1 from "../assets/Galary/Galary1.jpeg";
import G2 from "../assets/Galary/Galary2.jpeg";
import G3 from "../assets/Galary/Galary3.jpeg";
import G4 from "../assets/Galary/Galary4.jpg";
import G5 from "../assets/Galary/Galary6.jpeg";
import G6 from "../assets/Galary/Galary7.jpeg";
import G7 from "../assets/Galary/Galary8.jpeg";
import G8 from "../assets/Galary/Galary10.jpeg";
import G9 from "../assets/Galary/Galary11.jpeg";
import G10 from "../assets/Galary/Galary9.jpeg";
import G11 from "../assets/Galary/Galary10.jpeg";
import G12 from "../assets/Galary/Galary12.jpeg";
import G13 from "../assets/Galary/Galary13.jpeg";
import FlowerBackground from '../assets/Background/Flower.jpeg';

const ProductPage = () => {
  const products = [
    {
      image: G1,
      name: 'Black Jacket',
      price: '190 EUR',
    },
    {
      image: G11,
      name: 'Black Trousers',
      price: '120 EUR',
    },
    {
      image: G2,
      name: 'Blue Blazer',
      price: '210 EUR',
    },
    {
      image: G5,
      name: 'Black Vest',
      price: '90 EUR',
    },
  ];

  const mainProducts = [
    {
      type: 'full-image',
      image: G3,
      title: 'Demitore',
    },
    {
      type: 'full-image',
      image: G7,
      title: 'Ponokae',
    },
    {
      type: 'full-image',
      image: G6,
      title: 'Korolvo',
    },
    {
      type: 'grid',
      images: [
        G8,
        G9,
        G4,
        G10,
      ],
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      {/* This is the main white container with shadow and rounded corners */}
      <div className="relative z-10 bg-white shadow-2xl w-[100%] max-w-[1700px] mx-auto text-gray-900 font-sans">
        
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
          {/* <div className="text-xl font-bold">B</div> */}
          <div className="text-2xl font-bold tracking-widest">Gallery</div>
          <div className="flex items-center space-x-6 text-sm">
            {/* <a href="#" className="hover:underline">Catalog</a>
            <a href="#" className="hover:underline">Search</a>
            <a href="#" className="hover:underline">Корзина (0)</a> */}
          </div>
        </header>

        {/* Hero Section */}
        {/* Removed top padding to make it flush with the header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 pb-16">
          <div className="relative">
            <img
              src= {G12}
              alt="Model 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src={G13}
              alt="Model 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-6xl font-bold tracking-widest text-white">
                ESOLO
              </h1>
              <p className="text-white mt-2">New Collection</p>
            </div>
          </div>
        </section>

        {/* Product Carousel/Grid */}
        <section className="px-8 py-12 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-2"
                />
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Product Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
          {mainProducts.map((item, index) => (
            <div key={index} className="relative">
              {item.type === 'full-image' ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  {item.images.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`Product ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductPage;