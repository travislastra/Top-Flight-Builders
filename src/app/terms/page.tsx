export const metadata = { title: "Terms of Service | TopFlight Builders" };

export default function TermsPage() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-8">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: January 2025</p>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">Use of Website</h2>
          <p>This website is provided for informational purposes about TopFlight Builders LLC&apos;s services. Content may not be reproduced without written permission.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">Limitation of Liability</h2>
          <p>TopFlight Builders LLC shall not be liable for any indirect, incidental, or consequential damages arising from use of this website.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">Contact</h2>
          <p>Questions? Reach us at <a href="mailto:admin@topflightbuilders.net" className="text-[#1E4FBF] hover:underline">admin@topflightbuilders.net</a>.</p>
        </div>
      </div>
    </section>
  );
}
