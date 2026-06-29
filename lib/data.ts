// Data layer. Bilingual (EN / CZ). Ported 1:1 from the Claude Design "Portfolio
// website" project. Em-dashes deliberately purged from user-facing strings.

export type Lang = "english" | "czech";

// --------------------------------------------------------------------
// Navigation
// --------------------------------------------------------------------
export type NavLink = { name: string; hash: string; desc: string };

export const LINKS: Record<Lang, NavLink[]> = {
  english: [
    { name: "Home", hash: "#home", desc: "Home" },
    { name: "About", hash: "#about", desc: "About" },
    { name: "Projects", hash: "#projects", desc: "Work" },
    { name: "Experience", hash: "#experience", desc: "Experience" },
    { name: "Skills", hash: "#skills", desc: "Stack" },
    { name: "Testimonials", hash: "#testimonials", desc: "Clients" },
    { name: "Certificates", hash: "#certificates", desc: "Certs" },
    { name: "Contact", hash: "#contact", desc: "Contact" },
  ],
  czech: [
    { name: "Home", hash: "#home", desc: "Úvod" },
    { name: "About", hash: "#about", desc: "O mně" },
    { name: "Projects", hash: "#projects", desc: "Práce" },
    { name: "Experience", hash: "#experience", desc: "Zkušenosti" },
    { name: "Skills", hash: "#skills", desc: "Stack" },
    { name: "Testimonials", hash: "#testimonials", desc: "Klienti" },
    { name: "Certificates", hash: "#certificates", desc: "Certifikáty" },
    { name: "Contact", hash: "#contact", desc: "Kontakt" },
  ],
};

export const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "testimonials",
  "certificates",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

// --------------------------------------------------------------------
// UI copy
// --------------------------------------------------------------------
export type HeroMeta = { label: string; value: string; sub: string };

export type Copy = {
  hero: {
    caption: string;
    yamlPath: string;
    yamlSchema: string;
    displayPre: string;
    displayKey: string;
    displayPost: string;
    lede1: string;
    ledeStrong: string;
    lede2: string;
    ledeStrong2: string;
    lede3: string;
    meta: HeroMeta[];
    cta: string;
    ctaAlt: string;
  };
  aboutTitle: string;
  aboutCopy: string[];
  projectsTitle: string;
  projectsAside: string;
  experienceTitle: string;
  experienceAside: string;
  skillsTitle: string;
  skillsAside: string;
  testimonialsTitle: string;
  testimonialsAside: string;
  certsTitle: string;
  certsAside: string;
  certView: string;
  certIssued: string;
  certOpen: string;
  certDownload: string;
  contactTitle: string;
  contactLede: string;
  contactLedeAccent: string;
  contactLedeSub: string;
  contactDirect: string;
  contactForm: {
    emailLabel: string;
    emailPh: string;
    messageLabel: string;
    messagePh: string;
    submit: string;
  };
  role: string;
  project: string;
  footerLine: string;
  btnLiveDemo: string;
  btnRepo: string;
  btnRepoLocked: string;
  btnRepoLockedTip: string;
  expTagWork: string;
  expTagEdu: string;
  // extra UI strings used inline by the design
  highlights: string;
  stackLabel: string;
  formSending: string;
  formSentMsg: string;
  formErrorMsg: string;
  cvChannel: string;
  archTopology: string;
  archObservability: string;
  archDelivery: string;
};

