import InputField from "../utils/InputField";
import Button from "../utils/Button";

export default function EditorFormSkills({
  formData,
  handleChange,
  handleSubmit,
}) {
  const section = "skills";
  const skills = formData[section];
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "description",
      name: "description",
      value: skills.description,
      onChange: handleChange(section),
      placeholder: `${enterYour} skill sets...`,
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
        <Button variant="save" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
