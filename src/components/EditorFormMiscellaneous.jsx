import { useState } from "react";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import Image from "../utils/Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import imgAdd from "../assets/btnAdd.svg";
import imgDown from "../assets/btnArrowDown.svg";
import imgUp from "../assets/btnArrowUp.svg";
import { nanoid } from "nanoid";
import {
  removeItemById,
  moveItemUp,
  moveItemDown,
} from "../utils/formArrayHelpers";

export default function EditorFormMiscellaneous({
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

  // const removeEducationItem = (idToRemove) => {
  //   const updatedEducation = education.filter(
  //     (entry) => entry.id !== idToRemove
  //   );

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     education: updatedEducation,
  //   }));
  // };

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
      category: "",
      description: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: [...prevData.miscellaneous, newEntry],
    }));

    setShowForm(newEntry.id);
  };

  // const moveEducationItemUp = (id) => {
  //   const index = education.findIndex((entry) => entry.id === id);
  //   if (index > 0) {
  //     const newEducation = [...education];
  //     [newEducation[index - 1], newEducation[index]] = [
  //       newEducation[index],
  //       newEducation[index - 1],
  //     ];

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       education: newEducation,
  //     }));
  //   }
  // };

  const moveMiscellaneousItemUp = (id) => {
    const updatedMiscellaneous = moveItemUp(miscellaneous, id);
    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: updatedMiscellaneous,
    }));
  };

  // const moveEducationItemDown = (id) => {
  //   const index = education.findIndex((entry) => entry.id === id);
  //   if (index < education.length - 1) {
  //     const newEducation = [...education];
  //     [newEducation[index + 1], newEducation[index]] = [
  //       newEducation[index],
  //       newEducation[index + 1],
  //     ];

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       education: newEducation,
  //     }));
  //   }
  // };

  const moveMiscellaneousItemDown = (id) => {
    const updatedMiscellaneous = moveItemDown(miscellaneous, id);
    setFormData((prevData) => ({
      ...prevData,
      miscellaneous: updatedMiscellaneous,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {miscellaneous.map((entry, index) => (
        <div key={entry.id} className="miscellaneous-entry">
          <div
            style={{
              backgroundColor:
                showForm === entry.id
                  ? "var(--focus-blue)"
                  : "var(--orb-gold-lt)",
            }}
            className="showExistingData"
          >
            <div className="dataContainer">
              <h2>
                {section} #{index + 1}
              </h2>
            </div>
            <div className="buttonContainer">
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
                // onClick={() => removeEducationItem(entry.id)}
                onClick={() => moveMiscellaneousItemUp(entry.id)}
              >
                <Image src={imgUp} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                // onClick={() => removeEducationItem(entry.id)}
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
                label="Category"
                name="category"
                value={entry.category}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} new category...`}
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
      <div className="addNewContainer">
        <h2>Add New {section} Item</h2>
        <Button
          variant="formDataControl"
          type="button"
          onClick={addMiscellaneousItem}
        >
          <Image src={imgAdd} alt="Add new miscellaneous entry" />
        </Button>
      </div>

      <Button variant="save" type="submit">
        Save
      </Button>
    </form>
  );
}
