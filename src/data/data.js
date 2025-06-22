import { nanoid } from "nanoid";

export const sectionHeaderText = {
  personal: "personal details",
  education: "education",
  work: "employment",
  miscellaneous: "miscellaneous",
  download: "review & download",
};

export const initialFormData = {
  sectionsOrder: ["education", "work", "miscellaneous"],
  personal: {
    fullName: "HAROLD JAMES POTTER",
    email: "h.potter@potterco.com",
    phone: "01632 960974",
    address: "14 Primrose Lane, Penhaligon, Cornwall, TR27 5BZ",
    website: "",
  },
  education: [
    {
      id: nanoid(),
      school: "Hogwarts School of Witchcraft & Wizardry",
      location: "Hogwarts Castle, Scottish Highlands",
      degree: "N.E.W.T.s Certified",
      years: "1991-1997",
    },
    {
      id: nanoid(),
      school: "College of Wizardry at Durham",
      location: "Durham, England",
      degree: "Master of Spellcraft & Enchantments (MSE)",
      years: "1998-2000",
    },
  ],
  work: [
    {
      id: nanoid(),
      employer: "Ministry of Magic, Auror Office",
      location: "Whitehall Below, Central London",
      position:
        "Head Auror (2019-2021); Auror, Sr Grade (2010-2018); Auror, Jr Grade (2001-2009)",
      years: "2001-2021",
      tasks: [
        {
          id: nanoid(),
          item: "Enforced magical law and protected the wizarding community from threats via the investigation and apprehension of dark wizards and witches.",
        },
        {
          id: nanoid(),
          item: "Oversaw operations, investigations, and personnel in the Department of Magical Law Enforcement.",
        },
        {
          id: nanoid(),
          item: "Personally directed high-profile investigations involving dark wizards and magical threats, utilizing advanced magical skills and strategic planning to apprehend dangerous criminals.",
        },
        {
          id: nanoid(),
          item: "Developed and implemented strategies to enhance magical law enforcement, ensuring the safety of the wizarding community through proactive measures against dark magic and artifacts.",
        },
      ],
    },
    {
      id: nanoid(),
      employer: "Potter & Company, Auror Solutions & Magical Security",
      location: "Penhaligon, Cornwall",
      position: "Owner & Managing Director",
      years: "2021-Present",
      tasks: [
        {
          id: nanoid(),
          item: "Designed and installed magically-enhanced locks, alarm systems, and protective wards for homes and businesses.",
        },
        {
          id: nanoid(),
          item: "Offered expert advice and strategies on protection against Dark Arts threats, including identifying and neutralizing curses or jinxes.",
        },
        {
          id: nanoid(),
          item: "Collaborated with the Ministry of Magic to develop and supply advanced magical countermeasures for Aurors.",
        },
        {
          id: nanoid(),
          item: "Created bespoke amulets designed to enhance individual safety and awareness in dangerous situations.",
        },
        {
          id: nanoid(),
          item: "Provided comprehensive assessments of existing security measures and recommended improvements to mitigate magical and non-magical threats.",
        },
      ],
    },
  ],
  miscellaneous: [
    {
      id: nanoid(),
      section: "PROJECTS",
      title: "The Lumos Legacy Project",
      description:
        "Provided resources, support, and safe havens for vulnerable, magical children of Muggle heritage.",
    },
    {
      id: nanoid(),
      section: "SKILLS",
      title: "Expert Level Spells",
      description:
        "Expecto Patronum (stag), Expelliarmus, Appare Vestigium, Stupefy, Finite Incantatem.",
    },
    {
      id: nanoid(),
      section: "REFERENCES",
      title: "",
      description: "Available upon request.",
    },
  ],
};
