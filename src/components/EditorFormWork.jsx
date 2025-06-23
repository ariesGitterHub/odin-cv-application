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

export default function EditorFormWork({
  formData,
  setFormData,
  handleChangeArray,
  handleSubmit,
  handleResetSection,
}) {
  const section = "work";
  const work = formData[section];
  const sectionHeader = sectionHeaderText[section];
  const enterYour = "Enter your";

  const [showForm, setShowForm] = useState(null);

  const toggleForm = (id) => {
    setShowForm((prev) => (prev === id ? null : id));
  };

  const removeWorkItem = (id) => {
    const updatedWork = removeItemById(work, id);
    setFormData((prevData) => ({
      ...prevData,
      work: updatedWork,
    }));
  };

  const addWorkItem = () => {
    const newEntry = {
      id: nanoid(),
      employer: "",
      location: "",
      position: "",
      years: "",
      tasks: [],
    };

    setFormData((prevData) => ({
      ...prevData,
      work: [...prevData.work, newEntry],
    }));

    setShowForm(newEntry.id);
  };

  const moveWorkItemUp = (id) => {
    const updatedWork = moveItemUp(work, id);
    setFormData((prevData) => ({
      ...prevData,
      work: updatedWork,
    }));
  };

  const moveWorkItemDown = (id) => {
    const updatedWork = moveItemDown(work, id);
    setFormData((prevData) => ({
      ...prevData,
      work: updatedWork,
    }));
  };

  const addTaskToWork = (workId) => {
    setFormData((prevData) => {
      const updatedWork = prevData.work.map((entry) => {
        if (entry.id === workId) {
          return {
            ...entry,
            tasks: [...(entry.tasks || []), { id: nanoid(), item: "" }],
          };
        }
        return entry;
      });

      return {
        ...prevData,
        work: updatedWork,
      };
    });
  };

  const handleTaskChange = (workId, taskId, value) => {
    setFormData((prevData) => {
      const updatedWork = prevData.work.map((entry) => {
        if (entry.id === workId) {
          const updatedTasks = entry.tasks.map((task) =>
            task.id === taskId ? { ...task, item: value } : task
          );
          return { ...entry, tasks: updatedTasks };
        }
        return entry;
      });

      return {
        ...prevData,
        work: updatedWork,
      };
    });
  };

  const removeTaskFromWork = (workId, taskId) => {
    setFormData((prevData) => {
      const updatedWork = prevData.work.map((entry) => {
        if (entry.id === workId) {
          const updatedTasks = entry.tasks.filter((task) => task.id !== taskId);
          return { ...entry, tasks: updatedTasks };
        }
        return entry;
      });

      return {
        ...prevData,
        work: updatedWork,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{sectionHeader}</h1>
      {work.map((entry, index) => (
        <div key={entry.id} className={styles.workEntry}>
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
                employer #{index + 1}
              </h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => removeWorkItem(entry.id)}
              >
                <Image src={imgTrash} alt="Remove employer item" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveWorkItemUp(entry.id)}
              >
                <Image src={imgUp} alt="Move employer item up" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveWorkItemDown(entry.id)}
              >
                <Image src={imgDown} alt="Move employer item down" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => toggleForm(entry.id)}
              >
                <Image src={imgEdit} alt="Edit employer item" />
              </Button>
            </div>
          </div>
          {showForm === entry.id && (
            <div className="visible">
              <InputField
                label="Employer"
                name="employer"
                value={entry.employer}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} employer's name...`}
                required={false}
              />
              <InputField
                label="Location"
                name="location"
                value={entry.location}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} employer's location...`}
                required={false}
              />
              <InputField
                label="Position"
                name="position"
                value={entry.position}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} job position...`}
                required={false}
              />
              <InputField
                label="Years"
                name="years"
                value={entry.years}
                onChange={handleChangeArray(section, entry.id)}
                placeholder={`${enterYour} years employed...`}
                required={false}
              />

              <div className={styles.addNewTaskContainer}>
                <h2>
                  Add New {section} #{index + 1} Task
                </h2>
                <Button
                  variant="formDataControl"
                  type="button"
                  onClick={() => addTaskToWork(entry.id)}
                >
                  <Image src={imgAdd} alt="Add new task entry" />
                </Button>
              </div>
              {entry.tasks &&
                entry.tasks.map((task) => (
                  <div key={task.id} className={styles.taskItemContainer}>
                    <Button
                      type="button"
                      variant="formDataControlTask"
                      onClick={() => removeTaskFromWork(entry.id, task.id)}
                    >
                      <Image src={imgTrash} alt="Remove task entry" />
                    </Button>
                    <InputField
                      label=""
                      name="item"
                      value={task.item}
                      onChange={(e) =>
                        handleTaskChange(entry.id, task.id, e.target.value)
                      }
                      placeholder="Enter a responsibility/achievement..."
                      required={false}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
      <div className={styles.addNewContainer}>
        <h2>add new employer entry</h2>
        <Button variant="formDataControl" type="button" onClick={addWorkItem}>
          <Image src={imgAdd} alt="Add new employer entry" />
        </Button>
      </div>
      <div className={styles.endFormButtonContainer}>
        <SaveButton />
        <ResetButton onClick={() => handleResetSection("work")} />
      </div>
    </form>
  );
}
