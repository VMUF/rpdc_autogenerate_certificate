import { Outlet } from "react-router-dom";
import Navigation from "../ui/Navigation";

export default function Main() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
