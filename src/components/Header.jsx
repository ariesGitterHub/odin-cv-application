import Image from "../utils/Image";
import favIcon from "../assets/favIcon.svg";
import styles from "../styles/Header.module.css";

export default function Header({ message }) {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeaderContainer}>
        <Image
          src={favIcon}
          alt="Resumé Wizard Hat Logo"
          className={styles.headerHatLogo}
        />
        <h1 className={styles.h1}>Resumé Wizard</h1>
      </div>
      <p className={styles.p}>{message}</p>
    </header>
  );
}
