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
      <h2 className={styles.sectionHeader}>Education</h2>
      <div className={styles.educationInfo}>
        <div className={styles.schoolInfo}>
          <p>{formData.education[0].school}</p>
          &nbsp;
          <p>({formData.education[0].location})</p> 
        </div>
        <div className={styles.degreeInfo}>
          <p>{formData.education[0].degree}</p>
          <p>{formData.education[0].year}</p>  
        </div>

      </div>
    </div>
  );
}
