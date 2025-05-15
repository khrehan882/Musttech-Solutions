import { Link } from "react-router-dom";

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-[330px] md:min-h-[500px] lg:min-h-[600px] bg-black overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "67px 67px",
        }}
      />

      {/* Gradient Effects up side */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="424"
        height="631"
        viewBox="0 0 424 631"
        fill="none"
        className="hidden md:block absolute top-0 right-0 "
      >
        <g filter="url(#filter0_f_36_39)">
          <path
            d="M502 151.861C502 301.485 352.209 641.753 354.029 392.224C355.848 142.695 332.803 419.723 203.025 304.634C73.2469 189.545 208.483 -116 322.494 -116C436.505 -116 502 2.23816 502 151.861Z"
            fill={`${data.color1}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_39"
            x="0"
            y="-266"
            width="652"
            height="897"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_36_39"
            />
          </filter>
        </defs>
      </svg>

      {/* Gradient Effects up side res */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="106"
        height="225"
        viewBox="0 0 106 225"
        fill="none"
        className="block md:hidden  absolute top-0 right-0 "
      >
        <g filter="url(#filter0_f_420_1996)">
          <path
            d="M132.916 45.6539C132.916 108.984 93.3881 253.008 93.8682 147.391C94.3483 41.7741 88.2671 159.031 54.0201 110.317C19.7731 61.6043 55.4604 -67.7227 85.5465 -67.7227C115.633 -67.7227 132.916 -17.6765 132.916 45.6539Z"
            fill={`${data.color1}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_420_1996"
            x="0.444016"
            y="-107.306"
            width="172.055"
            height="331.856"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="19.7917"
              result="effect1_foregroundBlur_420_1996"
            />
          </filter>
        </defs>
      </svg>

      {/* Gradient Effects down side */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block absolute bottom-0 left-0"
        width="436"
        height="326"
        viewBox="0 0 436 326"
        fill="none"
      >
        <g filter="url(#filter0_f_36_48)">
          <path
            d="M-201.037 351.096C-205.111 263.638 -6.971 55.0806 -2.69488 201.053C1.58125 347.026 25.9459 183.61 208.777 242.511C391.607 301.411 212.674 488.733 54.8099 496.088C-103.054 503.443 -196.962 438.555 -201.037 351.096Z"
            fill={`${data.color2}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_48"
            x="-351.098"
            y="0.608643"
            width="787.082"
            height="646.048"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_36_48"
            />
          </filter>
        </defs>
      </svg>

      {/* Gradient Effects down side res */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block md:hidden absolute bottom-0 left-0"
        width="118"
        height="229"
        viewBox="0 0 118 229"
        fill="none"
      >
        <g filter="url(#filter0_f_408_864)">
          <path
            d="M-132.175 126.559C-133.931 88.8614 -48.5266 -1.03288 -46.6835 61.8856C-44.8403 124.804 -34.3385 54.3672 44.4669 79.7549C123.272 105.143 46.1468 185.884 -21.8973 189.054C-89.9414 192.224 -130.418 164.256 -132.175 126.559Z"
            fill={`${data.color2}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_408_864"
            x="-171.786"
            y="0.55925"
            width="289.116"
            height="228.323"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="19.7917"
              result="effect1_foregroundBlur_408_864"
            />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative mx-auto container px-6 pb-10 pt-5 md:py-16 lg:py-20">
        <span className="mb-2 md:mb-5 inline-block  text-base md:text-2xl font-bold text-customred">
          {data.page}
        </span>
        <h1 className="mb-2 md:mb-6 text-[40px] font-bold text-white md:text-6xl lg:text-7xl">
          {data.title}
        </h1>
        <p className="mb-2 md:mb-8 text-sm max-w-[523px]  font-normal leading-relaxed text-white/100 md:text-base">
          {data.description}
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-full text-xs md:text-base bg-customred px-6 py-3 font-semibold text-black transition-colors hover:bg-red-600"
        >
          {data.button.toUpperCase()}
        </Link>
      </div>
    </section>
  );
}
