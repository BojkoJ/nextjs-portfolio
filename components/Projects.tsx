"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData, projectsDataCz } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { language } = useLanguage();

  let ProjectsData = language === "english" ? projectsData : projectsDataCz;

  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
      <SectionHeading>
        {language === "english" ? <>My Projects</> : <>Moje Projekty</>}
      </SectionHeading>
      <div className='flex flex-col'>
        {ProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
