import { Link } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import ProfileCard from "../../component/ui/ProfileCard";
import ReasonSection from "../../component/ReasonSection";
import { useState } from "react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const data = {
    page: "Portfolio",
    title: "Some pieces of our work",
    description: `We’re the storytellers of the digital age, weaving strategies that bring your brand to life and make it resonate with the world. With every pixel, every word, and every campaign, we guide your business toward lasting success in an ever-evolving digital landscape.`,
    button: "CONTACT",
    color2: "#EC2027",
    color1: "#FFF",
  };

  const content = {
    title: "Completed Projects",
    description: `Our completed projects showcase the perfect blend of creativity, strategy, and execution. Each project is a testament to our dedication to delivering exceptional results, tailored to meet unique client needs. <br/>
    From impactful branding campaigns to seamless websites and data-driven marketing strategies, every project reflects our commitment to innovation and excellence. <br/>
Explore our portfolio to see how we’ve transformed ideas into success stories, helping businesses thrive and stand out in their industries. Let our results speak for themselves.`,
  };

  const projects = [
    {
      title: "chungiyoo",
      category: "WEBSITE",
      image: "/portfolio/portfolio1",
      link: "https://chungiyoo.com/",
    },
    {
      title: "Better Odds",
      category: "WEBSITE",
      image: "/portfolio/portfolio15",
      link: "https://bettorodds.co/",
    },
    {
      title: "Amnaismail",
      category: "DASHBOARD",
      image: "/portfolio/portfolio5",
      link: "https://amnaismail.com/",
    },
    {
      title: "Natalinanoel",
      category: "WEBSITE",
      image: "/portfolio/portfolio2",
      link: "https://natalinanoel.be/natalinanoel",
    },
    {
      title: "Eon Health",
      category: "WEBSITE",
      image: "/portfolio/portfolio3",
      link: "https://www.eonhealth.com/",
    },
    {
      title: "Creative landing page",
      category: "UI KIT",
      image: "/portfolio/portfolio6",
      link: "https://tashudistribution.com/",
    },
    {
      title: "Breshna",
      category: "WEBSITE",
      image: "/portfolio/portfolio4",
      link: "https://breshna.io/",
    },
    {
      title: "Beardbrand",
      category: "E-COMMERCE STORE",
      image: "/portfolio/portfolio11",
      link: "https://www.beardbrand.com/",
    },
    {
      title: "Popsockets",
      category: "E-COMMERCE STORE",
      image: "/portfolio/portfolio12",
      link: "https://www.popsockets.com/",
    },
    {
      title: "Tashudistribution",
      category: "WEBSITE",
      image: "/portfolio/portfolio7",
      link: "https://tashudistribution.com/",
    },
    {
      title: "AirYoda - Social Audio Dating",
      category: "IOS APP",
      image: "/portfolio/portfolio10",
      link: "https://apps.apple.com/tt/app/airyoda-social-audio-dating/id1550695380",
    },
    {
      title: "Global Institute Of Creative Thinkiing",
      category: "UI KIT",
      image: "/portfolio/portfolio8",
      link: "https://gioct.org/",
    },
    {
      title: "Frankie Lowe",
      category: "DASHBOARD",
      image: "/portfolio/portfolio9",
      link: "https://www.frankie-lowe.com/",
    },
    {
      title: "Holstee",
      category: "UI KIT",
      image: "/portfolio/portfolio13",
      link: "https://www.holstee.com/",
    },
    {
      title: "Dryrobe",
      category: "DASHBOARD",
      image: "/portfolio/portfolio14",
      link: "https://dryrobe.com/",
    },
    // {
    //   title: "SAS Logistics",
    //   category: "BRANDING",
    //   image: "/portfolio/portfolio7",
    //   link: "/projects/sas-logistics",
    // },
    // {
    //   title: "MustTech",
    //   category: "BRANDING",
    //   image: "/portfolio/portfolio8",
    //   link: "/projects/musttech",
    // },
    // {
    //   title: "ArtGarage",
    //   category: "BRANDING",
    //   image: "/portfolio/portfolio9",
    //   link: "/projects/artgarage",
    // },
  ];

  return (
    <div>
      <HeroSection data={data} />

      {/* Content section */}
      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10 lg:space-y-20">
          <Content data={content} />
        </div>

        {/* Portfolio Section */}
        <div className="py-1 mt-10 md:mt-24 md:mb-14 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <ProfileCard key={index} project={project} />
            ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-8 flex items-center gap-2 rounded-full border text-xs md-text-base border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-black"
          >
            {showAll ? "Show less" : "Show more..."}
          </button>
        </div>

        
        
        {/* Home Button */}
        <Link
          to="/"
          className="mt-10 inline-block rounded-full border border-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          GO TO HOME
        </Link>



      </section>

      <ReasonSection />
    </div>
  );
}
