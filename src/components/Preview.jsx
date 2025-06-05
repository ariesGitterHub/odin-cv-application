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
      <h1 className={styles.fullName}>{formData.fullName}</h1>
      <div className={styles.contactInfo}>
        {/* <p>
          {formData.email} | {formData.phone}
        </p>
        <p>{formData.address}</p> */}
        {/* <p>{formData.website}</p> */}
        {addPipe(formData.email, formData.phone, formData.website)}
        {formData.address && <p>{formData.address}</p>}
      </div>
    </div>
  );
}
