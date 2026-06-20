import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";

const fieldBase =
  "w-full rounded-xl border border-border-base bg-surface-2 px-4 text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none";

function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-muted">
      {children}
    </label>
  );
}

export function TextField({
  label,
  id,
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id!}>{label}</Label>
      <input id={id} className={cn(fieldBase, "h-12")} {...props} />
    </div>
  );
}

export function SelectField({
  label,
  id,
  className,
  children,
  ...props
}: { label: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id!}>{label}</Label>
      <div className="relative">
        <select
          id={id}
          className={cn(fieldBase, "h-12 appearance-none pr-10")}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
      </div>
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  className,
  ...props
}: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id!}>{label}</Label>
      <textarea id={id} className={cn(fieldBase, "min-h-[120px] py-3")} {...props} />
    </div>
  );
}
