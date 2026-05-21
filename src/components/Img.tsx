const BASE = "/Top-Flight-Builders";

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

function toWebP(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

export default function Img({ src, alt, fill, className = "", width, height, priority }: ImgProps) {
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
      />
    </picture>
  );
}
