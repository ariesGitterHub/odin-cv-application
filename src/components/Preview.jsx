import styles from "../styles/Preview.module.css";

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
    <div className={styles.previewContainer}>
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
      <hr />
      <h2 className={styles.sectionHeader}>education</h2>
      {formData.education.map((entry) => (
        <div key={entry.id} className={styles.data0Info}>
          <div className={styles.data1Info}>
            <p className={styles.bold}>{entry.school}</p>
            &nbsp;
            <p>({entry.location})</p>
          </div>
          <div className={styles.data2Info}>
            <p>{entry.degree}</p>
            <p>{entry.year}</p>
          </div>
        </div>
      ))}
      <h2 className={styles.sectionHeader}>work history</h2>
      {formData.work.map((entry) => (
        <div key={entry.id} className={styles.data0Info}>
          <div className={styles.data1Info}>
            <p className={styles.bold}>{entry.employer}</p>
            &nbsp;
            <p>({entry.location})</p>
          </div>
          <div className={styles.data2Info}>
            <p>{entry.position}</p>
            <p>{entry.years}</p>
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
          <div className={styles.data0Info}>
            <div className={styles.data1Info}>
              <p className={styles.bold}>{entry.title}</p>
            </div>
            <div className={styles.data2Info}>
              <p>{entry.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
