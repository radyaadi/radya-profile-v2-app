import { Shell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ scrollY }: { scrollY: number }) {
  return (
    <Link
      to="/"
      className={`${scrollY > 0 ? "text-emerald-300 hover:text-emerald-100" : "text-white hover:text-emerald-300"} inline-flex items-center text-xl font-bold duration-100 ease-out`}
    >
      <Shell
        size={28}
        strokeWidth={1.6}
        absoluteStrokeWidth
        className="rotate-90"
      />
      <p>RadyaAdi</p>
    </Link>
  );
}
