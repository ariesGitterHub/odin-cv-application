import Image from "../components/Image";
import favIcon from "../assets/favIcon.svg";

export default function Header({ message }) {
  return (
    <header>
      <div className="inner-header-container">
        <Image
          src={favIcon}
          alt="Resumé Wizard Hat Logo"
          className="header-hat-logo"
        />
        <h1>Resumé Wizard</h1>
      </div>
      <hr />
      <p>{message}</p>
      <hr />
    </header>
  );
}