export const COPY: Record<Lang, Copy> = {
  english: {
    hero: {
      caption: "// Portfolio · v3.0 · Updated 2026",
      yamlPath: "~/jan-bojko/about.yaml",
      yamlSchema: "schema: profile/v3",
      displayPre: "Jan Bojko",
      displayKey: "cloud-native",
      displayPost: "full-stack developer",
      lede1: "I build web apps and the systems behind them. From",
      ledeStrong: "Next.js e-commerce or web-apps",
      lede2: "to",
      ledeStrong2: "Go microservices",
      lede3: "that run on Kubernetes, with the monitoring and CI/CD pipelines.",
      meta: [
        {
          label: "Current Role",
          value: "Junior SW Developer",
          sub: "PICKERING Interfaces",
        },
        {
          label: "Current Studies",
          value: "MSc Computer Science",
          sub: "VŠB-TUO · 2025-2027",
        },
        {
          label: "Open to",
          value: "Freelance",
          sub: "EU remote · Moravian-Silesian and Zlín Region",
        },
      ],
      cta: "Get in touch",
      ctaAlt: "Download résumé",
    },
    aboutTitle: "About",
    aboutCopy: [
      "Four years in, I've shipped a dozen production systems across e-commerce, internal tooling and dashboards. I started as a full-stack developer in **TypeScript, React, Next.js**; today I'm steering toward **cloud-native full-stack** development: distributed Go services, Kubernetes, GitOps and observability.",
      "What I enjoy about software engineering is problem-solving, or those moments when an architectural decision pays off months later. I value **clean architecture**, deliberately defined boundaries, and tools that make life easier for the next person working on the repository.",
    ],
    projectsTitle: "Selected work",
    projectsAside: "11 shipped · 1 in progress",
    experienceTitle: "Experience",
    experienceAside: "chronological",
    skillsTitle: "Stack",
    skillsAside: "tools I reach for",
    testimonialsTitle: "Clients",
    testimonialsAside: "freelance",
    certsTitle: "Certificates",
    certsAside: "Oracle · Cisco · ECDL",
    certView: "View certificate",
    certIssued: "Issued by",
    certOpen: "Open PDF",
    certDownload: "Download",
    contactTitle: "Contact",
    contactLede: "Right now I'm open to",
    contactLedeAccent: "freelance work.",
    contactLedeSub:
      "Mostly cloud-native and full-stack things (Next.js, TypeScript, Go, k8s). Don't hesitate to reach out here, via the contact form, if you're working on something, and we can work out a mutually beneficial collaboration.",
    contactDirect: "Or write directly at",
    contactForm: {
      emailLabel: "Your email",
      emailPh: "you@domain.com",
      messageLabel: "Message",
      messagePh: "What can I help with?",
      submit: "Send message",
    },
    role: "Client",
    project: "Project",
    footerLine:
      "© 2026 Jan Bojko. Built with React, Next.js, TypeScript, Tailwind & Framer Motion. Hosted on Vercel.",
    btnLiveDemo: "Live Demo",
    btnRepo: "GitHub Repo",
    btnRepoLocked: "GitHub Repo",
    btnRepoLockedTip: "Proprietary codebase",
    expTagWork: "work",
    expTagEdu: "education",
    highlights: "Highlights",
    stackLabel: "Stack",
    formSending: "Sending…",
    formSentMsg: "Message sent. Thanks!",
    formErrorMsg: "Something went wrong. Please try again.",
    cvChannel: "CV.pdf · download",
    archTopology: "// system topology",
    archObservability: "observability:",
    archDelivery: "delivery:",
  },
  czech: {
    hero: {
      caption: "// Portfolio · v3.0 · Aktualizováno 2026",
      yamlPath: "~/jan-bojko/about.yaml",
      yamlSchema: "schema: profile/v3",
      displayPre: "Jan Bojko",
      displayKey: "cloud-native",
      displayPost: "full-stack vývojář",
      lede1: "Stavím webové aplikace a systémy, co za nimi stojí. Od",
      ledeStrong: "Next.js e-commerce a webových aplikací",
      lede2: "až po",
      ledeStrong2: "Go mikroslužby",
      lede3: "co běží na Kubernetes, s monitoringem a CI/CD pipelinami.",
      meta: [
        {
          label: "Aktuální Role",
          value: "Junior SW Developer",
          sub: "PICKERING Interfaces",
        },
        {
          label: "Aktuální Studium",
          value: "Ing. Informatika",
          sub: "VŠB-TUO · 2025-2027",
        },
        {
          label: "Dostupný pro",
          value: "Freelance IČO",
          sub: "EU remote · Moravskoslezský a Zlínský kraj",
        },
      ],
      cta: "Kontaktujte mě",
      ctaAlt: "Stáhnout životopis",
    },
    aboutTitle: "O mně",
    aboutCopy: [
      "Po čtyřech letech ve full-stack vývoji mám za sebou desítku produkčních systémů: e-commerce, interní nástroje, dashboardy. Začínal jsem v **TypeScriptu, Reactu a Next.js**; dnes mířím směrem ke **cloud-native full-stack** vývoji: distribuované Go služby, Kubernetes, GitOps a observabilita.",
      "Na softwarovém inženýrství mě baví řešení problému, či ty chvíle kdy se architektonické rozhodnutí vyplatí o měsíce později. Záleží mi na **čisté architektuře**, vědomě nakreslených hranicích a nástrojích, které usnadní práci dalšímu člověku v repozitáři.",
    ],
    projectsTitle: "Vybraná práce",
    projectsAside: "11 dokončených · 1 v procesu",
    experienceTitle: "Zkušenosti",
    experienceAside: "chronologicky",
    skillsTitle: "Stack",
    skillsAside: "nástroje, ke kterým sahám",
    testimonialsTitle: "Klienti",
    testimonialsAside: "freelance",
    certsTitle: "Certifikáty",
    certsAside: "Oracle · Cisco · ECDL",
    certView: "Zobrazit certifikát",
    certIssued: "Vydal",
    certOpen: "Otevřít PDF",
    certDownload: "Stáhnout",
    contactTitle: "Kontakt",
    contactLede: "Aktuálně jsem otevřený",
    contactLedeAccent: "freelance spolupráci.",
    contactLedeSub:
      "Hlavně cloud-native a full-stack věci (Next.js, TypeScript, Go, k8s). Naváhejte mě kontaktovat zde, přes kontaktní formulář, pokud na něčem pracujete, a můžeme se domluvit na oboustranně lukrativní spolupráci.",
    contactDirect: "Nebo přímo na",
    contactForm: {
      emailLabel: "Váš email",
      emailPh: "vy@domena.cz",
      messageLabel: "Zpráva",
      messagePh: "S čím můžu pomoct?",
      submit: "Odeslat zprávu",
    },
    role: "Klient",
    project: "Projekt",
    footerLine:
      "© 2026 Jan Bojko. Postaveno v React, Next.js, TypeScript, Tailwind & Framer Motion. Hostováno na Vercelu.",
    btnLiveDemo: "Live Demo",
    btnRepo: "GitHub Repo",
    btnRepoLocked: "GitHub Repo",
    btnRepoLockedTip: "Proprietární codebase",
    expTagWork: "práce",
    expTagEdu: "studium",
    highlights: "Hlavní body",
    stackLabel: "Stack",
    formSending: "Odesílám…",
    formSentMsg: "Zpráva odeslána. Díky!",
    formErrorMsg: "Něco se pokazilo. Zkus to prosím znovu.",
    cvChannel: "CV.pdf · stáhnout",
    archTopology: "// topologie systému",
    archObservability: "observabilita:",
    archDelivery: "delivery:",
  },
};

