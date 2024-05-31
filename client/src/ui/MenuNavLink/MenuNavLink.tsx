import { NavLink } from "react-router-dom"


type Props = {
    to: string;
    children: string;
    className?: string;
  };

  export const MenuNavLink = ({ to, children,className }: Props) => {
    return (
      <NavLink
        to={to}
        className = {className}
        // {({ isActive, isPending }) =>
        //   isActive
        //     ? "text-red-700"
        //     : isPending
        //       ? "text-yellow-600"
        //       : " dark:text-slate-300"
        // }
      >
        {children}
      </NavLink>
    );
  };