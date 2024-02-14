import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  const { language } = useLanguage();

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none
       transition-all focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      //flex zapříčiní to, že text a ikonka se budou chovat jako flexItems
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          {language === "english" ? <>Submit </> : <>Odeslat</>}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
