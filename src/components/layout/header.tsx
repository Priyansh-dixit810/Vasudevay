"use client";

import { useThemeStore } from "@/store/theme";
import { motion } from "framer-motion";

function Header() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 border-b z-50 transition-colors duration-500
      ${isDark ? " bg-black/80text-white border-white/10 backdrop-blur-md" : "bg-white/80 text-black border-black/5 backdrop-blur-md"}`}
    >
      <div className="text-xl tracking-[0.3em] font-light uppercase select-none">
        OSKAD
      </div>

      <motion.div 
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-7 h-7 rounded-full cursor-pointer flex items-center px-1 transition-all duration-300 border
        ${isDark ? "bg-neutral-900 border-lime-500/40" : "bg-neutral-100 border-black/10"}`}
      >
        <span className="sr-only">Toggle Theme</span>
      </motion.div>
    </motion.header>
  );
}

export default Header;