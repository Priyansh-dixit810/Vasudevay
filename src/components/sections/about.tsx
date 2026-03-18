"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useThemeStore } from "@/store/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

export default function About() {
  const isDark = useThemeStore((s) => s.theme) === "dark";

  const teamMembers = [
    {
      src: "/images/me.png",
      name: "ID Kritika Kaushik",
      role: "Interior Designer",
      instagram: "https://www.instagram.com/creatikaaaa/",
      linkedin: "https://www.linkedin.com/in/kritika-kaushik-a965b1243/",
      twitter: "",
    },
    {
      src: "/images/me.png",
      name: "Ar. Sejal Kaushik",
      role: "Urban Planner",
      instagram: "https://www.instagram.com/sejalkaushikk/",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/ar-sejal-kaushik/",
    },
    {
      src: "/images/me.png",
      name: "Ar. Omkar Malgave",
      role: "Architect",
      instagram: "https://www.instagram.com/ar.omkar_malgave_09/",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/omkar-malgave/",
    },
  ];

  return (
    <section 
      className={`min-h-screen relative w-full px-4 pb-4 sm:px-6 lg:px-8 transition-colors duration-700 ${
        isDark ? "bg-black/70" : "bg-white"
      }`}
    >
      <div 
        className={`flex w-full flex-col items-center gap-6 px-4 pt-6 pb-28 sm:px-6 sm:pt-16 sm:pb-36 md:pb-48 transition-colors duration-700 ${
          isDark ? "bg-gray-700/20" : "bg-gray-100"
        }`}
      >
        <motion.h1
          className={`${playfair.className} text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-wide leading-tight ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Meet our <br /> awesome team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mx-auto max-w-xs text-center text-sm leading-relaxed sm:max-w-lg sm:text-base md:max-w-2xl ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Step into a world where the art of Interior Design is meticulously
          crafted to bring together timeless elegance and cutting-edge
          innovation, allowing you to transform your living spaces into the
          epitome of luxury.
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto -mt-20 w-full max-w-7xl px-4 sm:-mt-24 sm:px-6 md:-mt-36 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={`group relative aspect-6/5 sm:aspect-4/5 md:aspect-4/3 overflow-hidden rounded-sm shadow-2xl ${
                isDark ? "bg-neutral-900" : "bg-gray-200"
              }`}>
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="mt-4 text-center md:text-left sm:mt-5">
                <h3 className={`text-base sm:text-lg font-light uppercase tracking-[0.18em] ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  {member.name}
                </h3>
                <div className={`mx-auto my-2 h-px w-8 md:mx-0 ${
                  isDark ? "bg-gray-600" : "bg-gray-300"
                }`} />
                <p className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
                  {member.role}
                </p>
              </div>

              <div className={`flex justify-center md:justify-start gap-4 mt-3 ${
                isDark ? "text-white/70" : "text-black/60"
              }`}>
                <a 
                  href={member.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  <Instagram size={15} />
                </a>
                <a 
                  href={member.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  <Twitter size={15} />
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}