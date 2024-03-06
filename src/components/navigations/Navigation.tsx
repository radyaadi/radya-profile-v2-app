import { useMediaQuery } from "@/hooks/use-media-query";
import { navigation } from "@/constants/navigation";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <div className="flex">
      {isDesktop ? (
        <DesktopNav navigation={navigation} />
      ) : (
        <MobileNav navigation={navigation} isDesktop={isDesktop} />
      )}
    </div>
  );
}
