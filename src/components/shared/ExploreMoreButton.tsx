import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ExploreMoreButton() {
  return (
    <Button asChild className="bg-emerald-300">
      <Link to="/portfolio">Explore More</Link>
    </Button>
  );
}
