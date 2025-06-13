import { useState, useEffect } from "react";
import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import Image from "../helpers/Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import imgAdd from "../assets/btnAdd.svg";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

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

  // const toggleForm = (formName) => {
  //   if (formName !== showForm) {
  //     setShowForm(formName);
  //   } else {
  //     setShowForm(null);
  //   }
  // }

  // const [textColor, setTextColor] = useState("");

  // useEffect(() => {
  //   if (showForm) {
  //     setTextColor("red");
  //   } else {
  //     setTextColor("inherit");
  //   }
  // }, [showForm]); // <-- runs every time `showForm` changes

  const toggleForm = (index) => {
    setShowForm((prev) => (prev === index ? null : index));
   };

  const removeEducationItem = (indexToRemove) => {
    const updatedEducation = education.filter(
      (entry, index) => index !== indexToRemove
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

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     education: [...prevData.education, newEntry],
  //   }));
  // };

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

  //   setShowForm(""); // optional: open the latest one
  //   setTimeout(() => {
  //     setShowForm(newEntry.school); // won't open immediately due to school being ""
  //   }, 0);
  // };
  
  const addEducationItem = () => {
    const newEntry = {
      school: "",
      location: "",
      degree: "",
      year: "",
    };

    const newEducation = [...education, newEntry];

    setFormData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));

    // Automatically open the new entry after state is updated
    setShowForm(education.length); // new entry is at the next index
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
      {education.map((entry, index) => (
        <div key={index} className="education-entry">
          <div
            style={{
              backgroundColor:
                showForm === index ? "var(--focus-blue)" : "var(--orb-gold-lt)",
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
                onClick={() => removeEducationItem(index)}
              >
                <Image src={imgTrash} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => toggleForm(index)}
              >
                <Image src={imgEdit} alt="" />
              </Button>
            </div>
          </div>
          {showForm === index && (
            <div className="visible">
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
