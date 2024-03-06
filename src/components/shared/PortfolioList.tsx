import { PortfolioProps } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import PortfolioDetail from "./PortfolioDetail";

interface Props {
  portfolios: PortfolioProps[] | undefined;
  isLoading: boolean;
}

export default function PortfolioList({ portfolios, isLoading }: Props) {
  return isLoading ? (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-lg"
        >
          <Skeleton className="h-52 w-full bg-[#2a2a2a]"></Skeleton>
        </div>
      ))}
    </div>
  ) : (
    <>
      {portfolios?.length ? (
        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios?.map((item: PortfolioProps) => (
            <PortfolioDetail key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <p className="w-full text-center">No item found</p>
      )}
    </>
  );
}
