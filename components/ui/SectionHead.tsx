"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

// Editorial section heading — single confident title (no number, no rule).
export function SectionHead({ title, id }: { title: string; id?: string }) {
  return (
    <motion.div className="section-head" id={id ? `head-${id}` : undefined} {...reveal()}>
      <h2 className="section-head__title">{title}</h2>
    </motion.div>
  );
}
