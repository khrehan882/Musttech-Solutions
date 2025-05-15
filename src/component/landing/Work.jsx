import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    category: "WEBSITE",
    title: "Creative landing page",
    image: "/services/work1",
    link: "https://tashudistribution.com/",
  },
  {
    category: "DEVELOPMENT",
    title: "Automation. Advanced Level",
    image: "/services/work2",
    link: "https://dryrobe.com/",
  },
  {
    category: "BRANDING",
    title: "Creative Branding",
    image: "/services/work3",
    link: "https://breshna.io/",
  },
];

const projects2 = [
  {
    category: "DIGITAL MARKETING",
    title: "Why We Collect User's Data",
    image: "/services/work4",
    link: "https://www.popsockets.com/",
  },
  {
    category: "USER TESTING",
    title: "Creative landing page",
    image: "/services/work5",
    link: "https://www.frankie-lowe.com/",
  },
  {
    category: "SEO",
    title: "How We Optimized Our SEO",
    image: "/services/work6",
    link: "https://www.beardbrand.com/",
  },
];

export default function Work() {
  return (
    <section className="bg-[#0B0B0B] py-16 md:py-20 font-quicksand">
      <div className="mx-auto container px-6 grid gap-8 lg:grid-cols-3">
        {/* Header */}
        <div className="lg:col-span-1 mb-12 max-w-[412px]">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Some pieces of our work
          </h2>
          <p className="mb-6 text-white/100 font-medium">
            Explore some of our most successful projects, where we&apos;ve transformed
            ideas into impactful digital experiences. Each piece showcases our
            commitment to excellence, creativity, and delivering results that speak
            for themselves.
          </p>
          <Link
            to="/portfolio"
            className="inline-block rounded-full border text-sm font-bold border-customred px-6 py-3 text-customred transition-colors hover:bg-customred hover:text-white"
          >
            SHOW MORE
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Link to={project.link} key={index} className="group block" target="_blank">
              <div className="relative overflow-hidden rounded-s border border-[#A1AEBF] p-6 transition-all duration-700 ease-in-out hover:border-customred">
                <div className="relative">
                  {/* Image Container */}
                  <div className="max-h-0 mb-6 overflow-hidden transition-[max-height] duration-700 ease-in-out group-hover:max-h-[200px]">
                    <img
                      src={`/images${project.image}.png`}
                      alt={project.title}
                      width={365}
                      height={142}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-5">
                  <span className="inline-block text-xs rounded bg-customred px-2 py-1 font-medium text-black">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-5 text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center text-[#728095] transition-colors duration-500 ease-in-out group-hover:text-customred">
                  Read more
                  <CircleArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Projects2 Grid */}
        <div className="flex flex-col gap-8">
          {projects2.map((project, index) => (
            <Link to={project.link} key={index} className="group block" target="_blank">
              <div className="relative overflow-hidden rounded-s border border-[#A1AEBF] p-6 transition-all duration-700 ease-in-out hover:border-customred">
                <div className="relative">
                  {/* Image Container */}
                  <div className="max-h-0 mb-6 overflow-hidden transition-[max-height] duration-700 ease-in-out group-hover:max-h-[200px]">
                    <img
                      src={`/images${project.image}.png`}
                      alt={project.title}
                      width={365}
                      height={142}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-5">
                  <span className="inline-block text-xs rounded bg-customred px-2 py-1 font-medium text-black">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-5 text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center text-[#728095] transition-colors duration-500 ease-in-out group-hover:text-customred">
                  Read more
                  <CircleArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
