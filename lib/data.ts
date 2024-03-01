import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoskola from "@/public/autoskola.png";
import breadit from "@/public/breadit.png";
import noteit from "@/public/noteit.png";
import simulator from "@/public/simulator.png";
import digishark from "@/public/digishark.PNG";

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
		description:
			"Momentálně studuji Informatiku na bakalářském stupni na VŠB - Technické univerzitě v Ostravě.",
		icon: React.createElement(FaUniversity),
		date: "2022 - současnost",
	},
	{
		title: "Junior Software Developer",
		location: "Bystřice, CZ",
		company: "PICKERING Interfaces",
		description:
			"Momentálně jsem zaměstnaný jako Junior Software Developer. Zde jsem předesignoval a vytvořil nový software pro ovládání LXI simulátoru v jazyce Golang.",
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
		projectUrl: "https://digishark.up.railway.app/",
	},
] as const;

export const projectsDataCz = [
	{
		title: "Autoškola Poppková",
		description:
			"Vytvořil jsem tento začátečnický projekt jako svou dlouhodobou maturitní práci na střední škole pouze s základními znalostmi web developmentu, a to začalo moji vášeň pro tuto oblast.",
		tags: ["HTML", "CSS", "PHP", "MySQL", "UI/UX"],
		imageUrl: autoskola,
		projectUrl: "https://www.autoskolapoppkova.cz",
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
		projectUrl: "https://digishark.up.railway.app/",
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
