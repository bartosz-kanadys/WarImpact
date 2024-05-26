import { NavLink } from "react-router-dom"

import { routes } from "../../routes";

type Props = {
    to: string;
    children: string;
  };

  const WaNavLink = ({ to, children }: Props) => {
    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-red-700"
            : isPending
              ? "text-yellow-600"
              : " dark:text-slate-300"
        }
      >
        {children}
      </NavLink>
    );
  };


  export const Menu = () => {
    return (
      <div>
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-2">
              <WaNavLink to={routes.HOME.path}>Home</WaNavLink>
            </li>
            <li className="mr-2">
              <WaNavLink to={routes.DATAFETCHER.path}>DataFetcher</WaNavLink>
            </li>
            <li className="mr-2">
              <WaNavLink to={routes.REGISTRATIONFORM.path}>Registration</WaNavLink>
            </li>
            <li className="mr-2">
              <WaNavLink to={routes.LOGINFORM.path}>Login</WaNavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
