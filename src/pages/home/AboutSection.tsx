import { Link } from "react-router-dom";
import ServiceList from "../../components/shared/TechList";

export default function AboutSection() {
  return (
    <section className="relative flex items-center bg-[#1e1e20] sm:min-h-[40rem]">
      <div className="container flex flex-col gap-5 py-12 text-justify sm:px-10 md:flex-row xl:px-12 xl:py-16">
        <h1 className="mb-5 text-center text-2xl font-bold text-emerald-300 md:hidden lg:text-3xl">
          About Me
        </h1>
        <div className="min-w-64 basis-5/12">
          <img
            src="./profile.png"
            className="mx-auto h-auto w-60 sm:mt-5 sm:w-72 lg:w-80"
            alt="..."
          />
        </div>
        <div className="basis-7/12">
          <h1 className="mb-5 hidden text-2xl font-bold text-emerald-300 md:block lg:text-3xl">
            About Me
          </h1>
          <p className="sm:indent-10">
            Hello! I'm a Fresh Graduate with a Bachelor of Informatics Degree
            (Computer Science) and i have experience in frontend web development
            using Javascript programming language. I have developed several web
            applications using the ReactJs library and the NextJs framework, as
            well as TailwindCSS for styling and layout management. Additionally,
            I have managed backend development using NodeJS, specifically with
            the ExpressJS framework. I have strong understanding of modern web
            development technology and always follow the best practices
            guidelines as a developer, also accustomed to working either
            individually or as part of a team. Please feel free to looking some{" "}
            <Link to="/portfolio" className="font-semibold text-emerald-300">
              My Projects
            </Link>{" "}
            i had created.
          </p>
          <ServiceList />
        </div>
      </div>
    </section>
  );
}
