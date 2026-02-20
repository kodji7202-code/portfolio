import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Cojocaru Claudiu",
  description:
    "Cookie Policy for Cojocaru Claudiu's portfolio website. Learn about the cookies and similar technologies used on this website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="February 20, 2026">
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          1. What Are Cookies
        </h2>
        <p>
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile phone) when you visit a website. They are widely used
          to make websites work efficiently, provide a better user experience,
          and give website owners useful information about how their site is
          being used.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          2. How I Use Cookies
        </h2>
        <p>
          This website, operated by Cojocaru Claudiu, a freelance web developer
          based in Romania, uses a minimal number of cookies. I am committed to
          transparency about the cookies used on this site and to complying with
          GDPR and the ePrivacy Directive.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          3. Types of Cookies Used
        </h2>

        <div className="mt-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white/80 mb-2">
              3.1 Strictly Necessary Cookies
            </h3>
            <p>
              These cookies are essential for the website to function properly.
              They do not require your consent under GDPR as they are necessary
              for providing the service you have requested.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-white/80">Cookie</th>
                    <th className="text-left p-3 text-white/80">Purpose</th>
                    <th className="text-left p-3 text-white/80">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-3">theme</td>
                    <td className="p-3">
                      Stores your preferred theme (light/dark mode) via
                      localStorage
                    </td>
                    <td className="p-3">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80 mb-2">
              3.2 Hosting &amp; Infrastructure Cookies
            </h3>
            <p>
              This website is hosted on Vercel, which may set cookies for
              performance monitoring, security, and load balancing purposes.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-white/80">Cookie</th>
                    <th className="text-left p-3 text-white/80">Purpose</th>
                    <th className="text-left p-3 text-white/80">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-3">__vercel_live_token</td>
                    <td className="p-3">
                      Used by Vercel for deployment and preview functionality
                    </td>
                    <td className="p-3">Vercel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80 mb-2">
              3.3 Content Management Cookies
            </h3>
            <p>
              This website uses Sanity CMS for content management. Sanity may
              use cookies when delivering content through its CDN. These cookies
              are used for content delivery optimization and do not track
              individual users.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          4. Third-Party Cookies
        </h2>
        <p>
          This website does not use third-party advertising or tracking cookies.
          The only third-party services that may set cookies are:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <strong className="text-white/80">Vercel:</strong> Hosting
            infrastructure, may set performance and security cookies.
          </li>
          <li>
            <strong className="text-white/80">Sanity CMS:</strong> Content
            delivery, may use cookies for CDN optimization.
          </li>
        </ul>
        <p className="mt-3">
          Resend, used for contact form email delivery, operates server-side and
          does not set any cookies in your browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          5. Local Storage
        </h2>
        <p>
          In addition to cookies, this website uses browser localStorage to store
          your theme preference (light or dark mode). localStorage data remains
          on your device and is not transmitted to any server. You can clear
          localStorage through your browser settings at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          6. Managing Cookies
        </h2>
        <p>
          You can control and manage cookies through your browser settings. Most
          browsers allow you to:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>View what cookies are stored and delete them individually.</li>
          <li>Block third-party cookies.</li>
          <li>Block cookies from specific websites.</li>
          <li>Block all cookies.</li>
          <li>Delete all cookies when you close your browser.</li>
        </ul>
        <p className="mt-3">
          Please note that blocking or deleting cookies may affect the
          functionality of this website, such as your theme preference not being
          saved between visits.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          7. Your Rights
        </h2>
        <p>
          Under the GDPR, you have the right to be informed about the cookies
          used on websites you visit. For more information about your data
          protection rights, please see my{" "}
          <a href="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
          8. Changes to This Policy
        </h2>
        <p>
          I may update this Cookie Policy from time to time to reflect changes in
          the cookies used on this website or for other operational, legal, or
          regulatory reasons. Any changes will be posted on this page with an
          updated revision date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
        <p>
          If you have any questions about this Cookie Policy, please contact me
          at:{" "}
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
