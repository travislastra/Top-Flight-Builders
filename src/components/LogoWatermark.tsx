export default function LogoWatermark() {
  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none select-none z-0"
      style={{
        opacity: 0.07,
        transform: "translate(-50%, -50%)",
        width: "min(90vw, 820px)",
      }}
      aria-hidden="true"
    >
      <img
        src="/logo.webp"
        alt=""
        width={820}
        height={547}
        className="w-full brightness-0 invert"
        draggable={false}
      />
    </div>
  );
}
