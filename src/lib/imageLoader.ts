export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http")) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src}`;
}
