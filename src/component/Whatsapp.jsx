import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const phoneNumber = "+15125879403"; // Apna WhatsApp number yahan daalo (country code ke sath)
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-14 right-10 bg-[#ffffff] text-white 
                 w-14 h-14 flex items-center justify-center 
                 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={36} className="text-[#25D366]" />
    </button>
  );
};

export default Whatsapp;
