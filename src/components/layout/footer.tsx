"use client";

import {
  Copyright,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useThemeStore } from "@/store/theme";
import { usePathname } from "next/navigation";
import { useLoadingStore } from "@/store/loading";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Footer() {
  const isDark = useThemeStore((s) => s.theme) === "dark";
  const themeTransition = "transition-colors duration-700";
  const textColor = isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black";
  const headingColor = isDark ? "text-white" : "text-black";
  const hasFinishedLoading = useLoadingStore((s) => s.hasFinishedLoading);
  const path = usePathname();
  const shouldShow = path !== "/" || hasFinishedLoading;
  if(!shouldShow) return null;

  return (
    <footer
      className={`relative w-full overflow-hidden ${themeTransition} ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/footer.png"
          alt="Footer background"
          fill
          className={`object-cover ${themeTransition} ${
            isDark ? "opacity-20 grayscale" : "opacity-40"
          }`}
          sizes="100vw"
          priority
        />
        <div
          className={`absolute inset-0 ${themeTransition} ${
            isDark ? "bg-black/70" : "bg-white/40"
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-center px-6 py-12 text-center md:px-12 border-b border-transparent">
          <p
            className={`${montserrat.className} max-w-2xl text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] md:text-base ${themeTransition} ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Designing spaces with purpose, identity, and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-6 px-6 py-16 sm:grid-cols-2 md:px-12 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h1
              className={`${montserrat.className} text-2xl uppercase tracking-[0.3em] md:text-3xl ${themeTransition} ${headingColor}`}
            >
              Oskad
            </h1>
            <div className={`flex flex-col gap-2 text-[10px] sm:text-xs leading-relaxed ${themeTransition} ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              <p>One Stop for Konstruction Architecture and Design</p>
              <p className="mt-2 font-medium">oskad1234@gmail.com</p>
            </div>
          </div>

          {/* Links: Oskad */}
          <div className="flex flex-col gap-4">
            <h2 className={`${montserrat.className} text-sm font-semibold uppercase tracking-widest ${headingColor}`}>
              Company
            </h2>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <a href="#home" className={`transition ${textColor}`}>Home</a>
              <a href="#contact" className={`transition ${textColor}`}>Contact Us</a>
              <a href="#about" className={`transition ${textColor}`}>About</a>
            </nav>
          </div>

          {/* Links: Services */}
          <div className="flex flex-col gap-4">
            <h2 className={`${montserrat.className} text-sm font-semibold uppercase tracking-widest ${headingColor}`}>
              Services
            </h2>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <a href="#" className={`transition ${textColor}`}>Architecture</a>
              <a href="#" className={`transition ${textColor}`}>Urban Planning</a>
              <a href="#" className={`transition ${textColor}`}>Interior Design</a>
            </nav>
          </div>

          {/* Links: Events */}
          <div className="flex flex-col gap-4">
            <h2 className={`${montserrat.className} text-sm font-semibold uppercase tracking-widest ${headingColor}`}>
              Explore
            </h2>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <a href="#blogs" className={`transition ${textColor}`}>Blogs</a>
              <a href="#story" className={`transition ${textColor}`}>Story</a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h2 className={`${montserrat.className} text-sm font-semibold uppercase tracking-widest ${headingColor}`}>
              Follow Us
            </h2>
            <div className={`flex gap-5 ${themeTransition} ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              <a href="#" aria-label="Twitter" className={isDark ? "hover:text-white" : "hover:text-black"}><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" className={isDark ? "hover:text-white" : "hover:text-black"}><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className={isDark ? "hover:text-white" : "hover:text-black"}><Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className={isDark ? "hover:text-white" : "hover:text-black"}><Youtube size={18} /></a>
            </div>
          </div>
        </div>

        <div
          className={`border-t px-6 py-8 md:px-12 ${themeTransition} ${
            isDark ? "border-gray-800 bg-black" : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
            <div className={`flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-widest ${themeTransition} ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              <span>Copyright 2026</span>
              <Copyright size={10} />
              <span className="font-medium">Oskad Group</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
              <a href="#" className={`${montserrat.className} uppercase text-[10px] tracking-wider transition ${textColor}`}>Terms</a>
              <a href="#" className={`${montserrat.className} uppercase text-[10px] tracking-wider transition ${textColor}`}>Privacy</a>
              <a href="#" className={`${montserrat.className} uppercase text-[10px] tracking-wider transition ${textColor}`}>Location</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}