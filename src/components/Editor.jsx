import { useState } from "react";
import styles from "../styles/Editor.module.css";
import Button from "../helpers/Button";
import Image from "../helpers/Image";
import imgPersonal from "../assets/btnPersonal.svg";
import imgEducation from "../assets/btnEducation.svg";
import imgWork from "../assets/btnWork.svg";
import imgProjects from "../assets/btnProjects.svg";
import imgSkills from "../assets/btnSkills.svg";
import EditorFormPersonal from "./EditorFormPersonal";
import EditorFormEducation from "./EditorFormEducation";
import EditorFormWork from "./EditorFormWork";
import EditorFormProjects from "./EditorFormProjects";
import EditorFormSkills from "./EditorFormSkills";

export default function Editor({
  formData,
  setFormData,
  handleChange,
  handleChangeArray,
  handleSubmit,
}) {
  const [activeForm, setActiveForm] = useState("personal");
  const switchForm = (formName) => {
    if (formName !== activeForm) {
      setActiveForm(formName);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.buttonContainer}>
        <Button
          variant="nav"
          type="button"
          onClick={() => switchForm("personal")}
        >
          <Image src={imgPersonal} alt="" />
        </Button>
        <Button
          variant="nav"
          type="button"
          onClick={() => switchForm("education")}
        >
          <Image src={imgEducation} alt="" />
        </Button>
        <Button variant="nav" type="button" onClick={() => switchForm("work")}>
          <Image src={imgWork} alt="" />
        </Button>
        <Button
          variant="nav"
          type="button"
          onClick={() => switchForm("projects")}
        >
          <Image src={imgProjects} alt="" />
        </Button>
        <Button variant="nav" type="button">
          <Image src={imgSkills} alt="" />
        </Button>
      </div>
      <div className={styles.formContainer}>
        {activeForm === "personal" && (
          <div className="visible">
            <EditorFormPersonal
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {activeForm === "education" && (
          <div className="visible">
            <EditorFormEducation
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              // handleChange={handleChange}
              handleSubmit={handleSubmit}
              // switchForm={switchForm}
            />
          </div>
        )}
        {activeForm === "work" && (
          <div className="visible">
            <EditorFormWork
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              // handleChange={handleChange}
              handleSubmit={handleSubmit}
              // switchForm={switchForm}
            />
          </div>
        )}
        {activeForm === "projects" && (
          <div className="visible">
            <EditorFormProjects
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              // handleChange={handleChange}
              handleSubmit={handleSubmit}
              // switchForm={switchForm}
            />
          </div>
        )}
        {activeForm === "skills" && (
          <div className="visible">
            <EditorFormProjects
              formData={formData}
              // handleChangeArray={handleChangeArray}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              // switchForm={switchForm}
            />
          </div>
        )}
      </div>
    </div>
  );
}
