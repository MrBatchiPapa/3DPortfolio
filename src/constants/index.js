import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  java,
  firebase,
  cs,
  python,
  sandfield,
  oppo,
  mytuition,
  devs,
  omato,
  quickDraw,
  scheduler,
  ai,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Testing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: ".NET",
    icon: cs,
  },
  {
    name: "FireBase",
    icon: firebase,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Sandfield",
    icon: sandfield,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "AI project to automate message standard mappings, dataset generation in C# and EFcore, trained OpenAI Base model",
      "Worked on tickets, including debugging and development in C#, VB and JS as well as creating and modifying stored procedures",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Wrote many SQL queries to manipulate database as well as automate tasks",
    ],
  },
  {
    title: "Software Tester",
    company_name: "OPPO",
    icon: oppo,
    iconBg: "#E6DEDD",
    date: "November 2022 - Feb 2023",
    points: [
      "Use VPN to download unreleased android software directly from head office in China to test on a variety of OPPO phones",
      "Ran automation python test scripts, log readers and manual cases to test capability of software on OPPO phones",
      "Wrote simple test and automation scripts in Android Debugging Bridge",
    ],
  },
  {
    title: "Private Tutor",
    company_name: "MyTuition",
    icon: mytuition,
    iconBg: "#383E56",
    date: "Oct 2021 - Oct 2022",
    points: [
      "Tutored students on maths and physics from years ranging from intermediate to high school level",
      "Tested students using personalized diagnostic tests, where weak areas were supported.",
      "Planned lessons for allotted time to strengthen weak subjects and build skills.",
      "Weekly to bi-weekly lessons to help students prepare for their tests",
    ],
  },
  {
    title: "DEVS Education Exec",
    company_name: "Developers Society UOA",
    icon: devs,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Education team focuses on guiding fellow students and members on their journeys towards a successful career",
      "Many events such as industry nights and CV workshops etc to create content around applying for job opportunities",
    ],
  },
];

const projects = [
  {
    name: "AI Automated Message Mapping",
    description:
      "AI project to automate message standard mappings, dataset generation from pulling from SQL server written in C# and EFCore then trained OpenAI Base model using pulled data. Integrated into Crossfire",
    tags: [
      {
        name: ".NET8",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quick Draw",
    description:
      "Family friendly drawing game based off of Google's Quick draw. Designed to stir up the artistic skills of teenagers as well as keep them entertained through a variety of unique gamemodes including Standard, Blitz, Zen and Hidden mode. Coded in Java and styled using CSS",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: quickDraw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Android Tech shopping app",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "FireBase",
        color: "pink-text-gradient",
      },
    ],
    image: omato,
    source_code_link: "https://github.com/UOASOFTENG306/project-1-team-9",
  },
  {
    name: "Multi Threading Scheduler",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX Scenebuilder",
        color: "pink-text-gradient",
      },
    ],
    image: scheduler,
    source_code_link:
      "https://github.com/UOASOFTENG306/project-2-project-2-team-6",
  },
];

export { services, technologies, experiences, projects };
