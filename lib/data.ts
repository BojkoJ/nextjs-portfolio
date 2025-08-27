import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoskola from "@/public/autoskola.png";
import breadit from "@/public/breadit.png";
import noteit from "@/public/noteit.png";
import simulator from "@/public/simulator.png";
import martazahrada from "@/public/martazahrada.png";
import digishark from "@/public/shark.png";
import effortly from "@/public/effortly.png";
import nxsx from "@/public/nxsx.png"
import autoskola2 from "@/public/poppkova2.png";
import drive from "@/public/drive.png";

export const links = [
    {
        name: "Home",
        desc: "Home",
        hash: "#home",
    },
    {
        name: "About",
        desc: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        desc: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        desc: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        desc: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        desc: "Contact",
        hash: "#contact",
    },
] as const;

export const linksCz = [
    {
        name: "Home",
        desc: "Domů",
        hash: "#home",
    },
    {
        name: "About",
        desc: "O mně",
        hash: "#about",
    },
    {
        name: "Projects",
        desc: "Projekty",
        hash: "#projects",
    },
    {
        name: "Skills",
        desc: "Dovednosti",
        hash: "#skills",
    },
    {
        name: "Experience",
        desc: "Zkušenosti",
        hash: "#experience",
    },
    {
        name: "Contact",
        desc: "Kontakt",
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
        description: "I have completed 3 years of studies in Computer Science at VŠB-TUO. I finished my bachelor's degree in 2025.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2025",
    },
    {
        title: "Junior Software Developer",
        location: "Bystřice, CZ",
        company: "PICKERING Interfaces",
        description:
            "I am currently employed as Junior Software Developer. Here I work mostly with Go, Python, JavaScript, React and do UI/UX.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - present",
    },
] as const;

export const experiencesDataCz = [
    {
        title: "Maturita",
        location: "Frýdek-Místek, CZ",
        company: "POJFM",
        description:
            "Absolvoval jsem 4 roky studia oboru IT na střední škole. Dokončil jsem svoje středoškolské studium maturitní zkouškou s vyznamenáním.",
        icon: React.createElement(LuGraduationCap),
        date: "2018 - 2022",
    },
    {
        title: "Help Junior Programátor",
        location: "Třinec, CZ",
        company: "EXPANDO",
        description:
            "Po maturitě jsem pracoval půl roku na částečný úvazek jako pomocný/junior programátor zaměřený na vývoj e-commerce a e-shopů v PHP Zend frameworku.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Vysokoškolská Studia",
        location: "Ostrava, CZ",
        company: "VŠB-TUO",
        description: "Absolvoval jsem 3 roky studia oboru Informatika na VŠB-TUO. Dokončil jsem bakalářské studium v roce 2025.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2025",
    },
    {
        title: "Junior Software Developer",
        location: "Bystřice, CZ",
        company: "PICKERING Interfaces",
        description:
            "Momentálně jsem zaměstnaný jako Junior Software Developer. Zde pracuji převážně s Go, Pythonem, JavaScriptem, Reactem a dělám UI/UX design.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - současnost",
    },
] as const;

