"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);

  //bg-gradient-to-b from-gray-300/80 to-gray-400/50 

  return (
    <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="select-none pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700/80 to-white bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Visionary AI

      </span>
      <Particles
        className="absolute inset-0"
        quantity={120}
        ease={80}
        size={0.50}
        color={color}
        refresh
      />
    </div>
  );
}
export default ParticlesDemo;
