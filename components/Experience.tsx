"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id='experience' className='scroll-mt-28 mb-28 sm:mb-40' ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experienceItem, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#F3F4F6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9CA3AF"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experienceItem.date}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(136, 140, 147)",
                fontSize: "1.5rem",
              }}
              icon={experienceItem.icon}
            >
              <h3 className='font-semibold capitalize'>
                {experienceItem.title}
              </h3>
              <p className='!font-normal !mt-0'>
                {experienceItem.company} - {experienceItem.location}
              </p>
              <p className='!font-normal !mt-1 text-gray-700 dark:text-white/70'>
                {experienceItem.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