// --------------------------------------------------------------------
// Projects.
// layout: "featured-arch" | "wide" | "wide-reverse" | "landscape" | "landscape-reverse"
// closedSource: true → GitHub button shown but disabled with tooltip
// --------------------------------------------------------------------
export type ProjectLayout =
  "featured-arch" | "wide" | "wide-reverse" | "landscape" | "landscape-reverse";

export type Project = {
  slug: string;
  featured?: boolean;
  title: string;
  year: string;
  type: string;
  kind: string;
  layout: ProjectLayout;
  description: string;
  bullets?: string[];
  tags: string[];
  image?: string;
  repoUrl?: string | null;
  demoUrl?: string | null;
  demoSoon?: boolean;
  demoNote?: string;
  closedSource?: boolean;
};

const PROJECTS_EN: Project[] = [
  {
    slug: "smart-tracking",
    featured: true,
    title: "Smart Tracking System",
    year: "2026",
    type: "Master's thesis",
    kind: "cloud-native · in progress",
    layout: "featured-arch",
    description:
      "Distributed cloud system simulating real-time telemetry from **50 cargo containers** sailing from Busan to Rotterdam. Five Go microservices, event-driven over NATS JetStream, CQRS, **clean architecture** in every service, full GitOps pipeline (Tekton, ArgoCD), and the complete LGTM observability stack: Loki, Grafana, Tempo, Prometheus. Provisioned end-to-end with Terraform on a local k3d cluster.",
    bullets: [
      "5 Go microservices · gRPC + NATS JetStream · event-driven",
      "k3s/k3d cluster · Terraform · Helm · ArgoCD · Tekton",
      "OpenTelemetry traces + Prometheus metrics + Loki logs",
      "72 unit tests · clean architecture · DI · CQRS",
    ],
    tags: [
      "Go",
      "Next.js",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "Terraform",
      "ArgoCD",
      "Tekton",
      "NATS",
      "gRPC",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "PostgreSQL",
      "Helm",
    ],
    repoUrl: "https://github.com/BojkoJ/go-nextjs-smart-tracking-system",
    demoUrl: null,
    demoSoon: true,
  },
  {
    slug: "martazahrada",
    title: "Martazahrada",
    year: "2025",
    type: "Freelance · e-commerce",
    kind: "production",
    layout: "wide",
    description:
      "Full-stack e-commerce platform for a Czech garden-supplies merchant. I owned **UX research, UI/UX design, frontend, backend and CMS** end-to-end. Modern, opinionated stack with a custom Payload CMS so the client can run the shop independently.",
    bullets: [
      "Designed in Figma · solo build · ~14k LOC",
      "Custom CMS with role-based content workflows",
      "Stripe + Packeta · multi-step checkout",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "PayloadCMS",
      "tRPC",
      "Zustand",
      "TailwindCSS",
      "PostgreSQL",
      "Figma",
    ],
    image: "/martazahrada.png",
    demoUrl: "https://www.martazahrada.cz",
    repoUrl: null,
    closedSource: true,
  },
  {
    slug: "nxsxnity",
    title: "Nxsxnity",
    year: "2024",
    type: "Freelance · e-commerce",
    kind: "production",
    layout: "wide-reverse",
    description:
      "Full-stack e-commerce store with a self-built CMS. Owner manages products, variants, content, orders and shipping in one place. **Stripe + Packeta** integration, custom UI system, server actions and a clean Postgres data model.",
    bullets: [
      "Self-built CMS · product & variant management",
      "Full control over store content via variated building blocks such as hero, photo blocks or content blocks",
      "A visual editor for easy management of e-commerce store content",
      "Stripe payments · Packeta shipping integration",
      "Custom design system · 100% Tailwind",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "PayloadCMS",
      "Server Actions",
      "Zustand",
      "TailwindCSS",
      "PostgreSQL",
      "Stripe",
    ],
    image: "/nxsx.png",
    demoUrl: "https://nxsx.store",
    repoUrl: null,
    closedSource: true,
  },
  {
    slug: "simulator",
    title: "LXI Simulator",
    year: "2024",
    type: "Pickering Interfaces",
    kind: "internal tool",
    layout: "landscape",
    description:
      "Greenfield rewrite of the legacy Perl-based LXI simulation tool into modern **Go (Gin) + vanilla JS**. New IA, redesigned UI in Figma, cleaner code structure, faster iteration cycle. Used internally by engineering for product development.",
    bullets: [
      "Project under a contract for work at Pickering Interfaces",
      "Migrated Perl to Go · ground-up rewrite",
      "Redesigned UI/UX in Figma",
    ],
    tags: ["Go", "Gin", "HTML", "CSS", "JavaScript", "Figma", "UI/UX"],
    image: "/simulator.png",
    demoUrl:
      "https://www.pickeringtest.com/en-us/product/60-901-001-lxi-simulation-tool",
    repoUrl: null,
    closedSource: true,
  },
  {
    slug: "digishark",
    title: "DigiShark",
    year: "2024",
    type: "Personal · marketplace",
    kind: "shipped",
    layout: "landscape-reverse",
    description:
      "Czech e-commerce platform for digital products: icon sets, UI kits, design assets. Full-stack Next.js with Payload CMS, Stripe payments, tRPC, and a Mongo data layer.",
    bullets: [
      "Marketplace pattern · digital downloads",
      "Stripe · payment & licensing flow",
      "Payload CMS · seller-facing dashboard",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "PayloadCMS",
      "tRPC",
      "TailwindCSS",
      "MongoDB",
      "Stripe",
      "Zustand",
    ],
    image: "/shark.png",
    demoUrl: null,
    repoUrl: "https://github.com/BojkoJ/nextjs-digishark",
    closedSource: false,
  },
  {
    slug: "effortly",
    title: "Effortly",
    year: "2024",
    type: "Personal · SaaS clone",
    kind: "shipped",
    layout: "wide",
    description:
      "Full-stack Trello-style kanban with **organizations, drag-and-drop boards, activity log and subscriptions**. Built on Next.js 14 server actions and Prisma with Clerk auth.",
    bullets: [
      "Multi-tenant orgs · role-based access",
      "Drag-and-drop kanban · activity log",
      "Stripe subscriptions · audit trail",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Server Actions",
      "Prisma",
      "Clerk Auth",
      "TailwindCSS",
      "PostgreSQL",
      "Stripe",
    ],
    image: "/effortly.png",
    demoUrl: "https://effortly.vercel.app",
    repoUrl: "https://github.com/BojkoJ/nextjs-effortly",
  },
  {
    slug: "noteit",
    title: "NoteIt",
    year: "2023",
    type: "Personal · Notion clone",
    kind: "shipped",
    layout: "landscape",
    description:
      "Notion-inspired note-taking app with hierarchical pages, rich-text blocks, file uploads and real-time persistence on Convex. Clerk auth.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Zustand",
      "Clerk Auth",
      "Convex DB",
      "EdgeStore",
    ],
    image: "/noteit.png",
    demoUrl: "https://nextjs-noteit.vercel.app",
    repoUrl: "https://github.com/BojkoJ/nextjs-noteit",
  },
  {
    slug: "breadit",
    title: "Breadit",
    year: "2023",
    type: "Personal · Reddit clone",
    kind: "shipped",
    layout: "landscape-reverse",
    description:
      "Reddit-style community app with subreddits, posts, threaded comments, votes, and infinite scrolling. Built fully on Next.js app router with Prisma, Redis caching and NextAuth.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Prisma",
      "Redis",
      "NextAuth",
      "TailwindCSS",
      "MySQL",
      "Zod",
      "Uploadthing",
    ],
    image: "/breadit.png",
    demoUrl: null,
    repoUrl: "https://github.com/BojkoJ/nextjs-breadit",
  },
  {
    slug: "drive",
    title: "Bojko Drive",
    year: "2024",
    type: "Personal · cloud storage",
    kind: "shipped",
    layout: "wide-reverse",
    description:
      "Full-stack cloud storage app: upload, organize, share files. Auth via Clerk, server actions for mutations, **Posthog analytics**.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Drizzle",
      "Clerk Auth",
      "Server Actions",
      "TailwindCSS",
      "MySQL",
    ],
    image: "/drive.png",
    demoUrl: "https://bojko-drive.netlify.app",
    repoUrl: "https://github.com/BojkoJ",
  },
  {
    slug: "poppkova2",
    title: "Autoškola Poppková · v2",
    year: "2024",
    type: "Freelance · redesign",
    kind: "shipped",
    layout: "landscape",
    description:
      "Complete redesign and CMS rebuild of my first-ever client project. New UI in Tailwind, custom PHP-backed CMS so the owner can manage prices, courses and reviews independently.",
    tags: ["React", "TypeScript", "TailwindCSS", "PHP", "MySQL"],
    image: "/poppkova2.png",
    demoUrl: "https://autoskolapoppkova.cz",
    repoUrl: null,
    closedSource: true,
  },
  {
    slug: "poppkova",
    title: "Autoškola Poppková · v1",
    year: "2022",
    type: "High-school thesis",
    kind: "archived",
    layout: "landscape-reverse",
    description:
      "My very first project: a graduation thesis on high school. PHP + MySQL + hand-rolled HTML/CSS. The project that got me hooked on this field.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "UI/UX"],
    image: "/autoskola.png",
    demoUrl: null,
    repoUrl: "https://github.com/BojkoJ/fullstack-driving-school",
  },
];

