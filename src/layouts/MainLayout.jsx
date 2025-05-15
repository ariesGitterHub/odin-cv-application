import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Image from "../components/Image";
import { headerMessage, navLinks } from "../data/linkData";
import { useLocation } from "react-router-dom";
// import resumeWizardLogo from "../assets/resumeWizardLogo.svg";
// import styles from "./HomeLayout.module.css";

export default function MainLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const homePath = "/"

  return (
    <>
      {navLinks
        .filter(({ to }) => to === currentPath)
        .map(({ key }) => {
          const { message } = headerMessage[key];
          return <Header key={currentPath} message={message} />;
        })}
      {navLinks.some(({ to }) => to === currentPath) &&
        currentPath !== homePath && <NavBar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
