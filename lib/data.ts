import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux(RTK)",
  "Framer Motion",
  "Webpack", 
  "Socket.io",
  
] as const;

export const educationData = [
    {
      title: "Zaporizhzhya Aviation College Named After A. G. Ivchenko",
      location: "Ukraine, Zaporizhzhia",
      description:
        "Computer Science",
      icon: React.createElement(LuGraduationCap),
      date: "2017 - 2021",
    },
    {
        title: "National University “Zaporizka Polytechnics”",
        location: "Ukraine, Zaporizhzhia",
        description:
            "Computer Science",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2024",
      },
    {
      title: "Udemi Courses Web develper",
      location: " ",
      description:
        "In this course I learned the basics of HTML, CSS/SCSS, JS",
      icon: React.createElement(FaReact),
      date: "2022",
    },
    {
        title: "Udemi Courses React + Redux",
        location: " ",
        description:
          "In this course I learned the basics of React, including class components, and learned to use Redux/RTK/RTKQuery",
        icon: React.createElement(FaReact),
        date: "2022",
      },
  ] as const;