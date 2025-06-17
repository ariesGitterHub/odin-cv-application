import styles from "../styles/Header.module.css";
import Image from "../utils/Image";
import imgHat from "../assets/btnHat.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeaderContainer}>
        <Image
          src={imgHat}
          alt="Resumé Wizard Hat Logo"
          className={styles.headerHatLogo}
        />
        <h1 className={styles.h1}>Resumé Wizard</h1>
      </div>
    </header>
  );
}
