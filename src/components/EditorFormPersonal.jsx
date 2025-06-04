import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
// import { useState } from "react";

export default function EditorFormPersonal() {
//   const { formData, handleChange, handleSubmit } = useFormData();
  const section = "personal";
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "full name*",
      section: section,
      name: "fullName",
      placeholder: `${enterYour} full name...`,
      required: true,
    },
    {
      label: "email*",
      section: section,
      type: "email",
      name: "email",
      placeholder: `${enterYour} email...`,
      required: true,
    },
    {
      label: "phone number*",
      section: section,
      type: "tel",
      name: "phone",
      placeholder: `${enterYour} phone number...`,
      required: true,
    },
    {
      label: "address",
      section: section,
      name: "address",
      placeholder: `${enterYour} address...`,
      required: false,
    },
    {
      label: "website(s)",
      section: section,
      // type: "url",
      name: "website",
      placeholder: `${enterYour} website(s)...`,
      required: false,
    },
  ];

  return (
    <form 
    // onSubmit={handleSubmit}
    >
      {inputFields.map((field) => {
        return (
          <InputField
            key={field.name}
            label={field.label}
            section={field.section}
            type={field.type}
            name={field.name}
            // value={formData[field.name]}
            // onChange={handleChange}
            // value={formData.personal[field.name]}
            // onChange={(e) => handleChange(e, "personal")}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      })}
      <div className="button-container">
        <Button type="submit">Submit</Button>
        {/* <Button>Preview</Button> */}
      </div>
    </form>
  );
}