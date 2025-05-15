import { Link } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import ReasonSection from "../../component/ReasonSection";

export default function About() {
  const data = {
    page: "About us",
    title: "MustTech",
    description: `We're the storytellers of the digital age, weaving strategies that 
bring your brand to life and make it resonate with the world. With 
every pixel, every word, and every campaign, we guide your 
business toward lasting success in an ever-evolving digital 
landscape.`,
    button: "CONTACT",
    color1: "#EC2027",
    color2: "#FFF",
  };

  const content = {
    title: "Company",
    description: `Our company is more than just a name—it's a promise. A promise to deliver excellence, innovation, and results that 
              redefine what's possible in the digital world. We are a collective of dreamers and doers, creators and strategists, all united 
              by a singular mission: to help businesses not just succeed, but thrive in an ever-evolving landscape. Here, every project is a 
              story waiting to be told, and every client is a partner in the journey of crafting something extraordinary. <br/> 
              From designing visually stunning websites to creating powerful marketing campaigns, we don't just meet expectations—we 
              aim to surpass them. Our work is fueled by passion, guided by expertise, and rooted in a deep understanding of the unique 
              challenges our clients face. Whether it's bringing a brand to life, building a digital presence, or driving measurable results, 
              we approach every challenge with creativity, precision, and an unwavering commitment to excellence.`,
  };

  const content2 = {
    title: "Team",
    description: `Our team is the heart and soul of everything we do. A diverse group of passionate professionals, we bring together
                            creativity, expertise, and innovation to deliver exceptional results. From strategists and designers to developers and
                            marketers, each member plays a vital role in shaping our success and yours.    <br/>    We believe in collaboration, where ideas flow freely, and every voice is valued. Together, we tackle challenges with
                            determination, turning obstacles into opportunities and visions into realities. Our team doesn't just work for you; we work
                            with you, becoming partners in your journey toward achieving greatness.`,
  };

  return (
    <div>
      <HeroSection data={data} />

      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10  lg:space-y-20">
          {/* Company Section */}
          <Content data={content} />

          {/* Company Section */}
          <Content data={content2} />

          {/* Home Button */}
          <Link
            to="/"
            className="inline-block rounded-full border border-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            GO TO HOME
          </Link>
        </div>
      </section>

      <ReasonSection />
    </div>
  );
}
