import { Link } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import ReasonSection from "../../component/ReasonSection";
import { PaperclipIcon as PaperAirplane } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/API_URL";
import { toast } from "react-toastify";

export default function Contact() {
  const data = {
    page: "Contact",
    title: "Let’s Connect",
    description: `We’re the storytellers of the digital age, weaving strategies that bring your brand to life and make it resonate with the world. With every pixel, every word, and every campaign, we guide your business toward lasting success in an ever-evolving digital landscape.`,
    button: "Call Us",
    color1: "#EC2027",
    color2: "#FFF",
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });

  const subjects = [
    "General Inquiry",
    "Brand Identity",
    "UI/UX",
    "Packaging Design",
  ];

  const [loading, setLoading] = useState(false); // State to manage loading status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      setLoading(true); // ✅ Set loading to true when request starts

      const response = await axios.post(`${API_URL}/contact/post`, formData);

      toast.success(response.data.message); // ✅ Success toast message
    } catch (error) {
      console.error("Error in contact form submission:", error);
      toast.error("There was an error submitting your form.");
    } finally {
      // ✅ Reset the form fields after successful submission or failure
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
      });

      setLoading(false); // ✅ Ensure loading state is set to false
    }
  };

  return (
    <div>
      {/* <HeroSection data={data} /> */}

      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px] ">
        <div className=" space-y-10  lg:space-y-20">
          {/* contact form */}

          <section className="font-inter ">
            <div className="relative grid gap-12  lg:grid-cols-12 ">
              {/* Left side - Image placeholder */}
              <div className="hidden lg:col-span-5 px-9 py-7 text-white rounded-[30px] bg-[#181818] lg:flex lg:flex-col lg:justify-between ">
                <h1 className="text-[38px] font-bold mb-28">
                  Contact Information
                </h1>

                <div className="text-[23px] font-bold ">
                  <div className="flex gap-4 mb-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M7.65048 0.936523C7.99898 1.08176 8.38273 1.17513 8.69181 1.38054C9.29338 1.78513 9.59623 2.39098 9.62113 3.11925C9.66261 4.36829 9.76011 5.61112 10.0588 6.82904C10.1791 7.32285 10.3285 7.81044 10.455 8.30425C10.65 9.06363 10.4675 9.73381 9.98829 10.35C9.20003 11.3646 8.43252 12.3937 7.665 13.4249C7.62144 13.483 7.61937 13.6158 7.65671 13.6864C9.23737 16.7052 11.459 19.1183 14.4295 20.8155C14.6992 20.969 14.9626 21.1329 15.2385 21.2699C15.3132 21.3072 15.4563 21.3031 15.5206 21.2553C16.5516 20.4877 17.5804 19.72 18.5948 18.9315C19.2005 18.4605 19.8643 18.3174 20.5966 18.4854C21.3309 18.6535 22.0528 18.9046 22.7954 19.0207C23.7454 19.1701 24.71 19.2469 25.6725 19.305C26.7948 19.3714 27.61 19.9503 27.9004 20.9835C27.9626 21.2076 27.9875 21.4504 27.9896 21.6848C27.9979 23.3156 27.9979 24.9485 27.9917 26.5794C27.9875 27.9819 27.0043 28.9509 25.6082 28.9364C20.4348 28.8803 15.6803 27.4404 11.3906 24.546C7.23976 21.745 4.15519 18.0331 2.13891 13.4478C1.14736 11.1986 0.500163 8.85408 0.211827 6.41408C0.126778 5.70241 0.066622 4.98659 -0.00390625 4.27285C-0.00390625 3.81639 -0.00390625 3.362 -0.00390625 2.90554C0.151671 2.54659 0.265761 2.1586 0.475271 1.83285C0.813392 1.30377 1.36932 1.07139 1.96466 0.936523C3.86063 0.936523 5.75452 0.936523 7.65048 0.936523Z"
                        fill="white"
                      />
                    </svg>


                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M20.52 3.48C18.44 1.4 15.68 0 12.64 0C5.96 0 0.72 5.24 0.72 11.92C0.72 14.48 1.6 16.92 3.12 18.96L2.08 23.6L6.92 22.28C8.8 23.28 10.68 23.84 12.64 23.84C19.32 23.84 24.56 18.6 24.56 11.92C24.56 8.88 23.16 6.12 21.08 4.04L20.52 3.48ZM12.64 21.12C11 21.12 9.48 20.72 8.04 20.08L7.52 19.84L4.48 20.68L5.24 17.72L4.96 17.2C3.52 15.4 2.8 13.64 2.8 11.92C2.8 6.8 7.48 2.64 12.64 2.64C14.88 2.64 16.96 3.52 18.6 5.08C20.24 6.64 21.12 8.72 21.12 10.96C21.12 16.08 16.44 21.12 12.64 21.12ZM17.2 14.68C16.92 14.48 15.52 13.72 15.24 13.6C14.96 13.48 14.76 13.44 14.56 13.76C14.36 14.08 13.88 14.68 13.68 14.92C13.48 15.16 13.28 15.2 12.96 15C12.64 14.8 11.6 14.36 10.4 13.24C9.48 12.36 8.88 11.32 8.68 10.96C8.48 10.6 8.68 10.36 8.84 10.2C9 10.04 9.16 9.92 9.36 9.6C9.56 9.28 9.48 9.08 9.4 8.92C9.32 8.76 8.72 7.16 8.52 6.64C8.32 6.12 8.12 6.2 7.92 6.2C7.72 6.2 7.52 6.2 7.32 6.2C7.12 6.2 6.84 6.24 6.64 6.44C6.44 6.64 5.92 7.08 5.92 8.08C5.92 9.08 6.64 10.28 6.8 10.52C6.96 10.76 8.4 13 10.48 14.84C12.56 16.68 14.64 17.36 14.92 17.44C15.2 17.52 15.92 17.4 16.44 16.84C16.96 16.28 17.6 15.48 17.68 15.32C17.76 15.16 17.76 14.88 17.6 14.68Z"
                        fill="white"
                      />
                    </svg> */}

                    {/* <span>+92 302-6666400</span> */}
                    <span>+1 512 587-9403</span>
                  </div>

                  <div className="flex gap-4 mb-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M28.9526 5.71631H3.28906V26.2472H28.9526V5.71631ZM26.3863 10.849L16.1208 17.2649L5.85542 10.849V8.28266L16.1208 14.6986L26.3863 8.28266V10.849Z"
                        fill="white"
                      />
                    </svg>
                    <span>admin@musttechsolutions.com</span>
                  </div>

                  <div className="flex gap-4 mb-56">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16.1214 2.46362C13.3148 2.46693 10.624 3.58333 8.63946 5.56791C6.65487 7.5525 5.53848 10.2432 5.53517 13.0498C5.53181 15.3434 6.281 17.5748 7.66781 19.4016C7.66781 19.4016 7.95652 19.7817 8.00368 19.8366L16.1214 29.4104L24.2429 19.8318C24.2853 19.7808 24.575 19.4016 24.575 19.4016L24.5759 19.3987C25.9621 17.5727 26.7109 15.3424 26.7076 13.0498C26.7043 10.2432 25.5879 7.5525 23.6033 5.56791C21.6187 3.58333 18.928 2.46693 16.1214 2.46362ZM16.1214 16.8994C15.36 16.8994 14.6158 16.6736 13.9827 16.2506C13.3496 15.8276 12.8562 15.2264 12.5649 14.523C12.2735 13.8196 12.1973 13.0456 12.3458 12.2988C12.4944 11.5521 12.861 10.8662 13.3994 10.3278C13.9377 9.78944 14.6236 9.42281 15.3704 9.27428C16.1171 9.12574 16.8911 9.20197 17.5945 9.49334C18.2979 9.7847 18.8992 10.2781 19.3222 10.9112C19.7451 11.5442 19.9709 12.2885 19.9709 13.0498C19.9696 14.0704 19.5637 15.0488 18.842 15.7705C18.1204 16.4921 17.142 16.8981 16.1214 16.8994Z"
                        fill="white"
                      />
                    </svg>
                    <span>

                      30 N gold Street Sherdon <br /> Wyoming, US

                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* linkedIn */}
                  <span>
                    <img src={`/images/linkedIn.svg`} alt="whychoose" />
                  </span>

                  {/* Insta  */}
                  <span>
                    <img src={`/images/insta.svg`} alt="whychoose" />
                  </span>

                  {/* facebook  */}
                  <span>
                    <img src={`/images/facebook.svg`} alt="whychoose" />
                  </span>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="relative lg:mt-10  lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-12 ">
                  {/* Name fields */}
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="font-semibold text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-white bg-transparent pb-2 text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="font-semibold text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-white bg-transparent pb-2 text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact fields */}
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-semibold text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-white bg-transparent pb-2 text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-semibold text-white"
                      >
                        Phone Number
                      </label>
                      <div className="flex items-center border-b border-white focus-within:border-red-500">
                        {/* <span className="text-gray-500">+1</span> */}
                        <input
                          type="tel"
                          id="phone"
                          name="phoneNumber"
                          placeholder="+1"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent pb-2 pl-2 text-white placeholder:text-gray-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject selection */}
                  <div className="space-y-4">
                    <label className="text-sm text-white">
                      Select Subject?
                    </label>
                    <div className="flex flex-wrap justify-between gap-4">
                      {subjects.map((subject) => (
                        <label
                          key={subject}
                          className="flex items-center gap-2 "
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            checked={formData.subject === subject}
                            onChange={handleChange}
                            className="peer text-white accent-red-500 focus:ring-red-500"
                          />
                          <span className="text-sm text-white">{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message.."
                      rows={1}
                      className="w-full border-b border-white bg-transparent pb-2 text-white placeholder:text-white  placeholder:text-sm focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="relative flex justify-end">
                    <button
                      disabled={loading} // Disable the button when submitting
                      type="submit"
                      className="group mb-10 md:mb-0 gap-2 rounded-md bg-[#1E1E1E] text-sm md:text-base px-8 md:px-12 py-2  md:py-3.5 text-white transition-colors hover:bg-red-600 z-10"
                    >
                      {loading ? "Sending..." : "Send Message"}{" "}
                      {/* Change button text */}
                    </button>

                    {/* Letter send image */}
                    <div className="absolute bottom-0 left-0 rotate-[45deg] sm:top-5 sm:right-12 sm:left-auto sm:rotate-0 transition-all">
                      <img
                        alt="whychoose"
                        src="/images/letter_send.svg"
                        className="w-32 md:w-60"
                      />
                    </div>
                  </div>



                </form>
              </div>
            </div>
          </section>

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