// Czech projects reuse the English structure with localized strings.
const PROJECTS_CZ_OVERRIDES: Partial<Project>[] = [
  {
    title: "Smart Tracking System",
    type: "Diplomová práce",
    kind: "cloud-native · v procesu",
    description:
      "Distribuovaný cloudový systém simulující telemetrii v reálném čase od **50 nákladních kontejnerů** plujících z Pusanu do Rotterdamu. Pět Go mikroslužeb, eventovaná architektura nad NATS JetStream, CQRS, **clean architecture** v každé službě, kompletní GitOps pipeline (Tekton, ArgoCD) a celý LGTM observability stack: Loki, Grafana, Tempo, Prometheus. Provisioning end-to-end přes Terraform na lokálním k3d clusteru.",
    bullets: [
      "5 Go mikroslužeb · gRPC + NATS JetStream · event-driven",
      "k3s/k3d cluster · Terraform · Helm · ArgoCD · Tekton",
      "OpenTelemetry traces + Prometheus metriky + Loki logy",
      "72 unit testů · clean architecture · DI · CQRS",
    ],
  },
  {
    title: "Martazahrada",
    type: "Freelance · e-commerce",
    kind: "produkce",
    description:
      "Full-stack e-commerce platforma pro českou prodejkyni zahradnických potřeb. Vlastnil jsem **UX research, UI/UX design, frontend, backend i CMS** od začátku do konce. Moderní stack s vlastním Payload CMS, aby si klient mohl eshop řídit sám.",
    bullets: [
      "Návrh ve Figmě · solo build · ~14k LOC",
      "Vlastní CMS s rolemi a content workflow",
      "Stripe + Zásilkovna · vícekrokový checkout",
    ],
  },
  {
    title: "Nxsxnity",
    type: "Freelance · e-commerce",
    kind: "produkce",
    description:
      "Full-stack e-shop s vlastním CMS. Klient řídí produkty, varianty, obsah, objednávky i dopravu na jednom místě. **Stripe + Zásilkovna**, vlastní UI systém, server actions a čistý datový model v Postgresu.",
    bullets: [
      "Vlastní CMS · správa produktů a variant",
      "Plná kontrola nad obsahem obchodu prostřednictvím různých stavebních bloků, jako jsou hero, fotobloky nebo obsahové bloky",
      "Vizuální editor pro snadnou správu obsahu e-shopu",
      "Stripe platby · integrace Zásilkovny",
      "Vlastní design system · 100 % Tailwind",
    ],
  },
  {
    title: "LXI Simulator",
    type: "Pickering Interfaces",
    kind: "interní nástroj",
    description:
      "Greenfield přepsání staršího LXI simulátoru z Perlu do moderního **Go (Gin) + vanilla JS**. Nová informační architektura, redesignované UI ve Figmě, čistší code structure, rychlejší iterace. Používáno interně inženýrským týmem.",
    bullets: [
      "Projekt v rámci DPČ ve firmě Pickering Interfaces",
      "Migrace Perl do Go · od základu",
      "Redesignované UI/UX ve Figmě",
    ],
  },
  {
    title: "DigiShark",
    type: "Osobní · marketplace",
    kind: "vydáno",
    description:
      "Česká e-commerce platforma pro digitální produkty: sady ikon, UI kity, design assety. Full-stack Next.js s Payload CMS, Stripe platbami, tRPC a Mongo datovou vrstvou.",
    bullets: [
      "Marketplace pattern · digitální downloady",
      "Stripe · platby a licencování",
      "Payload CMS · dashboard pro prodejce",
    ],
  },
  {
    title: "Effortly",
    type: "Osobní · SaaS klon",
    kind: "vydáno",
    description:
      "Full-stack klon Trella s **organizacemi, drag & drop kanban tabulemi, activity logem a předplatným**. Postaveno na server actions Next.js 14, Prismě a Clerk auth.",
    bullets: [
      "Multi-tenant organizace · role-based přístup",
      "Drag & drop kanban · activity log",
      "Stripe předplatné · audit trail",
    ],
  },
  {
    title: "NoteIt",
    type: "Osobní · klon Notionu",
    kind: "vydáno",
    description:
      "Aplikace pro poznámky inspirovaná Notionem: hierarchické stránky, rich-text bloky, nahrávání souborů a real-time persistence v Convex. Auth přes Clerk.",
  },
  {
    title: "Breadit",
    type: "Osobní · klon Redditu",
    kind: "vydáno",
    description:
      "Komunitní aplikace ve stylu Redditu se subreddity, posty, vlákny komentářů, hlasy a nekonečným scrollováním. Postaveno na Next.js App Routeru s Prismou, Redis cache a NextAuth.",
  },
  {
    title: "Bojko Drive",
    type: "Osobní · cloud storage",
    kind: "vydáno",
    description:
      "Full-stack cloud storage: nahrávání, organizace, sdílení souborů. Auth přes Clerk, server actions pro mutace, **Posthog analytics**.",
  },
  {
    title: "Autoškola Poppková · v2",
    type: "Freelance · redesign",
    kind: "vydáno",
    description:
      "Kompletní redesign a CMS rebuild mého úplně prvního klientského projektu. Nové UI v Tailwindu, vlastní PHP CMS, aby si majitelka mohla ceny, kurzy a recenze řídit sama.",
  },
  {
    title: "Autoškola Poppková · v1",
    type: "Středoškolská práce",
    kind: "archivováno",
    description:
      "Můj úplně první projekt: maturitní práce. PHP + MySQL + ručně psané HTML/CSS. Projekt, který mě k tomuhle oboru přitáhl.",
  },
];

