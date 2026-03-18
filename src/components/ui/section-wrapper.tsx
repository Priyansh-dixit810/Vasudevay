"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full snap-start flex flex-col"
    >
      {children}
    </motion.section>
  );
}