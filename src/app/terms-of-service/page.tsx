import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Cojocaru Claudiu",
  description:
    "Terms of Service for Cojocaru Claudiu's portfolio website. Read the terms and conditions for using this website and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="February 20, 2026">
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          1. Introduction
        </h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          website operated by Cojocaru Claudiu (&quot;I&quot;, &quot;me&quot;,
          &quot;my&quot;), a freelance web developer based in Romania offering
          web design, web development, and full stack application development
          services.
        </p>
        <p className="mt-3">
          By accessing and using this website, you agree to be bound by these
          Terms. If you do not agree with any part of these Terms, please do not
          use this website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          2. Services Description
        </h2>
        <p>
          This website serves as a portfolio and professional presentation for
          my freelance services, which include:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <strong className="text-white/80">Web Design:</strong> Creating
            visually appealing, user-centered website designs.
          </li>
          <li>
            <strong className="text-white/80">Web Development:</strong> Building
            fast, responsive websites using modern technologies such as React,
            Next.js, and TypeScript.
          </li>
          <li>
            <strong className="text-white/80">Full Stack Applications:</strong>{" "}
            End-to-end application development including frontend, backend, and
            database solutions.
          </li>
        </ul>
        <p className="mt-3">
          Any specific services will be agreed upon separately through a project
          proposal or contract between me and the client.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          3. Intellectual Property
        </h2>
        <p>
          All content on this website, including but not limited to text, images,
          graphics, logos, code snippets, and design elements, is my intellectual
          property or used with permission. This content is protected by
          copyright and other intellectual property laws.
        </p>
        <p className="mt-3">You may not:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            Reproduce, distribute, or modify any content from this website
            without prior written consent.
          </li>
          <li>
            Use any content for commercial purposes without authorization.
          </li>
          <li>
            Remove or alter any copyright notices or proprietary markings.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          4. Use of the Website
        </h2>
        <p>When using this website, you agree to:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Use the website only for lawful purposes.</li>
          <li>
            Not attempt to gain unauthorized access to any part of the website or
            its systems.
          </li>
          <li>
            Not use the website in any way that could damage, disable, or impair
            its functionality.
          </li>
          <li>
            Not use automated tools (bots, scrapers) to access the website
            without permission.
          </li>
          <li>
            Provide accurate information when using the contact form.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          5. Contact Form
        </h2>
        <p>
          The contact form on this website allows you to send me inquiries about
          my services. By using the contact form, you acknowledge that:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            The information you provide will be processed in accordance with my{" "}
            <a href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </a>
            .
          </li>
          <li>
            Submitting an inquiry does not create a contractual obligation on
            either party.
          </li>
          <li>
            I will make reasonable efforts to respond to inquiries but do not
            guarantee a specific response time.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          6. Third-Party Links
        </h2>
        <p>
          This website may contain links to third-party websites (such as GitHub,
          LinkedIn, or project demos). I am not responsible for the content,
          privacy practices, or availability of these external websites. Visiting
          third-party links is at your own risk.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          7. Disclaimer of Warranties
        </h2>
        <p>
          This website is provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, either express or
          implied. I do not guarantee that:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            The website will be available at all times without interruption.
          </li>
          <li>The website will be free of errors or security vulnerabilities.</li>
          <li>
            The information on the website is always complete, accurate, or
            up-to-date.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          8. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by Romanian law and applicable EU
          regulations, I shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of this
          website, including but not limited to loss of data, loss of profits, or
          business interruption.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          9. Freelance Project Terms
        </h2>
        <p>
          These Terms apply only to the use of this website. Specific terms for
          freelance projects (including deliverables, timelines, payment terms,
          intellectual property transfer, and warranties) will be outlined in a
          separate project agreement or contract between me and the client.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          10. Governing Law
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of Romania and applicable European Union regulations. Any disputes
          arising from these Terms shall be subject to the exclusive jurisdiction
          of the competent courts in Romania.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          11. Changes to These Terms
        </h2>
        <p>
          I reserve the right to modify these Terms at any time. Any changes will
          be posted on this page with an updated revision date. Your continued
          use of the website after changes are posted constitutes acceptance of
          the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          12. Contact
        </h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          me at:{" "}
          <a
            href="mailto:claudiu2169@gmail.com"
            className="text-white hover:underline"
          >
            claudiu2169@gmail.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