export const PROJECTS: Record<Lang, Project[]> = {
  english: PROJECTS_EN,
  czech: PROJECTS_EN.map((p, i) => ({ ...p, ...PROJECTS_CZ_OVERRIDES[i] })),
};

// --------------------------------------------------------------------
// Experience timeline (Apple-like)
// --------------------------------------------------------------------
export type ExperienceItem = {
  when: string;
  role: string;
  org: string;
  kind: "education" | "work";
  desc: string;
  current?: boolean;
};

export const EXPERIENCE: Record<Lang, ExperienceItem[]> = {
  english: [
    {
      when: "2025-present",
      role: "M.Sc. Computer Science",
      org: "VŠB-TUO · Ostrava, CZ",
      kind: "education",
      desc: "A two-year master's program. Delving deeper into software engineering, distributed systems, quantum algorithms, bio-inspired heuristics, and advanced database systems. I’m currently writing my master’s thesis on the topic of “Cloud-Native Smart Tracking System.”",
      current: true,
    },
    {
      when: "2023-present",
      role: "Junior Software Developer",
      org: "PICKERING Interfaces · Bystřice, CZ",
      kind: "work",
      desc: "Full-stack development across Go, Python, JavaScript, TypeScript and frameworks such as Gin(Go), Django(Python), or SolidJS(TypeScript). Internal tooling, customer-facing UIs, UI/UX work in Figma, also frequent work with Git and Linux. Fully rewrote and redesigned the legacy LXI simulator from Perl to Go. Refactored whole, complex HTML5 SFP project from Ractive and vanilla JavaScript to asynchronous TypeScript and SolidJS, GitLab CI/CD.",
      current: true,
    },
    {
      when: "2022-2025",
      role: "B.Sc. Computer Science",
      org: "VŠB-TUO · Ostrava, CZ",
      kind: "education",
      desc: "Three-year bachelor's degree in computer science. Algorithms, software engineering, data structures, parallel systems, mathematics, linear algebra, web technologies, databases, logic, theoretical computer science, operating systems, computer graphics, machine learning etc. Graduated in 2025.",
    },
    {
      when: "2022",
      role: "Junior Programmer (part-time)",
      org: "EXPANDO · Třinec, CZ",
      kind: "work",
      desc: "Half a year on e-commerce and e-shop development in PHP Zend framework, JavaScript, HTML and CSS after high-school graduation. Gained experience working in an agile environment.",
    },
    {
      when: "2018-2022",
      role: "High school · IT specialization",
      org: "POJFM · Frýdek-Místek, CZ",
      kind: "education",
      desc: "Four-year IT study programme, completed with a maturita exam with honours. Introduction to programming in C# and .NET, working with relational databases such as MySQL, understanding the principles of Linux and working with Linux servers.",
    },
  ],
  czech: [
    {
      when: "2025-nyní",
      role: "Ing. Informatika",
      org: "VŠB-TUO · Ostrava",
      kind: "education",
      desc: "Dvouleté navazující magisterské studium. Prohlubuju softwarové inženýrství, distribuované systémy, kvantové algoritmy, bioinspirované heuristiky či pokročilé databázové systémy. Aktuálně píšu diplomovou práci na téma Cloud-Native Smart Tracking System.",
      current: true,
    },
    {
      when: "2023-nyní",
      role: "Junior Software Developer",
      org: "PICKERING Interfaces · Bystřice",
      kind: "work",
      desc: "Full-stack vývoj v jazycích Go, Python, JavaScript, TypeScript, či frameworcích jako Gin(Go), Django(Python), či SolidJS(TypeScript). Vývoj interních nástrojů, uživatelských rozhraní pro zákazníky, práce na UI/UX v nástroji Figma, dále častá práce s Gitem a Linuxem. Kompletní přepracování a redesign staršího Software LXI Simulatoru z jazyka Perl do jazyka Go. Refaktorizace celého komplexního projektu HTML5 SFP z Ractive a vanilla JavaScriptu na asynchronní TypeScript a SolidJS, GitLab CI/CD.",
      current: true,
    },
    {
      when: "2022-2025",
      role: "Bc. Informatika",
      org: "VŠB-TUO · Ostrava",
      kind: "education",
      desc: "Tříleté bakalářské studium informatiky. Algoritmy, softwarové inženýrství, datové struktuy, paralelní systémy, matematika, lineární algebra, webové technologie, databáze, logika, teoretická informatika, operační systémy, počítačová grafika či strojové učení. Absolvoval jsem v roce 2025.",
    },
    {
      when: "2022",
      role: "Junior programátor (part-time)",
      org: "EXPANDO · Třinec",
      kind: "work",
      desc: "Půl roku po maturitě jako pomocný programátor: e-commerce a e-shopy v PHP Zend frameworku, JavaScriptu, HTML a CSS. Načerpání zkušeností s prací v agilním prostředí.",
    },
    {
      when: "2018-2022",
      role: "Střední škola · IT obor",
      org: "POJFM · Frýdek-Místek",
      kind: "education",
      desc: "Čtyřletý obor IT, zakončený maturitní zkouškou s vyznamenáním. První programování v jazyce C# a .Net, práce s relačními databázemi jako MySQL, pochopení principů a práce s Linuxem a Linux Servery.",
    },
  ],
};

