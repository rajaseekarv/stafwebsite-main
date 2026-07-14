export function LogoBox({
  logo,
  size = "md",
}: {
  logo: { url: string; alt: string };
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const imgSize = { sm: "max-h-10", md: "max-h-16", lg: "max-h-24", xl: "max-h-44" }[size];
  return (
    <div className="grid place-items-center">
      <img
        src={logo.url}
        alt={logo.alt}
        className={`${imgSize} w-auto object-contain`}
      />
    </div>
  );
}
