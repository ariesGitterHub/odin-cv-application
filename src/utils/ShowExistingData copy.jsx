import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import imgEdit from "../assets/btnEdit.svg";
import imgTrash from "../assets/btnTrash.svg";
import styles from "../styles/ShowExistingData.module.css";

// how else can I write this code below?
export default function ShowExistingData({ name, detail, year }) {
  const [showForm, setShowForm] = useState("");
  const toggleForm = (formName) => {
    if (formName !== showForm) {
      setShowForm(formName);
    }
  };
  return (
    <div className={styles.showExistingData}>
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <p>
          {detail} ({year})
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="formDataControl"
          type="button"
          //   onClick={}
        >
          <Image src={imgTrash} alt="" />
        </Button>
        <Button
          variant="formDataControl"
          type="button"
          onClick={() => toggleForm("index")}
        >
          <Image src={imgEdit} alt="" />
        </Button>
      </div>
    </div>
  );
}
