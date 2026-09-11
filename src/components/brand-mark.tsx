import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "", priority = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${className}`} aria-label="S&D Technologies">
      <Image
        src="/brand/mark.webp"
        alt="Símbolo oficial da S&D Technologies"
        width={260}
        height={196}
        priority={priority}
        sizes="(max-width: 768px) 96px, 140px"
      />
    </span>
  );
}
