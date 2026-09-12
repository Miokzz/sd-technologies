import Image from "next/image";
export function BrandMark({
  className = "",
  preload = false,
  small = false,
}: {
  className?: string;
  preload?: boolean;
  small?: boolean;
}) {
  return (
    <Image
      className={`brand-mark ${className}`}
      src="/brand/mark.webp"
      alt="Símbolo oficial da S&D Technologies"
      width={695}
      height={525}
      sizes={small ? "51px" : "(max-width: 600px) 260px, 420px"}
      preload={preload}
    />
  );
}
