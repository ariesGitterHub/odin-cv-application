export default function Button({ variant = "primary", children, ...rest }) {
  const base = "px-4 py-2 rounded";
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
