import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function Faq() {
  return (
    <article
      id="faqs"
      className="min-h-[calc('100vh - 56px')] mt-0 flex w-full items-center justify-center bg-[#F5F7F8] px-6 py-20 md:scroll-mt-6"
    >
      <section className="flex flex-col gap-6 md:w-4xl md:flex-row md:justify-between">
        <div className="flex-[0.8] p-4">
          <h2 className="font-hero text-center text-3xl font-semibold text-[#203959] md:hidden md:text-4xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <h2 className="font-hero hidden text-left text-3xl leading-14 font-semibold text-[#203959] md:block md:text-4xl">
            FREQUENTLY
            <br /> ASKED
            <br /> QUESTIONS
          </h2>
        </div>

        <div className="flex-[1.2]">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you handle CAC business registration?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. We assist with business name registration, company
                  incorporation, documentation, and all related processes with
                  the Corporate Affairs Commission
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does the business registration process take?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Timelines vary depending on the type of registration and the
                  completeness of your documents, but most registrations are
                  completed within a few days once all requirements are
                  submitted
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can you help me choose the right business structure?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. We guide you in selecting the best structure,
                  whether enterprise, limited company, NGO, or partnership based
                  on your goals and future plans
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you offer licensing and permit assistance?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. We help businesses identify, apply for, and secure the
                  licenses or permits required for their specific industry
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I get advisory or coaching for my new business?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. We offer tailored business coaching sessions, strategic
                  guidance, and practical support to help you make informed
                  decisions and grow effectively
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you provide post-registration support?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. We offer ongoing administrative and documentation
                  support, compliance reminders, corporate updates, and general
                  business assistance
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Simply contact us through our website, WhatsApp, or phone
                  number. We will guide you through the next steps based on the
                  service you need
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Do you work with clients outside Nigeria?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. We work with clients within Nigeria and internationally,
                  especially those looking to set up businesses remotely
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Are your services affordable?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer flexible pricing to meet the needs of startups, small
                  businesses, and growing companies. Quotes are provided based
                  on the service you require
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Can everything be done online?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes. Most of our services including registration,
                  documentation, branding, and advisory can be completed
                  remotely for your convenience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </article>
  );
}

export default Faq;
