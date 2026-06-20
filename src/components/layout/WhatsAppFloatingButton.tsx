import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl("Hola Auto Moral MX 👋, me interesa un auto.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full bg-success px-4 py-4 text-white shadow-[0_12px_30px_-8px_rgba(47,191,113,0.7)] transition-all hover:gap-2 hover:pr-5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        Escríbenos
      </span>
    </a>
  );
}
