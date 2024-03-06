import HomePage from "@/pages/home/HomePage";
import PortfolioPage from "@/pages/portfolio/PortfolioPage";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/#home",
    component: HomePage,
  },
  {
    path: "/portfolio",
    component: PortfolioPage,
  },
];
