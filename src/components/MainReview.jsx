import { useFormData } from "./FormDataContextProvider";
import styles from "./MainReview.module.css";
export default function MainReview() {

    const { formData, handleChange, handleSubmit } = useFormData();

  return (
    <div className={styles.resumeBasic}>
      <h1>{formData.personalDetails.fullName}</h1>
      <hr />
      <div className={styles.contactInfoDiv}>
        <p className={styles.phone}>{formData.personalDetails.phone}</p>
        <p className={styles.email}>{formData.personalDetails.email}</p>
        <p className={styles.address}>{formData.personalDetails.address}</p>
        <p className={styles.address}>{formData.personalDetails.github}</p>
        <p className={styles.address}>{formData.personalDetails.website}</p>
      </div>
      <hr />
    </div>
  );
}
