import { NavLink } from "react-router-dom";

export default function AppLink({ to, children, className = "", ...props }) {
  return (
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
  );
}
