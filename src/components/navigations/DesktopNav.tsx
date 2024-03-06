import { NavLink } from "react-router-dom";
import { NavigationProps } from "@/types";

export default function DesktopNav({
  navigation,
}: {
  navigation: NavigationProps[];
}) {
  return (
    <div className="flex h-full gap-x-10 lg:gap-x-20 2xl:gap-x-24">
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.path}>
          {({ isActive }) => {
            return (
              <button
                className={`${isActive && "nav__active"} underline__hover relative inline-flex py-[1px] font-medium transition-all duration-500 ease-out hover:text-emerald-300`}
              >
                {item.name}
              </button>
            );
          }}
        </NavLink>
      ))}
    </div>
  );
}
