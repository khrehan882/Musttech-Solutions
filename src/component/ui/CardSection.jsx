// CardSection.js
import React from 'react';

const CardSection = ({project}) => {
  return (

  
    <div className="bg-transparent border border-white p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-white/50">
    <h3 className="text-white text-[32px] font-bold">{project.title}</h3>
    <p className="text-white/60 mt-2">{project.description}</p>
  </div>



  );
};

export default CardSection;
