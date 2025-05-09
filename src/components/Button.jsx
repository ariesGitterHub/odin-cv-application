import styles from "./Button.module.css";

export default function Button({ variant = "primary", children, ...rest }) {
  return (
    <button
      className={`${styles.button} ${styles[`button-${variant}`]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

