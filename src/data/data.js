import { nanoid } from "nanoid";

export const initialFormData = {
  personal: {
    fullName: "HAROLD JAMES POTTER",
    email: "h.potter@ministryofmagic.gov.uk",
    phone: "01632 960974",
    address: "14 Primrose Lane, Penhaligon, Cornwall, TR27 5BZ",
    website: "",
  },
  education: [
    {
      id: nanoid(),
      school: "Hogwarts School of Witchcraft & Wizardry",
      location: "Hogwarts Castle, Scottish Highlands, UK",
      degree: "N.E.W.T.s Certified",
      year: "1991-1997",
    },
    {
      id: nanoid(),
      school: "College of Wizardry at Durham",
      location: "Durham, England",
      degree: "Master of Spellcraft & Enchantments (MSE)",
      year: "1998-2000",
    },
  ],
  work: [
    {
      id: nanoid(),
      employer: "Ministry of Magic",
      location: "Whitehall Below, Central London, UK",
      position: "Auror (Auror Office)",
      years: "2001-2018",
      tasks: [
        {
          id: nanoid(),
          item: "Investigated and apprehended Dark wizards and witches. ",
        },
        {
          id: nanoid(),
          item: "Enforced magical law and protected the wizarding community from threats.",
        },
        {
          id: nanoid(),
          item: "Developed and utilized advanced defensive magic skills to counter Dark Arts.",
        },
      ],
    },
    {
      id: nanoid(),
      employer: "Ministry of Magic",
      location: "Whitehall Below, Central London, UK",
      position: "Head Auror (Auror Office)",
      years: "2019-Present",
      tasks: [
        {
          id: nanoid(),
          item: "Led the Auror Office overseeing operations, investigations, and personnel in the Department of Magical Law Enforcement, focusing on combating Dark magic",
        },
        {
          id: nanoid(),
          item: "Directed high-profile investigations involving Dark wizards and magical threats, utilizing advanced magical skills and strategic planning to apprehend dangerous criminals.",
        },
        {
          id: nanoid(),
          item: "Developed and implemented strategies to enhance magical law enforcement, ensuring the safety of the wizarding community through proactive measures against Dark magic and artifacts.",
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
        "Supporting Vulnerable Magical Children: Providing resources, support, and safe havens for children.",
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
