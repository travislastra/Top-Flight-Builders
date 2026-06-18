import { Metadata } from "next";
import ServiceCityPage from "@/components/ServiceCityPage";
import { CITIES, SERVICES } from "@/lib/service-city-data";

const SERVICE_SLUG = "decks";

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
    title: `${service.name} in ${cityData.name}, GA | TopFlight Builders`,
    description: `${service.name} in ${cityData.name} and ${cityData.county} County, GA by TopFlight Builders. ${service.typicalRange.split(".")[0]}. Licensed, insured, 50+ five-star reviews. (404) 369-7129.`,
    alternates: {
      canonical: `https://travislastra.github.io/Top-Flight-Builders/services/${SERVICE_SLUG}/${city}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  return <ServiceCityPage citySlug={city} serviceSlug={SERVICE_SLUG} />;
}
