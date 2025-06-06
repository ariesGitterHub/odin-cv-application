import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
// import { useState } from "react";

export default function EditorFormEducation({ formData, handleChangeArray, handleSubmit }) {

  const section = "education";
  const education = formData[section];
  const enterYour = "Enter your";

  const inputFields = [
    {
      label: "school",
      name: "school",
      value: education[0].school,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} school's name...`,
      required: false,
    },
    {
      label: "location",
      name: "location",
      value: education[0].location,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} school's location...`,
      required: false,
    },
    {
      label: "degree",
      name: "degree",
      value: education[0].degree,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} degree type...`,
      required: false,
    },
    {
      label: "year",
      name: "year",
      value: education[0].year,
      onChange: handleChangeArray(section, 0),
      placeholder: `${enterYour} graduation year...`,
      required: false,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h1>{section}</h1>
      {inputFields.map((field) => {
        return (
          <InputField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      })}
      <div className="button-container">
        <Button variant="test" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}