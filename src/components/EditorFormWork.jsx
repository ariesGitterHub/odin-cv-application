import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

export default function EditorFormWork({ formData, handleChangeArray, handleSubmit}) {

  const section = "work";
  const work = formData[section];
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "employer",
      name: "employer",
      value: work[0].employer,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} employer's name...`,
      required: false,
    },
    {
      label: "location",
      name: "location",
      value: work[0].location,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} employer's location...`,
      required: false,
    },
    {
      label: "position",
      name: "position",
      value: work[0].position,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} position title...`,
      required: false,
    },
    {
      label: "years",
      name: "years",
      value: work[0].years,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} years employed...`,
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