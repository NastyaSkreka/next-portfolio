import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thor from "@/public/thor.png"
import due from "@/public/due.png"
import store from "@/public/store.png"

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

  export const projectsData = [
    {
      title: "God of war",
      link: "https://ragnar-k.vercel.app/", 
      description:
        "A website for the premiere of a video game, animation done in pure JS, full responsive.",
      tags: ["Webpack", "Html", "Scss", "JavaScript"],
      imageUrl: thor,
    },
    {
      title: "Due",
      link: "https://due-mu.vercel.app/", 
      description:
        "Multi-page website using react, styled using tailwind and framer-motion animation",
      tags: ["React", "Framer", "Tailwind"],
      imageUrl: due,
     
    },
    {
      title: "Stuff",
      link: "https://store-seven-mu.vercel.app/", 
      description:
        "Store with filtering and pagination, you can also select a product, its size and place it in the cart, small registration with the ability to edit user data",
      tags: ["React", "RTK","RTKQuery", "Styles modules", "Thunk-redux"],
      imageUrl: store,
     
    },
] as const;