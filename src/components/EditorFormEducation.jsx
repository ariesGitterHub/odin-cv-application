import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

export default function EditorFormEducation({ formData, handleChangeArray, handleSubmit}) {

  const section = "education";
  const education = formData[section];
  const enterYour = "Enter your";

  // const inputFields = [
  //   {
  //     label: "school",
  //     name: "school",
  //     value: education[0].school,
  //     onChange: handleChangeArray(section, 0),
  //     placeholder: `${enterYour} school's name...`,
  //     required: false,
  //   },
  //   {
  //     label: "location",
  //     name: "location",
  //     value: education[0].location,
  //     onChange: handleChangeArray(section, 0),
  //     placeholder: `${enterYour} school's location...`,
  //     required: false,
  //   },
  //   {
  //     label: "degree",
  //     name: "degree",
  //     value: education[0].degree,
  //     onChange: handleChangeArray(section, 0),
  //     placeholder: `${enterYour} degree type...`,
  //     required: false,
  //   },
  //   {
  //     label: "year",
  //     name: "year",
  //     value: education[0].year,
  //     onChange: handleChangeArray(section, 0),
  //     placeholder: `${enterYour} graduation year...`,
  //     required: false,
  //   },
  // ];

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h1>{section}</h1>
  //       {inputFields.map((field) => {
  //         return (
  //           <InputField
  //             key={field.name}
  //             label={field.label}
  //             type={field.type}
  //             name={field.name}
  //             value={field.value}
  //             onChange={field.onChange}
  //             placeholder={field.placeholder}
  //             required={field.required}
  //           />
  //         );
  //       })}
  //     <div className="button-container">
  //       <Button variant="save" type="submit">
  //         Save
  //       </Button>
  //     </div>
  //   </form>
  // );

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>

      {education.map((entry, index) => (
        <div key={index} className="education-entry">
          <h2>Education #{index + 1}</h2>

          <InputField
            label="School"
            name="school"
            value={entry.school}
            onChange={handleChangeArray(section, index)}
            placeholder={`${enterYour} school's name...`}
            required={false}
          />
          <InputField
            label="Location"
            name="location"
            value={entry.location}
            onChange={handleChangeArray(section, index)}
            placeholder={`${enterYour} school's location...`}
            required={false}
          />
          <InputField
            label="Degree"
            name="degree"
            value={entry.degree}
            onChange={handleChangeArray(section, index)}
            placeholder={`${enterYour} degree type...`}
            required={false}
          />
          <InputField
            label="Year"
            name="year"
            value={entry.year}
            onChange={handleChangeArray(section, index)}
            placeholder={`${enterYour} graduation year...`}
            required={false}
          />
        </div>
      ))}

      <div className="button-container">
        <Button variant="save" type="submit">
          Save
        </Button>
      </div>
    </form>
  );

}