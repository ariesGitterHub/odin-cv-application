import InputField from "../helpers/InputField";
import Button from "../helpers/Button";

export default function EditorFormPersonal({ formData, handleChange, handleSubmit }) {

  const section = "personal";
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "full name*",
      section: section,
      name: "fullName",
      value: `${formData.fullName}`,
      onChange: handleChange,
      placeholder: `${enterYour} full name...`,
      required: true,
    },
    {
      label: "email*",
      section: section,
      type: "email",
      name: "email",
      value: `${formData.email}`,
      onChange: handleChange,
      placeholder: `${enterYour} email...`,
      required: true,
    },
    {
      label: "phone number*",
      section: section,
      type: "tel",
      name: "phone",
      value: `${formData.phone}`,
      onChange: handleChange,
      placeholder: `${enterYour} phone number...`,
      required: true,
    },
    {
      label: "website(s)",
      section: section,
      // type: "url",
      name: "website",
      value: `${formData.website}`,
      onChange: handleChange,
      placeholder: `${enterYour} website(s)...`,
      required: false,
    },
    {
      label: "address",
      section: section,
      name: "address",
      value: `${formData.address}`,
      onChange: handleChange,
      placeholder: `${enterYour} address...`,
      required: false,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => {
        return (
          <InputField
            key={field.name}
            label={field.label}
            section={field.section}
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
        <Button variant="test" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}