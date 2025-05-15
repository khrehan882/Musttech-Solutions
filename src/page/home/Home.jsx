import CtaSection from "../../component/landing/CtaSection";
import Hero from "../../component/landing/Hero";
import Testimonials from "../../component/landing/Testimonials";
import TrustedBrands from "../../component/landing/TrustedBrands";
import WeOffer from "../../component/landing/WeOffer";
import WhyChoose from "../../component/landing/WhyChoose";
import Work from "../../component/landing/Work";
import ReasonSection from "../../component/ReasonSection";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedBrands />

      <WeOffer />

      <WhyChoose />

      <Work />

      <Testimonials />

      <CtaSection />

      <ReasonSection />
    </>
  );
}
