import styles from "../styles/Editor.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import SaveButton from "../utils/SaveButton";
import Image from "../utils/Image";
import imgTrash from "../assets/btnTrash.svg";
import imgUp from "../assets/btnArrowUp.svg";
import imgDown from "../assets/btnArrowDown.svg";
import imgEdit from "../assets/btnEdit.svg";
import imgAdd from "../assets/btnAdd.svg";
import {
  removeItemById,
  moveItemUp,
  moveItemDown,
} from "../utils/formArrayHelpers";

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

  const toggleForm = (id) => {
    setShowForm((prev) => (prev === id ? null : id));
  };

  const removeEducationItem = (id) => {
    const updatedEducation = removeItemById(education, id);
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  const addEducationItem = () => {
    const newEntry = {
      id: nanoid(),
      school: "",
      location: "",
      degree: "",
      year: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEntry],
    }));

    setShowForm(newEntry.id);
  };

  const moveEducationItemUp = (id) => {
    const updatedEducation = moveItemUp(education, id);
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  const moveEducationItemDown = (id) => {
    const updatedEducation = moveItemDown(education, id);
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {education.map((entry, index) => (
        <div key={entry.id} className={styles.educationEntry}>
          <div
            style={{
              backgroundColor:
                showForm === entry.id
                  ? "var(--focus-blue)"
                  : "var(--orb-gold-lt)",
            }}
            className={styles.dropdownDataItemTile}
          >
            <div className={styles.dataContainer}>
              <h2> ➤ {section} #{index + 1} </h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => removeEducationItem(entry.id)}
              >
                <Image src={imgTrash} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveEducationItemUp(entry.id)}
              >
                <Image src={imgUp} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveEducationItemDown(entry.id)}
              >
                <Image src={imgDown} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => toggleForm(entry.id)}
              >
                <Image src={imgEdit} alt="" />
              </Button>
            </div>
          </div>
          {showForm === entry.id && (
            <div className="visible">
              <InputField
                label="School"
                name="school"
                value={entry.school}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} school's name...`}
                required={false}
              />
              <InputField
                label="Location"
                name="location"
                value={entry.location}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} school's location...`}
                required={false}
              />
              <InputField
                label="Degree"
                name="degree"
                value={entry.degree}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} degree type...`}
                required={false}
              />
              <InputField
                label="Year"
                name="year"
                value={entry.year}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} graduation year...`}
                required={false}
              />
            </div>
          )}
        </div>
      ))}
      <div className={styles.addNewContainer}>
        <h2>Add New {section} Item</h2>
        <Button
          variant="formDataControl"
          type="button"
          onClick={addEducationItem}
        >
          <Image src={imgAdd} alt="Add new education entry" />
        </Button>
      </div>
      <div className={styles.saveButtonContainer}>
        <SaveButton />
      </div>
    </form>
  );
}
