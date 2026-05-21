const BASE = "/Top-Flight-Builders";

export function resolveImg(src: string): string {
  return src.startsWith("/") ? `${BASE}${src}` : src;
}

export function toWebP(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

// Whether this image type gets WebP/srcset treatment
function isRasterImage(src: string): boolean {
  return /\.(jpe?g|png)$/i.test(src);
}

/**
 * Build a WebP srcset string for a resolved WebP path.
 * Expects the WebP file to have -480w, -800w, -1200w variants alongside it.
 */
export function buildWebPSrcSet(resolvedWebp: string): string {
  const base = resolvedWebp.replace(/\.webp$/i, "");
  return [
    `${base}-480w.webp 480w`,
    `${base}-800w.webp 800w`,
    `${base}-1200w.webp 1200w`,
    `${resolvedWebp} 1920w`,
  ].join(", ");
}

/**
 * Build a complete <source srcSet> and <img> pair as props objects.
 * Returns null for SVG or other non-raster types (skip srcset).
 */
export function imgProps(src: string, sizes?: string) {
  if (!isRasterImage(src)) return null;
  const resolved = resolveImg(src);
  const webp = toWebP(resolved);
  const srcSet = buildWebPSrcSet(webp);
  return { resolved, webp, srcSet, sizes };
}
