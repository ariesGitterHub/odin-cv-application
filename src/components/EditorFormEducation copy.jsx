import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

export default function EditorFormEducation({ formData, handleChangeArray, handleSubmit}) {

  const section = "education";
  const education = formData[section];
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "school",
      name: "school",
      value: education[0].school,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} school's name...`,
      required: false,
    },
    {
      label: "location",
      name: "location",
      value: education[0].location,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} school's location...`,
      required: false,
    },
    {
      label: "degree",
      name: "degree",
      value: education[0].degree,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} degree type...`,
      required: false,
    },
    {
      label: "year",
      name: "year",
      value: education[0].year,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} graduation year...`,
      required: false,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>

      <ShowExistingData
        name={education[0].school}
        detail={education[0].degree}
        year={education[0].year}
        // handleDelete={handleDelete}
        formData={formData}
        handleChangeArray={handleChangeArray}
        handleSubmit={handleSubmit}
      />
      <ShowExistingData
        name={education[1].school}
        detail={education[1].degree}
        year={education[1].year}
        // handleDelete={handleDelete}
        handleChangeArray={handleChangeArray}
        handleSubmit={handleSubmit}
      />

      <AddNewData />
      {/* {inputFields.map((field) => {
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
      })} */}
      <div className="button-container">
        {/* <Button variant="save" type="submit">
          Save
        </Button> */}
      </div>
    </form>
  );
}