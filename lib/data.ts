import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoskola from "@/public/autoskola.png";
import breadit from "@/public/breadit.png";
import noteit from "@/public/noteit.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated high-school",
    location: "Frýdek-Místek, CZ",
    company: "POJFM",
    description:
      "I graduated after 4 of studying IT study programme. I finished my high-school studies with a maturita exam with honours.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Help Junior Programmer",
    location: "Třinec, CZ",
    company: "EXPANDO",
    description:
      "After graduation I worked half a year at a part time job as help junnior programmer specified on ecommerce and eshops development in PHP Zend framework.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "University Studies",
    location: "Ostrava, CZ",
    company: "VŠB-TUO",
    description:
      "I am currently stuyding Computer science for bachelors degree at VSB - Technical university of Ostrava.",
    icon: React.createElement(FaUniversity),
    date: "2022 - present",
  },
  {
    title: "Junior Software Developer",
    location: "Bystřice, CZ",
    company: "PICKERING Interfaces",
    description:
      "I am currently employed as Junior Software Developer. I redesigned and created new software for controlling LXI simulator in Golang.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Poppková Driving school",
    description:
      "I created this begginer project as my long term graduation thesis on high school with only basic knowledge of web-development, and that started my passion for this field.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "UI/UX"],
    imageUrl: autoskola,
    projectUrl: "https://www.autoskolapoppkova.cz",
  },
  {
    title: "NoteIt",
    description:
      "NoteIt is a Next.js application that provides a user-friendly platform for taking, organizing, and sharing notes. Inspired by Notion.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Zustand",
      "LucideReact",
      "ShadCn-UI",
      "EdgeStore",
      "Clerk Auth",
      "Convex DB",
    ],
    imageUrl: noteit,
    projectUrl: "https://nextjs-noteit.vercel.app",
  },
  {
    title: "Breadit",
    description:
      "Breadit is fully functional web application replicating the features and functionalities of the popular Reddit platform.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "ShadCn-UI",
      "Tailwind",
      "LucideReact",
      "Prisma",
      "Redis",
      "Zod",
      "MySQL",
      "Uploadthing",
      "NextAuth",
    ],
    imageUrl: breadit,
    projectUrl: "https://nextjs-breadit.vercel.app",
  },
] as const;

export const skillsData = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "Git",
  "TailwindCSS",
  "Figma",
  "UI/UX design",
  "ShadCn-UI",
  "Framer Motion",
  "tRPC",
  "Zustand",
  "Payload CMS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "C",
  "C#",
  "Go",
] as const;
