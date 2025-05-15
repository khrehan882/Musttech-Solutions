import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Contact from "./page/contact/Contact";
import Careers from "./page/careers/Careers";
import About from "./page/about/About";
import Home from "./page/home/Home";
import Portfolio from "./page/portfolio/Portfolio";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Testimonials from "./component/landing/Testimonials"; // ✅ Add this import
import Services from "./page/services/Services";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import Whatsapp from "./component/Whatsapp";

function App() {
  return (
    <div className="bg-[#110F0F] min-h-screen font-agrandir">

      <Navbar />
      <ScrollToTop /> {/* Add this to reset scroll position on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} /> {/* ✅ Add this route */}
      </Routes>
      <Footer />





      <Whatsapp /> {/* ✅ WhatsApp Button Har Page Pe Show Hoga */}


      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
