import Image from "next/image";
export function BrandMark({
  className = "",
  priority = false,
  small = false,
}: {
  className?: string;
  priority?: boolean;
  small?: boolean;
}) {
  return (
    <Image
      className={`brand-mark ${className}`}
      src="/brand/mark-transparent.svg"
      alt="Símbolo oficial da S&D Technologies"
      width={695}
      height={525}
      sizes={small ? "51px" : "(max-width: 600px) 260px, 420px"}
      loading="eager"
      fetchPriority={priority ? "high" : undefined}
      unoptimized
    />
  );
}
