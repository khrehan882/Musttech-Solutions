import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../utils/API_URL";
import { toast } from "react-toastify";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);

    try {
      setLoading(true); // ✅ Set loading to true when request starts

      const response = await axios.post(`${API_URL}/contact/contact-back`, { email });
      setLoading(false); // ✅ Ensure loading state is set to false

      // Show a success toast notification
      toast.success(response.data.message);

      // Clear form fields
      // resetForm();
    } catch (error) {
      toast.error("There was an error submitting your form.");
      // console.log("error is in contact");
      setLoading(false); // ✅ Ensure loading state is set to false
    }

    setEmail("");
  };

  return (
    <>
      {/* hero section start */}
      <div className="relative  w-full overflow-hidden ">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "67px 67px",
          }}
        />




        {/* Red Gradient */}



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
            fill="#EC2027"
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
            fill="#EC2027"
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




        {/* white Gradient */}

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
            fill="#FFFFFF"
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
            fill="#FFFFFF"
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




        {/* Content */}
        <div className="relative max-w-xs  md:max-w-[411px] lg:max-w-[523px] mx-auto px-6 pb-8 pt-6  sm:pt-11 sm:pb-20 lg:pt-20 lg:pb-52 ">
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-7xl lg:text-8xl">
            Attract
            <br />
            <span
              style={{
                background:
                  "linear-gradient(217.81deg, #EC2027 25.05%, #FFFFFF 42.45%, #EC2027 61.31%, #EC2027 79.45%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              NewLeads
            </span>
            <br />
            like never
            <br />
            before
          </h1>

          <p className="mb-8 text-xs sm:text-sm  lg:text-base text-white/100">
            At Deepsol Technologies, we craft the future—innovating today to
            empower your tomorrow.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-xl gap-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-full  bg-transparent   text-xs sm:text-sm lg:text-lg  px-4 py-3 sm:px-4 sm:py-2 lg:px-6  lg:py-3 text-white ring-1 ring-gray-300 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              disabled={loading} // Disable the button when submitting
              className="rounded-full bg-[#EC2027;] text-xs sm:text-sm lg:text-lg px-4 py-3 sm:px-4 sm:py-2 lg:px-6  lg:py-3 font-semibold text-black transition-colors hover:bg-red-600"
            >
              {loading ? "Sending..." : "SEND"} {/* Change button text */}
            </button>
          </form>
        </div>


        
      </div>

      {/* hero section end */}
    </>
  );
}
