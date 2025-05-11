import { NavLink } from "react-router-dom";
import { navLinks, linkAssets } from "../data/linkData";
import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className={styles.navBarContainer}>
        {navLinks
          .filter(({ to }) => to !== currentPath)
          .map(({ to, key }) => {
            const { text } = linkAssets[key];
            return (
              <NavLink key={to} to={to}>
                <div className={styles.navBarPseudoBtn}>
                  <p className={styles.navBarText}>{text}</p>
                </div>
              </NavLink>
            );
          })}
      </div>
    </>
  );
}
