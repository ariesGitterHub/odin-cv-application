import linkEducation from "../assets/linkEducation.svg";
import linkHome from "../assets/linkHome.svg";
import linkOtherStuff from "../assets/linkOtherStuff.svg";
import linkPersonalDetails from "../assets/linkPersonalDetails.svg";
import linkResumeControls from "../assets/linkResumeControls.svg";
import linkSkillSets from "../assets/linkSkillSets.svg";
import linkWorkExperience from "../assets/linkWorkExperience.svg";


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

export const headerMessage = {
  home: {
    message: "Build your own resumé from scratch"
  },
  personalDetails: {
    message: "Two"
  },
  education: {
    message: "Three"
  },
  workExperience: {
    message: "Four"
  },
  skillSets: {
    message: "Five"
  },
  otherStuff: {
    message: "Six"
  },
  resumeControls: {
    message: "Seven"
  },
};

export const linkAssets = {
  home: {
    src: linkHome,
    alt: "Link to Home page",
    text: "Home",
  },
  personalDetails: {
    src: linkPersonalDetails,
    alt: "Text on image reads: Personal Details",
    text: "Personal Details",
  },
  education: {
    src: linkEducation,
    alt: "Text on image reads: Education",
    text: "Education",
  },
  workExperience: {
    src: linkWorkExperience,
    alt: "Text on image reads: Work Experience",
    text: "Work Experience",
  },
  skillSets: {
    src: linkSkillSets,
    alt: "Text on image reads: Skill Sets",
    text: "Skill Sets",
  },
  otherStuff: {
    src: linkOtherStuff,
    alt: "Text on image reads: Other Stuff",
    text: "Other Stuff",
  },
  resumeControls: {
    src: linkResumeControls,
    alt: "Text on image reads: Resume Controls",
    text: "Resumé Controls",
  },
};
