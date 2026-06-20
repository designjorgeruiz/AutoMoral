import { LinkButton } from "@/components/ui/Button";
import { WhatsAppIcon, PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="am-container">
        <div className="relative overflow-hidden rounded-3xl border border-border-base bg-surface p-8 text-center md:p-14">
          <div className="am-glow absolute inset-x-0 top-0 h-40" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight md:text-4xl">
              <span className="am-steel-text">Tu próximo auto empieza en </span>
              <span className="text-accent">Auto Moral MX</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Compra, vende, financia o repara con un equipo que responde rápido y
              te trata bien. Escríbenos y demos el siguiente paso.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkButton href="/inventario" size="lg" className="w-full sm:w-auto">
                Ver inventario
                <ArrowRightIcon className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={whatsappUrl()} external variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <WhatsAppIcon className="h-5 w-5" />
                Hablar por WhatsApp
              </LinkButton>
              <LinkButton href={telUrl()} external variant="outline" size="lg" className="w-full sm:w-auto">
                <PhoneIcon className="h-4 w-4" />
                {SITE.contact.phone}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
