import Card from '../ui/Card';

const services = [
  {
    icon: "logo1",
    title: "Branding",
    description: "We shape identities that speak volumes, leaving impressions that stand the test of time.",
    to:"/services/branding"
  },
  {
    icon: "logo2",
    title: "Web development",
    description: "Forging digital landscapes where connections thrive and visions come to life.",
    to:"/services/web-development"
  },
  {
    icon: "logo3",
    title: "Digital marketing",
    description: "We craft strategies that make your brand unforgettable in the digital world.",
    to:"/services/digital-marketing"
  },
  {
    icon: "logo4",
    title: "Mobile App",
    description: "We build seamless mobile experiences that keep your users engaged, wherever they go.",
    to:"/services/mobile-app"
  },
  {
    icon: "logo5",
    title: "SEO",
    description: "We optimize your online presence to ensure you stand out and rank high where it matters most.",
    to:"/services/seo"
  },
  {
    icon: "logo6",
    title: "CRO services",
    description: "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
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
