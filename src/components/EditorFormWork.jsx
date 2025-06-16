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

  const toggleForm = (id) => {
    setShowForm((prev) => (prev === id ? null : id));
  };

  // const removeWorkItem = (idToRemove) => {
  //   const updatedWork = work.filter((entry) => entry.id !== idToRemove);

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     work: updatedWork,
  //   }));
  // };

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
      <h1>{section} history</h1>
      {work.map((entry, index) => (
        <div key={entry.id} className="work-entry">
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
              <h2
                style={{
                  fontWeight: showForm === entry.id ? "800" : "inherit",
                }}
              >
                {section} #{index + 1}
              </h2>
            </div>
            <div className="buttonContainer">
              <Button
                variant="formDataControl"
                type="button"
                onClick={() =>
                  removeWorkItem(
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
                // onClick={() => removeEducationItem(entry.id)}
                onClick={() => moveWorkItemUp(entry.id)}
              >
                <Image src={imgUp} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                // onClick={() => removeEducationItem(entry.id)}
                onClick={() => moveWorkItemDown(entry.id)}
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

              <div className="addNewContainer">
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

              {/* {entry.tasks &&
                entry.tasks.map((task, index) => (
                  <InputField
                    key={task.id}
                    label={`Task Item #${index + 1}`}
                    name="item"
                    value={task.item}
                    onChange={(e) =>
                      handleTaskChange(entry.id, task.id, e.target.value)
                    }
                    placeholder="Describe a responsibility or achievement..."
                    required={false}
                  />
                ))} */}
              {entry.tasks &&
                entry.tasks.map((task) => (
                  <div key={task.id} className="taskItemContainer">
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
                    <Button
                      type="button"
                      variant="formDataControl"
                      onClick={() => removeTaskFromWork(entry.id, task.id)}
                    >
                      <Image src={imgTrash} alt="Remove task" />
                    </Button>
                  </div>
                ))}
              {/* <hr /> */}
            </div>
          )}
        </div>
      ))}
      <div className="addNewContainer">
        <h2>add new {section} item</h2>
        <Button variant="formDataControl" type="button" onClick={addWorkItem}>
          <Image src={imgAdd} alt="Add new work entry" />
        </Button>
      </div>

      <Button variant="save" type="submit">
        Save
      </Button>
    </form>
  );
}
