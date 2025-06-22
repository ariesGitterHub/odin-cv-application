import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./App.css";

import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import { initialFormData } from "./data/data";

export default function App() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  const resumeRef = useRef();

  // const handleDownload = async () => {
  // await document.fonts.ready;  

  //   const element = resumeRef.current;

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //     backgroundColor: "#fff",
  //   });

  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "pt", "letter");

  //   const imgProps = pdf.getImageProperties(imgData);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("_resume.pdf");
  // };

  const handleDownload = async () => {
    const element = resumeRef.current;

    // 1. Render the HTML to canvas (high resolution)
    const canvas = await html2canvas(element, {
      scale: 2, // High DPI for crisp image
      useCORS: true,
      backgroundColor: null, // avoids forcing white background
    });

    const imgData = canvas.toDataURL("image/png");

    // 2. Create jsPDF in 'pt' and 'letter' size
    const pdf = new jsPDF("p", "pt", "letter"); // 612pt x 792pt

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 612pt
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 792pt

    // 3. Get canvas dimensions in pixels
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = imgProps.width;
    const imgHeight = imgProps.height;

    // 4. Calculate aspect ratio fit
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;

    // 5. Center the image
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
    pdf.save("resume.pdf");
  };
  

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

  const resetSection = (sectionName) => {
    setFormData((prev) => ({
      ...prev,
      [sectionName]: initialFormData[sectionName],
    }));
  };

  const handleResetSection = (section) => {
    if (
      confirm(
        `Are you sure you want to reset this section to the original default data?`
      )
    ) {
      resetSection(section);
    }
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
            handleResetSection={handleResetSection}
            handleDownload={handleDownload}
          />
          <Preview 
            ref={resumeRef} 
            formData={formData} 
          />
        </div>
      </div>
    </>
  );
}
