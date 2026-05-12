import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Our Team | TopFlight Builders",
};

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">The People Behind the Work</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Our Team</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Experienced professionals dedicated to delivering exceptional remodeling results across Greater Atlanta.
        </p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Our team brings over 20 years of combined experience in residential and commercial construction. We are licensed, insured, and passionate about turning your vision into reality.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Project Management", "Design Consultation", "Master Craftsmanship"].map((role) => (
              <div key={role} className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-[#E8EAED] mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#1E4FBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-1">{role}</h3>
                <p className="text-gray-400 text-sm">Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
