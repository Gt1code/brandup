import React from "react";

function Hero() {
  return (
    <article
      id="home"
      className="min-h-screen bg-blue-500 p-4 pt-25 flex justify-center text-[#ABB7B3]"
    >
      <div className="max-w-9/10 md:max-w-5xl flex flex-col justify-around">
        <section className="text-center">
          <h2 className="text-white text-4xl md:text-5xl">
            THE <br /> CORPORATE <br /> BRAND
            <span className="text-red-600">UP</span> LTD
          </h2>

          <p className="mt-4 md:text-xl">
            Start, Structure & Grow Your Business with Confidence.
          </p>
        </section>

        <section className="flex justify-around gap-6">
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
              <h2 className=" text-white text-xl">Business Hours</h2>
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
