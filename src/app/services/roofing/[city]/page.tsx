import { Metadata } from "next";
import ServiceCityPage from "@/components/ServiceCityPage";
import { CITIES, SERVICES } from "@/lib/service-city-data";

const SERVICE_SLUG = "roofing";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = CITIES.find((c) => c.slug === city);
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG)!;
  if (!cityData) return {};
  return {
    title: `${service.name} in ${cityData.name}, GA`,
    description: `${service.name} in ${cityData.name} and ${cityData.county} County, GA by TopFlight Builders. ${service.typicalRange.split(".")[0]}. Licensed, insured, 50+ five-star reviews. (404) 369-7129.`,
    openGraph: {
      title: `${service.name} in ${cityData.name}, GA | TopFlight Builders`,
      description: `${service.name} in ${cityData.name} and ${cityData.county} County, GA by TopFlight Builders. ${service.typicalRange.split(".")[0]}. Licensed, insured, 50+ five-star reviews. (404) 369-7129.`,
      images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: `Roofing contractor in ${cityData.name}, GA — TopFlight Builders` }],
    },
    alternates: {
      canonical: `https://topflightbuilders.net/services/${SERVICE_SLUG}/${city}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  return <ServiceCityPage citySlug={city} serviceSlug={SERVICE_SLUG} />;
}
