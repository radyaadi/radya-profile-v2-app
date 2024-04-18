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
            Hello! I'm a 23-year-old Fresh Graduate with a Bachelor's of
            Informatics Degree (Computer Science), with 2 years of experience in
            Frontend Web Development using Javascript. I'm used to developing
            some web apps using the ReactJs or NextJs framework, as well as
            Tailwind CSS for styling and managing the layout. Recently, I also
            managed a project to build a web apps using the VueJS framework,
            Typescript, and also develop an RESTFUL API for data as a Fullstack.
            I have a strong understanding of modern web development technology
            and always follow the best practices guidelines as a developer, also
            accustomed to working either individually or as part of a team.
            Please feel free to looking some{" "}
            <Link to="/portfolio" className="font-semibold text-emerald-300">
              My Portfolio Project
            </Link>{" "}
            i created.
          </p>
          <ServiceList />
        </div>
      </div>
    </section>
  );
}
