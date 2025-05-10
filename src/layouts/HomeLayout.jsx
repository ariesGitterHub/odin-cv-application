import styles from "./HomeLayout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import AppLink from "../components/AppLink";
import Image from "../components/Image";
import { navLinks, linkAssets } from "../data/linkData";
import { useLocation } from "react-router-dom";
import favIcon from "../assets/favIcon.svg";

import resumeWizardLogo from "../assets/resumeWizardLogo.svg";

// import linkEducation from "../assets/linkEducation.svg";
// import linkOtherStuff from "../assets/linkOtherStuff.svg";
// import linkPersonalDetails from "../assets/linkPersonalDetails.svg";
// // import linkPreview from "../assets/linkPreview.svg";
// import linkResumeControls from "../assets/linkResumeControls.svg";
// import linkSkillSets from "../assets/linkSkillSets.svg";
// import linkWorkExperience from "../assets/linkWorkExperience.svg";

export default function HomeLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
    
  return (
    <>
      {/* <header>
        <div className={styles.innerHeaderContainer}>
          <Image
            src={favIcon}
            alt="Resumé Wizard Hat Logo"
            className={styles.homeHatLogo}
          />
          <h1>Resumé Wizard</h1>
        </div>
        <hr />
        <p>Build your own resumé from scratch</p>
        <hr />
      </header> */}
      <Header message="Build your own resumé from scratch"/>
      <main>
        <div className={styles.homeLogoContainer}>
          <Image
            src={resumeWizardLogo}
            alt="Resumé Wizard Logo"
            className={styles.homeLogo}
          />
        </div>
        <div className={styles.homeMsgContainer}>
          <p>Use the links below to start your resumé!</p>
        </div>
        {/* <div className={styles.homeLinkContainer}>
          <AppLink to="/personal-details" className="page-link">
            <Image
              src={linkPersonalDetails}
              alt="Link to Personal Details page"
              className="img-link"
            />
          </AppLink>
          <AppLink to="/education" className="page-link">
            <Image
              src={linkEducation}
              alt="Link to Education page"
              className="img-link"
            />
          </AppLink>
          <AppLink to="/work-experience" className="page-link">
            <Image
              src={linkWorkExperience}
              alt="Link to Work Experience page"
              className="img-link"
            />
          </AppLink>
          <AppLink to="/skill-sets" className="page-link">
            <Image
              src={linkSkillSets}
              alt="Link to Skill Sets page"
              className="img-link"
            />
          </AppLink>
          <AppLink to="/other-stuff" className="page-link">
            <Image
              src={linkOtherStuff}
              alt="Link to the Other Stuff page"
              className="img-link"
            />
          </AppLink>
          <AppLink to="/resume-controls" className="page-link">
            <Image
              src={linkResumeControls}
              alt="Link to the Resume Controls page"
              className="img-link"
            />
          </AppLink>
          {/* <Link to="/education" className="page-link">
            <Image src={linkPreview} alt="Link to education page" />
          </Link> 
        </div> 
        */}
        <div className={styles.homeLinkContainer}>
          {navLinks
            .filter(({ to }) => to !== currentPath)
            .map(({ to, key }) => {
              const { src, alt } = linkAssets[key];
              return (
                <AppLink key={to} to={to} className="page-link">
                  <Image src={src} alt={alt} className="img-link" />
                </AppLink>
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}
