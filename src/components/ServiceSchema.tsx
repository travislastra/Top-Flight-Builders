interface Props {
  serviceType: string;
  description?: string;
  areaServedSingle?: string;
  url?: string;
}

export default function ServiceSchema({ serviceType, description, areaServedSingle, url }: Props) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": { "@id": "https://topflightbuilders.net/#business" },
    "areaServed": areaServedSingle
      ? { "@type": "City", "name": areaServedSingle }
      : [
          { "@type": "City", "name": "Marietta" },
          { "@type": "City", "name": "Canton" },
          { "@type": "City", "name": "Kennesaw" },
          { "@type": "City", "name": "Acworth" },
          { "@type": "City", "name": "Woodstock" },
          { "@type": "City", "name": "Roswell" },
          { "@type": "City", "name": "Alpharetta" },
          { "@type": "City", "name": "East Cobb" },
          { "@type": "City", "name": "Milton" },
          { "@type": "City", "name": "Smyrna" },
        ],
  };
  if (description) schema["description"] = description;
  if (url) schema["url"] = url;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
