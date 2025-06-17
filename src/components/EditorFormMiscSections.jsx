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

export default function EditorFormMiscSections({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
}) {
  const section = "miscellaneous";
  const miscellaneous = formData[section];
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
      <h1>{section} sections</h1>
      {miscellaneous.map((entry, index) => (
        <div key={entry.id} className={styles.miscellaneousEntry}>
          <div
            style={{
              backgroundColor:
                showForm === entry.id
                  ? "var(--focus-blue)"
                  : "var(--orb-gold-lt)",
            }}
            className={styles.showExistingData}
          >
            <div className={styles.dataContainer}>
              <h2>
                section #{index + 1}
              </h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => removeMiscellaneousItem(entry.id)}
              >
                <Image src={imgTrash} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveMiscellaneousItemUp(entry.id)}
              >
                <Image src={imgUp} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveMiscellaneousItemDown(entry.id)}
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
                label="Section"
                name="section"
                value={entry.section}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} new section...`}
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
          <Image src={imgAdd} alt="Add new miscellaneous entry" />
        </Button>
      </div>
      <SaveButton />
    </form>
  );
}
