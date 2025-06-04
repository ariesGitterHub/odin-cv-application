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
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
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
      </div>
    </>
  );
}
