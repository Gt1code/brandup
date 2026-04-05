import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const missionItems = [
  {
    number: "01",
    title: "Simplify Business Legalities",
    body: "Demystifying the complexities of business registration and legal compliance, making it easy and accessible for every entrepreneur to build on a solid, legal foundation.",
  },
  {
    number: "02",
    title: "Empower through Structure",
    body: 'Providing startups and SMEs with the organizational frameworks and corporate structures necessary to transition from "side hustles" to professional, scaleable enterprises.',
  },
  {
    number: "03",
    title: "Foster Sustainable Growth",
    body: "Offering strategic guidance and brand-building tools that ensure long-term sustainability and profitability for our clients in a competitive market.",
  },
  {
    number: "04",
    title: "Bridge the Professionalism Gap",
    body: "Equipping small business owners with the corporate identity and professional polish required to attract premium investors, partners, and customers.",
  },
  {
    number: "05",
    title: "Cultivate Entrepreneurial Excellence",
    body: "Serving as a lifelong partner for business owners, providing the continuous support and clarity needed to navigate the challenges of the modern business world with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#F5F7F8] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="font-hero text-3xl font-bold text-[#203959] md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#203959]/60">
            We are more than a service provider. we are the strategic partner
            that turns entrepreneurial vision into corporate reality.
          </p>
        </motion.div>

        {/* VISION BLOCK */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl bg-[#203959] px-8 py-12 shadow-xl md:px-14 md:py-16"
        >
          {/* decorative ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full border-40 border-white/5"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full border-30 border-white/5"
          />

          {/* label pill */}
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-white/70 uppercase">
            Our Vision
          </span>

          <p className="relative z-10 text-lg leading-[1.85] font-light text-white/90 md:text-xl">
            To be the leading catalyst for entrepreneurial success, empowering
            visionaries to transform fragmented ideas into structured, legally
            compliant, and high-performing corporate brands that set industry
            benchmarks and dominate their markets.
          </p>

          <p className="relative z-10 mt-6 text-base leading-relaxed text-white/60">
            We envision a future where entrepreneurs seamlessly evolve from
            founders to CEOs, supported by robust legal and operational
            frameworks that provide clarity, credibility, and investor-readiness
            from day one. By redefining compliance as a strategic advantage and
            elevating businesses beyond basic registration into fully realized,
            world-class brand identities, we bridge the gap between small-scale
            ambition and corporate excellence.
          </p>
        </motion.div>

        {/* MISSION BLOCK */}
        <div>
          {/* Mission heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="mb-2 inline-block rounded-full border border-[#203959]/20 bg-[#203959]/8 px-4 py-1 text-xs font-semibold tracking-widest text-[#203959]/60 uppercase">
                Our Mission
              </span>
              {/* <h3 className="text-2xl font-bold text-[#203959] md:text-3xl">
                Five Pillars of Purpose
              </h3> */}
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#203959]/50 md:text-right">
              Every pillar reflects a commitment we make to each client we
              serve.
            </p>
          </motion.div>

          {/* Mission grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {missionItems.map((item, i) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-7 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  i === 4
                    ? "bg-[#416772] text-white sm:col-span-2 lg:col-span-2"
                    : i % 2 === 0
                      ? "bg-white text-[#203959]"
                      : "bg-[#A6BCB5]/30 text-[#203959]"
                } `}
              >
                {/* Number watermark */}
                <span
                  className={`absolute top-3 right-4 text-6xl leading-none font-bold transition-opacity duration-300 select-none ${i === 4 ? "text-white/10 group-hover:text-white/15" : "text-[#203959]/6 group-hover:text-[#203959]/10"} `}
                >
                  {item.number}
                </span>

                {/* Numbered badge */}
                <span
                  className={`relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${i === 4 ? "bg-white/15 text-white" : "bg-[#203959]/10 text-[#203959]"} `}
                >
                  {item.number}
                </span>

                <h4
                  className={`relative z-10 text-base leading-snug font-semibold ${i === 4 ? "text-white" : "text-[#203959]"} `}
                >
                  {item.title}
                </h4>

                <p
                  className={`relative z-10 text-sm leading-relaxed ${i === 4 ? "text-white/75" : "text-[#203959]/65"} `}
                >
                  {item.body}
                </p>

                {/* bottom accent */}
                <div
                  className={`mt-auto h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14 ${i === 4 ? "bg-white/40" : "bg-[#416772]/40"} `}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
