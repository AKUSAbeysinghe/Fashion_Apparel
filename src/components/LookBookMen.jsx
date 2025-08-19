
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accessories1 from '../assets/LookBookMen/Accessory1.jpeg';
import WomeninRed from '../assets/Background/Womenin red.jpeg';
import MenInYellow from '../assets/Background/MenInYellow.jpeg';
import Accesory2 from '../assets/Background/LookBookMen.jpeg';
import Dressy from '../assets/Clothing/dressy.jpg';
import Eslo from '../assets/ServicePics/Eslo1.jpeg';
import Look from '../assets/Background/Look.jpeg';
import Look2 from '../assets/Background/Look2.jpeg';
import BgImage from '../assets/Background/Flower.jpeg'; // Background image for the sides

const App = () => {
  const navigate = useNavigate();  // <-- Initialize navigate here

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left Background */}
      <div
        className="absolute top-0 left-0 w-[2%] h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Right Background */}
      <div
        className="absolute top-0 right-0 w-[2%] h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Top Background */}
      <div
        className="absolute top-0 left-[2%] w-[Full] h-[2%] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Bottom Background */}
      <div
        className="absolute bottom-0 left-[2%] w-[96%] h-[2%] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />

      {/* Main Content Area - Centered and White */}
      <div className="relative z-10 mx-auto w-[Full] bg-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <svg
            className="mx-auto mb-2 w-10 h-10 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 7V3m8 4V3m-4 18v-4m0 0h.01M12 12V3m0 9H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-7zm-4 0h8"
            ></path>
          </svg>
          <h1 className="text-2xl md:text-3xl font-serif tracking-wider text-gray-800">
            Crafted for the Soul
          </h1>
        </header>

        {/* Image Grid with Center Text */}
        <div className="relative w-full max-w-4xl grid grid-cols-2 gap-2 md:gap-4 overflow-hidden rounded-lg shadow-lg">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Accessories1}
              alt="Woman in white t-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={WomeninRed}
              alt="Woman in grey sweater"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={MenInYellow}
              alt="Man in grey hoodie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Accesory2}
              alt="Man in white shirt"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Dressy}
              alt="Woman in white t-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Look}
              alt="Woman in grey sweater"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Eslo}
              alt="Man in grey hoodie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={Look2}
              alt="Man in white shirt"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-gray-800 mb-2">
                Essentials
              </h2>
              <p className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
                The season's
                <br />
                key pieces to love
              </p>
            </div>
          </div>
        </div>

        {/* Shop Buttons */}
        <div className="flex space-x-8 md:space-x-16 mt-8 md:mt-12">
          <button
            onClick={() => navigate('/Collections/ClothingF')}
            className="text-lg font-medium text-gray-800 uppercase tracking-wider hover:underline focus:outline-none"
          >
            For Her
          </button>
          <button
            onClick={() => navigate('/Product')}
            className="text-lg font-medium text-gray-800 uppercase tracking-wider hover:underline focus:outline-none"
          >
            For Him
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
