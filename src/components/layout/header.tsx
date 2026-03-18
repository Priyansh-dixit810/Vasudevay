"use client";

import { useLoadingStore } from "@/store/loading";
import { useThemeStore } from "@/store/theme";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Header() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = useThemeStore((s) => s.theme) === "dark";
  const pathname = usePathname();
  const hasFinishedLoading = useLoadingStore((s)=>s.hasFinishedLoading);
  const shouldShow = pathname !== "/" || hasFinishedLoading;

  if (!shouldShow) return null;
  
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 border-b z-50 transition-colors duration-500
      ${isDark ? " bg-black/70/80 text-white border-white/10 backdrop-blur-md" : "bg-white/80 text-black border-black/5 backdrop-blur-md"}`}
    >
      <button 
      onClick={() => {
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
      className="text-xl tracking-[0.3em] font-light uppercase select-none" >
        OSKAD
      </button>

      <div className="flex gap-8">
        <button
          onClick={() => {
            document
              .getElementById("aboutus")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="tracking-widest cursor-pointer hover:opacity-70 transition-opacity"
        >
          About Us
        </button>
      </div>

      <motion.div
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-14 h-7 rounded-full cursor-pointer flex items-center px-1 transition-all duration-300 border
        ${isDark ? "bg-neutral-900 border-lime-500/40" : "bg-neutral-100 border-black/10"}`}
      >
        {isDark && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 rounded-full bg-lime-500/5 blur-[2px]"
          />
        )}

        <motion.div
          animate={{
            x: isDark ? 28 : 0,
            backgroundColor: isDark ? "#a3e635" : "#ffffff",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center shadow-lg`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            className={`text-[10px] ${isDark ? "text-black" : "text-black/40"}`}
          >
            {isDark ? "★" : "●"}
          </motion.div>
        </motion.div>
        <span className="sr-only">Toggle Theme</span>
      </motion.div>
    </motion.header>
  );
}

export default Header;
