import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scroll from "./components/Scroll.jsx";
import WhatApp from "./components/Whatapp.jsx";
import Privacy from "./components/Privacypolicy.jsx";
import Navbar from "./components/Navbar";
import Banner from "./Pages/Banner";
import About from "./components/About";
import Separate from "./components/Separte";
import LookBookM from "./components/LookBookMen";
import Galary from "./Pages/Galary";
import HistoryBeyond from "./Pages/HistoryBeyond";
import Product from "./components/Product";
import Parse from "./Pages/Parses";
import FootWear from "./components/Footwear";
import Clothing from "./components/Clothing";
// import Services from "./Pages/Services/Services";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Suplimentory from "./Pages/Services/Suplimentory.jsx";
import Personalization from "./Pages/Services/Personalization.jsx";
import Sustainability from "./Pages/Services/Sustainbility.jsx";
import ClothingF from "./Pages/Collections/ClothingF.jsx";
import Testimonials from "./components/Testimonials.jsx";
import NewCollection  from "./components/NewClothing.jsx";
import FootwareF from "./Pages/Collections/FootwareF.jsx";
import Accessory from "./Pages/Collections/Assessories.jsx";
import FootwareM from "./Pages/Collections/FootwareM.jsx";
import Bags from "./Pages/Collections/Bags.jsx";
import LeftPanel from "./components/LeftPannel.jsx";
import CenterPanel from "./components/CenterPannel.jsx";
import RightPanel from "./components/RightPannel.jsx";
import Kids from "./Pages/Collections/Kids.jsx";
import FashionEvent from "./Pages/Services/FashionEvent.jsx";


function App() {
  return (
    <Router>
      <div className="bg-white text-black font-sans">
        {/* <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden"></div> */}
        <Scroll/>
        {/* <Privacy/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            {/* <LeftPanel/>
            <CenterPanel/> */}
            <RightPanel/>
              {/* <Banner /> */}
              <About />
              <Separate />
              {/* <LookBookM /> */}
              {/* <Galary /> */}
              {/* <HistoryBeyond /> */}
              {/* // <Product />
              // <Parse /> */}
              {/* <FootWear /> */}
              {/* // <Clothing /> */}
              {/* <Services /> */}
              <Testimonials/>
              {/* <NewCollection/> */}
              {/* <Accessory/> */}
              <Brands /> 
              <Contact />
              <WhatApp/>
              {/* <Kids/> */}
              {/* <FashionEvent/> */}

              {/* <FootwareM/> */}
              {/* <Bags/>
              */}
            
            </>
          } />
          <Route path="/lookbook" element={<LookBookM />} />
          <Route path="/Product" element={<Product/>}/>
           <Route path="Collections/ClothingF" element={<ClothingF/>} />
            <Route path="Collections/FootwareF" element={<FootwareF/>} />
             <Route path="Collections/FootwareM" element={<FootwareM/>} />
            <Route path="Collections/Assessories" element={<Accessory/>} />
               <Route path="Collections/Bags" element={<Bags/>} />
               <Route path="Collections/Kids" element={<Kids/>} />
            <Route path="/Services/HistoryBeyond" element={<HistoryBeyond/>} />
          {/* You can define more routes as needed */}
          <Route path="/About" element={<About/>} />
           <Route path="/Contact" element={<Contact/>} />
            <Route path="/Galary" element={<Galary/>} />
             <Route path="/Services/Personalization" element={<Personalization/>} />
              <Route path="Services/Suplimentory" element={<Suplimentory/>} />
              <Route path="Services/Sustainbility" element={<Sustainability/>} />
            <Route path="Services/Sustainbility" element={<Sustainability/>} />
            <Route path="Services/FashionEvent" element={<FashionEvent/>} />
             <Route path="/Privacypolicy" element={<Privacy/>} />
              <Route path="/Brands" element={<Brands/>} />
        </Routes>
        <Footer />
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;