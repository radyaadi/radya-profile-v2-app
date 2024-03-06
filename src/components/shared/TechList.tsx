import { currentTech } from "@/constants/current-tech";

export default function TechList() {
  return (
    <div className="mt-7 font-semibold md:mt-3 lg:mt-10">
      <h1 className="my-3 text-center text-lg text-emerald-300 md:text-start">
        My Current Tech
      </h1>
      <div className="flex flex-wrap justify-center gap-3 md:justify-start">
        {currentTech.map((item) => (
          <div
            key={item.name}
            className="inline-flex items-center gap-x-1 rounded-lg bg-emerald-400 px-4 py-2 duration-150 ease-out"
          >
            <item.icon size={22} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
