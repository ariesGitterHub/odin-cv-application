// import styles from "./Image.module.css";

export default function Image({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      // className={`${styles.icon} ${className}`}
      className={`${className}`}
      {...props}
    />
  );
}
