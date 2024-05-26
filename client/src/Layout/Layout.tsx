import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};