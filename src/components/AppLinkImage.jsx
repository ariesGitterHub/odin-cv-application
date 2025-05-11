import { NavLink } from "react-router-dom";
import styles from "./AppLinkImage.module.css";

export default function AppLinkImage({ to, children, className = "", ...props }) {
  return (
    <NavLink to={to} className={`${styles.appLinkImage} ${className}`} {...props}>
      {children}
    </NavLink>
  );
}
