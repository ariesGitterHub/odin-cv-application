import styles from "../styles/Editor.module.css";
import Button from "../helpers/Button";
import Image from "../helpers/Image";
import imgPersonal from "../assets/btnPersonal.svg";
import imgEducation from "../assets/btnEducation.svg";
import imgWork from "../assets/btnWork.svg";
import imgProjects from "../assets/btnProjects.svg";
import imgSkills from "../assets/btnSkills.svg";
import EditorFormPersonal from "./EditorFormPersonal";
// import EditorFormEducation from "./EditorFormEducation";
// import EditorFormWork from "../EditorFormWork";
// import EditorFormProjects from "./EditorFormProjects";
// import EditorFormSkills from "./EditorFormSkills";

export default function Editor() {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.buttonContainer}>
        <Button type="button">
          <Image src={imgPersonal} alt="" />
        </Button>
        <Button type="button">
          <Image src={imgEducation} alt="" />
        </Button>
        <Button type="button">
          <Image src={imgWork} alt="" />
        </Button>
        <Button type="button">
          <Image src={imgProjects} alt="" />
        </Button>
        <Button type="button">
          <Image src={imgSkills} alt="" />
        </Button>
      </div>
      <div className={styles.formContainer}>
            <EditorFormPersonal />  
      </div>
    </div>
  );
}
