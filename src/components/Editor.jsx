import styles from "../styles/Editor.module.css";
import { useState } from "react";
import Button from "../utils/Button";
import Image from "../utils/Image";
import imgPersonal from "../assets/btnPersonal.svg";
import imgEducation from "../assets/btnEducation.svg";
import imgWork from "../assets/btnWork.svg";
import imgMisc from "../assets/btnMisc.svg";
import imgDownload from "../assets/btnDownload.svg";
import EditorFormPersonal from "./EditorFormPersonal";
import EditorFormEducation from "./EditorFormEducation";
import EditorFormWork from "./EditorFormWork";
import EditorFormMiscSections from "./EditorFormMiscSections";

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
          onClick={() => switchForm("misc-sections")}
        >
          <Image src={imgMisc} alt="" />
        </Button>
        <Button variant="nav" type="button" onClick={() => switchForm("hat")}>
          <Image src={imgDownload} alt="" />
        </Button>
      </div>
      {/* <div className={styles.formContainer}> */}
      <div>
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
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {activeForm === "work" && (
          <div className="visible">
            <EditorFormWork
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {activeForm === "misc-sections" && (
          <div className="visible">
            <EditorFormMiscSections
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {/* {activeForm === "hat" && (
          <div className="visible">
            <EditorFormMiscSections
              formData={formData}
              setFormData={setFormData}
              handleChangeArray={handleChangeArray}
              handleSubmit={handleSubmit}
            />
          </div>
        )} */}
      </div>
    </div>
  );
}
