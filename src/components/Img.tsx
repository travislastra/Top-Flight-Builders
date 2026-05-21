import { resolveImg, toWebP, buildWebPSrcSet } from "@/lib/image-utils";

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fetchHigh?: boolean;
  sizes?: string;
}

function isRaster(src: string) {
  return /\.(jpe?g|png)$/i.test(src);
}

export default function Img({
  src,
  alt,
  fill,
  className = "",
  width,
  height,
  priority,
  fetchHigh,
  sizes,
}: ImgProps) {
  const resolved = resolveImg(src);
  const webp = toWebP(resolved);
  const loading = priority ? "eager" : "lazy";
  const fetchPri = fetchHigh ? "high" : undefined;
  // Default sizes: fill images span the full viewport unless caller overrides
  const sizesAttr = sizes ?? (fill ? "100vw" : undefined);
  const raster = isRaster(src);
  // Priority images are directly preloaded — skip srcset to avoid preload/srcset mismatch
  const srcSet = raster && !priority && !fetchHigh ? buildWebPSrcSet(webp) : undefined;

  if (fill) {
    return (
      <picture style={{ display: "contents" }}>
        {raster && <source srcSet={srcSet} sizes={sizesAttr} type="image/webp" />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${className}`}
          loading={loading}
          sizes={sizesAttr}
          // @ts-ignore — fetchpriority not yet in React types
          fetchpriority={fetchPri}
        />
      </picture>
    );
  }

  return (
    <picture style={{ display: "contents" }}>
      {raster && <source srcSet={srcSet} sizes={sizesAttr} type="image/webp" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        sizes={sizesAttr}
        // @ts-ignore — fetchpriority not yet in React types
        fetchpriority={fetchPri}
      />
    </picture>
  );
}
