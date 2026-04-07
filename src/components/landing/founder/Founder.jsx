import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Founder() {
  return (
    <article
      id="founder"
      className="relative w-full scroll-mt-14 overflow-hidden bg-[#203959] px-0"
    >
      {/* Large arc top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full border-60 border-[#416772]/25"
      />
      {/* Small circle bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full border-40 border-[#A6BCB5]/15"
      />
      {/* Diagonal stripe accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-linear-to-b from-transparent via-[#A6BCB5]/30 to-transparent md:w-0.5"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Section label*/}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col items-center gap-3"
        >
          <h2 className="font-hero text-center text-3xl font-bold text-white md:text-4xl">
            Meet The Founder
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* LEFT Image panel  */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Image frame */}
            <div className="relative w-full max-w-[320px] md:max-w-full">
              {/* Offset border frame */}
              <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl border-2 border-[#416772]/50" />
              {/* Teal fill behind image */}
              <div className="absolute -top-3 -left-3 h-full w-full rounded-3xl bg-[#416772]/20" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/asset/founder-img.webp"
                  alt="Efe Wilson Aghwata — Founder & CEO"
                  className="h-auto w-full object-cover"
                  style={{ aspectRatio: "4/5", objectPosition: "top center" }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute right-0 bottom-0 left-0 h-28 bg-linear-to-t from-[#203959]/90 to-transparent" />

                <div className="absolute right-0 bottom-0 left-0 px-6 pb-5">
                  <div className="flex w-full flex-col items-center justify-center">
                    <p className="text-lg font-bold text-[#A6BCB5]">
                      Efe Wilson Aghwata
                    </p>
                    <p className="text-sm font-medium text-white/70">
                      Founder &amp; Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeRight}
              className="mt-2 hidden flex-wrap items-center justify-center gap-2 md:flex lg:hidden"
            >
              {[
                "Business Formation",
                "Brand Development",
                "Corporate Advisory",
                "CAC Registration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#A6BCB5]/25 bg-[#A6BCB5]/10 px-3 py-1 text-xs font-medium text-[#A6BCB5]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeRight}
              className="mt-4 hidden justify-center md:flex md:justify-start lg:hidden"
            >
              <a
                href="https://wa.me/message/4F2ZBE3VOLNEC1"
                aria-label="Chat with us on whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#416772] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#A6BCB5] hover:text-[#203959] hover:shadow-xl"
              >
                Book a Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ExternalLink />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT Text panel  */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <motion.blockquote
              variants={fadeRight}
              className="relative border-l-0 pl-0 md:border-l-4 md:border-[#416772] md:pl-5"
            >
              <p className="text-lg leading-relaxed font-light text-white/70 italic md:text-xl">
                "Making business setup and development more accessible,
                stress-free, and efficient for every entrepreneur, at every
                stage."
              </p>
            </motion.blockquote>

            <motion.p
              variants={fadeRight}
              className="leading-[1.85] text-white/75"
            >
              Mr. Wilson is the Founder and Chief Executive Officer of The
              Corporate BrandUP Ltd, a business development and corporate
              support firm dedicated to helping entrepreneurs and organizations
              start, structure, and grow their businesses with clarity and
              confidence.
            </motion.p>

            <motion.p
              variants={fadeRight}
              className="leading-[1.85] text-white/75"
            >
              With a strong background in business administration, brand
              development, and corporate advisory, Mr. Wilson has built a
              reputation for simplifying complex processes and providing
              practical solutions that empower business owners. Under his
              leadership, The Corporate BrandUP Ltd has become known for its
              professionalism, transparent processes, and client-focused service
              delivery.
            </motion.p>

            <motion.p
              variants={fadeRight}
              className="leading-[1.85] text-white/75"
            >
              Driven by a passion for entrepreneurship, he is committed to
              helping individuals turn their ideas into legally established and
              well-structured businesses leading with integrity, innovation, and
              a clear vision.
            </motion.p>

            <motion.div
              variants={fadeRight}
              className="mt-2 flex flex-wrap justify-center gap-2 md:hidden md:justify-start lg:flex"
            >
              {[
                "Business Formation",
                "Brand Development",
                "Corporate Advisory",
                "CAC Registration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#A6BCB5]/25 bg-[#A6BCB5]/10 px-3 py-1 text-xs font-medium text-[#A6BCB5]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeRight}
              className="mt-4 flex justify-center md:hidden md:justify-start lg:flex"
            >
              <a
                href="https://wa.me/message/4F2ZBE3VOLNEC1"
                aria-label="Chat with us on whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#416772] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#A6BCB5] hover:text-[#203959] hover:shadow-xl"
              >
                Book a Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ExternalLink />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
