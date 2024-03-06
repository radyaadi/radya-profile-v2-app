import HomePage from "@/pages/home/HomePage";
import PortfolioPage from "@/pages/portfolio/PortfolioPage";

export const navigation = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    component: PortfolioPage,
  },
];
