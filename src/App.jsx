import "./App.css";
import { useState } from "react";
import { initialFormData } from "./data/data";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

export default function App() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

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

  const handleChangeArray = (section, id) => (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedArray = prev[section].map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      );

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="editor-preview-container">
          <Editor
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleChangeArray={handleChangeArray}
            handleSubmit={handleSubmit}
          />
          <Preview formData={formData} />
        </div>
        <Footer />
      </div>
    </>
  );
}
