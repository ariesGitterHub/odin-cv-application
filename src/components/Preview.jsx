import styles from "../styles/Preview.module.css";

export default function Preview({ formData }) {
  function addPipe(...items) {
    const validItems = items.filter(Boolean); // removes ---> null/undefined/empty
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
        {/* <p>
          {formData.email} | {formData.phone}
        </p>
        <p>{formData.address}</p> */}
        {/* <p>{formData.website}</p> */}
        {addPipe(
          formData.personal.email,
          formData.personal.phone,
          formData.personal.website
        )}
        {formData.personal.address && <p>{formData.personal.address}</p>}
        {/* Use above line to hide empty values... */}
      </div>
      <hr />
      <h2 className={styles.sectionHeader}>education</h2>
      {/* <div className={styles.data0Info}>
        <div className={styles.data1Info}>
          <p className={styles.bold}>{formData.education[0].school}</p>
          &nbsp;
          <p>({formData.education[0].location})</p>
        </div>
        <div className={styles.data2Info}>
          <p>{formData.education[0].degree}</p>
          <p>{formData.education[0].year}</p>
        </div>
      </div> */}

      {/* Refactor this? what about "entry" */}
      {/* {formData.education.map((entry, index) => (
        <div key={index} className={styles.data0Info}>
          <div className={styles.data1Info}>
            <p className={styles.bold}>{formData.education[index].school}</p>
            &nbsp;
            <p>({formData.education[index].location})</p>
          </div>
          <div className={styles.data2Info}>
            <p>{formData.education[index].degree}</p>
            <p>{formData.education[index].year}</p>
          </div>
        </div>
      ))} */}
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

      {/* <hr /> */}
      {/* <h2 className={styles.sectionHeader}>Work History</h2>
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
        </div>
      ))} */}

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

      {/* <hr /> */}
      {/* <h2 className={styles.sectionHeader}>projects</h2> */}
      {/* <div className={styles.data0Info}>
        <div className={styles.data1Info}>
          <p className={styles.bold}>{formData.projects[0].project}</p>
        </div>
        <div className={styles.data2Info}>
          <p>{formData.projects[0].description}</p>
        </div>
      </div> */}

      {/* {formData.projects.map((entry) => (
        <div key={entry.id} className={styles.data0Info}>
          <div className={styles.data1Info}>
            <p className={styles.bold}>{entry.title}</p>
          </div>
          <div className={styles.data2Info}>
            <p>{entry.description}</p>
          </div>
        </div>
      ))} */}
      {/* <hr /> */}
      {/* <h2 className={styles.sectionHeader}>Skills</h2>
      <div className={styles.dataXInfo}>
        <p>{formData.skills.description}</p>
      </div> */}
      {/* <h2 className={styles.sectionHeader}>miscellaneous</h2> */}
      {formData.miscellaneous.map((entry) => (
        <>
          <h2 className={styles.sectionHeader}>{entry.section}</h2>
          <div key={entry.id} className={styles.data0Info}>
            <div className={styles.data1Info}>
              <p className={styles.bold}>{entry.title}</p>
            </div>
            <div className={styles.data2Info}>
              <p>{entry.description}</p>
            </div>
          </div>
        </>
      ))}

      {/* <hr /> */}
      {/* <h2 className={styles.sectionHeader}>references</h2>
      <div className={styles.dataXInfo}>
        <p>Available upon request.</p>
      </div> */}
    </div>
  );
}
