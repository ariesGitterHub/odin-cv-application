import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "../styles/Editor.module.css";

import imgTrash from "../assets/btnTrash.svg";
import imgUp from "../assets/btnArrowUp.svg";
import imgDown from "../assets/btnArrowDown.svg";
import imgEdit from "../assets/btnEdit.svg";
import imgAdd from "../assets/btnAdd.svg";

import { sectionHeaderText } from "../data/data";

import Image from "../utils/Image";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import SaveButton from "../utils/SaveButton";
import ResetButton from "../utils/ResetButton";

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
  handleResetSection,
}) {
  const section = "education";
  const education = formData[section];
  const sectionHeader = sectionHeaderText[section];
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
      years: "",
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
      <h1>{sectionHeader}</h1>
      {education.map((entry, index) => (
        <div key={entry.id} className={styles.educationEntry}>
          <div
            style={{
              backgroundColor:
                showForm === entry.id
                  ? "var(--mage-blue)"
                  : "var(--orb-gold-lt)",
              border:
                showForm === entry.id
                  ? "2px solid var(--orb-gold)"
                  : "2px solid var(--orb-gold-lt)",
            }}
            className={styles.dropdownEntryTile}
          >
            <div className={styles.entryHeadingContainer}>
              <h2
                style={{
                  color:
                    showForm === entry.id
                      ? "var(--orb-gold)"
                      : "var(--mage-blue)",
                }}
              >
                school #{index + 1}{" "}
              </h2>
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
                label="Years"
                name="years"
                value={entry.years}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} years of attendance...`}
                required={false}
              />
            </div>
          )}
        </div>
      ))}
      <div className={styles.addNewContainer}>
        <h2>Add New {section} Entry</h2>
        <Button
          variant="formDataControl"
          type="button"
          onClick={addEducationItem}
        >
          <Image src={imgAdd} alt="add new education entry" />
        </Button>
      </div>
      <div className={styles.endFormButtonContainer}>
        <SaveButton />
        <ResetButton onClick={() => handleResetSection("education")} />
      </div>
    </form>
  );
}