export const projectsData = [
    {
        title: "Poppková Driving school",
        description:
            "I created this begginer project as my long term graduation thesis on high school with only basic knowledge of web-development, and that started my passion for this field.",
        tags: ["HTML", "CSS", "PHP", "MySQL", "UI/UX"],
        imageUrl: autoskola,
        projectUrl: "https://github.com/BojkoJ/fullstack-driving-school",
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
            "Breadit is fully functional Next.js web application replicating the features and functionalities of the popular Reddit platform.",
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
    {
        title: "LXI Simulator",
        description:
            "New, redesigned LXI simulator for Pickering Interfaces written in Golang, Gin instead of the old version in Perl, providing users more friendly and modern interface and better code structure.",
        tags: ["HTML", "CSS", "JavaScript", "Go", "Gin", "UI/UX", "Figma"],
        imageUrl: simulator,
        projectUrl:
            "https://www.pickeringtest.com/en-us/product/60-901-001-lxi-simulation-tool",
    },
    {
        title: "DigiShark",
        description:
            "DigiShark is a czech e-commerce platform for selling quality digital products like Icon sets and UI Kits. It is a full-stack application build in Next.js and TypeScript.",
        tags: [
            "React",
            "Next.js",
            "TypeScript",
            "ShadCn-UI",
            "tRPC",
            "Tailwind",
            "LucideReact",
            "PayloadCMS",
            "Zod",
            "MongoDB",
            "Stripe",
            "Zustand",
        ],
        imageUrl: digishark,
        projectUrl: "https://nextjs-digishark-production.up.railway.app",
    },
    {
        title: "Martazahrada",
        description:
            "Martazahrada is a freelance e-commerce project (currently under construction), where I completely designed UI/UX, built frontend, backend and CMS. I used a modern, cutting-edge tech-stack.",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "PayloadCMS",
            "tRPC",
            "Zustand",
            "Figma",
            "UI/UX",
            "PostgreSQL",
        ],
        imageUrl: martazahrada,
        projectUrl: "https://www.martazahrada.cz",
    },
    {
        title: "Effortly",
        description:
            "Effortly is a fullstack Next.js 14 app recreating the functionalities of Trello. Key featuers are organizations, drag&drop kanban boards, subscriptions and activity log.",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "ShadCn-UI",
            "Server Actions",
            "Zustand",
            "TailwindCSS",
            "Prisma",
            "Clerk Auth",
            "PostgreSQL",
        ],
        imageUrl: effortly,
        projectUrl: "https://effortly.vercel.app",
    },
    {
        title: "Nxsxnity",
        description:
            "Nxsxnity is a fullstack e-commerce platform with CMS as one of my freelance projects. Key features are CMS, product, variants and eshop content management, custom UI, stripe, packeta, and more.",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "ShadCn-UI",
            "Server Actions",
            "Zustand",
            "TailwindCSS",
            "PayloadCMS",
            "PostgreSQL",
        ],
        imageUrl: nxsx,
        projectUrl: "https://nxsx.store",
    },
    {
        title: "Bojko Drive",
        description:
            "Fullstack web application working as cloud storage written in Next.js & TypeScript. Main features include auth, files upload, folder creating/renaming, analytics with Posthog and more..",
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "Clerk Auth",
            "Server Actions",
            "ShadCn-UI",
            "TailwindCSS",
            "MySQL",
        ],
        imageUrl: drive,
        projectUrl: "https://bojko-drive.netlify.app",
    },
    {
        title: "Poppková Driving school v2.0",
        description:
            "This is a new version of website that was my first project. It consist of CMS used to control prices of courses, reviews etc. Main goal was new UI and new CMS that would let the owner control her website.",
        tags: [
            "React",
            "TypeScript",
            "ShadCn-UI",
            "PHP",
            "TailwindCSS",
            "MySQL",
        ],
        imageUrl: autoskola2,
        projectUrl: "https://autoskolapoppkova.cz",
    },
] as const;