// --------------------------------------------------------------------
// Skills, categorized
// --------------------------------------------------------------------
export type SkillCategory = { cat: string; items: string[] };

const SKILLS_EN: SkillCategory[] = [
  {
    cat: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Go",
      "C#/.Net",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    cat: "Frontend",
    items: [
      "React",
      "Next.js",
      "SolidJS",
      "TailwindCSS",
      "ShadCn-UI",
      "Motion",
      "Zustand",
      "SWR",
      "Zod",
    ],
  },
  {
    cat: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Gin",
      "tRPC",
      "gRPC",
      "NATS",
      "Server Actions",
    ],
  },
  {
    cat: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Tekton",
      "Terraform",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Git",
    ],
  },
  {
    cat: "Databases & CMS",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "PayloadCMS",
      "Figma",
    ],
  },
];

export const SKILLS: Record<Lang, SkillCategory[]> = {
  english: SKILLS_EN,
  czech: [
    { ...SKILLS_EN[0], cat: "Jazyky" },
    { ...SKILLS_EN[1], cat: "Frontend" },
    { ...SKILLS_EN[2], cat: "Backend" },
    { ...SKILLS_EN[3], cat: "Cloud & DevOps" },
    { ...SKILLS_EN[4], cat: "Databáze & CMS" },
  ],
};

