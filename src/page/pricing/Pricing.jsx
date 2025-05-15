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

    return (
        <div>
            <HeroSection data={data} />

            {/* Only the Pricing Cards Section is Centered */}
            <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
                <div className="max-w-4xl space-y-10 lg:space-y-20">
                    {/* Pricing Description (unchanged) */}
                    <Content data={content} />

                    {/* Centered Pricing Cards */}
                    <div className="flex items-center justify-center min-h-[60vh]"> {/* Only this part is centered */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                            {/* Starter Card */}
                            <div className="bg-white text-black w-full max-w-xs h-[420px] p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Starter</h3>
                                    <p className="text-xl font-semibold mb-6">$99/month</p>
                                    <ul className="list-disc list-inside text-base space-y-2 text-left">
                                        <li>Basic Website</li>
                                        <li>SEO Setup</li>
                                        <li>1 Month Support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Professional Card */}
                            <div className="bg-white text-black w-full max-w-xs h-[420px] p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Professional</h3>
                                    <p className="text-xl font-semibold mb-6">$199/month</p>
                                    <ul className="list-disc list-inside text-base space-y-2 text-left">
                                        <li>Custom Website</li>
                                        <li>SEO + SMM</li>
                                        <li>3 Months Support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Enterprise Card */}
                            <div className="bg-white text-black w-full max-w-xs h-[420px] p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
                                    <p className="text-xl font-semibold mb-6">$499/month</p>
                                    <ul className="list-disc list-inside text-base space-y-2 text-left">
                                        <li>Complete Digital Strategy</li>
                                        <li>Dedicated Team</li>
                                        <li>1 Year Support</li>
                                    </ul>
                                </div>
                            </div>
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