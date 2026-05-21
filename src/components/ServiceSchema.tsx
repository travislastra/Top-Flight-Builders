interface Props {
  serviceType: string;
  description: string;
}

export default function ServiceSchema({ serviceType, description }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": { "@id": "https://topflightbuilders.net/#business" },
    "areaServed": [
      { "@type": "City", "name": "Marietta" },
      { "@type": "City", "name": "Canton" },
      { "@type": "City", "name": "Kennesaw" },
      { "@type": "City", "name": "Acworth" },
      { "@type": "City", "name": "Woodstock" },
    ],
    "description": description,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
