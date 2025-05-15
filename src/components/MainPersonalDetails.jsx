import { useFormData } from "./FormDataContextProvider";
import InputField from "./InputField";
import Button from "./Button";

export default function MainPersonalDetails() {
  const { formData, handleChange, handleSubmit } = useFormData();

  const section = "personalDetails";

  const inputFields = [
    // {
    //   label: "first name*",
    //   section: section,
    //   name: "firstName",
    //   placeholder: "enter your first name",
    //   required: true,
    // },
    // {
    //   label: "last name*",
    //   section: section,
    //   name: "lastName",
    //   placeholder: "enter your last name",
    //   required: true,
    // },
    {
      label: "full name*",
      section: section,
      name: "fullName",
      placeholder: "enter your full name",
      required: true,
    },
    {
      label: "email*",
      section: section,
      type: "email",
      name: "email",
      placeholder: "enter your email",
      required: true,
    },
    {
      label: "phone number*",
      section: section,
      type: "tel",
      name: "phone",
      placeholder: "enter your phone number",
      required: true,
    },
    {
      label: "address",
      section: section,
      name: "address",
      placeholder: "enter your address",
      required: false,
    },
    {
      label: "github",
      section: section,
      type: "url",
      name: "github",
      placeholder: "enter your github url",
      required: false,
    },
    {
      label: "website",
      section: section,
      type: "url",
      name: "website",
      placeholder: "enter your website url",
      required: false,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
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
            value={formData.personalDetails[field.name]}
            onChange={(e) => handleChange(e, "personalDetails")}
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
