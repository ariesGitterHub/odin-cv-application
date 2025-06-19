import styles from "../styles/Header.module.css";
import Image from "../utils/Image";
import imgHat from "../assets/favIcon.svg";
// import imgLogo from "../assets/resumeWizardLogo.svg";

export default function Header() {
  const currentYear = new Date().getFullYear();
  const MMM = `A Mad Muffin Man Design © ${currentYear}`;

  return (
    <header className={styles.header}>
      <div className={styles.innerHeaderContainer}>
        <Image
          src={imgHat}
          alt="Resumé Wizard Hat Logo"
          className={styles.headerHatLogo}
        />
        <div className={styles.textContainer}>
          <h1>Resumé Wizard</h1>
          <p>{MMM}</p>
        </div>
      </div>
    </header>
  );
}
