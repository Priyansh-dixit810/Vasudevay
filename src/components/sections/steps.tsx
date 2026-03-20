import { useThemeStore } from "@/store/theme";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Box, ClipboardList, Lightbulb } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
})
const steps = [
  {
    title: "Discovery & Brief",
    description:
      "We take time to deeply probe and grasp the aims to understand what truly matters.",
    icon: Lightbulb,
    iconBg: "bg-[#d8c69a] text-black",
  },
  {
    title: "Concept & Planning",
    description:
      "Turning ideas into plans, moodboards, and concepts to visualize the direction of your space.",
    icon: ClipboardList,
    iconBg: "bg-white text-black",
  },
  {
    title: "3D Modeling & Visualization",
    description:
      "Transforming concepts into detailed 3D models and photorealistic renders for review and refinement.",
    icon: Box,
    iconBg: "bg-[#d8c69a] text-black",
  },
  {
    title: "Delivery & Review",
    description:
      "Providing final files for easy visual reach for execution, monitoring, or client approval.",
    icon: BadgeCheck,
    iconBg: "bg-white text-black",
  },
];
function Steps() {
  const isDark = useThemeStore((s) => s.theme) === "dark";
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="min-h-[80vh] relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "Dark" : "Light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={
              isDark ? "/images/darkprocess.png" : "/images/lightprocess.jpg"
            }
            alt="Process image"
            fill
            className=" object-cover"
          />

          <div
            className={`absolute inset-0 ${
              isDark ? "bg-black/65" : "bg-white/20"
            }`}
          />

          <div className="relative z-10 mx-auto flex flex-col items-center px-6 py-10 md:px-10 lg:px-16">
            <motion.h1 className={`${montserrat.className} mb-10 text-center text-4xl font-extrabold uppercase tracking-tighter text-white sm:text-5xl md:mb-14 md:text-7xl lg:text-8xl`}>
              How It Works
            </motion.h1>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10"
            >
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={cardVariants}
                    transition={{ duration: 0.6 }}
                    className="relative pt-14"
                  >
                    <div
                      className={`absolute left-1/2 top-0 z-20 flex h-24 w-24 ${step.iconBg} rounded-full items-center justify-center -translate-x-1/2`}
                    >
                      <Icon size={34} strokeWidth={1.8} />
                    </div>

                    <div
                      className={`relative  min-h-40 md:min-h-80 rounded-[32px] border text-center shadow-2xl px-6 pb-8 pt-16 ${
                        isDark
                          ? "border-white/10 bg-white/10"
                          : "border-white/30 bg-black/70"
                      }`}
                    >
                      <div
                        className={`absolute h-14 w-28 top-0 left-1/2 -translate-x-1/2 -translate-y-px ${
                          isDark ? "bg-black/50" : "bg-black/20"
                        }`}
                        style={{
                          borderBottomLeftRadius: "999px",
                          borderBottomRightRadius: "999px",
                        }}
                      />
                      <h3 className="text-xl font-semibold text-white lg:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-lg leading-6 text-white/80 lg:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Steps;
