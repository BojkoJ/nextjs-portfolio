import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { activeSectionType } from "./types";

export function useSectionInView(
  activeSection: activeSectionType,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  /*   if (inView) { - toto je nevhodné - místo toho se používá useEffect
    setActiveSection("About");
  } */

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [inView, setActiveSection, timeOfLastClick, activeSection]);

  return { ref };
}
