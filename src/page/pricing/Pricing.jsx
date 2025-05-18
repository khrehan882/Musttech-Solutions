import { Link } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import ReasonSection from "../../component/ReasonSection";

export default function Pricing() {
    const data = {
        page: "Pricing",
        title: "Our Plans",
        description: `Flexible pricing for every business stage. Whether you're just starting out or scaling fast, our plans are designed to grow with you.`,
        button: "CONTACT",
        color1: "#EC2027",
        color2: "#FFF",
    };

    const content = {
        title: "Choose What Fits You",
        description: `We believe in transparent and flexible pricing. No hidden fees, just straightforward plans that scale with your needs. Whether you're a startup or an enterprise, our pricing models are tailored to deliver value. <br/>
    <br/>
    From essential services to full-scale digital strategies, explore our packages and discover how we can empower your business.`,
    };

    const Card = ({ title, price, features }) => (
        <div className="bg-red-600 text-white w-full max-w-xs p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto">
            <div>
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className="text-xl font-semibold mb-6">{price}</p>
                <ul className="text-base space-y-2 text-left">
                    {features.map((feature, i) => (
                        <li
                            key={i}
                            className="relative pl-6 before:absolute before:left-0 before:top-1 before:text-white before:content-['✓']"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );



    return (
        <div>
            <HeroSection data={data} />

            {/* Only the Pricing Cards Section is Centered */}
            <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
                <div className="max-w-4xl space-y-10 lg:space-y-20">
                    {/* Pricing Description (unchanged) */}
                    <Content data={content} />

                    {/* Website Pricing Heading */}
                    <h2 className="text-white text-3xl font-bold text-center mb-8">Website Pricing</h2>
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl items-start">
                            {/* Basic Website */}
                            <Card
                                title="Basic"
                                price="$300/month"
                                features={[
                                    "4 Pages Website",
                                    "E-commerce Capabilities",
                                    "Essential Features",
                                    "Basic Content",
                                    "Standard Template",
                                    "Responsive Design"
                                ]}
                            />
                            {/* Premium Website */}
                            <Card
                                title="Premium"
                                price="$200/month"
                                features={[
                                    "6 Pages Website",
                                    "E-commerce Capabilities",
                                    "Advanced Features",
                                    "High-Quality Multimedia",
                                    "Premium Template",
                                    "Improved Security",
                                    "Responsive Design",
                                    "Enhanced Customization",
                                    "WhatsApp Integration"
                                ]}
                            />
                            {/* Enterprise Website */}
                            <Card
                                title="Enterprise"
                                price="$500/month"
                                features={[
                                    "12 Pages Website",
                                    "E-commerce Capabilities",
                                    "Interactive Features",
                                    "High Quality Multimedia",
                                    "Premium Custom Design",
                                    "Advanced Security",
                                    "Responsive Design",
                                    "Advance Features",
                                    "Expanded Pages and Sections",
                                    "Enhanced Customization",
                                    "Personalized User Experience",
                                    "WhatsApp Integration"
                                ]}
                            />
                        </div>
                    </div>


                    {/* SEO Pricing Heading */}
                    <h2 className="text-white text-3xl font-bold text-center mb-8">SEO Pricing</h2>
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl items-start">
                            {/* Basic SEO */}
                            <Card
                                title="Basic"
                                price="$100/month"
                                features={[
                                    "3 Keywords Target",
                                    "Keyword Researching",
                                    "Keywords Data Base",
                                    "Content Writing for 3 Landing Page",
                                    "Optimized 3 Pages Meta Tags",
                                    "Enhance UI/UX design",
                                    "Technical Optimization",
                                    "Adding Schema Coding",
                                    "Analysis Tools Setup",
                                    "Google Crawling Optimization",
                                    "Weekly Updates",
                                    "50 Mix Backlinks /month",
                                    "3 Blog Writing /month"
                                ]}
                            />

                            {/* Premium SEO */}
                            <Card
                                title="Premium"
                                price="$150/month"
                                features={[
                                    "5 Keywords Target",
                                    "Keyword Researching",
                                    "Keywords Data Base",
                                    "Content Writing for 5 Landing Page",
                                    "Optimized 5 Pages Meta Tags",
                                    "Enhance UI/UX design",
                                    "Technical Optimization",
                                    "Adding Schema Coding",
                                    "Analysis Tools Setup",
                                    "Google Crawling Optimization",
                                    "Weekly Updates",
                                    "80 Mix Backlinks /month",
                                    "6 Blog Writing /month"
                                ]}
                            />

                            {/* Enterprise SEO */}
                            <Card
                                title="Enterprise"
                                price="$200/month"
                                features={[
                                    "Keywords Target For Overall Web Pages",
                                    "Keyword Researching",
                                    "Keywords Data Base",
                                    "Content Writing for All Landing Page",
                                    "Optimized Overall Site Meta Tags",
                                    "Enhance UI/UX design",
                                    "Technical Optimization",
                                    "Adding Schema Coding To All Web Page",
                                    "Analysis Tools Setup",
                                    "Google Crawling and also Indexing Optimization",
                                    "Weekly Updates",
                                    "150 Mix Backlinks /month",
                                    "10 Blog Writing /month"
                                ]}
                            />
                        </div>
                    </div>


                    {/* Digital Marketing Pricing Heading */}
                    <h2 className="text-white text-3xl font-bold text-center mb-8">Digital Marketing Pricing</h2>
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl items-start">
                            {/* Starter Marketing */}
                            <Card
                                title="Basic"
                                price="$100/month"
                                features={[
                                    "Optimized Basic Social Media Profiles",
                                    "Posting 5 Days A Week",
                                    "Basic Engagement",
                                    "Regular Posting",
                                    "Graphical + Animated + Video Post Creation",
                                    "Basic Reporting"
                                ]}
                            />

                            {/* Growth Marketing */}
                            <Card
                                title="Premium"
                                price="$180/month"
                                features={[
                                    "Advanced Optimization of Multiple Social Media Profiles",
                                    "Posting 5 Days A Week",
                                    "Moderate Engagement",
                                    "Regular Posting",
                                    "Graphical + Animated + Video Post Creation",
                                    "Detailed Reporting",
                                    "15 Blogs Per Month",
                                    "On-page, Off-page and Technical SEO",
                                    "Comprehensive Paid Advertising"
                                ]}
                            />

                            {/* Pro Marketing */}
                            <Card
                                title="Enterprise"
                                price="$250/month"
                                features={[
                                    "Advanced Optimization",
                                    "Daily Posting (60 Posts Per Month)",
                                    "Active Engagement",
                                    "Regular Posting",
                                    "Graphical + Animated + Video Post Creation",
                                    "Advance Reporting",
                                    "30 Blogs Per Month",
                                    "On-page, Off-page and Technical SEO",
                                    "Diverse Content Creation",
                                    "Assigned Account Manager",
                                    "Daily Website Maintenance",
                                    "Technical Assistance",
                                    "Comprehensive Paid Advertising"
                                ]}
                            />
                        </div>
                    </div>



                    {/* GO TO HOME Button (unchanged) */}
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