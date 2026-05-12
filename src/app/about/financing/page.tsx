import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Financing | TopFlight Builders",
};

export default function FinancingPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Make It Affordable</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Financing Options</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Flexible financing solutions so you can start your dream renovation today.
        </p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
            We believe your dream renovation shouldn&apos;t have to wait. TopFlight Builders works with trusted financing partners to offer flexible payment options that fit your budget.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Low Monthly Payments", desc: "Spread the cost of your renovation over time with manageable monthly payments." },
              { title: "Competitive Rates", desc: "We work with financing partners to bring you competitive interest rates." },
              { title: "Quick Approval", desc: "Fast and straightforward application process with quick approval decisions." },
              { title: "No Prepayment Penalty", desc: "Pay off your loan early at any time with no additional fees." },
            ].map((f) => (
              <div key={f.title} className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100">
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Ask About Financing
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
