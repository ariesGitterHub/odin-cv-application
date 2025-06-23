import styles from "../styles/Editor.module.css";

import { sectionHeaderText } from "../data/data";

import Image from "../utils/Image";
import Button from "../utils/Button";
import SaveButton from "../utils/SaveButton";
import DownloadButton from "../utils/DownloadButton";

import imgUp from "../assets/btnArrowUp.svg";
import imgDown from "../assets/btnArrowDown.svg";

export default function EditorFormDownload({
formData,
setFormData,
handleSubmit,
handleDownload,
})
{
  const section = "download";
  // const miscellaneous = "miscellaneous";
  // const download = formData[section];
  const sectionHeader = sectionHeaderText[section];
  // const enterYour = "Enter your";

  // const misc = formData[miscellaneous];

  

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

  return (
    <form onSubmit={handleSubmit}>
      <h1>{sectionHeader}</h1>
      <div className={styles.textExplainerBox}>
        <p>Use the arrow buttons to move resume sections up or down.</p>
      </div>
      <div className={styles.downloadEntry}>
        {formData.sectionsOrder.map((sectionKey) => (
          <div key={sectionKey} className={styles.resumeEntryTile}>
            <div className={styles.entryHeadingContainer}>
              <h2>{sectionHeaderText[sectionKey]}</h2>
            </div>
            <div className={styles.entryButtonContainer}>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveSectionUp(sectionKey)}
              >
                <Image src={imgUp} alt="Move resumé section up" />
              </Button>
              <Button
                variant="formDataControl"
                type="button"
                onClick={() => moveSectionDown(sectionKey)}
              >
                <Image src={imgDown} alt="Move resumé section down" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.endFormButtonContainer}>
        <SaveButton />
        <DownloadButton onClick={() => handleDownload()} />
      </div>
    </form>
  );
}
