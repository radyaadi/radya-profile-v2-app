import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useScroll } from "@/hooks/use-scroll";
import { NavigationProps } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BarChart2 } from "lucide-react";

export default function MobileNav({
  navigation,
  isDesktop,
}: {
  navigation: NavigationProps[];
  isDesktop: boolean;
}) {
  const [open, setOpen] = useState<boolean>(isDesktop);
  const scrollY = useScroll();

  return (
    <DropdownMenu open={open} modal={false} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="outline-none" asChild>
        <button>
          <BarChart2
            size={30}
            strokeWidth={2.4}
            absoluteStrokeWidth
            className={`${scrollY > 0 ? "text-emerald-300 hover:text-emerald-100" : "text-white hover:text-emerald-300"} -rotate-90 duration-100 ease-out`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-7 mt-1 bg-[#2a2a2a] p-3 sm:hidden">
        <div className="flex flex-col gap-y-1">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {({ isActive }) => {
                return (
                  <button
                    className={`${isActive && "text-emerald-300"} inline-flex w-40 items-center gap-x-2 rounded-md px-4 py-2 font-medium hover:bg-border`}
                  >
                    {item.name}
                  </button>
                );
              }}
            </NavLink>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
