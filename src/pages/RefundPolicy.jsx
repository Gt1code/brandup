import PolicyLayout, {
  PolicySection,
  PolicyList,
  PolicyHighlight,
} from "@/components/PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout badge="Legal" title="Refund Policy">
      {/* Intro */}
      <PolicyHighlight>
        The Corporate BrandUp Ltd maintains a transparent and fair refund
        policy. By engaging our services, the Client acknowledges and agrees to
        the terms outlined below.
      </PolicyHighlight>

      {/* 1 */}
      <PolicySection number="1" title="General Refund Terms">
        <p>
          Our refund policy is designed to be fair to both our clients and our
          team. Please read the sections below carefully before engaging any
          service.
        </p>
      </PolicySection>

      {/* 2 */}
      <PolicySection number="2" title="Non-Refundable Services">
        <p>Refunds do not apply to the following:</p>
        <PolicyList
          items={[
            "Government fees (CAC, tax agencies, licensing fees, etc.)",
            "Documentation services already delivered",
            "Branding concepts already presented",
            "Completed digital or consultancy services",
          ]}
        />
      </PolicySection>

      {/* 3 */}
      <PolicySection number="3" title="Partial Refund Eligibility">
        <p>Partial refunds may be considered only when:</p>
        <PolicyList
          items={[
            "Work has not yet commenced, and no third-party fees have been paid.",
            "The Client cancels within 24 hours of payment.",
          ]}
        />
      </PolicySection>

      {/* 4 */}
      <PolicySection number="4" title="Refund Request Procedure">
        <p>To request a refund:</p>
        <PolicyList
          items={[
            "Submit a written request via the Company's official email.",
            "Provide proof of payment and reasons for refund.",
            "Refund processing may take 5–15 business days.",
          ]}
        />
        <p>
          Send refund requests to:{" "}
          <a
            href="mailto:thecorporatebrandup@gmail.com?subject=Refund Request"
            className="font-medium text-[#416772] underline underline-offset-4 hover:text-[#203959]"
          >
            thecorporatebrandup@gmail.com
          </a>
        </p>
      </PolicySection>

      {/* 5 */}
      <PolicySection number="5" title="Service Dissatisfaction">
        <p>If the Client is dissatisfied with a service:</p>
        <PolicyList
          items={[
            "The Company will first offer revisions, adjustments, or alternative solutions.",
            "Refunds will only be granted if no reasonable solution can be provided and if the terms above are met.",
          ]}
        />
      </PolicySection>

      {/* 6 */}
      <PolicySection number="6" title="Project Abandonment">
        <PolicyHighlight>
          If the Client becomes unresponsive for 14 days, the project will be
          considered abandoned. Payments made will be non-refundable.
        </PolicyHighlight>
      </PolicySection>

      {/* 7 */}
      <PolicySection number="7" title="Acceptance">
        <p>
          By engaging our services or making any payment, the Client
          acknowledges and agrees to this Refund Policy in full.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
