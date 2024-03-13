import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ExploreProjectButton() {
  return (
    <Button asChild>
      <Link to="/portfolio">Explore Project</Link>
    </Button>
  );
}
