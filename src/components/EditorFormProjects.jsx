import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

export default function EditorFormProjects({
  formData,
  handleChangeArray,
  handleSubmit,
}) {
  const section = "projects";
  const projects = formData[section];
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "project",
      name: "project",
      value: projects[0].project,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} project's name...`,
      required: false,
    },
    {
      label: "description",
      name: "description",
      value: projects[0].description,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} project's summary...`,
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
