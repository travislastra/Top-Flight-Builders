const BASE = "/Top-Flight-Builders";

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fetchHigh?: boolean; // set only on the page's LCP image
}

function toWebP(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

export default function Img({ src, alt, fill, className = "", width, height, priority, fetchHigh }: ImgProps) {
  const resolved = src.startsWith("/") ? `${BASE}${src}` : src;
  const webp = toWebP(resolved);
  const loading = priority ? "eager" : "lazy";

  if (fill) {
    return (
      <picture style={{ display: "contents" }}>
        <source srcSet={webp} type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${className}`}
          loading={loading}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore — fetchpriority valid HTML, not yet in React types
          fetchpriority={fetchHigh ? "high" : undefined}
        />
      </picture>
    );
  }

  return (
    <picture style={{ display: "contents" }}>
      <source srcSet={webp} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore — fetchpriority valid HTML, not yet in React types
        fetchpriority={priority ? "high" : undefined}
      />
    </picture>
  );
}
