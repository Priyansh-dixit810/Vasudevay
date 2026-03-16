"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/sections/intro-loader";
import Header from "@/components/layout/header";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <IntroLoader onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
        </>
      )}
    </>
  );
}