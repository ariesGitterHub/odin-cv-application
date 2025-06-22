import styles from "../styles/Preview.module.css";
import "../App.css";
import { sectionHeaderText } from "../data/data";

export default function Preview({ formData }) {
  // The code below adds a pipe (i.e., "|")" between text from the EditorFormPersonal.jsx inputs of email, phone, and website(s); it also omits a pipe if not data is preset, so that pipes will only be seen between inputs that exist, and removes pipes if inputs are null/undefined/empty
  function addPipe(...items) {
    const validItems = items.filter(Boolean); // This removes null/undefined/empty inputs
    return validItems.map((item, index) => (
      <span key={index}>
        {item}
        {index < validItems.length - 1 && <span> | </span>}
      </span>
    ));
  }

  return (
    // <div className={styles.previewContainer}>
    //   <div className={styles.previewScaler}>
    <div className="preview-container">
      <div className="preview-scaler">
        <div className={styles.previewPage}>
          <h1 className={styles.fullName}>{formData.personal.fullName}</h1>
          <div className={styles.contactInfo}>
            {addPipe(
              formData.personal.email,
              formData.personal.phone,
              formData.personal.website
            )}
            {formData.personal.address && <p>{formData.personal.address}</p>}
            {/* The above line hides empty values... */}
          </div>
          {/* <hr /> */}
          {/* <h2 className={styles.sectionHeader}>educational background</h2> */}
          <h2 className={styles.sectionHeader}>
            {sectionHeaderText.education}
          </h2>
          {formData.education.map((entry) => (
            <div key={entry.id} className={styles.sectionEntry}>
              <div className={styles.entryHeader}>
                <div className={styles.entryHeader1}>
                  <p className={styles.bold}>{entry.school}</p>
                  &nbsp;
                  <p>({entry.location})</p>
                </div>
                <div className={styles.entryHeader2}>
                  <p>{entry.year}</p>
                </div>
              </div>
              <div className={styles.entryDetail}>
                <p>{entry.degree}</p>
              </div>
            </div>
          ))}
          {/* <h2 className={styles.sectionHeader}>employment history</h2> */}
          <h2 className={styles.sectionHeader}>{sectionHeaderText.work}</h2>
          {formData.work.map((entry) => (
            <div key={entry.id} className={styles.sectionEntry}>
              <div className={styles.entryHeader}>
                <div className={styles.entryHeader1}>
                  <p className={styles.bold}>{entry.employer}</p>
                  &nbsp;
                  <p>({entry.location})</p>
                </div>
                <div className={styles.entryHeader2}>
                  <p>{entry.years}</p>
                </div>
              </div>
              <div className={styles.entryDetail}>
                <p>{entry.position}</p>
              </div>
              {entry.tasks && entry.tasks.length > 0 && (
                <ul className={styles.taskList}>
                  {entry.tasks.map((task) => (
                    <li key={task.id} className={styles.taskItem}>
                      {task.item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {formData.miscellaneous.map((entry) => (
            <div key={entry.id}>
              <h2 className={styles.sectionHeader}>{entry.section}</h2>
              <div className={styles.sectionEntry}>
                {entry.title && (
                  <div className={styles.entryHeader}>
                    <p className={styles.bold}>{entry.title}</p>
                  </div>
                )}
                {/* The above line hides empty values... */}

                {/* <div className={styles.entryHeader}>
                <p className={styles.bold}>{entry.title}</p>
              </div> */}
                <div className={styles.entryDetail}>
                  <p>{entry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
