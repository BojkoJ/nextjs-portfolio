"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import { toast } from "sonner";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    // min říká- vyber menší z těchto dvou - takže obrazovky užší než 38rem tak tam bude form 100% široký
    <motion.section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      ref={ref}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 text-center -mt-5 -mb-2 px-3 sm:px-0 dark:text-white/80'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:honzabojko@seznam.cz'>
          honzabojko@seznam.cz
        </a>{" "}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error("Something went wrong, email could not be sent.");
            return;
          }

          toast.success("Your email was succesfully sent.");
        }}
      >
        <input
          name='senderEmail'
          type='email'
          required
          maxLength={250}
          className='h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none'
          placeholder='Your email'
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none'
          required
          maxLength={5000}
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
