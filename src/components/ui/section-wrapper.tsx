"use client";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  fullHeight?: boolean;
  className?: string;
};

export default function SectionWrapper({
  children,
  id,
  fullHeight = true,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={`w-full snap-start flex flex-col ${
        fullHeight ? "min-h-screen" : ""
      } ${className}`}
    >
      {children}
    </motion.section>
  );
}