import Card from '../ui/Card';

const services = [
  {
    icon: "logo1",
    title: "Branding",
    description: "We craft powerful brand identities that resonate deeply and leave lasting impressions that endure.",
    to:"/services/branding"
  },
  {
    icon: "logo2",
    title: "Web development",
    description: "We build dynamic digital spaces where meaningful connections flourish and bold visions turn into reality.",
    to:"/services/web-development"
  },
  {
    icon: "logo3",
    title: "Digital marketing",
    description: "We design impactful strategies that elevate your brand and leave a lasting mark in the digital space.",
    to:"/services/digital-marketing"
  },
  {
    icon: "logo4",
    title: "Mobile App",
    description: "We create smooth, intuitive mobile experiences that keep your users connected and engaged on the move.",
    to:"/services/mobile-app"
  },
  {
    icon: "logo5",
    title: "SEO",
    description: "We enhance your digital presence to help you stand out and achieve top rankings where it truly counts.",
    to:"/services/seo"
  },
  {
    icon: "logo6",
    title: "CRO services",
    description: "We analyze and perfect your user experience to make every interaction smooth, intuitive, and user-friendly.",
    to:"/services/cro"
  },
];

export default function WeOffer() {
  return (
    <section className="bg-[#0B0B0B;] py-16 md:pt-20 ">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="mb-6 text-[28px] font-bold text-white md:text-4xl">
            We Offer
          </h2>
          <p className="mx-auto text-sm md:text-base max-w-[634px] text-white/100 px-3">
          Explore our range of services designed to drive innovation, efficiency, and growth for your business.     
               </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
