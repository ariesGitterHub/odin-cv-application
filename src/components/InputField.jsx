export default function InputField({
  label,
  section,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
  required = false,
}) {
  return (
    <>
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
          section={section}
          type={type}
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus
        />
      </div>
    </>
  );
}

// export default function Main2PersonalDetails() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   // Handle form input changes
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   // Validate form fields
//   function validateForm() {
//     const { firstName, lastName, email, phone, address } = formData;
//     const errors = {};

//     if (!firstName) errors.firstName = "First name is required";
//     if (!lastName) errors.lastName = "Last name is required";
//     if (!email) errors.email = "Email is required";
//     if (!phone) errors.phone = "Phone is required";
//     if (!address) errors.phone = "Phone is required";

//     return errors;
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted:", formData);
//       // You can send the data to an API here
//     } else {
//       setErrors(validationErrors);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputField
//         label="First Name"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         placeholder="Enter your first name"
//         required={true}
//       />
//       {errors.firstName && (
//         <div style={{ color: "red" }}>{errors.firstName}</div>
//       )}

//       <InputField
//         label="Last Name"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         placeholder="Enter your last name"
//         required={true}
//       />
//       {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}

//       <InputField
//         label="Email"
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Enter your email"
//         required={true}
//       />
//       {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

//       <InputField
//         label="Phone Number"
//         name="phone"
//         type="tel"
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder="Enter your phone number"
//         required={true}
//       />
//       {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

//       <InputField
//         label="Home Address"
//         name="address"
//         type="text"
//         value={formData.address}
//         onChange={handleChange}
//         placeholder="Enter your home address"
//         required={true}
//       />
//       {errors.address && <div style={{ color: "red" }}>{errors.address}</div>}

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// }