"use client";
import React from "react";
import { motion } from "framer-motion";

const FuzzyOverlayComponent = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Dont be static on a flowing world.
      </p>
      <p className="text-center text-neutral-400">
        Contact me on the links below.
      </p>
      <div className="flex items-center justify-center gap-3">
        <a href="https://www.instagram.com/thomasalemao.wav/">
          <img src="/instagram.png" alt="" className="size-16" />
        </a>
        <a href="https://wa.me/5547996235145">
          <img src="/whatsapp.png" alt="" className="size-16" />
        </a>
      </div>
    </div>
  );
};

export default FuzzyOverlayComponent;
