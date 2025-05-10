import styles from "./HomeLayout.module.css";
import { Link } from "react-router-dom";
import Image from "../components/Image";

import favIcon from "../assets/favIcon.svg";

import resumeWizardLogo from "../assets/resumeWizardLogo.svg";

import linkEducation from "../assets/linkEducation.svg";
import linkOtherStuff from "../assets/linkOtherStuff.svg";
import linkPersonalDetails from "../assets/linkPersonalDetails.svg";
// import linkPreview from "../assets/linkPreview.svg";
import linkResumeControls from "../assets/linkResumeControls.svg";
import linkSkillSets from "../assets/linkSkillSets.svg";
import linkWorkExperience from "../assets/linkWorkExperience.svg";

export default function HomeLayout() {
  return (
    <>
      <header>
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
      </header>
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

        <div className={styles.homeLinkContainer}>
          <Link to="/personal-details" className="page-link">
            <Image
              src={linkPersonalDetails}
              alt="Link to Personal Details page"
              className="img-link"
            />
          </Link>
          <Link to="/education" className="page-link">
            <Image
              src={linkEducation}
              alt="Link to Education page"
              className="img-link"
            />
          </Link>
          <Link to="/work-experience" className="page-link">
            <Image
              src={linkWorkExperience}
              alt="Link to Work Experience page"
              className="img-link"
            />
          </Link>
          <Link to="/skill-sets" className="page-link">
            <Image
              src={linkSkillSets}
              alt="Link to Skill Sets page"
              className="img-link"
            />
          </Link>
          <Link to="/other-stuff" className="page-link">
            <Image
              src={linkOtherStuff}
              alt="Link to the Other Stuff page"
              className="img-link"
            />
          </Link>
          <Link to="/resume-controls" className="page-link">
            <Image
              src={linkResumeControls}
              alt="Link to the Resume Controls page"
              className="img-link"
            />
          </Link>
          {/* <Link to="/education" className="page-link">
            <Image src={linkPreview} alt="Link to education page" />
          </Link> */}
        </div>
      </main>
      <footer>A Mad Muffin Man Design © 2025</footer>
    </>
  );
}
