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

export default function Img({ src, alt, fill, className = "", width, height, priority }: ImgProps) {
  const resolved = src.startsWith("/") ? `${BASE}${src}` : src;

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
