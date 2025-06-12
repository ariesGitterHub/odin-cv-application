import Button from "./Button";
import Image from "./Image";
import InputField from "../helpers/InputField";
import imgAdd from "../assets/btnAdd.svg";
import styles from "../styles/AddNewData.module.css";

// how else can I write this code below?
export default function AddNewData() {
    return (
      <div className={styles.buttonContainer}>
        <h2>Add New Item</h2>
        <Button
          variant="formDataControl"
          type="button"
          //   onClick={}
        >
          <Image src={imgAdd} alt="" />
        </Button>
      </div>
    );
}