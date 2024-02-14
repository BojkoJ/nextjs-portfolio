"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // když spodek viewportu přesáhne začátek targetu "cíle", 1.33 - třetina sekce a konec
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //scrollYprogress půjde z 0 do 1, a chceme aby nezačínala na 0 ale na 0.5
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); //opacity půjde z 0 do 1, a chceme aby nezačínala na 0 ale na 0.5

  return (
    <Link href={projectUrl} className='group mb-3 sm:mb-8 last:mb-0'>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <section className=' bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden relative sm:pr-8 sm:h-[25rem] sm:group-even:pl-8 group-hover:bg-gray-200 transition'>
          <div className='pt-4 pb-7 px-5 sm:pl-10 sm: pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] '>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
              {description}
            </p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
              {tags.map((tag, index) => (
                <li
                  className='bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70'
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-ev[en:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] 
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 hidden sm:block'
          />
        </section>
      </motion.div>
    </Link>
  );
}
[];
