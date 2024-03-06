import { works } from "@/constants/work";

export default function WorkSection() {
  return (
    <section className="relative flex items-center bg-[#1e1e20] sm:min-h-[20rem]">
      <div className="container flex flex-col gap-10 py-7 text-justify sm:px-10 lg:flex-row lg:gap-14 xl:px-12 xl:py-9">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="mb-5 text-center text-2xl font-bold text-emerald-300 lg:text-3xl">
            My Recent Work
          </h1>
          <div className="space-y-10 border-l border-emerald-300">
            {works.map((work, index) => (
              <div key={index} className="relative flex flex-col">
                <div className="ml-4">
                  <div className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-emerald-300"></div>
                  <div className="inline-flex items-center gap-x-1">
                    <h2 className="text-lg font-medium  text-emerald-300">
                      {work.name}
                    </h2>
                    <p className="text-gray-400">•</p>
                    <p className="text-sm text-gray-400">{work.type}</p>
                  </div>
                  <p className="mb-1 text-sm">{work.partner}</p>
                  <p className="my-1 text-sm">
                    {work.year} | {work.duration}
                  </p>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
            <div className="relative flex flex-col">
              <div className="ml-4 h-5">. . . .</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
