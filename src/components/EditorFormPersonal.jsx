import InputField from "../utils/InputField";
import SaveButton from "../utils/SaveButton";

export default function EditorFormPersonal({
  formData,
  handleChange,
  handleSubmit,
}) {
  const section = "personal";
  const personal = formData[section];
  const enterYour = "Enter your";
  const inputFields = [
    {
      label: "full name*",
      name: "fullName",
      value: personal.fullName,
      onChange: handleChange(section),
      placeholder: `${enterYour} full name...`,
      required: true,
    },
    {
      label: "email*",
      type: "email",
      name: "email",
      value: personal.email,
      onChange: handleChange(section),
      placeholder: `${enterYour} email...`,
      required: true,
    },
    {
      label: "phone number*",
      type: "tel",
      name: "phone",
      value: personal.phone,
      onChange: handleChange(section),
      placeholder: `${enterYour} phone number...`,
      required: true,
    },
    {
      label: "website(s)",
      name: "website",
      value: personal.website,
      onChange: handleChange(section),
      placeholder: `${enterYour} website(s)...`,
      required: false,
    },
    {
      label: "address",
      name: "address",
      value: personal.address,
      onChange: handleChange(section),
      placeholder: `${enterYour} address...`,
      required: false,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {inputFields.map((field) => {
        return (
          <InputField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      })}
      <div className="button-container">
        <SaveButton />
      </div>
    </form>
  );
}
