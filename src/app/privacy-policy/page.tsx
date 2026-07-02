import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Privacy Policy | TopFlight Builders",
  description: "Privacy Policy for TopFlight Builders LLC — how we collect, use, and protect your information, and disclosures required under California law including CIPA.",
  alternates: {
    canonical: "https://topflightbuilders.net/privacy-policy",
  },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-sans font-extrabold text-[#0D1B2E] text-xl mt-10 mb-3">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-sans font-bold text-[#0D1B2E] text-base mt-6 mb-2">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">{children}</ul>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]} />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-2">Effective date: July 2, 2026 &nbsp;|&nbsp; Last updated: July 2, 2026</p>
          <p className="text-gray-400 text-xs mb-10 italic">
            This policy is intended as an accurate description of our current data practices, not as legal advice. If you have legal questions about your rights, please consult an attorney.
          </p>

          <P>
            TopFlight Builders LLC (&ldquo;TopFlight Builders,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website at topflightbuilders.net (the &ldquo;Site&rdquo;). This Privacy Policy describes what information we collect, how we use it, and your rights — including rights under California law, such as the California Invasion of Privacy Act (CIPA) and the California Consumer Privacy Act (CCPA/CPRA).
          </P>

          {/* ── 1. INFORMATION WE COLLECT ── */}
          <H2>1. Information We Collect</H2>

          <H3>Information you provide directly</H3>
          <P>
            When you submit a contact or estimate request form, you provide us with information such as your name, email address, phone number, and a description of your project. This information is submitted through a form hosted by Houzz Inc. and is subject to both this policy and{" "}
            <a href="https://www.houzz.com/privacyPolicy" target="_blank" rel="noopener noreferrer" className="text-[#1E4FBF] hover:underline">Houzz&apos;s Privacy Policy</a>.
          </P>

          <H3>Information collected automatically</H3>
          <P>
            Like all websites, our hosting infrastructure may automatically record standard server log data when you visit the Site. This can include your IP address, browser type, operating system, referring URL, pages visited, and the date and time of your visit. We do not actively collect or analyze this data; it is a standard function of web hosting.
          </P>

          <H3>Information collected through analytics (with your consent)</H3>
          <P>
            If you accept analytics cookies via the consent banner, we use Google Analytics 4 to collect anonymized data about how visitors use the Site — including pages visited, time on page, general geographic region (city/state level), device type, and traffic source. Google Analytics does not collect your name, email address, or phone number, and we have not enabled any advertising features.
          </P>
          <P>
            Google Analytics sets cookies named <code className="text-sm bg-gray-100 px-1 rounded">_ga</code> and <code className="text-sm bg-gray-100 px-1 rounded">_ga_XXXXXXXXXX</code> (replace with your stream suffix) that persist for up to 2 years. If you decline the consent banner, these cookies are never set and no analytics data is transmitted. You can change your choice at any time via the &ldquo;Cookie Settings&rdquo; link in the site footer.
          </P>

          <H3>What we do NOT collect</H3>
          <P>
            We want to be direct about what is not happening on this Site:
          </P>
          <UL>
            <li>We do <strong>not</strong> use session replay or screen-recording tools (such as Hotjar, FullStory, or Microsoft Clarity) that record mouse movements, keystrokes, or page interactions.</li>
            <li>We do <strong>not</strong> use advertising pixels or tracking beacons (such as the Meta/Facebook Pixel or Google Ads conversion tags).</li>
            <li>We do <strong>not</strong> use live chat or messaging widgets that transmit the content of your on-site activity to a third party in real time.</li>
            <li>We do <strong>not</strong> use B2B visitor de-anonymization tools (such as ZoomInfo or Clearbit).</li>
          </UL>

          {/* ── 2. THIRD-PARTY SERVICES ── */}
          <H2>2. Third-Party Services on This Site</H2>
          <P>
            Two third-party services load content on this Site. We disclose them here in full.
          </P>

          <H3>Google Analytics 4 (with consent)</H3>
          <P>
            When you accept analytics via the consent banner, Google Analytics 4 is loaded from <code className="text-sm bg-gray-100 px-1 rounded">googletagmanager.com</code>. Google may process your data in accordance with{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1E4FBF] hover:underline">Google&apos;s Privacy Policy</a>.
            We have not enabled Google Signals, advertising personalization, or remarketing features. If you decline, no request is ever made to Google&apos;s analytics servers from this Site.
          </P>

          <H3>Google Maps (service area pages)</H3>
          <P>
            Pages describing our service areas (such as Marietta, Canton, Kennesaw, and others) embed interactive maps from Google Maps (<code className="text-sm bg-gray-100 px-1 rounded">maps.google.com</code>). When your browser loads one of these pages, it makes a direct request to Google&apos;s servers, which may allow Google to set cookies and log your IP address and visit details in accordance with{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1E4FBF] hover:underline">Google&apos;s Privacy Policy</a>.
            These maps are embedded as a functional navigation aid; they are not used for behavioral tracking or advertising.
          </P>

          <H3>Houzz contact form (contact page)</H3>
          <P>
            Our estimate request form is hosted by Houzz Inc. and embedded on our Contact page. When you visit that page, a request is made to Houzz&apos;s servers. If you submit the form, your name, email, phone number, and project description are sent to and stored by Houzz on our behalf. Houzz may set cookies in accordance with its own{" "}
            <a href="https://www.houzz.com/privacyPolicy" target="_blank" rel="noopener noreferrer" className="text-[#1E4FBF] hover:underline">Privacy Policy</a>.
            We receive your submission and use it only to follow up about your remodeling project.
          </P>

          {/* ── 3. COOKIES ── */}
          <H2>3. Cookies</H2>
          <P>
            TopFlight Builders does not set any first-party cookies of our own. The following third-party cookies may be set depending on your choices:
          </P>
          <UL>
            <li><strong>Google Analytics</strong> — <code className="text-sm bg-gray-100 px-1 rounded">_ga</code> and <code className="text-sm bg-gray-100 px-1 rounded">_ga_*</code> cookies (2-year expiry) are set <em>only</em> if you accept analytics via the consent banner.</li>
            <li><strong>Google Maps</strong> — cookies may be set when you visit a service area page containing an embedded map.</li>
            <li><strong>Houzz</strong> — cookies may be set when you visit the Contact page containing the embedded estimate form.</li>
          </UL>
          <P>
            You can withdraw analytics consent at any time via the &ldquo;Cookie Settings&rdquo; link in the site footer. You can also manage or block cookies through your browser settings.
          </P>

          {/* ── 4. CALIFORNIA — CIPA ── */}
          <H2>4. California Invasion of Privacy Act (CIPA) Disclosure</H2>
          <P>
            California&apos;s Invasion of Privacy Act (Cal. Penal Code §§ 630–638.55) prohibits the interception or recording of communications without the consent of all parties. This section explains how this Site relates to those protections.
          </P>
          <P>
            <strong>We do not use any tool that intercepts the content of your communications in real time.</strong> Specifically:
          </P>
          <UL>
            <li>No session replay or keystroke logging software runs on this Site.</li>
            <li>No third-party chat or messaging system captures what you type before you submit it.</li>
            <li>No advertising or analytics technology intercepts the content of your browsing on this Site.</li>
          </UL>
          <P>
            The third-party services described in Section 2 (Google Maps, Houzz form) receive standard technical data (such as IP address and HTTP request headers) as a result of your browser loading their content, as is true for any third-party embed on any website. This is disclosed above and is not a form of communication interception within the meaning of CIPA.
          </P>
          <P>
            We use Google Analytics 4 on this Site. It is gated behind a consent banner: the GA4 script does not load, and no data is transmitted to Google, unless you affirmatively click &ldquo;Accept Analytics.&rdquo; Google Consent Mode v2 is configured with all consent types defaulting to <code className="text-sm bg-gray-100 px-1 rounded">denied</code> on every page load. GA4 does not receive keystroke-level, field-level, or session-replay data — it receives only standard aggregated metrics (pages visited, session duration, referrer, device type).
          </P>

          {/* ── 5. HOW WE USE YOUR INFORMATION ── */}
          <H2>5. How We Use Your Information</H2>
          <P>We use the personal information you provide to:</P>
          <UL>
            <li>Respond to your estimate requests and project inquiries</li>
            <li>Communicate about scheduling, scope, and pricing for remodeling services</li>
            <li>Follow up on prior conversations about your project</li>
          </UL>
          <P>
            We do not use your contact information for cold marketing, do not add you to email newsletters without your explicit consent, and do not sell, rent, or trade your personal information to any third party.
          </P>

          {/* ── 6. HOW WE SHARE YOUR INFORMATION ── */}
          <H2>6. How We Share Your Information</H2>
          <P>
            We do not sell personal information. We share your information only in the following limited circumstances:
          </P>
          <UL>
            <li><strong>Houzz Inc.</strong> — as the platform that hosts and delivers our contact form, Houzz receives your form submission data on our behalf.</li>
            <li><strong>Legal requirements</strong> — if required by law, court order, or government authority, we may disclose information as legally compelled.</li>
            <li><strong>Business transfer</strong> — in the event of a merger, acquisition, or sale of substantially all of our assets, personal information may be transferred as part of that transaction, subject to the same protections described in this policy.</li>
          </UL>

          {/* ── 7. CALIFORNIA RESIDENT RIGHTS ── */}
          <H2>7. California Resident Rights (CCPA/CPRA)</H2>
          <P>
            California residents may have rights under the California Consumer Privacy Act (CCPA) and its amendment, the CPRA. These rights may include:
          </P>
          <UL>
            <li><strong>Right to Know</strong> — the categories and specific pieces of personal information we collect about you</li>
            <li><strong>Right to Delete</strong> — request deletion of personal information we hold about you</li>
            <li><strong>Right to Correct</strong> — request correction of inaccurate personal information</li>
            <li><strong>Right to Opt Out of Sale or Sharing</strong> — we do not sell or share personal information for cross-context behavioral advertising</li>
            <li><strong>Right to Non-Discrimination</strong> — we will not discriminate against you for exercising these rights</li>
          </UL>
          <P>
            To submit a request or ask questions about your data, contact us at{" "}
            <a href="mailto:Admin@TopFlightBuilders.net" className="text-[#1E4FBF] hover:underline">Admin@TopFlightBuilders.net</a>.
            We will respond within 45 days of a verifiable request.
          </P>
          <P>
            <em>Note: Whether CCPA thresholds fully apply to TopFlight Builders LLC depends on annual revenue and the volume of California residents&apos; data we process. Regardless of legal threshold, we honor the spirit of these rights and will respond to legitimate access or deletion requests.</em>
          </P>

          {/* ── 8. DATA RETENTION ── */}
          <H2>8. Data Retention</H2>
          <P>
            We retain contact form submissions and related project communications for as long as necessary to conduct business and fulfill our legal obligations — typically the duration of the project relationship plus a reasonable period thereafter. You may request deletion of your information at any time by contacting us.
          </P>

          {/* ── 9. CHILDREN'S PRIVACY ── */}
          <H2>9. Children&apos;s Privacy</H2>
          <P>
            This Site is not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
          </P>

          {/* ── 10. CHANGES ── */}
          <H2>10. Changes to This Policy</H2>
          <P>
            We will update this policy when our data practices change — including when analytics or other tracking tools are added. The effective date at the top of this page will reflect the most recent revision. We encourage you to review this policy periodically.
          </P>
          <P>
            If we add additional analytics or tracking tools in the future, we will update this policy and ensure a consent mechanism is in place before that tool is activated.
          </P>

          {/* ── 11. CONTACT ── */}
          <H2>11. Contact Us</H2>
          <P>
            For privacy questions, data requests, or concerns about this policy:
          </P>
          <div className="bg-[#F7F8FA] rounded-xl p-6 border border-gray-100 space-y-2 text-gray-600 text-sm">
            <p><strong className="text-[#0D1B2E]">TopFlight Builders LLC</strong></p>
            <p>Marietta, GA 30066</p>
            <p>
              Email:{" "}
              <a href="mailto:Admin@TopFlightBuilders.net" className="text-[#1E4FBF] hover:underline">
                Admin@TopFlightBuilders.net
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:4043697129" className="text-[#1E4FBF] hover:underline">
                (404) 369-7129
              </a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
            <Link href="/terms" className="text-[#1E4FBF] hover:underline">Terms of Service</Link>
            <Link href="/contact" className="text-[#1E4FBF] hover:underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
