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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Footer() {
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <footer
      className={`relative w-full overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/footer.png"
          alt="Footer background"
          fill
          className={`object-cover transition-all duration-700 ${
            isDark ? "opacity-20 grayscale" : "opacity-60"
          }`}
          sizes="100vw"
          priority
        />
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isDark ? "bg-black/70" : "bg-white/50"
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-center px-6 py-10 text-center md:px-12">
          <p
            className={`${montserrat.className} max-w-2xl text-sm uppercase tracking-[0.3em] md:text-base transition-colors duration-700 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Designing spaces with purpose, identity, and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:px-12 lg:grid-cols-5">
          <div className="flex flex-col gap-6">
            <h1
              className={`${montserrat.className} text-3xl uppercase tracking-[0.35em] md:text-4xl transition-colors duration-700 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Oskad
            </h1>
            <p
              className={`${montserrat.className} text-xs transition-colors duration-700 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              One Stop for Konstruction Architecture and Design
            </p>
            <p
              className={`${montserrat.className} text-xs transition-colors duration-700 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              oskad1234@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className={`${montserrat.className} text-lg uppercase tracking-[0.2em] transition-colors duration-700 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Oskad
            </h2>
            <a
              href="#home"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Home
            </a>
            <a
              href="#contact"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Contact Us
            </a>
            <a
              href="#about"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              About
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className={`${montserrat.className} text-lg uppercase tracking-[0.2em] transition-colors duration-700 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Services
            </h2>
            <a
              href="#"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Architecture
            </a>
            <a
              href="#"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Urban Planning
            </a>
            <a
              href="#"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Interior Design
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className={`${montserrat.className} text-lg uppercase tracking-[0.2em] transition-colors duration-700 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Events
            </h2>
            <a
              href="#blogs"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Blogs
            </a>
            <a
              href="#story"
              className={`transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Story
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h2
              className={`${montserrat.className} text-lg uppercase tracking-[0.2em] transition-colors duration-700 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Follow
            </h2>
            <div
              className={`flex gap-4 transition-colors duration-700 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <a
                href="#"
                aria-label="Twitter"
                className={isDark ? "hover:text-white" : "hover:text-black"}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className={isDark ? "hover:text-white" : "hover:text-black"}
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={isDark ? "hover:text-white" : "hover:text-black"}
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className={isDark ? "hover:text-white" : "hover:text-black"}
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 border-t px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12 transition-colors duration-700 ${
            isDark
              ? "border-gray-800 bg-black/80"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8 md:gap-12">
            <a
              href="#"
              className={`${montserrat.className} uppercase text-xs tracking-wider transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className={`${montserrat.className} uppercase text-xs tracking-wider transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`${montserrat.className} uppercase text-xs tracking-wider transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Location
            </a>
          </div>

          <div
            className={`flex items-center gap-2 text-sm transition-colors duration-700 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Copyright 2026 <Copyright size={12} />
          </div>
        </div>
      </div>
    </footer>
  );
}