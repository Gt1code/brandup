import React from "react";

function Hero() {
  return (
    <article
      id="home"
      className="min-h-screen w-full relative bg-[url('/asset/hero-img.jpg')] bg-cover bg-center p-4 pt-25 flex justify-center text-white"
    >
      <div
        className="absolute inset-0 bg-linear-to-b 
              from-[#203959]/90 to-[#416772]/80"
      ></div>

      <div className="max-w-9/10 md:max-w-5xl flex flex-col justify-around relative">
        <section className="text-center font-hero">
          <h2 className="text-white text-4xl md:text-5xl">
            THE <br /> CORPORATE <br /> BRAND
            <span className="text-red-600">UP</span> LTD
          </h2>

          <p className="mt-4 md:text-xl">
            Start, Structure & Grow Your Business with Confidence.
          </p>
        </section>

        <section
          className="flex justify-around gap-6 bg-[rgba(218, 237, 232, 0.13)] rounded-2xl 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            backdrop-blur-[6.4px] p-4"
        >
          <div className="flex-1 sm:flex-2 ">
            <p className="max-w-[600px]">
              We provide professional support for business setup, organizational
              compliance, brand identity, and strategic advisory helping you
              launch and grow with ease.
            </p>
          </div>
          <div className="bg-white h-full w-0.5"></div>
          <div className="sm:flex-[1.2] md:flex-1 flex-1  flex justify-end">
            <div className="">
              <h2 className=" text-yellow-400 font-bold text-xl">
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
