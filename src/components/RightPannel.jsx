// import BackgroundImage from '../assets/Background/Flower.jpeg';
// import React, { useState, useEffect } from "react";
// import Anima from "../assets/Background/B4.jpeg";
// import Anima2 from "../assets/Background/B9.jpeg";
// import Anima3 from "../assets/Background/B25.jpeg";

// const screens = [
//   {
//     mainText: "anima",
//     caption: "Autumn Collection 2018",
//     number: "01",
//     image: Anima,
//   },
//   {
//     mainText: "ethereal",
//     caption: "Winter Collection 2019",
//     number: "02",
//     image: Anima2,
//   },
//   {
//     mainText: "aurora",
//     caption: "Summer Collection 2020",
//     number: "03",
//     image: Anima3,
//   },
// ];

// const AnimaComponent = () => {
//   const [currentScreen, setCurrentScreen] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentScreen((prev) => (prev + 1) % screens.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setCurrentScreen((prev) => (prev + 1) % screens.length);
//   };

//   const handlePrev = () => {
//     setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">

      
//       {/* Container for swiping screens */}
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentScreen * 100}%)` }}
//       >
//         {screens.map((screen, index) => (
//           <div key={index} className="flex-none w-full h-full relative">
//             {/* Blurred Background Layer (full-screen) */}
//             <div
//               className="absolute inset-0 bg-cover bg-center filter blur-lg"
//               style={{ backgroundImage: `url(${screen.image})` }}
//             ></div>

//             {/* Main Content & Image Layer (full-screen) */}
//             <div
//               className="relative z-10 w-full h-full bg-contain bg-no-repeat bg-center"
//               style={{ backgroundImage: `url(${screen.image})` }}
//             >
//               {/* Dark overlay to improve readability */}
//               <div className="absolute inset-0 bg-black/40"></div>

//               {/* ✅ Overlaying Layout - This is the key change  */}
//               <div className="relative z-10 flex w-full h-full">
//                 {/* === Left Sidebar (transparent overlay) === */}
//                 <div className="hidden md:flex md:w-1/5 lg:w-1/6 p-6 lg:p-8 flex-col justify-between border-r border-white/40 bg-black/20 backdrop-blur-sm sticky top-0 h-screen">
//                   <div>
//                     <div className="flex items-center text-xs lg:text-sm font-light uppercase tracking-widest text-white mb-6 lg:mb-8">
//                       <span className="w-5 h-px bg-white mr-2"></span>
//                       Menu
//                     </div>
//                     <ul className="text-xs lg:text-sm uppercase tracking-widest text-white space-y-2">
//                       <li>Shop</li>
//                       <li>Lookbook</li>
//                       <li>Style</li>
//                       <li>Brand</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <ul className="text-xs uppercase tracking-widest text-white/80 space-y-1 mb-4">
//                       <li>English</li>
//                       <li>French</li>
//                     </ul>
//                     <ul className="text-xs uppercase tracking-widest text-white/80 space-y-1">
//                       <li>Facebook</li>
//                       <li>Twitter</li>
//                       <li>Instagram</li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* === Center Content === */}
//                 <div className="flex-1 relative flex flex-col items-center justify-center w-[96%] max-w-[1700px] mx-auto">
//                   {/* The new wrapper div for content to align with Navbar */}
//                   <div className="flex-1 relative flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
//                     {/* Search Icon */}
//                     <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white z-20 cursor-pointer">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 lg:h-7 lg:w-7"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.2}
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                       </svg>
//                     </div>

//                     {/* Vertical Text */}
//                     <div className="absolute inset-y-0 -left-10 md:left-2 flex items-center">
//                       <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white transform -rotate-90 select-none drop-shadow-xl">
//                         {screen.mainText}
//                       </h1>
//                     </div>

//                     {/* Vertical Line */}
//                     <div className="absolute inset-y-0 left-[15%] hidden md:block">
//                       <div className="w-px h-full bg-white/40"></div>
//                     </div>

//                     {/* Bottom Caption */}
//                     <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-xs md:text-sm uppercase tracking-widest text-white/70">
//                       {screen.caption}
//                     </div>

//                     {/* Large Number */}
//                     <div className="absolute right-0 bottom-0 p-4 md:p-8 text-white font-thin z-20">
//                       <h2 className="text-[6rem] md:text-[10rem] lg:text-[12rem] opacity-30 leading-none">
//                         {screen.number}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>

//                 {/* === Right Sidebar (transparent overlay) === */}
//                 <div className="hidden md:flex md:w-1/5 lg:w-1/6 flex-col justify-end p-6 lg:p-8 border-l border-white/40 bg-black/20 backdrop-blur-sm sticky top-0 h-screen">
//                   <ul className="text-xs uppercase tracking-widest text-white space-y-3 lg:space-y-4 text-right">
//                     {screens.map((s, idx) => (
//                       <li
//                         key={idx}
//                         className={`cursor-pointer transition-all duration-300 ${
//                           currentScreen === idx ? "text-white" : "text-white/80"
//                         }`}
//                         onClick={() => setCurrentScreen(idx)}
//                       >
//                         {s.number}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
//         <button
//           onClick={handlePrev}
//           className="p-2 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={handleNext}
//           className="p-2 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
    
//   );
// };

// export default AnimaComponent;






import BackgroundImage from '../assets/Background/Flower.jpeg';
import React, { useState, useEffect } from "react";
import Anima from "../assets/Background/B4.jpeg";
import Anima2 from "../assets/Background/B9.jpeg";
import Anima3 from "../assets/Background/B25.jpeg";

const screens = [
  {
    // mainText: "anima",
    mainText: "aurora",
    caption: "Autumn Collection 2025",
    number: "01",
    image: Anima,
  },
  {
    // mainText: "ethereal",
    mainText: "aurora",
    caption: "Winter Collection 2025",
    number: "02",
    image: Anima2,
  },
  {
    mainText: "aurora",
    caption: "Summer Collection 2025 ",
    number: "03",
    image: Anima3,
  },
];

const AnimaComponent = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      
      {/* Container for swiping screens */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
      >
        {screens.map((screen, index) => (
          <div key={index} className="flex-none w-full h-full relative">
            {/* Blurred Background Layer (full-screen) */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-lg"
              style={{ backgroundImage: `url(${screen.image})` }}
            ></div>

            {/* Main Content & Image Layer (full-screen) */}
            <div
              className="relative z-10 w-full h-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${screen.image})` }}
            >
              {/* Dark overlay to improve readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* ✅ Overlaying Layout - This is the key change  */}
              <div className="relative z-10 flex w-full h-full">
                {/* === Left Sidebar (transparent overlay) === */}
                <div className="hidden md:flex md:w-1/5 lg:w-1/6 p-6 lg:p-8 flex-col justify-between border-r border-white/40 bg-black/20 backdrop-blur-sm sticky top-0 h-screen">
                  <div>
                    <div className="flex items-center text-xs lg:text-sm font-light uppercase tracking-widest text-white mb-6 lg:mb-8">
                      <span className="w-5 h-px bg-white mr-2"></span>
                      Menu
                    </div>
                    <ul className="text-xs lg:text-sm uppercase tracking-widest text-white space-y-2">
                      <li>Shop</li>
                      <li>Lookbook</li>
                      <li>Style</li>
                      <li>Brand</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-xs uppercase tracking-widest text-white/80 space-y-1 mb-4">
                      {/* <li>English</li> */}
                       <li>SRI LANKA</li> 
                      {/* <li>French</li> */}
                    </ul>
                    <ul className="text-xs uppercase tracking-widest text-white/80 space-y-1">
                      <li>Facebook</li>
                      {/* <li>Twitter</li> */}
                      <li>Youtube</li>
                      <li>TikTok</li>
                      <li>Instagram</li>
                    </ul>
                  </div>
                </div>

                {/* === Center Content === */}
                <div className="flex-1 relative flex flex-col items-center justify-center w-[96%] max-w-[1700px] mx-auto">
                  {/* The new wrapper div for content to align with Navbar */}
                  <div className="flex-1 relative flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
                    {/* Search Icon */}
                    <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white z-20 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 lg:h-7 lg:w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    {/* Vertical Text */}
                    <div className="absolute inset-y-0 -left-10 md:left-2 flex items-center">
                      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white transform -rotate-90 select-none drop-shadow-xl">
                        {screen.mainText}
                      </h1>
                    </div>

                    {/* Vertical Line */}
                    <div className="absolute inset-y-0 left-[15%] hidden md:block">
                      <div className="w-px h-full bg-white/40"></div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-xs md:text-sm uppercase tracking-widest text-white/70">
                      {screen.caption}
                    </div>

                    {/* Large Number */}
                    <div className="absolute right-0 bottom-0 p-4 md:p-8 text-white font-thin z-20">
                      <h2 className="text-[6rem] md:text-[10rem] lg:text-[12rem] opacity-30 leading-none">
                        {screen.number}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* === Right Sidebar (transparent overlay) === */}
                <div className="hidden md:flex md:w-1/5 lg:w-1/6 flex-col justify-end p-6 lg:p-8 border-l border-white/40 bg-black/20 backdrop-blur-sm sticky top-0 h-screen">
                  <ul className="text-xs uppercase tracking-widest text-white space-y-3 lg:space-y-4 text-right">
                    {screens.map((s, idx) => (
                      <li
                        key={idx}
                        className={`cursor-pointer transition-all duration-300 ${
                          currentScreen === idx ? "text-white" : "text-white/80"
                        }`}
                        onClick={() => setCurrentScreen(idx)}
                      >
                        {s.number}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-2 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
    
  );
};

export default AnimaComponent;












