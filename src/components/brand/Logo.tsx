import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  Logotipo oficial de Auto Moral MX.
  Assets en /public/brand/:
    - emblem.png    → emblema (doble pico + gota azul), fondo transparente
    - wordmark.png  → tipografía "AUTOMORAL", fondo transparente
    - logo.png      → lockup vertical completo (para usos grandes/centrados)
  Generados desde el archivo original con fondo transparente.
*/

const EMBLEM = { src: "/brand/emblem.png", w: 250, h: 240 };
const WORDMARK = { src: "/brand/wordmark.png", w: 1076, h: 120 };

interface LogoProps {
  /** Muestra el wordmark "AUTOMORAL" junto al emblema. */
  withWordmark?: boolean;
  className?: string;
  emblemClassName?: string;
  /** Carga prioritaria (úsalo en el header above-the-fold). */
  priority?: boolean;
}

export function Logo({
  withWordmark = true,
  className,
  emblemClassName,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={EMBLEM.src}
        alt="Auto Moral MX"
        width={EMBLEM.w}
        height={EMBLEM.h}
        priority={priority}
        className={cn("h-9 w-auto shrink-0", emblemClassName)}
      />
      {withWordmark && (
        <Image
          src={WORDMARK.src}
          alt="AUTOMORAL"
          width={WORDMARK.w}
          height={WORDMARK.h}
          priority={priority}
          className="h-[15px] w-auto"
        />
      )}
    </span>
  );
}
