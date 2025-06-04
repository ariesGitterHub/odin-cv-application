import styles from "../styles/InputField.module.css";

export default function InputField({
  label,
  section,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
  required = false,
}) {
  return (
    <>
      <form className={styles.form}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          className={styles.input}
          section={section}
          type={type}
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus
        />
      </form>
    </>
  );
}
