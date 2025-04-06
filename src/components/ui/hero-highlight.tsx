"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full group",
        containerClassName
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
  animationTime?: number;
  phone?: boolean;
};
export const Highlight: React.FC<HighlightProps> = ({
  children,
  className,
  animationTime = 10,
  phone = false,
}) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: animationTime,
        ease: "linear",
        delay: 0,
      }}
      className={cn(
        `relative inline-block px-2 py-1 bg-yellow-300 dark:bg-yellow-500 rounded-md`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
