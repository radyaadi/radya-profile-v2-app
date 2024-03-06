import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ExploreMoreButton from "@/components/shared/ExploreMoreButton";

export default function HomePage() {
  return (
    <section id="home">
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <section className="relative flex items-center bg-[#1e1e20]">
        <div className="container mt-5 flex justify-center">
          <ExploreMoreButton />
        </div>
      </section>
    </section>
  );
}