// --------------------------------------------------------------------
// Testimonials
// --------------------------------------------------------------------
export type Testimonial = {
  quote: string;
  person: string;
  role: string;
  project: string;
  link: string;
};

export const TESTIMONIALS: Record<Lang, Testimonial[]> = {
  english: [
    {
      quote:
        "There were absolutely no problems with the collaboration. Communication was always quick, clear, and adapted to my time. I'm extremely satisfied with the final result and the price. The shop was built exactly to my requirements. I can only recommend his services.",
      person: "Miroslav Dvořák",
      role: "Owner",
      project: "Nxsxnity",
      link: "https://nxsx.store",
    },
    {
      quote:
        "I'm very happy with the work, especially the modern look that's up to date, and the functionality: everything is fast and simple, anyone finds what they need. Communication and feedback are the main satisfaction; I know I can rely on him at any time, and the price is very favourable.",
      person: "Monika Poppková",
      role: "Owner",
      project: "Autoškola Poppková",
      link: "https://autoskolapoppkova.cz",
    },
  ],
  czech: [
    {
      quote:
        "Se spoluprací nebyl absolutně žádný problém, komunikace byla vždy rychlá, jasná a časově přizpůsobená mým požadavkům. Se závěrečným výsledkem a hlavně s cenou jsem nadmíru spokojen. Eshop byl vytvořen přesně podle mých představ. Služby můžu jedině doporučit.",
      person: "Miroslav Dvořák",
      role: "Majitel",
      project: "Nxsxnity",
      link: "https://nxsx.store",
    },
    {
      quote:
        "S prací jsem moc spokojená, hlavně s moderním vzhledem webu, který jde s dobou, a funkčností: vše je rychlé, jednoduché, každý najde co potřebuje. Komunikace a zpětná vazba je hlavní spokojenost: vím, že se na něj mohu spolehnout, a cena je hodně příznivá.",
      person: "Monika Poppková",
      role: "Majitelka",
      project: "Autoškola Poppková",
      link: "https://autoskolapoppkova.cz",
    },
  ],
};

// --------------------------------------------------------------------
// Certificates
// --------------------------------------------------------------------
export type CertCompany = "oracle" | "cisco" | "ecdl";
export type CertSkillIcon =
  "sql" | "database-design" | "networking" | "dotnet" | "it";

export type CertSkill = { label: string; icon: CertSkillIcon };

export type Certificate = {
  slug: string;
  title: string; // certificate names are proper nouns — kept as issued
  company: string;
  companyIcon: CertCompany;
  date: string;
  file: string; // path to the PDF
  preview: string; // path to the rendered preview image
  skills: CertSkill[];
};

type CertBase = Omit<Certificate, "date" | "skills"> & {
  date: Record<Lang, string>;
  skills: { icon: CertSkillIcon; english: string; czech: string }[];
};

const CERT_BASE: CertBase[] = [
  {
    slug: "oracle-sql-programming",
    title: "Database Programming with SQL",
    company: "Oracle",
    companyIcon: "oracle",
    date: { english: "May 2024", czech: "květen 2024" },
    file: "/certs/clmsCertificate2.pdf",
    preview: "/certs/previews/clmsCertificate2.jpg",
    skills: [{ icon: "sql", english: "SQL", czech: "SQL" }],
  },
  {
    slug: "oracle-database-design",
    title: "Database Design",
    company: "Oracle",
    companyIcon: "oracle",
    date: { english: "April 2024", czech: "duben 2024" },
    file: "/certs/clmsCertificate.pdf",
    preview: "/certs/previews/clmsCertificate.jpg",
    skills: [
      { icon: "sql", english: "SQL", czech: "SQL" },
      {
        icon: "database-design",
        english: "Database Design",
        czech: "Návrh databází",
      },
    ],
  },
  {
    slug: "cisco-ccna-intro",
    title: "CCNA Routing and Switching: Introduction to Networks",
    company: "Cisco",
    companyIcon: "cisco",
    date: { english: "September 2021", czech: "září 2021" },
    file: "/certs/ccnaCertificate.pdf",
    preview: "/certs/previews/ccnaCertificate.jpg",
    skills: [
      { icon: "networking", english: "Networking", czech: "Počítačové sítě" },
    ],
  },
  {
    slug: "ecdl",
    title: "ECDL European Computer Driving Licence",
    company: "ECDL Czech Republic",
    companyIcon: "ecdl",
    date: { english: "March 2020", czech: "březen 2020" },
    file: "/certs/ecdlCertificate.pdf",
    preview: "/certs/previews/ecdlCertificate.jpg",
    skills: [
      { icon: "sql", english: "SQL", czech: "SQL" },
      { icon: "dotnet", english: "C# / .NET", czech: "C# / .NET" },
    ],
  },
  {
    slug: "cisco-it-essentials",
    title: "IT Essentials",
    company: "Cisco",
    companyIcon: "cisco",
    date: { english: "November 2019", czech: "listopad 2019" },
    file: "/certs/ITessentialsCertificate.pdf",
    preview: "/certs/previews/ITessentialsCertificate.jpg",
    skills: [
      { icon: "networking", english: "Networking", czech: "Počítačové sítě" },
      { icon: "it", english: "IT fundamentals", czech: "Základy IT" },
    ],
  },
];

