import type { Lang } from "@/lib/data";
import { CONTROLLER, RETENTION_MONTHS } from "@/lib/legal";

// Privacy notice content, structured to cover every item of Art. 13 GDPR:
//   13(1)(a) controller · (b) DPO · (c) purposes + legal basis · (d) legitimate
//   interests · (e) recipients · (f) third-country transfers
//   13(2)(a) retention · (b) rights · (c) withdrawing consent · (d) complaint ·
//   (e) obligation to provide data · (f) automated decision-making
export type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  // Rendered after `items`.
  after?: string[];
};

export type PrivacyDoc = {
  title: string;
  updatedLabel: string;
  intro: string;
  back: string;
  sections: PrivacySection[];
};

const controllerLines = (lang: Lang) => {
  const cz = lang === "czech";
  const lines = [
    `${cz ? "Správce" : "Controller"}: ${CONTROLLER.name}`,
  ];
  if (CONTROLLER.ico) lines.push(`${cz ? "IČO" : "Company ID (IČO)"}: ${CONTROLLER.ico}`);
  lines.push(
    `${cz ? "Adresa" : "Address"}: ${CONTROLLER.address ?? CONTROLLER.city}`,
    `E-mail: ${CONTROLLER.email}`,
  );
  return lines;
};

export const PRIVACY: Record<Lang, PrivacyDoc> = {
  czech: {
    title: "Zásady zpracování osobních údajů",
    updatedLabel: "Platné od",
    back: "← Zpět na portfolio",
    intro:
      "Tyto zásady vysvětlují, jaké osobní údaje zpracovávám při používání tohoto webu a kontaktního formuláře, proč, jak dlouho a jaká máte práva. Vychází z nařízení (EU) 2016/679 (GDPR), zejména z jeho čl. 13.",
    sections: [
      {
        heading: "1. Správce osobních údajů",
        paragraphs: [
          "Správcem osobních údajů je fyzická osoba:",
        ],
        items: [
          ...controllerLines("czech"),
        ],
      },
      {
        heading: "2. Pověřenec pro ochranu osobních údajů",
        paragraphs: [
          "Pověřence pro ochranu osobních údajů jsem nejmenoval, protože mi to zákon neukládá. Ve všech záležitostech ochrany osobních údajů mě můžete kontaktovat přímo na e-mailu uvedeném výše.",
        ],
      },
      {
        heading: "3. Jaké údaje zpracovávám, za jakým účelem a na jakém právním základě",
        paragraphs: [
          "Kontaktní formulář. Když mi napíšete přes formulář, zpracovávám vaši e-mailovou adresu a obsah zprávy (a případně další osobní údaje, které sami do zprávy uvedete). Účelem je přijmout vaši zprávu, odpovědět na ni a případně navázat spolupráci. Právním základem je váš souhlas (čl. 6 odst. 1 písm. a) GDPR), který udělujete zaškrtnutím políčka „Souhlasím se zpracováním osobních údajů“ před odesláním formuláře. Spolu se zprávou mi dorazí záznam o udělení souhlasu včetně data a času, abych jej mohl prokázat (čl. 7 odst. 1 GDPR).",
          "Provoz webu. Poskytovatel hostingu při zobrazení stránky automaticky zaznamenává technické údaje, jako jsou IP adresa, typ prohlížeče, požadovaná adresa a čas přístupu. Účelem je zajištění provozu a bezpečnosti webu a ochrana před zneužitím. Právním základem je oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) na bezpečném a funkčním webu. Tyto záznamy nevyhodnocuji a nepoužívám k profilování.",
        ],
      },
      {
        heading: "4. Doba uložení",
        paragraphs: [
          `Zprávy z kontaktního formuláře uchovávám po dobu vyřizování vaší poptávky a poté nejdéle ${RETENTION_MONTHS} měsíců od poslední komunikace. Pokud dojde ke spolupráci, mohou být související údaje uchovávány po dobu, kterou mi ukládají právní předpisy (např. daňové a účetní povinnosti) nebo po dobu promlčecích lhůt. Poté jsou údaje smazány.`,
          "Technické záznamy hostingu jsou uchovávány po dobu stanovenou jeho poskytovatelem, typicky v řádu dnů až týdnů.",
        ],
      },
      {
        heading: "5. Příjemci osobních údajů",
        paragraphs: [
          "Vaše údaje mohou být zpřístupněny těmto zpracovatelům, kteří pro mě zajišťují provoz webu a doručení zpráv:",
        ],
        items: [
          "Vercel Inc. (USA) – hosting webu a zpracování technických záznamů,",
          "Resend, Inc. (USA) – služba pro odeslání e-mailu z kontaktního formuláře,",
          "Seznam.cz, a.s. (Česká republika) – provozovatel e-mailové schránky, do které zprávy přijímám.",
        ],
      },
      {
        heading: "6. Předávání údajů do třetích zemí",
        paragraphs: [
          "Vercel Inc. a Resend, Inc. sídlí ve Spojených státech amerických, takže může docházet k předání údajů mimo Evropský hospodářský prostor. Takové předání se děje na základě záruk podle kapitoly V GDPR, tj. na základě standardních smluvních doložek Evropské komise a/nebo rozhodnutí o odpovídající ochraně v rámci EU-U.S. Data Privacy Framework. Kopii záruk vám na požádání poskytnu.",
        ],
      },
      {
        heading: "7. Cookies a místní úložiště",
        paragraphs: [
          "Tento web nepoužívá analytické, reklamní ani jiné sledovací cookies a nenačítá žádné skripty třetích stran, které by vás sledovaly. Písma jsou poskytována přímo z tohoto webu.",
          "Do úložiště vašeho prohlížeče (localStorage) se ukládají pouze dvě technické položky, a to výhradně ve chvíli, kdy sami změníte jazyk nebo barevný režim webu. Slouží jen k tomu, aby si web vaši volbu zapamatoval; nejsou odesílány na server, neobsahují žádné osobní údaje a nelze je použít k vaší identifikaci:",
        ],
        items: [
          "portfolio-lang – zvolený jazyk (čeština / angličtina),",
          "theme – zvolený barevný režim (světlý / tmavý).",
        ],
        after: [
          "Protože jde o technické ukládání nezbytné pro funkci, kterou jste si sami vyžádali, nevyžaduje se k němu souhlas a web proto nezobrazuje cookie lištu. Pokud by se to v budoucnu změnilo (např. přidáním analytiky), požádám vás předem o souhlas.",
        ],
      },
      {
        heading: "8. Vaše práva",
        paragraphs: [
          "Jako subjekt údajů máte podle GDPR tato práva:",
        ],
        items: [
          "právo na přístup k osobním údajům (čl. 15),",
          "právo na opravu nepřesných údajů (čl. 16),",
          "právo na výmaz („právo být zapomenut“) (čl. 17),",
          "právo na omezení zpracování (čl. 18),",
          "právo na přenositelnost údajů (čl. 20),",
          "právo vznést námitku proti zpracování založenému na oprávněném zájmu (čl. 21),",
          "právo kdykoli odvolat souhlas, aniž by tím byla dotčena zákonnost zpracování před jeho odvoláním (čl. 7 odst. 3). Souhlas odvoláte e-mailem na adresu uvedenou výše; odvolání je stejně snadné jako jeho udělení,",
          "právo podat stížnost u dozorového úřadu (čl. 77), kterým je Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz.",
        ],
      },
      {
        heading: "9. Povinnost poskytnout údaje",
        paragraphs: [
          "Poskytnutí osobních údajů je dobrovolné a není ani zákonným, ani smluvním požadavkem. Bez e-mailové adresy a souhlasu se zpracováním však nemohu zprávu přes formulář přijmout a odpovědět na ni. Můžete mi ale kdykoli napsat přímo na e-mail uvedený výše.",
        ],
      },
      {
        heading: "10. Automatizované rozhodování a profilování",
        paragraphs: [
          "Při zpracování nedochází k automatizovanému rozhodování ani profilování ve smyslu čl. 22 GDPR.",
        ],
      },
      {
        heading: "11. Změny těchto zásad",
        paragraphs: [
          "Tyto zásady mohu aktualizovat, např. při změně služeb nebo právních předpisů. Aktuální verze je vždy dostupná na této stránce a datum jejího vzniku je uvedeno nahoře.",
        ],
      },
    ],
  },
  english: {
    title: "Privacy Policy",
    updatedLabel: "Effective",
    back: "← Back to portfolio",
    intro:
      "This policy explains what personal data I process when you use this website and its contact form, why, for how long, and what rights you have. It is based on Regulation (EU) 2016/679 (GDPR), in particular Article 13.",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: ["The controller of your personal data is a natural person:"],
        items: controllerLines("english"),
      },
      {
        heading: "2. Data protection officer",
        paragraphs: [
          "I have not appointed a data protection officer because I am not required to. For any privacy matter you can contact me directly at the e-mail address above.",
        ],
      },
      {
        heading: "3. What data I process, for what purpose and on what legal basis",
        paragraphs: [
          "Contact form. When you write to me through the form I process your e-mail address and the content of your message (and any other personal data you choose to include in it). The purpose is to receive and answer your message and, where relevant, to start a collaboration. The legal basis is your consent (Art. 6(1)(a) GDPR), which you give by ticking the “I agree to the processing of personal data” checkbox before submitting the form. A record of the consent, including date and time, is delivered together with your message so that I can demonstrate it (Art. 7(1) GDPR).",
          "Website operation. When a page is served, the hosting provider automatically logs technical data such as your IP address, browser type, requested URL and time of access. The purpose is to keep the website running securely and to protect it against abuse. The legal basis is my legitimate interest (Art. 6(1)(f) GDPR) in a secure and functioning website. I do not analyse these logs and do not use them for profiling.",
        ],
      },
      {
        heading: "4. Retention",
        paragraphs: [
          `Contact form messages are kept while your enquiry is being handled and then for at most ${RETENTION_MONTHS} months after the last communication. If a collaboration follows, related data may be kept for as long as the law requires (e.g. tax and accounting obligations) or for limitation periods. After that the data is deleted.`,
          "Hosting logs are kept for the period set by the hosting provider, typically days to weeks.",
        ],
      },
      {
        heading: "5. Recipients",
        paragraphs: [
          "Your data may be made available to the following processors, who help me run the website and deliver messages:",
        ],
        items: [
          "Vercel Inc. (USA) – website hosting and technical logs,",
          "Resend, Inc. (USA) – sending the contact-form e-mail,",
          "Seznam.cz, a.s. (Czech Republic) – provider of the mailbox where I receive messages.",
        ],
      },
      {
        heading: "6. Transfers to third countries",
        paragraphs: [
          "Vercel Inc. and Resend, Inc. are based in the United States, so your data may be transferred outside the European Economic Area. Such transfers rely on safeguards under Chapter V GDPR, i.e. the European Commission’s standard contractual clauses and/or the adequacy decision for the EU-U.S. Data Privacy Framework. I will provide a copy of the safeguards on request.",
        ],
      },
      {
        heading: "7. Cookies and local storage",
        paragraphs: [
          "This website does not use analytics, advertising or any other tracking cookies and loads no third-party scripts that track you. Fonts are served from this website itself.",
          "Only two technical items are stored in your browser’s local storage, and only at the moment you yourself change the language or colour theme. They exist solely so the site remembers your choice; they are not sent to a server, contain no personal data and cannot be used to identify you:",
        ],
        items: [
          "portfolio-lang – the selected language (Czech / English),",
          "theme – the selected colour theme (light / dark).",
        ],
        after: [
          "Because this is technical storage strictly necessary for a feature you explicitly requested, no consent is required and the site therefore shows no cookie banner. If this changes in the future (e.g. by adding analytics), I will ask for your consent beforehand.",
        ],
      },
      {
        heading: "8. Your rights",
        paragraphs: ["Under the GDPR you have the following rights:"],
        items: [
          "the right of access to your personal data (Art. 15),",
          "the right to rectification of inaccurate data (Art. 16),",
          "the right to erasure (“right to be forgotten”) (Art. 17),",
          "the right to restriction of processing (Art. 18),",
          "the right to data portability (Art. 20),",
          "the right to object to processing based on legitimate interests (Art. 21),",
          "the right to withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal (Art. 7(3)). You can withdraw consent by e-mailing the address above; withdrawing is as easy as giving it,",
          "the right to lodge a complaint with a supervisory authority (Art. 77) – in the Czech Republic the Office for Personal Data Protection (Úřad pro ochranu osobních údajů), Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz.",
        ],
      },
      {
        heading: "9. Obligation to provide data",
        paragraphs: [
          "Providing personal data is voluntary and is neither a statutory nor a contractual requirement. Without an e-mail address and your consent to processing, however, I cannot receive or answer a message sent through the form. You can always e-mail me directly at the address above.",
        ],
      },
      {
        heading: "10. Automated decision-making and profiling",
        paragraphs: [
          "No automated decision-making or profiling within the meaning of Art. 22 GDPR takes place.",
        ],
      },
      {
        heading: "11. Changes to this policy",
        paragraphs: [
          "I may update this policy, e.g. when services or legislation change. The current version is always available on this page, with its effective date shown at the top.",
        ],
      },
    ],
  },
};
