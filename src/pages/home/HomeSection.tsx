import { Link } from "react-router-dom";
import { socialMedia } from "@/constants/social-media";
import { Mouse } from "lucide-react";

export default function HomeSection() {
  return (
    <>
      {/* for image */}
      <section
        className="fixed min-h-screen w-full justify-center bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('/home-bg.jpg')` }}
      ></section>
      {/* for content */}
      <section className="relative flex min-h-screen items-end bg-gradient-to-t from-[#1e1e20] via-[#1e1e20] via-10%">
        <div className="container flex min-h-[75vh] flex-col items-center justify-between py-5 sm:px-10 lg:items-end lg:py-7 xl:px-12 2xl:py-9">
          <div className="flex h-full w-full flex-col gap-y-3 lg:w-3/5 lg:pl-14">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Radya Adi Anggara
            </h1>
            <p className="font-semibold text-emerald-300">
              Fresh Graduate Informatic Student | Front End Web Developer
            </p>
            <p>
              Fresh Graduate Informatic Student with experience in front-end web
              development, specializing in Javascript Programming Language.
            </p>
            <div className="mt-5 flex gap-x-5 sm:gap-x-7">
              {socialMedia.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  title={item.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.icon
                    size={26}
                    strokeWidth={2}
                    absoluteStrokeWidth
                    className="cursor-pointer text-white duration-100 ease-out hover:-translate-y-1 hover:text-emerald-300"
                  />
                </Link>
              ))}
            </div>
          </div>
          {scrollY <= window.innerHeight && (
            <div className="mx-auto inline-flex animate-bounce gap-x-1">
              <Mouse className="" />
              <p>Scroll Down</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
