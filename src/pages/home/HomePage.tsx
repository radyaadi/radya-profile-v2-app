import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ExploreProjectButton from "@/components/shared/ExploreProjectButton";

export default function HomePage() {
  return (
    <section id="home">
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <section className="relative flex items-center bg-[#1e1e20]">
        <div className="container mt-5 flex justify-center">
          <ExploreProjectButton />
        </div>
      </section>
    </section>
  );
}
