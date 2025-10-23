"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { testimonialsData, testimonialsDataCz } from "@/lib/data";
import { FaQuoteLeft } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const Testimonials = () => {
    const { ref } = useSectionInView("Testimonials", 0.5);
    const { language } = useLanguage();

    const TestimonialsData =
        language === "english" ? testimonialsData : testimonialsDataCz;

    return (
        <section
            id="testimonials"
            className="mb-40 max-w-[53rem] scroll-mt-40 sm:mb-40"
            ref={ref}
        >
            <SectionHeading>
                {language === "english" ? (
                    <>Client Testimonials</>
                ) : (
                    <>Ohlasy Klientů</>
                )}
            </SectionHeading>

            <div className="flex flex-col gap-6">
                {TestimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/50 dark:to-purple-900/50 flex items-center justify-center">
                                    <FaQuoteLeft className="text-gray-600 dark:text-gray-300 text-lg" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed italic mb-4">
                                    &ldquo;{testimonial.feedback}&rdquo;
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.clientName}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {language === "english"
                                                ? "Client"
                                                : "Klient"}
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <a
                                            href={testimonial.link}
                                            className="flex text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-500 hover:underline dark:hover:underline"
                                        >
                                            <ExternalLink className="w-5 h-5  pr-1" />
                                            {testimonial.projectName}
                                        </a>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {language === "english"
                                                ? "Project"
                                                : "Projekt"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
