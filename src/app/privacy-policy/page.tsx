export const metadata = { title: "Privacy Policy | TopFlight Builders" };

export default function PrivacyPage() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-8">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: January 2025</p>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>TopFlight Builders LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or contact us about our services.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and project details when you submit a contact form or request an estimate.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">How We Use Your Information</h2>
          <p>We use the information to respond to your inquiries, provide estimates, and communicate about your project. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 className="font-sans font-bold text-[#0D1B2E] text-xl mt-8 mb-3">Contact Us</h2>
          <p>Questions about this policy? Contact us at <a href="mailto:Admin@TopFlightBuilders.net" className="text-[#1E4FBF] hover:underline">Admin@TopFlightBuilders.net</a> or call (404) 369-7129.</p>
        </div>
      </div>
    </section>
  );
}
