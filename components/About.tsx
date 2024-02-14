"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className='mb-3'>
        After graduating highschool in field of{" "}
        <span className='font-medium'>IT</span>, I decided to deepen my passion
        for computer science. That is why I&apos;m currently student of
        university{" "}
        <span className='font-medium'>on major field Computer Science</span>.{" "}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className='font-medium'>
          React.js, Next.js, tRPC, TypeScript, MySQL or MongoDB and Tailwind
        </span>
        . I am also proficient in Go or Algorithm designing. I am always looking
        to learn new interesting technologies or packages. I am currently
        looking for a <span className='font-medium'>customers</span> for my
        freelance projects.
      </p>

      <p>
        {" "}
        <span className='italic'>When I&apos;m not coding</span>, I enjoy
        spending time with my girlfriend, training Muay Thai, or playing with my
        dog. I also enjoy{" "}
        <span className='font-medium'>learning new things</span>. I am currently
        learning about{" "}
        <span className='font-medium'>
          Nietzsche&apos;s philosophy and Muay Thai history
        </span>
        . I&apos;m also learning UI/UX design in Figma.
      </p>
    </motion.section>
  );
};

export default About;
