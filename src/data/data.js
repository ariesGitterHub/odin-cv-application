export const initialFormData = {
  personal: {
    fullName: "Han Solo",
    email: "nerferder@sw.net",
    phone: "(555) 555-5555",
    address: "13 Falcon Way, Corellia City, COR",
    website: "12parsecs.com",
  },
  education: [
    {
      school: "Corellia Technical",
      location: "Corellia City, COR",
      degree: "BS, Hyperspace Engineering",
      year: "2008-2012",
    },
    {
      school: "Tattooine Beauty & Makeup",
      location: "Mos Espa, TAT",
      degree: "Certification, Jawa-grooming",
      year: "2024-2026",
    },
  ],
  work: [
    {
      employer: "Kansk Imperial Shipyards",
      location: "Skyview-Upper, HOM",
      position: "Life-support Engineer",
      years: "2015-2025",
      tasks: [
        { item: "Rebuilt custom life-support arrays" },
        { item: "Prototyped sequential fail-safes" },
        { item: "Tested third-party assemblies" },
      ],
      // tasks: [
      //   "Rebuilt custom life-support arrays",
      //   "Prototyped sequential fail-safes",
      //   "Tested third-party assemblies",
      // ],
    },
  ],
  projects: [
    {
      project: "Tactical Hyperdrive System",
      description: "Functional escape coordinate re-allocator. ",
    },
  ],
  skills: {
    description: "JavaScript, HTML, CSS, Webpack, React, Node.js",
  },
};
