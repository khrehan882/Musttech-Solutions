import { Link } from "react-router-dom";

export default function WhyChoose() {
  return (
    <section className="bg-black py-16 md:pt-20 lg:pt-20 lg:pb-28 hidden md:block">
      <div className="mx-auto container px-6 ">
        <div className=" grid items-center gap-12 lg:grid-cols-2 ">
          {/* Illustration */}
          <div className="relative">
            <img
              src={`/images/whychoose2.svg`}
              alt="whychoose"
              width={365}
              height={142}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="text-left">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Why choose us
            </h2>
            <p className="mb-8 text-base font-normal text-white/100">
              Choose us for our distinct mix of skill, innovation, and commitment. We align with your business goals and craft customized solutions that deliver real impact—always driven by creativity, precision, and a forward-thinking approach.
            </p>
            <Link
              to="/contact"
              className="inline-block text-sm font-bold rounded-full border border-customred px-6 py-3 text-customred transition-colors hover:customred hover:text-white"
            >
              LET&apos;S CONNECT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
