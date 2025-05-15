import { Link } from "react-router-dom";

export default function Card({ service }) {
  return (
    <Link 
    to={`${service.to}`} 
    className="group rounded border border-[#A1AEBF] p-5 transition-all duration-300 transform hover:scale-105 hover:border-red-500"
  >
    <div className="mb-3 inline-block rounded-lg">
      <img
        src={`/images/services/${service.icon}.svg`} 
        alt={`Logo ${service.title}`} 
        width={48} 
        height={48} 
      />
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
    <p className="text-white/100 text-sm">{service.description}</p>
  </Link>
  
  );
}
