import linkEducation from "../assets/linkEducation.svg";
import linkHome from "../assets/linkHome.svg";
import linkOtherStuff from "../assets/linkOtherStuff.svg";
import linkPersonalDetails from "../assets/linkPersonalDetails.svg";
import linkResumeControls from "../assets/linkResumeControls.svg";
import linkSkillSets from "../assets/linkSkillSets.svg";
import linkWorkExperience from "../assets/linkWorkExperience.svg";


// Set it up so that each page lacks the link for that page.

export const navLinks = [
  {
    to: "/",
    key: "home",
  },
  {
    to: "/personal-details",
    key: "personalDetails",
  },
  {
    to: "/education",
    key: "education",
  },
  {
    to: "/work-experience",
    key: "workExperience",
  },
  {
    to: "/skill-sets",
    key: "skillSets",
  },
  {
    to: "/other-stuff",
    key: "otherStuff",
  },
  {
    to: "/resume-controls",
    key: "resumeControls",
  },
];

export const linkAssets = {
  home: {
    src: linkHome,
    alt: "Link to Home page",
  },
  personalDetails: {
    src: linkPersonalDetails,
    alt: "Link to Personal Details page",
  },
  education: {
    src: linkEducation,
    alt: "Link to Education page",
  },
  workExperience: {
    src: linkWorkExperience,
    alt: "Link to Work Experience page",
  },
  skillSets: {
    src: linkSkillSets,
    alt: "Link to Skill Sets page",
  },
  otherStuff: {
    src: linkOtherStuff,
    alt: "Link to the Other Stuff page",
  },
  resumeControls: {
    src: linkResumeControls,
    alt: "Link to the Resume Controls page",
  },
};
