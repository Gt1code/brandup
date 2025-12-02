export default function About() {
  return (
    <article
      id="about"
      className="w-full bg-[#F5F7F8] py-20 px-6 md:scroll-mt-6 min-h-screen flex justify-center items-center"
    >
      <div className="max-w-6xl mx-auto space-y-15">
        {/* --- About Us Intro --- */}
        <section className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <h2 className=" font-hero text-3xl md:text-4xl font-semibold text-[#203959]">
              About Us
            </h2>
            <p className="text-[#203959]/80 leading-relaxed">
              The Corporate BrandUP Ltd is a professional business development
              firm dedicated to helping entrepreneurs and organizations
              establish and scale their enterprises. We deliver end-to-end
              corporate support including company formation, compliance
              management, administrative services, brand identity development,
              and business coaching designed with clarity, integrity, and
              precision.
            </p>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/asset/strat.jpg"
              className="w-full h-[260px] object-cover"
              alt="About Corporate Brandup"
            />
          </div>
        </section>

        <div className="flex flex-col md:flex-row md:justify-between gap-[60px]">
          {/* --- What We Do --- */}
          <section className="bg-[#203959] text-white rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p className="opacity-90 leading-relaxed">
              We simplify the process of starting and running a business by
              providing clear guidance, reliable support, and professional
              services that help business owners focus on what matters most —
              growth.
              <br />
              <br />
              Our services reduce friction, save time, and eliminate uncertainty
              from the early stages of business ownership.
            </p>
          </section>

          {/* --- Our Approach --- */}
          <section className="bg-[#416772] text-white rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="opacity-90 leading-relaxed">
              We combine practical experience with a client-first mindset. We
              listen carefully, recommend clear next steps, and deliver
              actionable, straightforward solutions.
              <br />
              <br />
              Whether you need help structuring your company, developing a brand
              identity, or improving business processes, our team provides
              tailored support and hands-on expertise.
            </p>
          </section>
        </div>

        {/* --- Why Choose Us --- */}
        <section className="bg-[#96ADA5] text-[#203959] rounded-2xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
          <p className="opacity-90 leading-relaxed">
            Clients choose The Corporate BrandUP Ltd for our professionalism,
            transparency, and results-driven service.
            <br />
            <br />
            We provide clear pricing, easy-to-follow processes, and a dedicated
            team focused on helping businesses succeed.
            <br />
            <br />
            Ready to get started? Book a consultation or contact us to discuss
            how we can support your business.
          </p>
        </section>
      </div>
    </article>
  );
}
