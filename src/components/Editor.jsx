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
// import EditorFormProjects from "./EditorFormProjects";
// import EditorFormSkills from "./EditorFormSkills";

export default function Editor({ formData, handleChange, handleSubmit }) {
  const [showForm, setShowForm] = useState("personal");
  const toggleForm = (formName) => {
    if (formName !== showForm) {
      setShowForm(formName);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.buttonContainer}>
        <Button
          variant="nav"
          type="button"
          onClick={() => toggleForm("personal")}
        >
          <Image src={imgPersonal} alt="" />
        </Button>
        <Button
          variant="nav"
          type="button"
          onClick={() => toggleForm("education")}
        >
          <Image src={imgEducation} alt="" />
        </Button>
        <Button variant="nav" type="button" onClick={() => toggleForm("work")}>
          <Image src={imgWork} alt="" />
        </Button>
        <Button variant="nav" type="button">
          <Image src={imgProjects} alt="" />
        </Button>
        <Button variant="nav" type="button">
          <Image src={imgSkills} alt="" />
        </Button>
      </div>
      <div className={styles.formContainer}>
        {showForm === "personal" && (
          <div className={styles.visible}>
            <EditorFormPersonal
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {showForm === "education" && (
          <div className={styles.visible}>
            <EditorFormEducation />
          </div>
        )}
        {showForm === "work" && (
          <div className={styles.visible}>
            <EditorFormWork />
          </div>
        )}
      </div>
    </div>
  );
}
