export default function TrustedBrands() {
  // Each array is duplicated to create seamless infinite scroll
  const topRowLogos = [
    "brand-r1",
    "brand-r2",
    "brand-r3",
    "brand-r4",
    "brand-r5",
    "brand-r6",
    "brand-r7",
    // Duplicated
    "brand-r1",
    "brand-r2",
    "brand-r3",
    "brand-r4",
    "brand-r5",
    "brand-r6",
    "brand-r7",
  ];

  const bottomRowLogos = [
    "brand-r2.1",
    "brand-r2.2",
    "brand-r2.3",
    "brand-r2.4",
    "brand-r3",
    "brand-r2.6",
    "brand-r2.7",
    "brand-r2.8",
    // Duplicated
    "brand-r2.1",
    "brand-r2.2",
    "brand-r2.3",
    "brand-r2.4",
    "brand-r3",
    "brand-r2.6",
    "brand-r2.7",
    "brand-r2.8",
  ];

  return (
    <section className="bg-black pb-4 pt-7 md:pt-20 md:pb-28 overflow-hidden">
      <div className="mx-auto container px-6">
        <div className="mb-16 grid gap-4 md:gap-8 lg:grid-cols-2">
          <h2 className="text-xl px-5 lg:px-0 font-bold  text-center lg:text-start text-white sm:text-3xl lg:text-4xl lg:leading-[56px]">
            Trusted by 200+ companies around the world
          </h2>
          <p className="text-[10px] sm:text-sm lg:text-base text-center md:text-start text-white/100 font-normal">
            Trusted by over 200 companies globally, Deepsol Technologies stands as a reliable partner in innovation. We deliver tailored technology solutions—from custom software to advanced web and mobile applications—designed to meet each business’s unique needs.
          </p>
        </div>



        {/* Sliding Logos - Top Row (Left to Right) */}
        <div className="mb-8 overflow-hidden">
          <div className="flex animate-slide-left">
            {topRowLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex h-16 min-w-[192px]  items-center justify-center rounded-lg border border-[#A1AEBF]   "
              >
                {/* <span className="text-xl font-semibold text-white">{logo}</span> */}

                <img
                  src={`/images/brands/${logo}.png`} // Use the image path from the array
                  alt={`Logo ${index + 1}`} // Unique alt text for accessibility
                  priority // Optional: Preload the image
                  className="object-contain p-6 h-20 w-36 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Logos - Bottom Row (Right to Left) */}
        <div className="overflow-hidden">
          <div className="flex animate-slide-right">
            {bottomRowLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex h-16 min-w-[192px] items-center justify-center rounded-lg border border-[#A1AEBF]  "
              >
                <img
                  src={`/images/brands/${logo}.png`} // Use the image path from the array
                  alt={`Logo ${index + 1}`} // Unique alt text for accessibility
                  priority // Optional: Preload the image
                  className="object-contain p-6 h-20 w-36 "
                />

                {/* <span className="text-xl font-semibold text-white">{logo}</span> */}
              </div>
            ))}
          </div>
        </div>





      </div>
    </section>
  );
}
