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

export default function EditorFormMiscSections({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
  handleResetSection,
}) {
  const section = "miscellaneous";
  const miscellaneous = formData[section];
  const sectionHeader = sectionHeaderText[section];
  const enterYour = "Enter your";

  const [showForm, setShowForm] = useState(null);

  const toggleForm = (id) => {
    setShowForm((prev) => (prev === id ? null : id));
  };

  const removeMiscellaneousItem = (id) => {
    const updatedMiscellaneous = removeItemById(miscellaneous, id);
    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: updatedMiscellaneous,
    }));
  };

  const addMiscellaneousItem = () => {
    const newEntry = {
      id: nanoid(),
      section: "",
      description: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: [...prevData.miscellaneous, newEntry],
    }));

    setShowForm(newEntry.id);
  };

  const moveMiscellaneousItemUp = (id) => {
    const updatedMiscellaneous = moveItemUp(miscellaneous, id);
    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: updatedMiscellaneous,
    }));
  };

  const moveMiscellaneousItemDown = (id) => {
    const updatedMiscellaneous = moveItemDown(miscellaneous, id);
    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: updatedMiscellaneous,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{sectionHeader}</h1>
      {miscellaneous.map((entry, index) => (
        <div key={entry.id} className={styles.miscellaneousEntry}>
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
                section #{index + 1}
              </h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => removeMiscellaneousItem(entry.id)}
              >
                <Image src={imgTrash} alt="Remove section item" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveMiscellaneousItemUp(entry.id)}
              >
                <Image src={imgUp} alt="Move section item up" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveMiscellaneousItemDown(entry.id)}
              >
                <Image src={imgDown} alt="Move section item down" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => toggleForm(entry.id)}
              >
                <Image src={imgEdit} alt="Edit section item" />
              </Button>
            </div>
          </div>
          {showForm === entry.id && (
            <div className="visible">
              <InputField
                label="Section"
                name="section"
                value={entry.section}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} new section...`}
                required={false}
              />
              <InputField
                label="Title"
                name="title"
                value={entry.title}
                onChange={handleChangeArray(section, entry.id)}
                placeholder="Enter an entry title, if applicable..."
                required={false}
              />
              <InputField
                label="Description"
                name="description"
                value={entry.description}
                onChange={handleChangeArray(section, entry.id)}
                placeholder="Enter the appropriate text..."
                required={false}
              />
            </div>
          )}
        </div>
      ))}
      <div className={styles.addNewContainer}>
        <h2>add new section</h2>
        <Button
          variant="formDataControl"
          type="button"
          onClick={addMiscellaneousItem}
        >
          <Image src={imgAdd} alt="Add new section entry" />
        </Button>
      </div>
      <div className={styles.endFormButtonContainer}>
        <SaveButton />
        <ResetButton onClick={() => handleResetSection("miscellaneous")} />
      </div>
    </form>
  );
}
