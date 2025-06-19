import Button from "./Button";

const DEFAULT_LABEL = "Reset Section";

export default function ResetButton({ label = DEFAULT_LABEL, ...rest }) {
  return (
    <Button variant="reset" type="button" {...rest}>
      {label} {/* NOTE: this becomes `children` in Button.jsx */}
    </Button>
  );
}
