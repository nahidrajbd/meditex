type PlaceholderProps = {
  label: string;
  className?: string;
  tone?: "light" | "primary";
};

export default function Placeholder({
  label,
  className = "",
  tone = "light",
}: PlaceholderProps) {
  const toneClasses =
    tone === "primary"
      ? "bg-gradient-to-br from-primary to-primary-dark text-white/80"
      : "bg-light text-primary/60 border border-primary/10";

  return (
    <div
      className={`flex items-center justify-center rounded-2xl text-sm font-medium ${toneClasses} ${className}`}
    >
      {label}
    </div>
  );
}
