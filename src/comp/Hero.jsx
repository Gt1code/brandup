import React from "react";

function Hero() {
  return (
    <article
      id="home"
      className="relative flex min-h-screen w-full justify-center bg-white bg-[url('/asset/hero-bg.png')] bg-cover bg-top bg-no-repeat p-4 pt-25 text-white bg-blend-multiply"
    >
      <div className="relative flex w-[95%] flex-col justify-around md:max-w-5xl">
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
          <div className="hidden flex-1 sm:flex-2 md:block">
            <p className="max-w-[600px]">
              We provide professional support for business setup, organizational
              compliance, brand identity, and strategic advisory helping you
              launch and grow with ease.
            </p>
          </div>
          <div className="hidden h-full w-0.5 bg-white md:block"></div>
          <div className="flex flex-1 justify-center text-center sm:flex-[1.2] md:flex-1 md:justify-end">
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
