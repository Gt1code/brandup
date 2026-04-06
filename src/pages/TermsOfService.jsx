import PolicyLayout, {
  PolicySection,
  PolicyList,
  PolicyHighlight,
} from "@/components/PolicyLayout";

export default function TermsOfService() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Terms of Service"
      lastUpdated="05/01/2026"
    >
      {/* Intro */}
      <PolicyHighlight>
        These Terms of Service govern your use of our website, services, and
        communication platforms. By using our services, you agree to these
        terms.
      </PolicyHighlight>

      {/* 1 */}
      <PolicySection number="1" title="Acceptance of Terms">
        <p>
          By accessing or using any service provided by The Corporate BrandUp
          Ltd, you agree to be bound by these Terms of Service and any
          additional policies referenced herein.
        </p>
      </PolicySection>

      {/* 2 */}
      <PolicySection number="2" title="Our Services">
        <p>We offer services including but not limited to:</p>
        <PolicyList
          items={[
            "Business formation",
            "Business registration",
            "Licensing support",
            "Branding services",
            "Corporate and administrative support",
            "Advisory and coaching",
          ]}
        />
        <p>
          Service details may vary depending on requirements and regulatory
          processes.
        </p>
      </PolicySection>

      {/* 3 */}
      <PolicySection number="3" title="Client Responsibilities">
        <p>Clients agree to:</p>
        <PolicyList
          items={[
            "Provide accurate and complete information",
            "Supply required documents promptly",
            "Make payments as agreed",
            "Use the services for lawful purposes only",
          ]}
        />
        <PolicyHighlight>
          Failure to comply may delay or prevent service delivery.
        </PolicyHighlight>
      </PolicySection>

      {/* 4 */}
      <PolicySection number="4" title="Service Timelines">
        <p>Timelines depend on:</p>
        <PolicyList
          items={[
            "Document completeness",
            "Regulatory agencies processing time",
            "Client responsiveness",
          ]}
        />
        <p>
          We strive to deliver services promptly but cannot guarantee government
          or third-party processing times.
        </p>
      </PolicySection>

      {/* 5 */}
      <PolicySection number="5" title="Payments and Refunds">
        <PolicyList
          items={[
            "Payments are due before service commencement unless otherwise agreed.",
            "Refunds are only issued if work has not started or where service cannot be completed due to our fault.",
            "Fees paid for government, regulatory, or third-party filings are non-refundable.",
          ]}
        />
      </PolicySection>

      {/* 6 */}
      <PolicySection number="6" title="Intellectual Property">
        <p>
          All content, designs, logos, and materials provided by the Company are
          protected and may not be copied or reproduced without permission.
        </p>
      </PolicySection>

      {/* 7 */}
      <PolicySection number="7" title="Limitation of Liability">
        <p>We are not liable for:</p>
        <PolicyList
          items={[
            "Delays caused by government agencies",
            "Errors arising from inaccurate information provided by the client",
            "Third-party system failures",
            "Indirect, incidental, or consequential damages",
          ]}
        />
        <PolicyHighlight>
          Our liability is limited to the amount paid for the specific service
          in question.
        </PolicyHighlight>
      </PolicySection>

      {/* 8 */}
      <PolicySection number="8" title="Confidentiality">
        <p>
          All client information and documents are handled confidentially and
          used solely for service delivery.
        </p>
      </PolicySection>

      {/* 9 */}
      <PolicySection number="9" title="Termination">
        <p>We may suspend or terminate service if:</p>
        <PolicyList
          items={[
            "The client violates these terms",
            "Fraudulent or harmful activity is detected",
            "Required information is not provided",
          ]}
        />
        <p>
          Clients may also terminate service at any time (refund terms apply).
        </p>
      </PolicySection>

      {/* 10 */}
      <PolicySection number="10" title="Governing Law">
        <p>
          These terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
