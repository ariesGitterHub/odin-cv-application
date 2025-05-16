import { createContext, useState, useContext } from "react";

// Create Context
const FormDataContext = createContext();

// Create a custom hook for easy access to the form data context
export const useFormData = () => useContext(FormDataContext);

// FormDataProvider component to wrap the app and provide form data
export default function FormDataContextProvider({ children }) {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   github: "",
  //   website: "",
  // });

  const [formData, setFormData] = useState({
    personalDetails: {
      // firstName: "",
      // lastName: "",
      // fullName: "",
      // email: "",
      // phone: "",
      // address: "",
      // github: "",
      // website: "",
    },
    work: [{}],
    education: [
      {
        // school: "",
        // degree: "",
        // location: "",
        // year: "",
      },
    ],
    skills: [{}],
    other: [{}],
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // function handleChange(e, section) {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [section]: {
  //       ...prev[section],
  //       [name]: value,
  //     },
  //   }));
  // }

  function handleChange(e, section, index = null) {
    const { name, value } = e.target;

    // If the section is an array (like education), handle it differently
    if (section === "education" && index !== null) {
      setFormData((prev) => ({
        ...prev,
        education: prev.education.map((edu, i) => {
          if (i === index) {
            return {
              ...edu,
              [name]: value, // Update the field for this specific education entry
            };
          }
          return edu;
        }),
      }));
    } else {
      // For non-array sections (like personalDetailsData), handle as before
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      }));
    }
  }

  // console.log("Current Form Data in Context:", formData); // Log form data inside the provider

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can log the data or send it somewhere
    console.log("Form Data Submitted:", formData);
    // Do not reset the formData here unless you really want to.
  };

  return (
    <>
      <FormDataContext.Provider
        value={{ formData, handleChange, handleSubmit }}
      >
        {children}
      </FormDataContext.Provider>
    </>
  );
}
