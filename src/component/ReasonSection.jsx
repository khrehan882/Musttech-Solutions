import { Link } from "react-router-dom";

export default function ReasonSection() {
  return (
    <section className="relative md:min-h-[400px]  bg-black px-6 py-16 md:py-20 overflow-hidden">
      {/* Content */}
      <div className="relative mx-auto container flex flex-wrap justify-between">
        <div className="max-w-2xl">
          <h2 className="mb-5 md:mb-7 text-xl font-normal text-white md:text-3xl lg:text-4xl">
            There must be a reason you are here.
          </h2>
          <div className="mb-7 md:mb-12 text-xs md:text-base text-white">
            <p>Brand needs a redesign? Interesting web application idea?</p>
            <p>Your project needs development partner?</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 md:gap-7">
            <Link
              to="/contact"
              className="rounded-full bg-customred px-6 py-3 md:py-2 md:px-4 text-xs md:text-base font-medium text-white transition-colors hover:bg-red-600"
            >
              Contact us
            </Link>
            <Link
              to="/careers"
              className=" font-semibold text-white underline underline-offset-2 text-sm md:text-base transition-colors hover:text-customred"
            >
              Find job positions
            </Link>
          </div>
        </div>
        <div className="max-w-2xl hidden lg:block">
          <img
            src="/images/dots.svg"
            alt="dots"
            width={365}
            height={142}
            className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}