export const CERTIFICATES: Record<Lang, Certificate[]> = {
  english: CERT_BASE.map((c) => ({
    ...c,
    date: c.date.english,
    skills: c.skills.map((s) => ({ label: s.english, icon: s.icon })),
  })),
  czech: CERT_BASE.map((c) => ({
    ...c,
    date: c.date.czech,
    skills: c.skills.map((s) => ({ label: s.czech, icon: s.icon })),
  })),
};

// --------------------------------------------------------------------
// Hero YAML spec card — syntax-highlighted lines (HTML strings)
// --------------------------------------------------------------------
export function buildYaml(lang: Lang): string[] {
  if (lang === "czech") {
    return [
      `<span class="c"># profile/v3</span>`,
      `<span class="k">jmeno</span><span class="p">:</span> <span class="s">"Jan Bojko"</span>`,
      `<span class="k">role</span><span class="p">:</span> <span class="s">"cloud-native full-stack developer"</span>`,
      `<span class="k">misto</span><span class="p">:</span> <span class="s">"Ostrava, ČR"</span> &nbsp;<span class="c"># EU remote ok</span>`,
      `<span class="k">zkusenost_let</span><span class="p">:</span> <span class="n">4</span>`,
      ``,
      `<span class="k">focus</span><span class="p">:</span>`,
      `<span class="indent"></span><span class="dash">-</span> <span class="s">Go &amp; mikroslužby</span>`,
      `<span class="indent"></span><span class="dash">-</span> <span class="s">Kubernetes &amp; GitOps</span>`,
      `<span class="indent"></span><span class="dash">-</span> <span class="s">Next.js / React</span>`,
      `<span class="indent"></span><span class="dash">-</span> <span class="s">Observability (LGTM)</span>`,
      ``,
      `<span class="k">stack_hlavni</span><span class="p">:</span>`,
      `<span class="indent"></span><span class="k">jazyky</span><span class="p">:</span> <span class="p">[</span><span class="s">Go</span><span class="p">,</span> <span class="s">TypeScript</span><span class="p">,</span> <span class="s">C#</span><span class="p">,</span> <span class="s">Python</span><span class="p">]</span>`,
      `<span class="indent"></span><span class="k">infra</span><span class="p">:</span> <span class="p">[</span><span class="s">k3s</span><span class="p">,</span> <span class="s">k8s</span><span class="p">,</span> <span class="s">Terraform</span><span class="p">,</span> <span class="s">ArgoCD</span><span class="p">,</span> <span class="s">Tekton</span><span class="p">]</span>`,
      `<span class="indent"></span><span class="k">data</span><span class="p">:</span>  <span class="p">[</span><span class="s">Postgres</span><span class="p">,</span> <span class="s">NATS</span><span class="p">,</span> <span class="s">Redis</span><span class="p">]</span>`,
      ``,
      `<span class="k">aktualne</span><span class="p">:</span> <span class="s">"diplomová práce: distribuovaný"</span>`,
      `<span class="indent"></span><span class="s">"asset tracking system pro přepravní"</span>`,
      `<span class="indent"></span><span class="s">"lodní kontejnery"</span>`,
      `<span class="k">stav</span><span class="p">:</span> <span class="s">"otevřený příležitostem"</span>`,
    ];
  }
  return [
    `<span class="c"># profile/v3</span>`,
    `<span class="k">name</span><span class="p">:</span> <span class="s">"Jan Bojko"</span>`,
    `<span class="k">role</span><span class="p">:</span> <span class="s">"cloud-native full-stack developer"</span>`,
    `<span class="k">location</span><span class="p">:</span> <span class="s">"Ostrava, CZ"</span> &nbsp;<span class="c"># EU remote ok</span>`,
    `<span class="k">years_experience</span><span class="p">:</span> <span class="n">4</span>`,
    ``,
    `<span class="k">focus</span><span class="p">:</span>`,
    `<span class="indent"></span><span class="dash">-</span> <span class="s">Go &amp; microservices</span>`,
    `<span class="indent"></span><span class="dash">-</span> <span class="s">Kubernetes &amp; GitOps</span>`,
    `<span class="indent"></span><span class="dash">-</span> <span class="s">Next.js / React</span>`,
    `<span class="indent"></span><span class="dash">-</span> <span class="s">Observability (LGTM)</span>`,
    ``,
    `<span class="k">core_stack</span><span class="p">:</span>`,
    `<span class="indent"></span><span class="k">langs</span><span class="p">:</span> <span class="p">[</span><span class="s">Go</span><span class="p">,</span> <span class="s">TypeScript</span><span class="p">,</span> <span class="s">C#</span><span class="p">,</span> <span class="s">Python</span><span class="p">]</span>`,
    `<span class="indent"></span><span class="k">infra</span><span class="p">:</span> <span class="p">[</span><span class="s">k3s</span><span class="p">,</span> <span class="s">k8s</span><span class="p">,</span> <span class="s">Terraform</span><span class="p">,</span> <span class="s">ArgoCD</span><span class="p">,</span> <span class="s">Tekton</span><span class="p">]</span>`,
    `<span class="indent"></span><span class="k">data</span><span class="p">:</span>  <span class="p">[</span><span class="s">Postgres</span><span class="p">,</span> <span class="s">NATS</span><span class="p">,</span> <span class="s">Redis</span><span class="p">]</span>`,
    ``,
    `<span class="k">currently</span><span class="p">:</span> <span class="s">"master's thesis: distributed asset"</span>`,
    `<span class="indent"></span><span class="s">"tracking system for cargo containers"</span>`,
    `<span class="k">status</span><span class="p">:</span> <span class="s">"open to opportunities"</span>`,
  ];
}
