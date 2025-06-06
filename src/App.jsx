import "./App.css";
import { useState } from "react";
import { initialFormData } from "./data/data";
import Header from "./components/Header"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import Footer from "./components/Footer";
import Button from "./helpers/Button";

export default function App() {

  // const [fullName, setFullName] = useState("");
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   website: "",
  // });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    // return saved
    //   ? JSON.parse(saved)
    //   : {
    //       fullName: "Han Solo",
    //       email: "nerferder@sw.net",
    //       phone: "(555) 555-5555",
    //       address: "1337 Falcon Way, Coreilia City, CA",
    //       website: "12parsecs.com",
    //     };
    return savedData ? JSON.parse(savedData) : initialFormData;
  });
  
  // const saved = localStorage.getItem("resumeData");
  // let parsed = null;

  // try {
  //   parsed = saved ? JSON.parse(saved) : null;
  // } catch (e) {
  //   console.warn("Failed to parse saved data:", e);
  // }

  // const [formData, setFormData] = useState(parsed || initialFormData);


  // const handleFullNameChange = (e) => {
  //   setFullName(e.target.value);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (section) => (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleChangeArray = (section, index) => (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedArray = [...prev[section]];
      updatedArray[index] = {
        ...updatedArray[index],
        [name]: value,
      };

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    // alert("Form saved to localStorage!");
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="editor-preview-container">
          {/* <Editor
            fullName={fullName}
            onFullNameChange={handleFullNameChange}
            /> */}
          <Editor
            formData={formData}
            handleChange={handleChange}
            handleChangeArray={handleChangeArray}
            handleSubmit={handleSubmit}
          />
          {/* <Preview fullName={fullName} /> */}
          <Preview formData={formData} />
        </div>
        <Button
          variant="test"
          onClick={() => {
            localStorage.removeItem("resumeData");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              address: "",
              website: "",
            });
          }}
        >
          Clear Saved Data
        </Button>
        <Footer />
      </div>
    </>
  );
}

