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
            I am Fresh Graduate Informatic Student with over 1 year experience
            in front-end web development, specializing in ReactJs and NextJs
            Framework using Javascript and Typescript. I have a solid
            understanding of modern web development technologies and practices.
            I am able to work well as individually either as a team. Please feel
            free to looking some My Portfolio i created.
          </p>
          <ServiceList />
        </div>
      </div>
    </section>
  );
}
