import { useState } from "react";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import Image from "../utils/Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import imgAdd from "../assets/btnAdd.svg";
import { nanoid } from "nanoid";

export default function EditorFormWork({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
}) {
  const section = "projects";
  const projects = formData[section];
  const enterYour = "Enter your";

  const [showForm, setShowForm] = useState(null);

  const toggleForm = (id) => {
    setShowForm((prev) => (prev === id ? null : id));
  };

  const removeProjectsItem = (idToRemove) => {
    const updatedProjects = projects.filter((entry) => entry.id !== idToRemove);

    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const addProjectsItem = () => {
    const newEntry = {
      id: nanoid(),
      project: "",
      description: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, newEntry],
    }));

    setShowForm(newEntry.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {projects.map((entry, index) => (
        <div key={entry.id} className="projects-entry">
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
                onClick={() =>
                  removeProjectsItem(
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
                onClick={() => toggleForm(entry.id)}
              >
                <Image src={imgEdit} alt="" />
              </Button>
            </div>
          </div>
          {showForm === entry.id && (
            <div className="visible">
              <InputField
                label="Project Name"
                name="project"
                value={entry.project}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} project's name...`}
                required={false}
              />
              <InputField
                label="Project Description"
                name="description"
                value={entry.description}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} project's description...`}
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
          onClick={addProjectsItem}
        >
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
