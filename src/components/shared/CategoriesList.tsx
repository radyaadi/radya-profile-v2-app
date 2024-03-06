import { useState } from "react";
import { CategoryProps } from "@/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  categories: CategoryProps[];
  isLoading: boolean;
  categoryHandler: (category: string) => void;
}

export default function CategoriesList({
  categories,
  isLoading,
  categoryHandler,
}: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <ScrollArea className="w-full py-5">
      <div className="flex w-max gap-x-3 overflow-x-hidden">
        {isLoading ? (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-lg"
              >
                <Skeleton className="h-7 w-24 bg-[#2a2a2a]"></Skeleton>
              </div>
            ))}
          </>
        ) : (
          <>
            <button
              onClick={() => {
                categoryHandler("All");
                setActive(0);
              }}
              className={`${active === 0 ? "bg-emerald-300 text-white" : "bg-[#2a2a2a] transition-colors hover:bg-emerald-300"} rounded-xl px-4 py-1 text-sm duration-150 ease-out`}
            >
              All
            </button>
            {categories.map((item: CategoryProps, index: number) => (
              <button
                key={item._id}
                onClick={() => {
                  categoryHandler(item.name);
                  setActive(index + 1);
                }}
                className={`${active === index + 1 ? "bg-emerald-300 text-white" : "bg-[#313136] transition-colors hover:bg-emerald-300"} rounded-xl px-4 py-1 text-sm duration-150 ease-out`}
              >
                {item.name}
              </button>
            ))}
          </>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
