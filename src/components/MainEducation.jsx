import { useFormData } from "./FormDataContextProvider";
import InputField from "./InputField";
import Button from "./Button";

export default function MainEducation() {
  const { formData, handleChange, handleSubmit } = useFormData();

  const section = "education";

  const inputFields = [
    {
      label: "school",
      section: section,
      name: "school",
      placeholder: "enter your school's name",
      required: false,
    },
    {
      label: "degree",
      section: section,
      name: "degree",
      placeholder: "enter your degree type",
      required: false,
    },
    {
      label: "location",
      section: section,
      name: "location",
      placeholder: "enter your school's location",
      required: false,
    },
    {
      label: "graduation year",
      section: section,
      name: "year",
      placeholder: "enter your graduation year",
      required: false,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <Button>Add Education</Button> */}
        {inputFields.map((field) => {
          return (
            <InputField
              key={field.name}
              label={field.label}
              section={field.section}
              type={field.type}
              name={field.name}
              // value={formData[field.name]}
              // onChange={handleChange}
              value={formData.education[field.name]}
              onChange={(e) => handleChange(e, "education")}
              placeholder={field.placeholder}
              required={field.required}
            />
          );
        })}
        <div className="button-container">
          <Button type="submit">Submit</Button>
          {/* <Button>Preview</Button> */}
        </div>
      </form>
      {/* <p>{formData.education.school}</p>
      <p>{formData.education.degree}</p> */}
    </>
  );
}
