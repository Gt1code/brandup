import React from "react";
import Beams from "@/component/Beams";

function Hero() {
  return (
    <article
      id="home"
      className="relative flex min-h-screen w-full justify-center p-4 pt-25 text-white"
    >
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="relative flex max-w-9/10 flex-col justify-around md:max-w-5xl">
        <section className="font-hero text-center">
          <h2 className="text-4xl text-white md:text-5xl">
            THE <br /> CORPORATE <br /> BRAND
            <span className="text-red-600">UP</span> LTD
          </h2>

          <p className="mt-4 md:text-xl">
            Start, Structure & Grow Your Business with Confidence.
          </p>
        </section>

        <section className="bg-[rgba(218, 237, 232, 0.13)] flex justify-around gap-6 rounded-2xl p-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.4px]">
          <div className="flex-1 sm:flex-2">
            <p className="max-w-[600px]">
              We provide professional support for business setup, organizational
              compliance, brand identity, and strategic advisory helping you
              launch and grow with ease.
            </p>
          </div>
          <div className="h-full w-0.5 bg-white"></div>
          <div className="flex flex-1 justify-end sm:flex-[1.2] md:flex-1">
            <div className="">
              <h2 className="text-xl font-bold text-yellow-400">
                Business Hours
              </h2>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 9am - 12pm</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Hero;
