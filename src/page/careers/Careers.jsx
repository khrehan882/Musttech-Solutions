"use client";

import { useEffect, useRef, useState } from "react";
import {
  Clock3,
  Dumbbell,
  Shield,
  HandHeart,
  PartyPopper,
  Rocket,
  Calendar,
  CreditCard,
  Glasses,
  GraduationCap,
  Baby,
  Users,
  Cake,
  ArrowRight,
  Link,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ReasonSection from "../../component/ReasonSection";

import image1 from "../../assets/Img1.png";
import image2 from "../../assets/Img2.png";
import image3 from "../../assets/Img3.png";
import image4 from "../../assets/Img4.png";
import image5 from "../../assets/Img5.png";
import image6 from "../../assets/Img6.png";
import image7 from "../../assets/Img7.png";

export default function Careers() {
  const data = {
    page: "Careers",
    title: "Step Into Your Future",
    description: `We’re the storytellers of the digital age, weaving strategies that bring your brand to life and make it resonate with the world. With every pixel, every word, and every campaign, we guide your business toward lasting success in an ever-evolving digital landscape.`,
    button: "CONTACT",
    color1: "#EC2027",
    color2: "#FFF",
  };

  const content = {
    title: "MustTech Culture",
    description: `The <strong> MustTech </strong> environment is more than just a workplace—it’s a community where innovation thrives, ideas are valued, and careers flourish. Here, you’ll find a dynamic and collaborative culture that encourages growth, creativity, and pushing boundaries. <br/>
We believe in nurturing talent by providing opportunities to learn, experiment, and excel. With access to cutting-edge tools and a team of passionate professionals, you’ll be part of a journey to create impactful solutions for clients across diverse industries. <br/>
At <strong> MustTech </strong>, your career isn’t just a job—it’s a chance to make a difference, embrace challenges, and be part of something extraordinary in the ever-evolving digital world.`,
  };

  // benifits section start

  const benefits = [
    {
      icon: "/benefit/benefit1",
      title: "Flexible working hours",
    },
    {
      icon: "/benefit/benefit2",
      title: "Sport compensation",
    },
    {
      icon: "/benefit/benefit3",
      title: "Health care Insurance",
    },
    {
      icon: "/benefit/benefit4",
      title: "Marriage bonus",
    },
    {
      icon: "/benefit/benefit5",
      title: "Fun team events",
    },
    {
      icon: "/benefit/benefit6",
      title: "Perfessional grow budget",
    },
    {
      icon: "/benefit/benefit7",
      title: "30 days paid vacation",
    },
    {
      icon: "/benefit/benefit8",
      title: "Competitive salary",
    },
    {
      icon: "/benefit/benefit9",
      title: "Compensation for eyeglasses",
    },
    {
      icon: "/benefit/benefit10",
      title: "Allowance for first-graders",
    },
    {
      icon: "/benefit/benefit11",
      title: "Childbirth allowance",
    },
    {
      icon: "/benefit/benefit12",
      title: "Employee referral bonus",
    },
    {
      icon: "/benefit/benefit13",
      title: "Birthdays celebration",
    },
  ];

  const scrollRef = useRef(null);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to check scroll position
  const handleScrollCheck = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setScrollStart(scrollLeft <= 0); // Start reached
    setScrollEnd(scrollLeft + clientWidth >= scrollWidth - 1); // End reached
  };

  // Button click scroll function
  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Dragging Functions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Speed of dragging
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // benifits section end

  const images = [
    {
      src: image1,
      alt: "Developers working at their desks surrounded by plants",
      className: "col-span-4 row-span-4 md:col-span-2 md:row-span-2",
    },
    {
      src: image2,
      alt: "Team member smiling in modern office space",
      className: "col-span-1 row-span-1 hidden md:block",
    },
    {
      src: image3,
      alt: "Modern office interior with colorful furniture",
      className: "col-span-1 row-span-1 md:row-span-2 hidden md:block",
    },
    {
      src: image6,
      alt: "Team members collaborating at desk",
      className: "col-span-1 row-span-1 md:row-span-2 hidden md:block",
    },
    {
      src: image4,
      alt: "Comfortable meeting area in office",
      className: "col-span-1 row-span-1 hidden md:block ",
    },
    {
      src: image5,
      alt: "Team discussion in modern office setting",
      className: "col-span-2 md:col-span-1 row-span-1 ",
    },
    {
      src: image7,
      alt: "Team discussion in modern office setting",
      className: "col-span-2 md:col-span-1 row-span-1",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Find a role that suits you",
      description:
        "Discover open positions and find your desired one in the MustTech website, job listings or social media.",
      isRed: true,
      alignLeft: true,
    },
    {
      number: "02",
      title: "Send your application",
      description:
        "Some simple questions should be answered and your contact information is required",
      alignLeft: false,
    },
    {
      number: "03",
      title: "Receive your interview invite",
      description:
        "We review all applications within 3 working days and send invitation to candidates.",
      alignLeft: true,
    },
    {
      number: "04",
      title: "Choose an interview slot",
      description:
        "You will have a friendly discution with the CEO and your supervisor to talk about the work, life and etc.",
      alignLeft: false,
    },
    {
      number: "05",
      title: "Preliminary Interview",
      description:
        "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
      alignLeft: true,
    },
    {
      number: "06",
      title: "Meet the your teammates",
      description:
        "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.",
      alignLeft: false,
    },
    {
      number: "07",
      title: "Interview with our CEO",
      description: "Your colleagues are waiting for you to say a warm welcome.",
      alignLeft: true,
    },
  ];

  // job listing

  const departments = [
    { name: "All positions", count: 6 },
    { name: "Engineering", count: 2 },
    { name: "Product", count: 1 },
    { name: "Design", count: 1 },
    { name: "Operation", count: 1 },
    { name: "Marketing", count: 1 },
  ];

  const positions = [
    {
      title: "Full-Stack Developers",
      department: "Engineering",
      tags: ["Remote", "Full-time"],
      description:
        "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
    },
    {
      title: "Application developer (react native)",
      department: "Engineering",
      tags: ["Remote", "Full-time"],
      description:
        "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
    },
    {
      title: "Senior Product designer",
      department: "Design",
      tags: ["Hybrid", "Remote", "Full-time"],
      description:
        "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
    },
    {
      title: "Product Manager",
      department: "Operation",
      tags: ["Remote", "Full-time"],
      description:
        "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
    },
    {
      title: "Product Owner",
      department: "Marketing",
      tags: ["Remote", "Full-time"],
      description:
        "We've worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let's talk!",
    },
    {
      title: "Product Owner",
      department: "Product",
      tags: ["Remote", "Full-time"],
      description:
        "We've worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let's talk!",
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState("All positions");
  const [showAll, setShowAll] = useState(false);

  const filteredPositions = positions.filter(
    (position) =>
      selectedDepartment === "All positions" ||
      position.department === selectedDepartment
  );

  const visiblePositions = showAll
    ? filteredPositions
    : filteredPositions.slice(0, 3);

  const blogs = [
    {
      title: "Mobile App Development",
      heading: "How we build the Dagmarket on 6 months",
      description:
        "It is a well-known reality that when a reader encounters a page, their attention is naturally drawn to its readable content rather than its overall layout.The arrangement of text, images, and other elements may serve an aesthetic purpose, but the words themselves hold the primary focus.",
      image: "/blog/blog1",
      author: {
        name: "Kaur Kaljuma",
        avatar: "/blog/avatar1",
      },
      date: "May 20th 2020",
      link: "/blog/mobile-app-development",
    },
    {
      title: "Event Technology",
      heading: "The last anoncement for success factory",
      description:
        "It is a well-established fact that when a reader views a page, their focus is naturally drawn to its readable content rather than the overall layout. While the arrangement of text, images, and design elements contributes to aesthetics, the written content remains the primary point of interest.",
      image: "/blog/blog2",
      author: {
        name: "Raigo Tuulik ",
        avatar: "/blog/avatar2",
      },
      date: "May 20th 2020",
      link: "/blog/event-technology",
    },
    {
      title: "UI Design Systems",
      heading: "The Role of Repetition in Conversation Design",
      description:
        "It is a well-established fact that when a reader encounters a page, their attention is often drawn to the readable content rather than the overall layout. The structure and design of the page may enhance its visual appeal, but the text itself remains the primary source of engagement.",
      image: "/blog/blog3",
      author: {
        name: "Jüri Siilivask",
        avatar: "/blog/avatar3",
      },
      date: "May 20th 2020",
      link: "/blog/ui-design",
    },
    {
      title: "Development Tools",
      heading: "What I Learned From Getting Hired",
      description:
        "It is a long-established fact that when a reader encounters a page, their attention is naturally drawn to its readable content rather than the overall layout. The structure and design may enhance the visual appeal, but the text itself remains the primary focus of engagement.",
      image: "/blog/blog1",
      author: {
        name: "Mazdak Shakiba",
        avatar: "/blog/avatar4",
      },
      date: "May 20th 2020",
      link: "/blog/development-tools",
    },
    {
      title: "Development Tools",
      heading: "What I Learned From Getting Hired",
      description:
        "It is a long-established fact that when a reader views a page, they are often distracted by its readable content rather than focusing on the overall layout. While the design and structure contribute to the visual appeal, the text itself remains the central point of engagement.",
      image: "/blog/blog1",
      author: {
        name: "Robert Brown",
        avatar: "/blog/avatar4",
      },
      date: "May 20th 2020",
      link: "/blog/development-tools",
    },
  ];

  // testimonial section

  const testimonials = [
    {
      quote:
        "I do admire the company culture and, I like that. MustTech is truly the place where good attitudes have blended with proficiency. If you're going to craft something great and you have a strong eagerness to do that, MustTech will remove all hassles in your journey.",
      author: "James Olson",
      role: "Web Developer",
      linkedin: "https://linkedin.com/in/james-olson",
      image: "/testimonial/testimonial1",
    },
    {
      quote:
        "Working at MustTech has been an incredible journey of growth and innovation. The team's dedication to excellence is truly inspiring.",
      author: "Sarah Chen",
      role: "UI/UX Designer",
      linkedin: "https://linkedin.com/in/sarah-chen",
      image: "/testimonial/testimonial2",
    },
    {
      quote:
        "The collaborative environment and cutting-edge projects make every day exciting. MustTech is where talent meets opportunity.",
      author: "Michael Rodriguez",
      role: "Full Stack Developer",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      image: "/testimonial/testimonial3",
    },
    {
      quote:
        "I've found a place where creativity is valued and innovation is encouraged. The support from the team is unmatched.",
      author: "Emma Thompson",
      role: "Product Manager",
      linkedin: "https://linkedin.com/in/emma-thompson",
      image: "/testimonial/testimonial4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      <HeroSection data={data} />

      {/* content section  */}
      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10  lg:space-y-20">
          <Content data={content} />
        </div>
      </section>

      <section className="bg-black px-6 pt-16 md:pt-20 pb-10">
        <div className="mx-auto container">
          <div className="mb-9 text-start md:text-center">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
              What benefits are waiting for you?
            </h2>
            <p className="text-sm md:text-base text-white">
              <span className="text-base font-bold">MustTech</span> offers a
              variety of hand-picked benefits that you can take advantage of!
            </p>
          </div>

          {/* Scrollable wrapper */}
          <div className="relative">
            {/* Left Button (only visible when scrolled) */}
            {!scrollStart && (
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20 w-10 h-10 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              onScroll={handleScrollCheck}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="flex gap-5 overflow-x-scroll scrollbar-hide scroll-smooth select-none"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-start items-start text-left gap-2 overflow-hidden rounded-lg p-4 transition-all bg-white hover:shadow-md border border-gray-200 w-32 shrink-0 select-none" // ⬅️ Added `select-none`
                  >
                    {/* Blurry hover effect */}
                    <div
                      className="absolute w-28 h-28 bg-gradient-to-l from-white to-[#dd0c13] opacity-0 group-hover:opacity-60 transition-opacity rounded-full filter blur-xl 
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    ></div>

                    {/* Icon */}
                    <img
                      src={`/images/${Icon}.svg`}
                      alt={Icon}
                      width={32}
                      height={32}
                      className="h-9 w-9 transition-transform duration-300 group-hover:scale-110 filter brightness-0 relative z-10"
                    />

                    {/* Title */}
                    <h3 className="text-xs font-semibold text-black relative z-10">
                      {benefit.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Right Button (hidden when scrolled to end) */}
            {!scrollEnd && (
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20 w-10 h-10 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* gallery section  */}
      <section className="bg-black px-6 pt-10 pb-20">
        <div className="mx-auto container">
          <h2 className="mb-9 text-2xl font-bold text-white md:text-[34px]">
            Take a peep at what goes on at MustTech!
          </h2>

          <div className="grid gap-4 grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-sm ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* carousal section  */}

      <section className="bg-black px-6 py-16 md:py-20  hidden md:block ">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {`Don't just take our word for it!`}
            </h2>
            <p className="text-lg text-white/100">
              See the feedback from your teammates
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden mx-auto container p-8 z-0">
              {/* Quote Section */}

              <div className="relative flex flex-col justify-center mx-auto max-w-xs sm:max-w-lg md:max-w-[848px] h-[507px] md:ml-32 py-8 bg-white ">
                <div className="relative flex flex-col justify-between max-w-[552px] h-[355px] ml-24 sm:ml-44 md:ml-64 my-16 ">
                  <div className="absolute top-0 -left-7 sm:-left-8 md:-left-12 ">
                    <img
                      alt="dsfa"
                      class="object-cover w-4 sm:w-5 md:w-10 "
                      src="/images/quote1.svg"
                    ></img>
                  </div>

                  <div className="">
                    <blockquote className="mb-2  text-xs sm:text-sm md:text-xl text-gray-900  pe-5 ">
                      {testimonials[currentIndex].quote}
                    </blockquote>
                  </div>

                  <div>
                    <div className="mb-1 text-sm sm:text-base md:text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="mb-4 text-xs sm:text-sm md:text-base text-gray-900">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        className="w-4 md:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.625 4.29243C0.625 2.08352 2.41567 0.292847 4.62458 0.292847H22.2228C24.4317 0.292847 26.2223 2.08352 26.2223 4.29243V21.8906C26.2223 24.0995 24.4317 25.8902 22.2228 25.8902H4.62458C2.41567 25.8902 0.625 24.0995 0.625 21.8906V4.29243ZM7.18432 10.9317V19.4909H9.90404V10.9317H7.18432ZM7.02433 8.21202C7.02433 9.09193 7.66427 9.73187 8.54418 9.73187C9.42408 9.73187 10.064 9.09193 10.064 8.21202C10.064 7.33212 9.42408 6.69218 8.54418 6.69218C7.74426 6.69218 7.02433 7.33212 7.02433 8.21202ZM17.1033 19.4909H19.663V14.2114C19.663 11.5717 18.0632 10.6918 16.5433 10.6918C15.1835 10.6918 14.2236 11.5717 13.9836 12.1316V10.9317H11.4239V19.4909H14.1436V14.9313C14.1436 13.7315 14.9435 13.0915 15.7434 13.0915C16.5433 13.0915 17.1033 13.4915 17.1033 14.8513V19.4909Z"
                          fill="#0040D8"
                        />
                      </svg>

                      <span className="text-xs md:text-base text-gray-600 hover:text-blue-700">
                        LinkedIn profile
                      </span>
                    </div>
                  </div>
                </div>

                {/* Current Testimonial Image */}
                <div className="absolute top-7 -left-40 overflow-hidden z-30">
                  <img
                    // src="/images/testimonial/testimonial1.png"
                    src={`/images${testimonials[currentIndex].image}.png`}
                    alt={testimonials[currentIndex].author}
                    className="object-cover max-w-56  sm:max-w-72  md:max-w-80 h-[450px]"
                  />
                </div>

                {/* Other Team Members Strip */}
                <div className="absolute top-7 -z-10 -right-72 grid grid-cols-3 overflow-hidden">
                  {testimonials.map(
                    (testimonial, index) =>
                      index !== currentIndex && (
                        <img
                          src={`/images/${testimonial.image}.png`}
                          alt={testimonial.author}
                          className="object-cover max-w-24 h-[450px]"
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mx-auto max-w-[848px]  flex items-center justify-between">
            <div className="text-white/100">
              {/* Text */}
              <div>
                {currentIndex + 1}/{testimonials.length} Testimonials
              </div>

              {/* Progress Bar */}
              <div className="relative mt-1 w-1/2 h-1 bg-[#4C4C4C] ">
                <div
                  className="absolute top-0 left-0 h-1 bg-white "
                  style={{
                    width: `${
                      ((currentIndex + 1) / testimonials.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="group flex items-center gap-3 rounded-full text-xl px-6 py-2 text-white transition-colors  hover:text-red-500"
            >
              Next
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* carousal section responsive  */}

      <section className="bg-black px-6 py-16 md:py-20 block md:hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold text-white md:text-5xl">
              {`Don't just take our word for it!`}
            </h2>
            <p className="text-sm md:text-lg text-white/100">
              See the feedback from your teammates
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden mx-auto container  z-0">
              {/* Quote Section */}

              <div className="relative flex flex-col justify-center pl-5   py-8 bg-white ">
                <div className=" relative mx-auto max-w-[212px]">
                  <blockquote className="mb-3  text-[10px]  text-gray-900 ">
                    {testimonials[currentIndex].quote}
                  </blockquote>

                  <div className="absolute top-0 -left-6  ">
                    <img
                      alt="dsfa"
                      class="object-cover w-4 sm:w-5 md:w-10 "
                      src="/images/quote1.svg"
                    ></img>
                  </div>

                  <div>
                    <div className="mb-1 text-xs  font-bold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="mb-4 text-[10px]  text-gray-900">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>


                {/* Other Team Members Strip */}
                <div className="absolute top-7 -z-10 -right-72  grid-cols-3 overflow-hidden hidden md:block">
                  {testimonials.map(
                    (testimonial, index) =>
                      index !== currentIndex && (
                        <img
                          src={`/images/${testimonial.image}.png`}
                          alt={testimonial.author}
                          className="object-cover max-w-24 h-[450px]"
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mx-auto max-w-[848px]  flex items-center justify-between">
            <div className="text-sm text-white/100">
              {/* Text */}
              <div>
                {currentIndex + 1}/{testimonials.length} Testimonials
              </div>

              {/* Progress Bar */}
              <div className="relative mt-1 w-1/2 h-1 bg-[#4C4C4C] ">
                <div
                  className="absolute top-0 left-0 h-1 bg-white "
                  style={{
                    width: `${
                      ((currentIndex + 1) / testimonials.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="group flex items-center gap-3 rounded-full text  px-6 py-2 text-white transition-colors  hover:text-red-500"
            >
              Next
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* hiriing process section  */}

      <section className="relative min-h-screen overflow-hidden hidden md:block bg-[#0F0F0F]">
        {/* Red Gradient Wave */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-x-0 top-0 w-[1500px] md:w-full"
          viewBox="0 0 1440 779"
          fill="none"
        >
          <g filter="url(#filter0_f_60_1559)">
            <path
              d="M181.813 350.646C496.666 -161.189 1358.59 795.069 1398.62 38.683C1657.53 -49.7887 769.2 -526.931 527.527 -604.867C244.546 -774.084 10.7657 -369.488 -84.2834 -162.649C-179.332 44.1899 -344.322 1011.34 181.813 350.646Z"
              fill="url(#paint0_linear_60_1559)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_60_1559"
              x="-385.777"
              y="-845.23"
              width="2031.21"
              height="1623.5"
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
                stdDeviation="100"
                result="effect1_foregroundBlur_60_1559"
              />
            </filter>
            <linearGradient
              id="paint0_linear_60_1559"
              x1="999.681"
              y1="1715.99"
              x2="305.644"
              y2="-143.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.695616" stopColor="#EC2027" />
              <stop offset="0.751423" stopColor="white" />
              <stop offset="0.927083" stopColor="#EC2027" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content heading*/}

        <div className="mx-auto text-center max-w-4xl relative mt-32 md:mt-64 ">
          <div className=" text-white text-5xl font-bold mb-7">
            How to become a musttecher?
          </div>
          <div className=" opacity-60 text-center text-white text-xl font-normal tracking-tight">
            Joining us couldn't be easier! Check out our application process
            down below. If you have the talent we need, then we'll be meeting
            you soon!
          </div>
        </div>

        {/* Content bar*/}

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 mt-10 md:mt-20">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 h-full w-1.5 -translate-x-1/2 bg-[#ADADAD]" />

            {/* Steps */}
            <div className="relative space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`flex ${
                      step.alignLeft ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-1/2 ${
                        step.alignLeft
                          ? "pl-4 md:pl-10 text-left"
                          : "pr-4 md:pr-10 text-right"
                      }`}
                    >
                      <h3 className="mb-2 text-sm md:text-xl font-bold text-white transition-all duration-300 ease-in-out group-hover:text-customred">
                        {step.title}
                      </h3>
                      <p className="text-white/100 text-xs md:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Circle */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-normal bg-white text-black transition-all duration-300 ease-in-out group-hover:bg-[#ec2027] group-hover:text-white group-hover:shadow-[0px_4px_8px_0px_rgba(236,32,39,1.00)] group-hover:border-4 group-hover:border-[#ec2027]`}
                    >
                      {step.number}
                    </div>

                    {/* Spacer */}
                    <div className="w-1/2" />
                  </div>
                </div>
              ))}

              {/* Final Step */}
              <div className="flex items-end group">
                <div className="w-1/2 pr-10 text-right">
                  <h3 className="mb-2 text-base md:text-xl font-bold text-customred transition-transform duration-300 ease-in-out md:group-hover:scale-105 group-hover:mr-0 md:group-hover:mr-5">
                    Start a new journey!
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 transition-all duration-300 ease-in-out shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_4px_8px_0px_rgba(236,32,39,1.00)] group-hover:border-4 group-hover:border-[#ec2027] group-hover:bg-[#ec2027]">
                  <span className="text-2xl transition-all duration-300 ease-in-out group-hover:text-white">
                    🤝
                  </span>
                </div>

                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* job listing section  */}

      <section className="bg-black px-6 py-16 md:py-20">
        <div className="mx-auto container">
          <h2 className="mb-14 md:mb-20 text-center text-xl font-bold text-white md:text-5xl">
            We have {positions.length} open positions now!
          </h2>

          <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
            {/* Sidebar Filters */}
            <div className="space-y-4 hidden md:block">
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => setSelectedDepartment(dept.name)}
                  className={`w-full  px-6 py-3 text-left transition-colors ${
                    selectedDepartment === dept.name
                      ? " text-xl bg-white shadow-[-6px_0px_0px_0px_rgba(236,32,39,1.00)] "
                      : " text-base text-white/100 hover:bg-gray-800"
                  }`}
                >
                  {dept.name} ({dept.count})
                </button>
              ))}
              <div className="mt-9 p-4 text-base text-white/100">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </div>
              <button className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-black">
                Share your LinkedIn profile{" "}
              </button>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {visiblePositions.map((position, index) => (
                <div
                  key={index}
                  className="rounded-sm bg-white py-5 px-4 md:px-8 transition-all hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl md:text-[28px] font-semibold text-[#090808]">
                    {position.title}
                  </h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {position.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-black px-3 py-1 text-[10px] md:text-sm text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-600 text-[10px] md:text-base">
                    {position.description}
                  </p>

                  {/* <div className="flex justify-end">
                    <button className="group flex  items-center gap-2 text-white  bg-[#ec2027] rounded-[29px] transition-colors px-4 py-3 hover:text-gray-100">
                      See positions
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div> */}
                </div>
              ))}

              {filteredPositions.length > 3 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border text-xs md-text-base border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-black"
                >
                  {showAll ? "Show less" : "Show more..."}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* blog stories section  */}

      <section className="bg-[#0F0F0F] px-6 py-16 md:py-20">
        <div className="mx-auto container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl  text-white md:text-5xl">
              Stories by MustTechers!
            </h2>
            <p className="text-sm md:text-xl text-white/100">
              Read more on our blog
            </p>
          </div>

          <Swiper
            modules={[Navigation]}
            slidesPerView={3.5}
            spaceBetween={24}
            breakpoints={{
              240: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            // navigation
            className="my-swiper"
          >
            {/* Example slides */}
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="group overflow-hidden  bg-white/10">
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={`/images${blog.image}.svg`}
                      alt={blog.title}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-white text-base md:text-2xl font-semibold">
                      {blog.heading}
                    </h4>

                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={`/images${blog.author.avatar}.svg`}
                          alt={blog.author.name}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm md:text-base text-white">
                          {blog.author.name}
                        </h6>
                        <span className="text-[10px] text-[#C4C4C4]">
                          {blog.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-white md:mb-6 text-xs md:text-sm">
                      {blog.description}
                    </p>

                    {/* <button className="group flex  items-center gap-2   bg-white rounded-[29px] transition-colors px-4 py-2 hover:text-gray-900">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* social section  */}
      <section className="bg-[#0F0F0F] px-6 pt-10 pb-20 hidden md:block ">
        <div className="mx-auto container">
          <div className="grid  gap-7 grid-cols-6">
            {/* image 1  */}
            <div
              className={`group  relative overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <div className="text-white text-6xl ">
                <h3>
                  <span className="font-bold"> Follow us </span>{" "}
                  {`on social to see what we're up to!`}
                </h3>
              </div>

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 2 */}
            <div
              className={`group lg:mt-28 relative overflow-hidden rounded-sm col-span-1 row-span-3`}
            >
              <img
                src={`/images/gallery/image1.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 3 */}
            <div
              className={`group lg:mt-28 relative overflow-hidden rounded-sm col-span-1 row-span-4`}
            >
              <img
                src={`/images/gallery/image2.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 4 */}
            <div
              className={`group lg:mt-28 relative overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <img
                src={`/images/gallery/image3.png`}
                alt="jh"
                className="h-full w-full md:w-[200px]  object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 1 row 2 */}
            <div
              className={`group relative overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <img
                src={`/images/gallery/image4.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 2 row 2 */}
            <div
              className={`group relative flex items-center  overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <div className="text-white lg:max-w-[350px]">
                <p className="mb-4">
                  We are eager to be in touch with you in the following
                  channels:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://www.facebook.com/musttechsolution" // Replace with your actual Facebook page link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.982422 18.6815C0.982422 8.75097 9.03271 0.700684 18.9632 0.700684C28.8938 0.700684 36.9441 8.75097 36.9441 18.6815C36.9441 28.612 28.8938 36.6623 18.9632 36.6623C9.03271 36.6623 0.982422 28.612 0.982422 18.6815ZM18.9632 9.69109C23.908 9.69109 27.9537 13.7368 27.9537 18.6815C27.9537 23.1767 24.6946 26.9976 20.1994 27.6719V21.2662H22.3346L22.7842 18.6815H20.3118V16.9958C20.3118 16.3215 20.6489 15.6472 21.7727 15.6472H22.8965V13.3996C22.8965 13.3996 21.8851 13.1749 20.8737 13.1749C18.8509 13.1749 17.5023 14.4111 17.5023 16.6587V18.6815H15.2547V21.2662H17.5023V27.5595C13.2319 26.8853 9.97283 23.1767 9.97283 18.6815C9.97283 13.7368 14.0185 9.69109 18.9632 9.69109Z"
                        fill="white"
                      />
                    </svg>
                    <p>Facebook</p>
                  </a>

                  {/* <div className="flex items-center gap-4 transition-colors hover:text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        d="M21.7035 18.6815L16.9835 15.9844V21.3786L21.7035 18.6815Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.800781 18.6815C0.800781 8.75097 8.85107 0.700684 18.7816 0.700684C28.7121 0.700684 36.7624 8.75097 36.7624 18.6815C36.7624 28.612 28.7121 36.6623 18.7816 36.6623C8.85107 36.6623 0.800781 28.612 0.800781 18.6815ZM25.7492 12.7254C26.5358 12.9501 27.0977 13.512 27.3225 14.2987C27.772 15.7596 27.772 18.6815 27.772 18.6815C27.772 18.6815 27.772 21.6034 27.4349 23.0643C27.2101 23.851 26.6482 24.4129 25.8615 24.6377C24.4006 24.9748 18.7816 24.9748 18.7816 24.9748C18.7816 24.9748 13.0502 24.9748 11.7016 24.6377C10.915 24.4129 10.3531 23.851 10.1283 23.0643C9.79119 21.6034 9.79119 18.6815 9.79119 18.6815C9.79119 18.6815 9.79119 15.7596 10.0159 14.2987C10.2407 13.512 10.8026 12.9501 11.5893 12.7254C13.0502 12.3882 18.6692 12.3882 18.6692 12.3882C18.6692 12.3882 24.4006 12.3882 25.7492 12.7254Z"
                        fill="white"
                      />
                    </svg>
                    <p>Youtube</p>
                  </div> */}

                  {/* <div className="flex items-center gap-4 transition-colors hover:text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.982422 18.6239C0.982422 8.69335 9.03271 0.643066 18.9632 0.643066C28.8938 0.643066 36.9441 8.69335 36.9441 18.6239C36.9441 28.5544 28.8938 36.6047 18.9632 36.6047C9.03271 36.6047 0.982422 28.5544 0.982422 18.6239ZM25.8184 13.5668C26.6051 13.4544 27.2794 13.342 27.9537 13.0049C27.5041 13.7915 26.8298 14.4658 26.0432 14.9153C26.268 20.1972 22.447 25.9286 15.5918 25.9286C13.569 25.9286 11.6585 25.2543 9.97283 24.2429C11.8833 24.4677 13.9061 23.9058 15.2547 22.8943C13.569 22.8943 12.2204 21.7705 11.7709 20.3096C12.3328 20.422 12.8947 20.3096 13.4566 20.1972C11.7709 19.7477 10.5347 18.1744 10.5347 16.4887C11.0966 16.7134 11.6585 16.9382 12.2204 16.9382C10.6471 15.8144 10.0852 13.6792 11.0966 11.9935C13.0071 14.2411 15.7042 15.702 18.7385 15.8144C18.1766 13.5668 19.9747 11.3192 22.3346 11.3192C23.3461 11.3192 24.3575 11.7687 25.0318 12.443C25.9308 12.2182 26.7175 11.9935 27.3918 11.5439C27.167 12.443 26.6051 13.1173 25.8184 13.5668Z"
                        fill="white"
                      />
                    </svg>
                    <p>Twitter</p>
                  </div> */}

                  <a
                    href="https://www.instagram.com/musttechsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        d="M18.7816 21.7705C17.0959 21.7705 15.635 20.422 15.635 18.6239C15.635 16.9382 16.9835 15.4772 18.7816 15.4772C20.4673 15.4772 21.9282 16.8258 21.9282 18.6239C21.9282 20.3096 20.4673 21.7705 18.7816 21.7705Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.6025 10.982H14.9607C14.0616 11.0944 13.6121 11.2068 13.275 11.3192C12.8255 11.4316 12.4883 11.6563 12.1512 11.9935C11.8844 12.2602 11.7584 12.527 11.606 12.8495C11.5658 12.9344 11.5238 13.0235 11.4769 13.1173C11.4595 13.1694 11.4394 13.2243 11.4179 13.283C11.3004 13.6042 11.1398 14.043 11.1398 14.803V22.4448C11.2521 23.3438 11.3645 23.7934 11.4769 24.1305C11.5893 24.58 11.814 24.9172 12.1512 25.2543C12.418 25.5211 12.6847 25.6471 13.0072 25.7995C13.0922 25.8397 13.1812 25.8817 13.275 25.9286C13.3271 25.946 13.382 25.966 13.4408 25.9876C13.762 26.1051 14.2007 26.2657 14.9607 26.2657H22.6025C23.5016 26.1534 23.9511 26.041 24.2882 25.9286C24.7377 25.8162 25.0749 25.5914 25.412 25.2543C25.6788 24.9875 25.8048 24.7208 25.9572 24.3983C25.9974 24.3133 26.0394 24.2243 26.0863 24.1305C26.1037 24.0784 26.1238 24.0235 26.1453 23.9647C26.2628 23.6435 26.4234 23.2048 26.4234 22.4448V14.803C26.3111 13.9039 26.1987 13.4544 26.0863 13.1173C25.9739 12.6677 25.7492 12.3306 25.412 11.9935C25.1453 11.7267 24.8785 11.6006 24.556 11.4483C24.4711 11.4082 24.3819 11.366 24.2882 11.3192C24.2361 11.3018 24.1812 11.2817 24.1224 11.2602C23.8012 11.1426 23.3625 10.982 22.6025 10.982ZM18.7816 13.7915C16.0845 13.7915 13.9493 15.9268 13.9493 18.6239C13.9493 21.321 16.0845 23.4562 18.7816 23.4562C21.4787 23.4562 23.6139 21.321 23.6139 18.6239C23.6139 15.9268 21.4787 13.7915 18.7816 13.7915ZM24.8501 13.6792C24.8501 14.2998 24.347 14.803 23.7263 14.803C23.1057 14.803 22.6025 14.2998 22.6025 13.6792C22.6025 13.0585 23.1057 12.5554 23.7263 12.5554C24.347 12.5554 24.8501 13.0585 24.8501 13.6792Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.800781 18.6239C0.800781 8.69335 8.85107 0.643066 18.7816 0.643066C28.7121 0.643066 36.7624 8.69335 36.7624 18.6239C36.7624 28.5544 28.7121 36.6047 18.7816 36.6047C8.85107 36.6047 0.800781 28.5544 0.800781 18.6239ZM14.9607 9.29633H22.6025C23.6139 9.40871 24.2882 9.52109 24.8501 9.74585C25.5244 10.083 25.9739 10.3078 26.5358 10.8697C27.0977 11.4316 27.4349 11.9935 27.6596 12.5554C27.8844 13.1173 28.1091 13.7915 28.1091 14.803V22.4448C27.9968 23.4562 27.8844 24.1305 27.6596 24.6924C27.3225 25.3667 27.0977 25.8162 26.5358 26.3781C25.9739 26.94 25.412 27.2772 24.8501 27.5019C24.2882 27.7267 23.6139 27.9514 22.6025 27.9514H14.9607C13.9493 27.8391 13.275 27.7267 12.7131 27.5019C12.0388 27.1648 11.5893 26.94 11.0274 26.3781C10.4655 25.8162 10.1283 25.2543 9.90357 24.6924C9.67881 24.1305 9.45405 23.4562 9.45405 22.4448V14.803C9.56643 13.7915 9.67881 13.1173 9.90357 12.5554C10.2407 11.8811 10.4655 11.4316 11.0274 10.8697C11.5893 10.3078 12.1512 9.97061 12.7131 9.74585C13.275 9.52109 13.9493 9.29633 14.9607 9.29633Z"
                        fill="white"
                      />
                    </svg>
                    <p>Instagram</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/musttechsolutions/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.982422 18.5663C0.982422 8.63574 9.03271 0.585449 18.9632 0.585449C28.8938 0.585449 36.9441 8.63574 36.9441 18.5663C36.9441 28.4968 28.8938 36.5471 18.9632 36.5471C9.03271 36.5471 0.982422 28.4968 0.982422 18.5663ZM10.1976 15.532V27.5567H14.0185V15.532H10.1976ZM9.97283 11.7111C9.97283 12.9473 10.8719 13.8463 12.1081 13.8463C13.3442 13.8463 14.2433 12.9473 14.2433 11.7111C14.2433 10.4749 13.3442 9.57586 12.1081 9.57586C10.9843 9.57586 9.97283 10.4749 9.97283 11.7111ZM24.1327 27.5567H27.7289V20.1396C27.7289 16.431 25.4813 15.1949 23.3461 15.1949C21.4356 15.1949 20.087 16.431 19.7499 17.2177V15.532H16.1537V27.5567H19.9747V21.151C19.9747 19.4653 21.0985 18.5663 22.2223 18.5663C23.3461 18.5663 24.1327 19.1282 24.1327 21.0386V27.5567Z"
                        fill="white"
                      />
                    </svg>
                    <p>LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>

            {/* image 3 row 2 */}
            <div
              className={`group relative overflow-hidden rounded-sm col-span-1 row-span-1`}
            >
              <img
                src={`/images/gallery/image5.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* social section responsive */}
      <section className="bg-[#0F0F0F] px-6 pt-10 pb-20 block md:hidden ">
        <div className="mx-auto container">
          <div className="grid  gap-7 grid-cols-3">
            {/* image 1  */}
            <div
              className={`group  relative overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <div className="text-white text-3xl ">
                <h3>
                  <span className="font-bold"> Follow us </span>{" "}
                  {`on social to see what we're up to!`}
                </h3>
              </div>

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 2 */}
            <div
              className={`group lg:mt-28 relative overflow-hidden rounded-sm col-span-1 row-span-3`}
            >
              <img
                src={`/images/gallery/image1.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 1 row 2 */}
            <div
              className={`group relative overflow-hidden rounded-sm col-span-2 row-span-2`}
            >
              <img
                src={`/images/gallery/image4.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>

            {/* image 3 row 2 */}
            <div
              className={`group relative overflow-hidden rounded-sm col-span-1 row-span-1`}
            >
              <img
                src={`/images/gallery/image5.png`}
                alt="jh"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      <ReasonSection />
    </div>
  );
}