export const projectsDataCz = [
    {
        title: "Autoškola Poppková",
        description:
            "Vytvořil jsem tento začátečnický projekt jako svou dlouhodobou maturitní práci na střední škole pouze s základními znalostmi web developmentu, a to začalo moji vášeň pro tuto oblast.",
        tags: ["HTML", "CSS", "PHP", "MySQL", "UI/UX"],
        imageUrl: autoskola,
        projectUrl: "https://github.com/BojkoJ/fullstack-driving-school",
    },
    {
        title: "NoteIt",
        description:
            "NoteIt je aplikace psaná v Next.js, která poskytuje platformu pro pořizování, organizaci a sdílení poznámek. Inspirováno platformou Notion.",
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
            "Breadit je plně funkční Next.js webová aplikace replikující funkce a možnosti populární platformy Reddit.",
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
    {
        title: "LXI Simulator",
        description:
            "Nový, přepracovaný LXI simulátor pro Pickering Interfaces napsaný v jazyce Golang, Gin namísto staré verze v Perlu, který uživatelům poskytuje přívětivější a modernější rozhraní a lepší strukturu kódu.",
        tags: ["HTML", "CSS", "JavaScript", "Go", "Gin", "UI/UX", "Figma"],
        imageUrl: simulator,
        projectUrl:
            "https://www.pickeringtest.com/en-us/product/60-901-001-lxi-simulation-tool",
    },
    {
        title: "DigiShark",
        description:
            "DigiShark je platforma pro prodej digitálních produktů, jako jsou Sady ikon a UI Kity. Je to full-stack webová aplikace vybudovaná s Next.js pomocí TypeScriptu.",
        tags: [
            "React",
            "Next.js",
            "TypeScript",
            "ShadCn-UI",
            "tRPC",
            "Tailwind",
            "LucideReact",
            "PayloadCMS",
            "Zod",
            "MongoDB",
            "Stripe",
            "Zustand",
        ],
        imageUrl: digishark,
        projectUrl: "https://nextjs-digishark-production.up.railway.app",
    },
    {
        title: "Martazahrada",
        description:
            "Martazahrada je freelance e-commerce projekt (aktuálně ve výstavbě), kde jsem kompletně navrhnul UI/UX, vybudoval frontend, backend, tak i CMS. Využil jsem moderní, cutting-edge tech-stack. ",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "PayloadCMS",
            "tRPC",
            "Zustand",
            "Figma",
            "UI/UX",
            "PostgreSQL",
        ],
        imageUrl: martazahrada,
        projectUrl: "https://www.martazahrada.cz",
    },
    {
        title: "Effortly",
        description:
            "Effortly je fullstack aplikace psaná v Next.js 14, která přetváří funkce aplikace Trello. Klíčovými funkcemi jsou organizace, drag&drop kanban tabule, odběry, aktivitní log a další.",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "ShadCn-UI",
            "Server Actions",
            "Zustand",
            "TailwindCSS",
            "Prisma",
            "Clerk Auth",
            "PostgreSQL",
        ],
        imageUrl: effortly,
        projectUrl: "https://effortly.vercel.app",
    },
    {
        title: "Nxsxnity",
        description:
            "Nxsxnity je fullstack e-commerce platforma s CMS jako jeden z mých freelance projektů. Klíčové funkce jsou CMS, správa produktů, variant a obsahu e-shopu, vlastní UI, stripe, zásilkovna a další.",
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "ShadCn-UI",
            "Server Actions",
            "Zustand",
            "TailwindCSS",
            "PayloadCMS",
            "PostgreSQL",
        ],
        imageUrl: nxsx,
        projectUrl: "https://nxsx.store",
    },
    {
        title: "Bojko Drive",
        description:
            "Fullstack webová aplikace fungující jako cloudové úložiště psaná v Next.js & TypeScriptu. Hlavní funkce zahrnují autentizaci, nahrávání souborů, vytváření/přejmenovávání složek, analytiku s Posthog a další..",
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "Clerk Auth",
            "Server Actions",
            "ShadCn-UI",
            "TailwindCSS",
            "MySQL",
        ],
        imageUrl: drive,
        projectUrl: "https://bojko-drive.netlify.app",
    },
    {
        title: "Autoškola Poppková 2.0",
        description:
            "Toto je nová verze webových stránek, které byly mým prvním projektem. Skládá se z CMS, které se používá ke kontrole cen kurzů, recenzí atd. Hlavním cílem bylo nové UI a CMS, které by majitelce umožnilo ovládat obsah její webové stránky.",
        tags: [
            "React",
            "TypeScript",
            "ShadCn-UI",
            "PHP",
            "TailwindCSS",
            "MySQL",
        ],
        imageUrl: autoskola2,
        projectUrl: "https://autoskolapoppkova.cz",
    },
] as const;

export const skillsData = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Go",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Git",
    "Figma",
    "UI/UX design",
    "Framer Motion",
    "tRPC",
    "Zustand",
    "Payload CMS",
    "Prisma",
    "Drizzle",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "C#/.Net",
    "Python",
] as const;
