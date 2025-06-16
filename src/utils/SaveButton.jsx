// components/SaveButton.jsx
import Button from "./Button";

const DEFAULT_LABEL = "Save Progress";

export default function SaveButton({ label = DEFAULT_LABEL, ...rest }) {
  return (
    <div className="button-container">
      <Button variant="save" type="submit" {...rest}>
        {label} {/* NOTE: this becomes `children` in Button.jsx */}
      </Button>
    </div>
  );
}
