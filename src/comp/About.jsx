export default function About() {
  return (
    <article
      id="about"
      className="flex min-h-screen w-full items-center justify-center bg-[#F5F7F8] px-6 py-20 md:scroll-mt-6"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        {/* --- About Us Intro --- */}
        <section className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="font-hero mb-12 grid place-items-center text-3xl font-bold text-[#203959] md:text-4xl">
              About Us
            </h2>

            <p className="leading-relaxed text-[#203959]/80">
              The Corporate BrandUP Ltd is a professional business development
              firm dedicated to helping entrepreneurs and organizations
              establish and scale their enterprises. We deliver end-to-end
              corporate support including company formation, compliance
              management, administrative services, brand identity development,
              and business coaching designed with clarity, integrity, and
              precision.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/asset/strat.jpg"
              className="h-[260px] w-full object-cover"
              alt="About Corporate Brandup"
            />
          </div>
        </section>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* --- What We Do --- */}
          <section className="rounded-2xl bg-[#203959] p-10 text-white shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">What We Do</h3>
            <p className="leading-relaxed opacity-90">
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
          <section className="rounded-2xl bg-[#416772] p-10 text-white shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Our Approach</h3>
            <p className="leading-relaxed opacity-90">
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
        <section className="rounded-2xl bg-[#96ADA5] p-10 text-[#203959] shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold">Why Choose Us</h3>
          <p className="leading-relaxed opacity-90">
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
