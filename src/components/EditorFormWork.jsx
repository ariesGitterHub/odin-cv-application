import { useState, useEffect } from "react";
import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import Image from "../helpers/Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import imgAdd from "../assets/btnAdd.svg";
import ShowExistingData from "../helpers/ShowExistingData";
import AddNewData from "../helpers/AddNewData";

export default function EditorFormWork({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
}) {
  const section = "work";
  const work = formData[section];
  const enterYour = "Enter your";

  const [showForm, setShowForm] = useState(null);

  const toggleForm = (index) => {
    setShowForm((prev) => (prev === index ? null : index));
   };

  const removeWorkItem = (indexToRemove) => {
    const updatedWork = work.filter(
      (entry, index) => index !== indexToRemove
    );

    setFormData((prevData) => ({
      ...prevData,
      work: updatedWork,
    }));
  };
  
  const addWorkItem = () => {
    const newEntry = {
      employer: "",
      location: "",
      position: "",
      years: "",
      bullets: [],
    };

    const newWork = [...work, newEntry];

    setFormData((prevData) => ({
      ...prevData,
      work: newWork,
    }));

    setShowForm(work.length);
  };


  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {work.map((entry, index) => (
        <div key={index} className="work-entry">
          <div
            style={{
              backgroundColor:
                showForm === index ? "var(--focus-blue)" : "var(--orb-gold-lt)",
            }}
            className="showExistingData"
          >
            <div className="dataContainer">
              <h2>
                {/* {entry.school} */}
                {section} #{index + 1}
              </h2>
            </div>
            <div className="buttonContainer">
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => removeWorkItem(index)}
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
                label="Employer"
                name="employer"
                value={entry.employer}
                onChange={handleChangeArray(section, index)}
                placeholder={`${enterYour} employer's name...`}
                required={false}
              />
              <InputField
                label="Location"
                name="location"
                value={entry.location}
                onChange={handleChangeArray(section, index)}
                placeholder={`${enterYour} employer's location...`}
                required={false}
              />
              <InputField
                label="Position"
                name="position"
                value={entry.position}
                onChange={handleChangeArray(section, index)}
                placeholder={`${enterYour} position's title...`}
                required={false}
              />
              <InputField
                label="Years"
                name="years"
                value={entry.years}
                onChange={handleChangeArray(section, index)}
                placeholder={`${enterYour} employment duration...`}
                required={false}
              />
              <InputField
                label="Tasks"
                name="tasks"
                value={entry.tasks}
                onChange={handleChangeArray(section, index)}
                placeholder={`${enterYour} position's tasks...`}
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
        <Button variant="formDataControl" type="button" onClick={addWorkItem}>
          <Image src={imgAdd} alt="Add new work entry" />
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
