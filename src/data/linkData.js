import linkEducation from "../assets/linkEducation.svg";
import linkHome from "../assets/linkHome.svg";
import linkOther from "../assets/linkOther.svg";
import linkPersonalDetails from "../assets/linkPersonalDetails.svg";
import linkReview from "../assets/linkReview.svg";
import linkSkills from "../assets/linkSkills.svg";
import linkWork from "../assets/linkWork.svg";


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
    to: "/work",
    key: "work",
  },
  {
    to: "/education",
    key: "education",
  },
  {
    to: "/skills",
    key: "skills",
  },
  {
    to: "/other",
    key: "other",
  },
  {
    to: "/review",
    key: "review",
  },
];

export const headerMessage = {
  home: {
    message: "Build your own resumé from scratch",
  },
  personalDetails: {
    message: "Add your basic personal information",
  },
  work: {
    message: "Provide your current and prior employers",
  },
  education: {
    message: "Input your educational background",
  },
  skills: {
    message: "Add relevant skills and abilities",
  },
  other: {
    message: "References, awards, and other optional information",
  },
  review: {
    message: "Review data, change layout, and more",
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
  work: {
    src: linkWork,
    alt: "Text on image reads: Work",
    text: "Work",
  },
  education: {
    src: linkEducation,
    alt: "Text on image reads: Education",
    text: "Education",
  },
  skills: {
    src: linkSkills,
    alt: "Text on image reads: Skills",
    text: "Skills",
  },
  other: {
    src: linkOther,
    alt: "Text on image reads: Other",
    text: "Other",
  },
  review: {
    src: linkReview,
    alt: "Text on image reads: Review",
    text: "Review",
  },
};
