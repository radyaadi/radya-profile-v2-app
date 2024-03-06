import { Moon } from "lucide-react";

export default function ThemeToggle({ scrollY }: { scrollY: number }) {
  return (
    <button>
      <Moon
        size={26}
        strokeWidth={2}
        absoluteStrokeWidth
        className={`${scrollY > 0 ? "text-emerald-300 hover:text-emerald-100" : "text-white hover:text-emerald-300"} duration-100 ease-out`}
      />
    </button>
  );
}
