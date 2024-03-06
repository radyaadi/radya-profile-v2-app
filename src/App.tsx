import { Route, Routes, useLocation } from "react-router-dom";
import { useScroll } from "./hooks/use-scroll";
import { routes } from "@/constants/routes";
import TopBar from "./layouts/TopBar";
import FooterBar from "./layouts/FooterBar";
import ScrollToTop from "./components/shared/ScrollToTop";

export default function App() {
  const loc = useLocation();
  const scrollY = useScroll();

  return (
    <div
      id="wrapper"
      className="dark relative flex min-h-screen w-full flex-col"
    >
      <header
        className={`${scrollY > 0 ? "border-b-[1px] bg-black/20 backdrop-blur-md" : "border-none"}  ${loc.pathname === "/" ? "fixed" : "sticky"} top-0 z-10 w-full border-border transition-colors duration-300 ease-out`}
      >
        <TopBar scrollY={scrollY} />
      </header>
      <main className="relative h-full flex-1">
        <ScrollToTop />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </main>
      <footer className="z-10 w-full bg-[#1e1e20]">
        <FooterBar />
      </footer>
    </div>
  );
}
