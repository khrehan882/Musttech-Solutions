import { Link, useParams } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import ReasonSection from "../../component/ReasonSection";
import ServiceCard from "../../component/ui/ServiceCard";
import Card from "../../component/ui/Card";
import CardSection from "../../component/ui/CardSection";
const servicesData = {
  "web-development": {
    data: {
      slug: "web-development",
      page: "Find your niche",
      title: "Web Development",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "Forging Digital Landscapes Where Connections Thrive and Visions Come to Life",
      description: `At MustTech, we don’t just build websites—we craft digital experiences that leave a lasting impact. Whether you’re a startup looking to establish your online presence or a well-established business in need of a website revamp, our web development services are designed to elevate your brand and ensure a seamless user experience.`,
    },

    content2: {
      title: "Our Value",
      description: `We combine creativity, innovation, and technical expertise to deliver websites that are not only visually stunning but also performance-driven. With a keen focus on user experience (UX), functionality, and scalability, we ensure that your website stands out in the competitive digital landscape.`,
    },
    content3: {
      title: "Our Web Development Services",
      description: `The digital world is highly competitive, and standing out requires more than just an online presence. We combine creativity, analytics, and cutting-edge marketing techniques to build campaigns that leave a lasting impact. Whether you're a startup or an established brand, we tailor our solutions to help you thrive.`,
    },

    projects: [
      {
        title: "XmartLabs Web Development",
        category: "Website",
        image: "/serviceDetails/web1",
      },
      {
        title: "Hydraweld Development",
        category: "Website",
        image: "/serviceDetails/web2",
      },
      {
        title: "ArtGarage Web Development",
        category: "Website",
        image: "/serviceDetails/web3",
      },
    ],
    heading: "Our Web Development Services",

    cardSection: [
      {
        title: "Custom WordPress Development",
        description: "We specialize in building custom WordPress websites tailored to your specific business needs. Our solutions include theme customization, plugin development, and seamless integrations to enhance functionality.",
      },
      {
        title: "E-Commerce Development",
        description: "Looking to sell online? We create high-performing e-commerce websites using WooCommerce and other leading platforms. From product pages to secure checkout processes, we optimize every aspect of your store for conversions and user engagement.",
      },
      {
        title: "SEO-Friendly Website Development",
        description: "We build websites with SEO in mind, ensuring that your site is optimized for search engines right from the start. Our clean coding practices and structured layouts help improve your online visibility.",
      },

      {
        title: "Landing Page Design",
        description: "A well-optimized landing page can make all the difference in turning visitors into customers. Our landing pages are designed with high conversion rates in mind, ensuring that every click counts.",
      },
      {
        title: "Website Maintenance & Support",
        description: "A great website requires continuous updates and maintenance. We provide ongoing support to keep your website secure, optimized, and up-to-date with the latest technologies.",
      },
      {
        title: "Performance Optimization",
        description: "A slow website can drive away potential customers. Our performance optimization services focus on reducing load times, improving responsiveness, and ensuring seamless navigation across all devices.",
      },
    ],


    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
        to: "/services/seo",
      },
      {
        icon: "logo6",
        title: "CRO services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/cro",
      },
    ],
  },


  "mobile-app": {
    data: {
      slug: "mobile-app",
      page: "Find your niche",
      title: "Mobile App",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color2: "#EC2027",
      color1: "#FFF",
    },
    content: {
      title: "We Build Seamless Mobile Experiences That Keep Your Users Engaged, Wherever They Go",
      description: `At MustTech, we specialize in crafting high-performance, feature-rich mobile applications that deliver exceptional user experiences. Whether you're a startup looking to launch your first app or an established business aiming to enhance customer engagement, our expert team develops tailored solutions that keep your users connected anytime, anywhere.`,
    },

    content2: {
      title: "Why Choose Our Mobile App Development Services?",
      description: `With the increasing reliance on mobile devices, a seamless and engaging mobile experience is essential for business success. We blend innovation, user-centric design, and cutting-edge technology to build apps that not only look great but also function flawlessly across various platforms.`,
    },
    content3: {
      title: "Our Mobile App Development Services",
      description: `The digital world is highly competitive, and standing out requires more than just an online presence. We combine creativity, analytics, and cutting-edge marketing techniques to build campaigns that leave a lasting impact. Whether you're a startup or an established brand, we tailor our solutions to help you thrive.`,
    },


    projects: [
      {
        title: "Zco Corporation Development",
        category: "Website",
        image: "/serviceDetails/mobile1",
      },
      {
        title: "AppsChopper Development",
        category: "Website",
        image: "/serviceDetails/mobile2",
      },
      {
        title: "Trango Tech Development",
        category: "Website",
        image: "/serviceDetails/mobile3",
      },
    ],
    heading: "Our Mobile App Development Services",
    cardSection: [
      {
        title: "Custom Mobile App Development",
        description: "We develop custom mobile applications that align perfectly with your business needs. From ideation to deployment, we create apps that offer intuitive navigation, stunning visuals, and seamless performance.",
      },
      {
        title: "iOS App Development",
        description: "Leverage the power of Apple’s ecosystem with our iOS app development services. We design and develop high-quality apps for iPhone, iPad, and Apple Watch using Swift and Objective-C, ensuring optimal performance and security.",
      },
      {
        title: "Android App Development",
        description: "Reach a wider audience with our Android app development solutions. Our team utilizes Kotlin and Java to build scalable, secure, and high-performing applications optimized for various Android devices.",
      },

      {
        title: "Cross-Platform App Development",
        description: "Maximize efficiency and reduce costs with cross-platform applications that run seamlessly on both iOS and Android. We use frameworks like React Native and Flutter to deliver a consistent experience across all devices.",
      },
      {
        title: "UI/UX Design for Mobile Apps",
        description: "User experience is at the core of every successful app. Our design team creates visually appealing, user-friendly interfaces that ensure smooth navigation and engagement, enhancing customer satisfaction.",
      },
      {
        title: "App Maintenance & Support",
        description: "A mobile app requires regular updates and maintenance to stay relevant. We provide continuous support, performance monitoring, and security updates to ensure your app runs smoothly at all times.",
      },
    ],

    services: [
      {
        icon: "logo1",
        title: "Branding",
        description:
          "We shape identities that speak volumes, leaving impressions that stand the test of time.",
        to: "/services/branding",
      },
      {
        icon: "logo2",
        title: "Web development",
        description:
          "Forging digital landscapes where connections thrive and visions come to life.",
        to: "/services/web-development",
      },
      {
        icon: "logo3",
        title: "Digital marketing",
        description:
          "We craft strategies that make your brand unforgettable in the digital world.",
        to: "/services/digital-marketing",
      },
    ],
  },


  "branding": {
    data: {
      slug: "branding",
      page: "Find your niche",
      title: "Branding",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "We Shape Identities That Speak Volumes, Leaving Impressions That Stand the Test of Time",
      description: `At MustTech, we believe that branding is more than just a logo or a color scheme—it’s the essence of your business. A powerful brand creates trust, communicates your vision, and sets you apart from the competition. Our branding services are designed to create a unique and compelling identity that resonates with your audience and stands the test of time.`,
    },

    content2: {
      title: "Why Branding Matters",
      description: `In today’s fast-paced digital world, first impressions matter more than ever. Your brand is the first thing customers notice, and it needs to captivate, engage, and leave a lasting impact. We ensure your brand not only looks great but also tells a story that aligns with your business values and goals.`,
    },
    content3: {
      title: "We Shape Identities That Speak Volumes, Leaving Impressions That Stand the Test of Time",
      description: `In today’s fast-paced digital world, first impressions matter more than ever. Your brand is the first thing customers notice, and it needs to captivate, engage, and leave a lasting impact. We ensure your brand not only looks great but also tells a story that aligns with your business values and goals.`,
    },
    projects: [
      {
        title: "SAS Branding",
        category: "Website",
        image: "/serviceDetails/brand1",
      },
      {
        title: "Comrad Branding",
        category: "Website",
        image: "/serviceDetails/brand2",
      },
      {
        title: "Cotopaxi Branding",
        category: "Website",
        image: "/serviceDetails/brand3",
      },
    ],
    heading: "Our Branding Services",

    cardSection: [
      {
        title: "Brand Strategy & Identity Development",
        description: "A strong brand starts with a solid strategy. We work closely with you to define your brand’s personality, mission, and values. From market research to competitive analysis, we ensure that your brand stands out in the industry.",
      },
      {
        title: "Logo Design & Visual Identity",
        description: "Your logo is the face of your brand. We craft memorable and meaningful logos that reflect your brand’s essence. Beyond logos, we develop a full visual identity, including color palettes, typography, and design elements that maintain consistency across all platforms.",
      },
      {
        title: "Website & Digital Branding",
        description: "Your website is an extension of your brand. We design and develop visually stunning, user-friendly websites that reinforce your brand identity and create a seamless experience for your visitors.",
      },

      {
        title: "Brand Guidelines & Style Guide",
        description: "Consistency is key to brand success. We provide detailed brand guidelines that define how your brand should be presented across different channels, ensuring a cohesive and professional image at all times.",
      },
      {
        title: "Rebranding & Brand Refresh",
        description: "If your existing brand no longer aligns with your business goals, we offer rebranding services to give your identity a fresh, modern look while maintaining its core values and essence.",
      },
      {
        title: "Brand Messaging & Voice",
        description: "A compelling brand has a clear and consistent voice. We help you craft powerful messaging that speaks directly to your audience, ensuring that your tone, tagline, and storytelling align with your brand’s values.",
      },
    ],

    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
        to: "/services/seo",
      },
      {
        icon: "logo6",
        title: "CRO services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/cro",
      },
    ],
  },


  "digital-marketing": {
    data: {
      slug: "digital-marketing",
      page: "Find your niche",
      title: "Digital Marketing",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color2: "#EC2027",
      color1: "#FFF",
    },
    content: {
      title: "We Craft Strategies That Make Your Brand Unforgettable in the Digital World",
      description: `At MustTech, we don’t just market your business—we create digital experiences that connect with your audience and drive measurable results. In an ever-evolving digital landscape, our expert team develops data-driven strategies that elevate your brand, boost engagement, and maximize your ROI.`,
    },
    content2: {
      title: "Why Choose Our Digital Marketing Services?",
      description: `The digital world is highly competitive, and standing out requires more than just an online presence. We combine creativity, analytics, and cutting-edge marketing techniques to build campaigns that leave a lasting impact. Whether you're a startup or an established brand, we tailor our solutions to help you thrive.`,
    },
    content3: {
      title: "Why Choose Our Digital Marketing Services?",
      description: `The digital world is highly competitive, and standing out requires more than just an online presence. We combine creativity, analytics, and cutting-edge marketing techniques to build campaigns that leave a lasting impact. Whether you're a startup or an established brand, we tailor our solutions to help you thrive.`,
    },

    projects: [
      {
        title: "SmartSites Marketing",
        category: "Website",
        image: "/serviceDetails/digi1",
      },
      {
        title: "Netpeak Marketing",
        category: "Website",
        image: "/serviceDetails/digi2",
      },
      {
        title: "Single Grain Marketing",
        category: "Website",
        image: "/serviceDetails/digi3",
      },
    ],
    heading: "Our Digital Marketing Services",

    cardSection: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website’s visibility and rank higher on search engines with our advanced SEO strategies. From keyword research to technical SEO, we ensure your website is optimized to attract organic traffic and convert visitors into customers.",
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Accelerate your business growth with targeted PPC campaigns. We create high-converting Google Ads and social media ads to help you reach the right audience while maximizing your ad spend.",
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "Engage and grow your audience with our tailored social media strategies. We manage and optimize your social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter to enhance brand awareness and customer loyalty.",
      },

      {
        title: "Content Marketing",
        description: "Content is king, and we create compelling, high-quality content that resonates with your audience. From blog posts and articles to infographics and videos, our content marketing strategies drive traffic and establish thought leadership.",
      },
      {
        title: "Email Marketing",
        description: "Nurture leads and retain customers with personalized email campaigns. Our email marketing strategies focus on creating engaging newsletters, promotional campaigns, and automation sequences that enhance customer relationships.",
      },
      {
        title: "Online Reputation Management (ORM)",
        description: "Protect and enhance your brand’s online reputation with our ORM services. We monitor and manage online reviews, address customer feedback, and create a positive brand image that fosters trust and credibility.",
      },
    ],

    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
        to: "/services/seo",
      },
      {
        icon: "logo6",
        title: "CRO services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/cro",
      },
    ],
  },


  "seo": {

    data: {
      slug: "seo",
      page: "Find your niche",
      title: "SEO",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "We Optimize Your Online Presence to Ensure You Stand Out and Rank High Where It Matters Most",
      description: `At MustTech, we help businesses dominate search engine rankings and maximize online visibility. Our comprehensive SEO services ensure that your website attracts the right audience, drives organic traffic, and converts visitors into loyal customers. With a data-driven approach and proven strategies, we position your brand for long-term success in the digital landscape.`,
    },


    content2: {
      title: "Why Choose Our SEO Services?",
      description: `The digital market is highly competitive, and ranking on the first page of Google can make all the difference. We tailor our SEO strategies to your business goals, ensuring sustainable growth and measurable results. Whether you’re a startup or an established enterprise, our expert team is equipped to optimize your online presence effectively.`,
    },
    content3: {
      title: "Get Ahead of the Competition with MustTech",
      description: `SEO is not just about rankings—it’s about creating a powerful online presence that drives revenue. At MustTech, we focus on sustainable growth and measurable success, ensuring that your website stays ahead in search results.`,
    },
    heading: "Our SEO Services",

    cardSection: [
      {
        title: "Website SEO Audit",
        description: "We conduct an in-depth analysis of your website to identify technical issues, SEO gaps, and opportunities for optimization. Our comprehensive audit covers site structure, on-page elements, backlinks, and more to ensure a strong foundation for success.",
      },
      {
        title: "Keyword Research & Strategy",
        description: "Understanding what your audience is searching for is crucial. We perform detailed keyword research to identify high-impact keywords and create a tailored SEO strategy that aligns with your business objectives.",
      },
      {
        title: "On-Page SEO Optimization",
        description: "Engage and grow your audience with our tailored social media strategies. We manage and optimize your social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter to enhance brand awareness and customer loyalty.",
      },

      {
        title: "Content Marketing",
        description: "We optimize website elements such as title tags, meta descriptions, headings, URL structures, and internal linking to improve search engine rankings. Our approach enhances readability, usability, and relevance for both users and search engines.",
      },
      {
        title: "Technical SEO",
        description: "A fast, secure, and mobile-friendly website is essential for ranking high. We address technical aspects like page speed optimization, schema markup, mobile responsiveness, crawlability, and indexing to ensure a seamless user experience.",
      },
      {
        title: "Content Optimization & Creation",
        description: "Quality content is key to SEO success. We refine existing content and create engaging, keyword-rich content that attracts search engines and resonates with your target audience. Our strategies include blog writing, landing page optimization, and multimedia content.",
      },
    ],


    projects: [
      {
        title: "Mainstreethost SEO",
        category: "Website",
        image: "/serviceDetails/seo1",
      },
      {
        title: "Fatjoe SEO",
        category: "Website",
        image: "/serviceDetails/seo2",
      },
      {
        title: "Manta SEO",
        category: "Website",
        image: "/serviceDetails/seo3",
      },
    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo2",
        title: "Web developement",
        description:
          "Forging digital landscapes where connections thrive and visions come to life.",
        to: "/services/web-development",
      },
      {
        icon: "logo6",
        title: "CRO services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/cro",
      },
    ],
  },


  "cro": {

    data: {
      slug: "CRO",
      page: "Find your niche",
      title: "CRO",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "Turn More Visitors into Paying Customers",
      description: `At MustTech, we don’t just drive traffic—we ensure that traffic converts! Our Conversion Rate Optimization (CRO) services are designed to maximize your website’s potential, turning casual visitors into engaged customers. Whether you're running an eCommerce store, a service-based website, or a SaaS platform, we use data-driven strategies to enhance user experience and increase your conversion rates.`,
    },


    content2: {
      title: "Why CRO Matters?",
      description: `Getting traffic to your website is just the first step. But are your visitors taking action? CRO ensures that your marketing efforts don’t go to waste by optimizing your website’s design, content, and functionality to drive more sales, sign-ups, and leads.`,
    },
    content3: {
      title: "Get Ahead of the Competition with MustTech",
      description: `SEO is not just about rankings—it’s about creating a powerful online presence that drives revenue. At MustTech, we focus on sustainable growth and measurable success, ensuring that your website stays ahead in search results.`,
    },
    heading: "Our CRO Services",

    cardSection: [
      {
        title: "Website & Funnel Audit",
        description: "We conduct an in-depth analysis of your website’s user journey, identifying friction points that may be preventing conversions. This includes:   User behavior analysis,  Heatmaps & click tracking,  A/B testing opportunities,  Page speed and performance evaluation",
      },
      {
        title: "Landing Page Optimization",
        description: "Your landing pages should persuade visitors to take action. We enhance them by: Crafting compelling headlines & copy, Optimizing CTAs (Call-to-Actions), Enhancing page layout and design, Mobile-friendly responsiveness",
      },
      {
        title: "User Experience (UX) & Design Enhancements",
        description: "A seamless, user-friendly website leads to higher conversions. We improve:, Website navigation and flow, Mobile & desktop responsiveness, Form & checkout process optimization, Trust signals and social proof integration",
      },

      {
        title: "A/B Testing & Multivariate Testing",
        description: "We test different versions of your web pages to determine what works best. This includes:, CTA button color, placement, and wording, Headline variations and messaging, Pricing structures and offers, Page layout and design elements",
      },
      {
        title: "Behavioral Analytics & Heatmaps",
        description: "Understanding how users interact with your site is key to optimizing conversions. We use:, Heatmaps to track where users click the most, Session recordings to see how users navigate your site, Form analytics to reduce drop-offs, Scroll maps to identify engagement levels",
      },
      {
        title: "Conversion Copywriting & Persuasive Messaging",
        description: "Words have power. Our expert copywriters craft persuasive messages that:, Address pain points and objections, Create urgency and trust, Speak directly to your target audience, Highlight your unique value proposition (UVP)",
      },
    ],


    projects: [

      //Add CRO Work Here

    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo2",
        title: "Web developement",
        description:
          "Forging digital landscapes where connections thrive and visions come to life.",
        to: "/services/web-development",
      },
      {
        icon: "logo6",
        title: "CRO services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/cro",
      },
    ],
  },

  // Add other slugs similarly...
};

