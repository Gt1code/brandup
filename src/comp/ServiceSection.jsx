import ServiceCard from "./ServiceCard";
import serviceDetails from "@/utils/MapElements";

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
          {serviceDetails.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="scroll-mt-24 transition duration-300 ease-in-out hover:scale-102"
            >
              <ServiceCard
                icon={item.card.icon}
                title={item.card.title}
                color={item.card.color}
                desc={item.card.desc}
                list={item.card.list}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
