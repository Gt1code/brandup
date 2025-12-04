import ServiceCard from "./ServiceCard";
import {
  FormationIcon,
  RegistrationIcon,
  BrandingIcon,
  CoachingIcon,
  CorporateSupportIcon,
} from "./Icon";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full scroll-mt-14 items-center justify-center bg-[#F5F7FA] px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="font-hero mb-12 text-center text-3xl font-bold text-[#203959] md:text-4xl">
          Our Professional Services
        </h2>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* Company Formation */}
          <div
            id="formation"
            className="scroll-mt-24 transition duration-300 ease-in-out hover:scale-102"
          >
            <ServiceCard
              id="formation"
              icon={<FormationIcon />}
              title="Business Formation & Development"
              color="#00A38B"
              desc="Set up your company with expert guidance and structured documentation."
              list={[
                "Guidance on business structure",
                "Preparation of documentation",
                "Support through formation process",
                "Post-formation advisory",
              ]}
            />
          </div>

          {/* Business Registration */}
          <div
            id="registration"
            className="scroll-mt-24 self-stretch transition duration-300 ease-in-out hover:scale-102"
          >
            <ServiceCard
              icon={<RegistrationIcon />}
              title="Business Registration Services"
              color="#002855"
              desc="We handle your registration processes with precision and compliance."
              list={[
                "Registration step guidance",
                "Document preparation & submission",
                "Coordination with authorities",
                "Follow-up until completion",
              ]}
            />
          </div>

          {/* Branding */}
          <div
            id="branding"
            className="scroll-mt-24 transition duration-300 ease-in-out hover:scale-102"
          >
            <ServiceCard
              icon={<BrandingIcon />}
              title="Business Branding"
              color="#C28F2C"
              desc="We help businesses build strong, recognizable and compelling identities."
              list={[
                "Brand strategy",
                "Name development",
                "Messaging & positioning",
                "Logo & identity creation",
              ]}
            />
          </div>

          {/* Coaching */}
          <div
            id="coaching"
            className="scroll-mt-24 transition duration-300 ease-in-out hover:scale-102"
          >
            <ServiceCard
              icon={<CoachingIcon />}
              title="Business Coaching & Advisory"
              color="#008576"
              desc="Strategic coaching to help you grow and make informed decisions."
              list={[
                "Business planning",
                "Growth strategy",
                "Solution-focused sessions",
                "Personalized coaching",
              ]}
            />
          </div>

          {/* administrative support */}
          <div
            id="support"
            className="scroll-mt-24 transition duration-300 ease-in-out hover:scale-102"
          >
            <ServiceCard
              icon={<CorporateSupportIcon />}
              title="Corporate and Administrative Support"
              color="#203959"
              desc="We help businesses stay organized, compliant, and efficient through professional corporate support services."
              list={[
                "General compliance and business documentation",
                "Record management and administrative coordination",
                "Operational support to simplify internal processes",
                "Routine business maintenance assistance",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
