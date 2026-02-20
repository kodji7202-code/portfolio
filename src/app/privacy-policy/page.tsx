import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Cojocaru Claudiu",
  description:
    "Privacy Policy for Cojocaru Claudiu's portfolio website. Learn how your personal data is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="February 20, 2026">
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          1. Introduction
        </h2>
        <p>
          Welcome to the website of Cojocaru Claudiu (&quot;I&quot;,
          &quot;me&quot;, &quot;my&quot;), a freelance web developer based in
          Romania. I am committed to protecting your privacy and handling your
          personal data in compliance with the General Data Protection Regulation
          (GDPR) and applicable Romanian data protection laws.
        </p>
        <p className="mt-3">
          This Privacy Policy explains how I collect, use, store, and protect
          your personal data when you visit my website and use my services,
          including web design, web development, and full stack application
          development.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          2. Data Controller
        </h2>
        <p>
          The data controller responsible for your personal data is:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Name: Cojocaru Claudiu</li>
          <li>Location: Romania</li>
          <li>Email: claudiu2169@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          3. Data I Collect
        </h2>
        <p>I may collect the following types of personal data:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <strong className="text-white/80">Contact form data:</strong> Name,
            email address, and message content when you use the contact form.
          </li>
          <li>
            <strong className="text-white/80">Usage data:</strong> Information
            about how you interact with the website, including pages visited,
            time spent, and navigation patterns.
          </li>
          <li>
            <strong className="text-white/80">Technical data:</strong> IP
            address, browser type, operating system, and device information
            collected automatically through server logs and analytics.
          </li>
          <li>
            <strong className="text-white/80">Cookie data:</strong> Information
            collected through cookies and similar technologies (see our{" "}
            <a href="/cookie-policy" className="text-white hover:underline">
              Cookie Policy
            </a>{" "}
            for details).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          4. How I Use Your Data
        </h2>
        <p>Your personal data is used for the following purposes:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>To respond to your inquiries submitted through the contact form.</li>
          <li>To provide and improve my web development services.</li>
          <li>To analyze website usage and improve user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          5. Legal Basis for Processing
        </h2>
        <p>
          Under the GDPR, I process your personal data based on the following
          legal grounds:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <strong className="text-white/80">Consent:</strong> When you
            voluntarily submit your data through the contact form.
          </li>
          <li>
            <strong className="text-white/80">Legitimate interest:</strong> To
            analyze website usage and improve my services.
          </li>
          <li>
            <strong className="text-white/80">Legal obligation:</strong> When
            processing is required by law.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          6. Third-Party Services
        </h2>
        <p>
          This website uses the following third-party services that may process
          your data:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong className="text-white/80">Vercel:</strong> This website is
            hosted on Vercel. Vercel may collect technical data such as IP
            addresses and request logs for performance and security purposes.
            Vercel&apos;s privacy policy applies to their processing of this data.
          </li>
          <li>
            <strong className="text-white/80">Sanity CMS:</strong> Content on
            this website is managed through Sanity CMS. Sanity processes data
            related to content delivery but does not collect visitor personal data
            directly.
          </li>
          <li>
            <strong className="text-white/80">Resend:</strong> Contact form
            submissions are delivered via Resend, an email delivery service.
            Resend processes the email address and message content you provide
            for the sole purpose of delivering your message to me.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          7. Data Retention
        </h2>
        <p>
          I retain your personal data only for as long as necessary to fulfill
          the purposes for which it was collected. Contact form submissions are
          retained for up to 12 months. Technical logs and analytics data are
          retained according to the policies of the respective third-party
          services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          8. Your Rights Under GDPR
        </h2>
        <p>
          As a data subject, you have the following rights under the GDPR:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <strong className="text-white/80">Right of access:</strong> You can
            request a copy of the personal data I hold about you.
          </li>
          <li>
            <strong className="text-white/80">Right to rectification:</strong>{" "}
            You can request correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong className="text-white/80">Right to erasure:</strong> You can
            request deletion of your personal data.
          </li>
          <li>
            <strong className="text-white/80">Right to restrict processing:</strong>{" "}
            You can request limitation of processing in certain circumstances.
          </li>
          <li>
            <strong className="text-white/80">Right to data portability:</strong>{" "}
            You can request your data in a structured, commonly used format.
          </li>
          <li>
            <strong className="text-white/80">Right to object:</strong> You can
            object to processing based on legitimate interest.
          </li>
          <li>
            <strong className="text-white/80">Right to withdraw consent:</strong>{" "}
            You can withdraw your consent at any time.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact me at{" "}
          <a
            href="mailto:claudiu2169@gmail.com"
            className="text-white hover:underline"
          >
            claudiu2169@gmail.com
          </a>
          . I will respond to your request within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          9. Data Security
        </h2>
        <p>
          I implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. This includes using HTTPS encryption for
          all data transmitted between your browser and the website, and security
          headers to prevent common web vulnerabilities.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          10. International Data Transfers
        </h2>
        <p>
          Some of the third-party services I use (Vercel, Sanity, Resend) may
          process data outside the European Economic Area (EEA). These services
          implement appropriate safeguards such as Standard Contractual Clauses
          (SCCs) to ensure your data is protected in accordance with GDPR
          requirements.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          11. Changes to This Policy
        </h2>
        <p>
          I may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated revision date. I encourage you to
          review this policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          12. Contact
        </h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise
          your data protection rights, please contact me at:{" "}
          <a
            href="mailto:claudiu2169@gmail.com"
            className="text-white hover:underline"
          >
            claudiu2169@gmail.com
          </a>
        </p>
        <p className="mt-3">
          You also have the right to lodge a complaint with the Romanian National
          Supervisory Authority for Personal Data Processing (ANSPDCP) if you
          believe your data protection rights have been violated.
        </p>
      </section>
    </LegalPageLayout>
  );
}
