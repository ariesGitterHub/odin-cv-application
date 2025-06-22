import styles from "../styles/Editor.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import SaveButton from "../utils/SaveButton";
import ResetButton from "../utils/ResetButton";
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
import { sectionHeaderText } from "../data/data";

export default function EditorFormDownload({
formData,
setFormData,
handleChangeArray,
handleSubmit,
handleResetSection,
})
{
  const section = "download";
  const miscellaneous = "miscellaneous";
  // const download = formData[section];
  const sectionHeader = sectionHeaderText[section];
  // const enterYour = "Enter your";

  const misc = formData[miscellaneous];

  // Function to move sections up or down
  const moveSectionUp = (section) => {
    const newOrder = [...formData.sectionsOrder];
    const index = newOrder.indexOf(section);
    if (index > 0) {
      newOrder.splice(index, 1);
      newOrder.splice(index - 1, 0, section);
      setFormData({
        ...formData,
        sectionsOrder: newOrder,
      });
    }
  };

  const moveSectionDown = (section) => {
    const newOrder = [...formData.sectionsOrder];
    const index = newOrder.indexOf(section);
    if (index < newOrder.length - 1) {
      newOrder.splice(index, 1);
      newOrder.splice(index + 1, 0, section);
      setFormData({
        ...formData,
        sectionsOrder: newOrder,
      });
    }
  };

  // onSubmit={handleSubmit}
  return (
    <form>
      <h1>{sectionHeader}</h1>
      <div className={styles.downloadEntry}>
        <div className={styles.resumeEntryTile}>
          <div className={styles.entryHeadingContainer}>
            <h2>{sectionHeaderText.education}</h2>
          </div>
          <div className={styles.entryButtonContainer}>
            <Button
              variant="formDataControl"
              type="button"
              // onClick={() => moveEducationItemUp(entry.id)}
            >
              <Image src={imgUp} alt="" />
            </Button>
            <Button
              variant="formDataControl"
              type="button"
              // onClick={() => moveEducationItemDown(entry.id)}
            >
              <Image src={imgDown} alt="" />
            </Button>
          </div>
        </div>
        <div className={styles.resumeEntryTile}>
          <div className={styles.entryHeadingContainer}>
            <h2>{sectionHeaderText.work}</h2>
          </div>
          <div className={styles.entryButtonContainer}>
            <Button
              variant="formDataControl"
              type="button"
              // onClick={() => moveEducationItemUp(entry.id)}
            >
              <Image src={imgUp} alt="" />
            </Button>
            <Button
              variant="formDataControl"
              type="button"
              // onClick={() => moveEducationItemDown(entry.id)}
            >
              <Image src={imgDown} alt="" />
            </Button>
          </div>
        </div>
        {misc.map((entry, index) => (
          <div key={entry.id} className={styles.resumeEntryTile}>
            <div className={styles.entryHeadingContainer}>
              <h2>{entry.section}</h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                // onClick={() => moveMiscellaneousItemUp(entry.id)}
              >
                <Image src={imgUp} alt="" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                // onClick={() => moveMiscellaneousItemDown(entry.id)}
              >
                <Image src={imgDown} alt="" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.endFormButtonContainer}>
        <SaveButton />
        <ResetButton
        // onClick={() => handleResetSection("education")}
        />
      </div>
    </form>
  );
}
