import { LinkButton } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <Logo withWordmark={false} emblemClassName="h-14 w-14" />
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Error 404</p>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">Esta página no existe</h1>
      <p className="mt-3 max-w-md text-muted">
        Es posible que el auto que buscabas ya se haya vendido o que el enlace sea incorrecto.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/inventario">Ver inventario</LinkButton>
        <LinkButton href="/" variant="outline">Ir al inicio</LinkButton>
      </div>
    </div>
  );
}
