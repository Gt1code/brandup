import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center bg-[#F5F7F8] px-8 py-20 md:scroll-mt-6"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        {/* About Us Intro  */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-hero mb-12 grid place-items-center text-3xl font-bold text-[#203959] md:text-4xl">
            About Us
          </h2>

          <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
            <p className="flex-1 text-center leading-relaxed text-[#203959]/80 md:text-left">
              Launched in 2023, The Corporate BrandUp Ltd is a dynamic partner
              for Nigerian entrepreneurs and expanding businesses. We specialize
              in comprehensive business development services, including
              professional business formation, CAC registration, and brand
              identity development. Our expertise provides a solid foundation
              for growth, ensuring compliance and strategic direction. We offer
              tailored support and seamless processes to help you navigate the
              complexities of launching and scaling your enterprise with
              confidence. Our mission is to empower your business to thrive from
              its inception to long-term success.
            </p>
            <div className="flex-1 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/asset/about-img.webp"
                className="h-[260px] w-full object-cover"
                alt="About Corporate Brandup"
              />
            </div>
          </div>
        </motion.section>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* What We Do */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-[#203959] p-10 text-white shadow-lg"
          >
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
          </motion.section>

          {/* Our Approach */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-[#416772] p-10 text-white shadow-lg"
          >
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
          </motion.section>
        </div>

        <WhyChooseUs />
      </div>
    </section>
  );
}