export default function Services() {
  const { slug } = useParams();

  // Retrieve the data for the current slug
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-2xl font-bold text-red-500">
          Service not found
        </h1>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full border border-gray-800 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  const { data, content, content2, heading, cardSection, content3, projects, services } = service;

  return (
    <div>
      <HeroSection data={data} />

      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10 lg:space-y-20">
          <Content data={content} />
          <Content data={content2} />
        </div>
      </section>



      <section className="bg-[#0F0F0F] px-6 py-10 lg:py-[58px]">
        <div className="container mx-auto  space-y-10 lg:space-y-20">
          {/* Dynamic Heading */}
          <h2 className="text-[32px] font-bold text-white">{heading}</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cardSection.map((project, index) => (
              <CardSection key={index} project={project} />
            ))}
          </div>
        </div>
      </section>



      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10 lg:space-y-20">
          <Content data={content3} />
        </div>
      </section>





      {data.slug !== "CRO" && (

        <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
          {/* Conditionally render the title */}
          {data.slug !== "CRO" && (
            <h3 className="mb-8 text-customred font-bold text-2xl lg:text-3xl">
              {data.page} Work
            </h3>
          )}

          <div className="mt-5 mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ServiceCard key={index} project={project} />
            ))}
          </div>
        </section>


      )







      }









      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <h3 className="mb-8 text-white font-bold text-2xl lg:text-3xl">
          Other Services
        </h3>
        <div className="mt-5 mb-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>


        <Link
          to="/"
          className="inline-block rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          Go to Home
        </Link>
      </section>

      <ReasonSection />
    </div>
  );
}
