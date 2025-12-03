import React from "react";
import LightRays from "@/component/LightRays";

function Founder() {
  return (
    <article
      id="founder"
      className="relative flex min-h-[calc(100vh-56px)] w-full scroll-mt-15 items-center justify-center p-4 md:scroll-mt-14"
    >
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
        <LightRays
          raysOrigin="top-center-offset"
          raysColor="#5dfeca"
          raysSpeed={0.5}
          lightSpread={1.0}
          rayLength={2.8}
          followMouse={true}
          mouseInfluence={0.03}
          noiseAmount={0.0}
          distortion={0.03}
          className="custom-rays"
        />
      </div>

      <div className="max-w-5/6 md:max-w-4xl">
        <h2 className="font-hero mb-12 text-center text-3xl font-bold text-[#203959] md:text-4xl">
          Meet The Founder
        </h2>

        <section className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="md:flex-1">
            <p>
              Mr. Wilson is the Founder and Chief Executive Officer of The
              Corporate BrandUP Ltd, a business development and corporate
              support firm dedicated to helping entrepreneurs and organizations
              start, structure, and grow their businesses with clarity and
              confidence. With a strong background in business administration,
              brand development, and corporate advisory, Mr Wilson has built a
              reputation for simplifying complex processes and providing
              practical solutions that empower business owners.
            </p>
            <p className="mt-4">
              Under his leadership, The Corporate BrandUP Ltd has become known
              for its professionalism, transparent processes, and client focused
              service delivery.
            </p>
            <p className="mt-4">
              Driven by a passion for entrepreneurship, Mr. Wilson is committed
              to helping individuals turn their ideas into legally established
              and well structured businesses. He leads with integrity,
              innovation, and a clear vision to make business setup and
              development more accessible, stress free, and efficient for people
              at all stages of their business journey.
            </p>
          </div>

          <figure className="flex flex-col items-center md:flex-1">
            <img
              src="/asset/profile-pic.png"
              alt="Founder's Profile Picture"
              className="h-auto w-full max-w-[200px] rounded-4xl sm:max-w-[250px] md:max-w-[300px]"
            />
            <figcaption className="text-center">
              <h3 className="font-bold text-[#008576]">Efe Wilson Aghwata</h3>
              <p>Founder / CEO</p>
            </figcaption>
          </figure>
        </section>
      </div>
    </article>
  );
}

export default Founder;
