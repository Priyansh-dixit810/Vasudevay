"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/lib/team";
import { Montserrat } from "next/font/google";
import { useThemeStore } from "@/store/theme";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function TeamMemberClient({ member }: { member: TeamMember }) {
  const isDark = useThemeStore((s) => s.theme) === "dark";

  const socials = [
    { icon: <Instagram size={18} />, link: member.instagram },
    { icon: <Facebook size={18} />, link: member.facebook },
    { icon: <Twitter size={18} />, link: member.twitter },
    { icon: <Linkedin size={18} />, link: member.linkedin },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen w-full pt-20 flex flex-col gap-16 transition-colors duration-700 pb-3 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <motion.div className="min-h-[70vh] md:h-[70vh] w-full flex p-4 flex-col md:flex-row">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={member?.src}
          alt={member?.name || "Member Image"}
          className="h-[42vh] md:h-full w-full md:w-1/3 object-cover"
        />

        <motion.div className="flex-1 flex w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            }}
            className={`my-4 w-full flex flex-col gap-8 justify-center px-6 py-8 md:py-0 md:pl-16 md:pr-8 transition-colors duration-700 ${
              isDark ? "bg-neutral-800/30" : "bg-neutral-100/80"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              }}
              className="flex flex-col gap-1"
            >
              <h1
                className={`${montserrat.className} uppercase font-bold tracking-wide text-3xl md:text-5xl lg:text-7xl ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {member.name}
              </h1>

              <h2
                className={`${montserrat.className} uppercase tracking-[0.22em] md:tracking-[0.3em] text-xs md:text-lg opacity-60 mt-2`}
              >
                {member.role}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              }}
              className={`${montserrat.className} text-[10px] md:text-xs leading-relaxed opacity-70 uppercase tracking-[0.18em] md:tracking-widest max-w-full lg:max-w-2xl`}
            >
              {member.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              className="flex flex-wrap gap-4 md:gap-6 mt-2 md:mt-4"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`transition-colors p-2 border rounded-full ${
                    isDark
                      ? "text-white/50 border-white/10 hover:text-white hover:bg-white/5"
                      : "text-black/50 border-black/10 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="flex-1 flex items-center">
        <motion.div
          className={`h-full w-full flex flex-col py-12 px-6 mx-4 md:py-16 md:px-8 md:mx-10 lg:py-20 lg:px-10 lg:mx-40 transition-colors duration-700 ${
            isDark ? "bg-neutral-800/30" : "bg-neutral-100/80"
          }`}
        >
          <motion.div className="flex flex-col gap-8 md:gap-10">
            <motion.div className="flex flex-col gap-4">
              <motion.h1
                className={`${montserrat.className} uppercase tracking-widest font-semibold text-xl md:text-2xl lg:text-5xl ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                About Me
              </motion.h1>

              <motion.p
                className={`${montserrat.className} text-sm md:text-base leading-7 md:leading-8 opacity-80 max-w-5xl text-justify ${
                  isDark ? "text-white/80" : "text-black/80"
                }`}
              >
                {member.about}
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col gap-4">
              <motion.h1
                className={`${montserrat.className} uppercase tracking-[0.2em] text-xl md:text-2xl lg:text-3xl ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                My Past Experience
              </motion.h1>

              <motion.p
                className={`${montserrat.className} text-sm md:text-base leading-7 md:leading-8 opacity-80 max-w-5xl text-justify ${
                  isDark ? "text-white/80" : "text-black/80"
                }`}
              >
                {member.experience}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TeamMemberClient;