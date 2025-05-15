import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../utils/API_URL";
import { toast } from "react-toastify";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);

    try {
      setLoading(true); // ✅ Set loading to true when request starts

      const response = await axios.post(`${API_URL}/contact/newsletter`, { email });
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black px-6 py-10 md:py-20">
      <div className="mx-auto container">
        {/* CTA Card */}
        <div className="rounded bg-customred   py-10 px-8 md:py-16 text-center">
          <h2 className="mb-5 text-2xl  font-bold text-white md:text-4xl">
            {`Let's discuss your idea`}
          </h2>
          <p className="mb-8  text-base text-red-100 hidden md:block ">
            {`Share your vision with us, and let's create something`} <br />
            {`extraordinary together`}
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md gap-2 md:gap-4 "
          >
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 rounded-full text-xs md:text-sm bg-white px-4 py-2 md:px-6 md:py-3 text-black placeholder:text-[#0D0E14]   focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              disabled={loading}  // Disable the button when submitting
              className="rounded-full text-xs md:text-sm  bg-black px-4 py-2 md:px-6 md:py-3 font-bold text-customred transition-colors hover:bg-gray-800 hover:text-white"
            >
              {loading ? "Sending..." : "SEND"} {/* Change button text */}
            </button>
          </form>
        </div>

        {/* Go to Top Button */}
        <div className="mt-5 text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-xs rounded-full border border-white px-6 py-2 md:py-3 md:text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            GO TO TOP
          </button>
        </div>
      </div>
    </section>
  );
}
