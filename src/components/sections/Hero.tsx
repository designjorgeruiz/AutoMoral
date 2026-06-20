import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border-base bg-background pt-16 md:pt-18">
      <div className="relative h-[52vh] min-h-[320px] w-full md:h-[72vh] md:min-h-[520px]">
        <Image
          src="/hero/hero.webp"
          alt="Auto Moral MX"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_68%]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background md:h-24" />
      </div>
    </section>
  );
}
