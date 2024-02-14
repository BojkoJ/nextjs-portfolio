"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { language } = useLanguage();

  return (
    <section
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt='Jan Bojko photo'
              src='/photoMe.jpg'
              width={192}
              height={192}
              quality={95}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl pointer-events-none'
            />
          </motion.div>

          <motion.span
            className='select-none text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === "english" ? (
          <>
            <span className='font-bold'>Hello, Name&apos;s Jan.</span>I&apos;m a{" "}
            <span className='font-bold'>
              full-stack developer, UI/UX designer and Computer Science student
            </span>{" "}
            with <span className='font-bold'>2 years</span> of experience. I
            enjoy building <span className='italic'>websites & web apps</span>.
            My focus is <span className='underline'>React (Next.js)</span>.
          </>
        ) : (
          <>
            <span className='font-bold'>Ahoj, Jmenuje se Jan.</span> Jsem{" "}
            <span className='font-bold'>
              full-stack vývojář, UI/UX designér and student Informatiky
            </span>{" "}
            s <span className='font-bold'>dvouletou</span> praxí. Baví mě vývoj{" "}
            <span className='italic'>webů & webových aplikací</span>. Zaměřuju
            se na <span className='underline'>React (Next.js)</span>.
          </>
        )}
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {language === "english" ? <>Contact me here</> : <>Konaktujte mě</>}

          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10'
          href='/CV.pdf'
          download={true}
        >
          {language === "english" ? <>Download CV</> : <>Stáhnout CV</>}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
          href='https://linkedin.com/in/jan-bojko/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-110 hover:scale-110 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
          href='https://github.com/BojkoJ'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
