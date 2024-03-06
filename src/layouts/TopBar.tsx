import Navigation from "@/components/navigations/Navigation";
import Logo from "@/components/shared/Logo";

export default function TopBar({ scrollY }: { scrollY: number }) {
  return (
    <nav
      className={`${scrollY > 0 ? "py-4" : "py-7"} container flex items-center justify-between transition-[padding-block] duration-300 ease-out sm:px-10 xl:px-12`}
    >
      <Logo scrollY={scrollY} />
      <Navigation />
    </nav>
  );
}
