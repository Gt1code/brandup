import PolicyLayout, {
  PolicySection,
  PolicyList,
  PolicyHighlight,
} from "@/components/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="05/01/2026"
      filePath="/pdfs/TCBP-Privacy-Policy.pdf"
    >
      {/* Intro */}
      <PolicyHighlight>
        The Corporate BrandUp Ltd ("we", "our", or "the Company") is committed
        to protecting your personal information and ensuring transparency about
        how we collect, use, and safeguard your data. This Privacy Policy
        explains what information we collect, how we use it, and your rights
        regarding your personal data.
      </PolicyHighlight>

      {/* 1 */}
      <PolicySection number="1" title="Information We Collect">
        <p>
          We may collect the following types of information when you interact
          with our website, services, or communication channels.
        </p>
        <p className="font-semibold text-[#203959]">Personal Information</p>
        <PolicyList
          items={[
            "Full name",
            "Email address",
            "Phone number",
            "Business information",
            "Documents provided for registration or service processing",
          ]}
        />
        <p className="mt-3 font-semibold text-[#203959]">
          Automatically Collected Information
        </p>
        <PolicyList
          items={[
            "IP address",
            "Browser type",
            "Device information",
            "Website usage data (cookies, analytics, etc.)",
          ]}
        />
      </PolicySection>

      {/* 2 */}
      <PolicySection number="2" title="How We Use Your Information">
        <p>We use your information to:</p>
        <PolicyList
          items={[
            "Provide and deliver our services",
            "Process business registration, documentation, and branding services",
            "Communicate with you about your projects or inquiries",
            "Improve user experience and service quality",
            "Maintain security and prevent misuse",
            "Send updates, reminders, or promotional messages (optional)",
          ]}
        />
        <PolicyHighlight>
          We do not sell your personal data to third parties.
        </PolicyHighlight>
      </PolicySection>

      {/* 3 */}
      <PolicySection number="3" title="Sharing of Information">
        <p>We may share your information only when necessary:</p>
        <PolicyList
          items={[
            "With government agencies or regulatory bodies for processing business registrations",
            "With trusted third-party partners who assist with service delivery",
            "To comply with legal obligations, court orders, or regulatory requirements",
          ]}
        />
        <p>All shared information is handled securely and confidentially.</p>
      </PolicySection>

      {/* 4 */}
      <PolicySection number="4" title="Data Security">
        <p>
          We take reasonable technical and organizational measures to protect
          your information from unauthorized access, loss or alteration, and
          misuse.
        </p>
        <PolicyHighlight>
          However, no online system is 100% secure, and we cannot guarantee
          absolute protection.
        </PolicyHighlight>
      </PolicySection>

      {/* 5 */}
      <PolicySection number="5" title="Your Rights">
        <p>You have the right to:</p>
        <PolicyList
          items={[
            "Request access to your personal data",
            "Correct inaccurate information",
            "Request deletion of your data (where legally allowed)",
            "Withdraw consent for marketing communication",
            "Ask how your data is being used",
          ]}
        />
        <p>
          Requests can be made via:{" "}
          <a
            href="mailto:thecorporatebrandup@gmail.com?subject=Business Request"
            aria-label="Make a business request"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#416772] underline underline-offset-4 hover:text-[#203959]"
          >
            thecorporatebrandup@gmail.com
          </a>
        </p>
      </PolicySection>

      {/* 6 */}
      <PolicySection number="6" title="Cookies">
        <PolicyList
          items={[
            "Our website may use cookies to improve user experience and analyze traffic.",
            "You can adjust or disable cookies through your browser settings.",
          ]}
        />
      </PolicySection>

      {/* 7 */}
      <PolicySection number="7" title="Third-Party Links">
        <PolicyList
          items={[
            "Our website may contain links to external websites.",
            "We are not responsible for the privacy practices of those websites.",
          ]}
        />
      </PolicySection>

      {/* 8 */}
      <PolicySection number="8" title="Updates to This Policy">
        <PolicyList
          items={[
            "We may update this Privacy Policy periodically.",
            'Any changes will be posted on this page with a new "Last Updated" date.',
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}
