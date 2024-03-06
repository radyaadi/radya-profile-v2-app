import { currentTech } from "@/constants/current-tech";

export default function TechList() {
  return (
    <div className="mt-7 font-semibold md:mt-3 lg:mt-10">
      <h1 className="my-2 text-center text-lg text-emerald-300 md:text-start">
        My Current Tech
      </h1>
      <div className="flex flex-wrap gap-2">
        {currentTech.map((item) => (
          <span
            key={item}
            className="rounded-xl bg-emerald-400 px-4 py-1 text-sm duration-150 ease-out"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
