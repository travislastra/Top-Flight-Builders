import { redirect } from "next/navigation";
import { CITIES } from "@/lib/service-city-data";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  redirect(`/services/decks/${city}`);
}
