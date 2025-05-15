import AppLinkImage from "./AppLinkImage";
import Image from "./Image";
import { navLinks, linkAssets } from "../data/linkData";
import { useLocation } from "react-router-dom";
import resumeWizardLogo from "../assets/resumeWizardLogo.svg";
import styles from "./MainHome.module.css";

export default function Main1Home() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      <div className={styles.homeLogoContainer}>
        <Image
          src={resumeWizardLogo}
          alt="Resumé Wizard Logo"
          className={styles.homeLogo}
        />
      </div>
      <div className={styles.homeMsgContainer}>
        <p>Use the links below to start your resumé!</p>
      </div>
      <div className={styles.homeLinkContainer}>
        {navLinks
          .filter(({ to }) => to !== currentPath)
          .map(({ to, key }) => {
            const { src, alt } = linkAssets[key];
            return (
              <AppLinkImage key={to} to={to}>
                <Image src={src} alt={alt} className="image-app-link" />
              </AppLinkImage>
            );
          })}
      </div>
    </>
  );
}
