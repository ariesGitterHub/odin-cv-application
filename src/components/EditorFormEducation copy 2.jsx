import { useState} from "react";
import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import Image from "../helpers/Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import imgAdd from "../assets/btnAdd.svg";
import { nanoid } from "nanoid";

export default function EditorFormEducation({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
}) {
  const section = "education";
  const education = formData[section];
  const enterYour = "Enter your";

  const [showForm, setShowForm] = useState(null);

  // const toggleForm = (
  //   // index
  //   id) => {
  //   setShowForm((prev) => (prev === 
  //     // index
  //     id ? null : 
  //     //  index
  //      id));
  //  };

  const toggleForm = (id) => {
    setShowForm((prev) => prev === id ? null :  id);
  };
  
  // const toggleForm = (index) => {
  //   setShowForm((prev) => (prev === index ? null : index));
  // };
  

  // const removeEducationItem = (indexToRemove) => {
  //   const updatedEducation = education.filter(
  //     (entry, index) => index !== indexToRemove
  //   );

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     education: updatedEducation,
  //   }));
  // };

  const removeEducationItem = (idToRemove) => {
    const updatedEducation = education.filter(
      (entry) => entry.id !== idToRemove
    );

    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };
  
  
  // const addEducationItem = () => {
  //   const newEntry = {
  //     school: "",
  //     location: "",
  //     degree: "",
  //     year: "",
  //   };

  //   const newEducation = [...education, newEntry];

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     education: newEducation,
  //   }));
  
  //   setShowForm(education.length); 
  // };

  const addEducationItem = () => {
    const newEntry = {
      id: nanoid(), // unique identifier
      school: "",
      location: "",
      degree: "",
      year: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEntry],
    }));

    setShowForm(newEntry.id); // open the new entry using its id
  };
  
  
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
      {/* {education.map((entry, index) => (
        <div key={index} className="education-entry"> */}
      {education.map((entry, index) => (
        <div key={entry.id} className="education-entry">
          <div
            style={{
              backgroundColor:
                showForm ===
                // index
                entry.id
                  ? "var(--focus-blue)"
                  : "var(--orb-gold-lt)",
              // color:
              //   showForm === index
              //     ? "var(--orb-gold)"
              //     : "inherit",
            }}
            className="showExistingData"
          >
            <div className="dataContainer">
              <h2
              // className="activeForm"
              //  className="clickable-heading"
              >
                {/* {entry.school} */}
                {section} #{index + 1}
              </h2>
            </div>
            <div className="buttonContainer">
              <Button
                variant="formDataControl"
                type="button"
                onClick={() =>
                  removeEducationItem(
                    // index
                    entry.id
                  )
                }
              >
                <Image src={imgTrash} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() =>
                  toggleForm(
                    // index
                    entry.id
                  )
                }
              >
                <Image src={imgEdit} alt="" />
              </Button>
            </div>
          </div>
          {showForm ===
            // index
            entry.id && (
            <div className="visible">
              <InputField
                label="School"
                name="school"
                value={entry.school}
                onChange={handleChangeArray(
                  section,
                  // index
                  entry.id
                )}
                placeholder={`${enterYour} school's name...`}
                required={false}
              />
              <InputField
                label="Location"
                name="location"
                value={entry.location}
                onChange={handleChangeArray(
                  section,
                  // index
                  entry.id
                )}
                placeholder={`${enterYour} school's location...`}
                required={false}
              />
              <InputField
                label="Degree"
                name="degree"
                value={entry.degree}
                onChange={handleChangeArray(section, 
                  // index
                  entry.id)}
                placeholder={`${enterYour} degree type...`}
                required={false}
              />
              <InputField
                label="Year"
                name="year"
                value={entry.year}
                onChange={handleChangeArray(section, 
                  // index
                  entry.id)}
                placeholder={`${enterYour} graduation year...`}
                required={false}
              />
            </div>
          )}
        </div>
      ))}
      <div className="addNewContainer">
        <h2>Add New Item</h2>
        {/* <Button
          variant="formDataControl"
          type="button"
          //   onClick={}
        >
          <Image src={imgAdd} alt="" />
        </Button> */}
        <Button
          variant="formDataControl"
          type="button"
          onClick={addEducationItem}
        >
          <Image src={imgAdd} alt="Add new education entry" />
        </Button>
      </div>

      <div className="button-container">
        <Button variant="save" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
