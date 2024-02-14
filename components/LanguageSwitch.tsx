"use client";
import { CZ, GB } from "country-flag-icons/react/3x2";
import { useLanguage } from "@/context/language-context";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className='fixed bottom-20 right-5 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toggleLanguage}
    >
      {language === "czech" ? (
        <CZ className='h-[1.5rem] w-[1.5rem]' />
      ) : (
        <GB className='h-[1.5rem] w-[1.5rem]' />
      )}
    </button>
  );
};

export default LanguageSwitch;
