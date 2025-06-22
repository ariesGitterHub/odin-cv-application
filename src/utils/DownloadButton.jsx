import Button from "./Button";

const DEFAULT_LABEL = "Download PDF";

export default function DownloadButton({ label = DEFAULT_LABEL, ...rest }) {
  return (
    <Button variant="download" type="button" {...rest}>
      {label} {/* NOTE: this becomes `children` in Button.jsx */}
    </Button>
  );
}
