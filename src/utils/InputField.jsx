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
    <div className={styles.inputFieldContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}

        <input
          className={styles.input}
          section={section}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus
        />
      </label>
    </div>
  );
}
