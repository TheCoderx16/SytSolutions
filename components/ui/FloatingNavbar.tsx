"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[5000] flex justify-center px-3 sm:top-10 sm:px-4 md:px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "pointer-events-auto flex w-full min-w-0 max-w-full sm:w-auto sm:max-w-fit",
          "min-h-12 sm:min-h-[3.25rem] px-3 py-2.5 sm:px-5 sm:py-3 md:px-10 md:py-5",
          "md:min-w-[70vw] lg:min-w-fit lg:max-w-fit",
          "rounded-lg border border-white/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "items-center justify-between gap-2 sm:gap-3 md:gap-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex shrink-0 items-center border-r border-gray-200/80 pr-2 sm:pr-4 md:pr-9">
          <h3 className="text-sm font-semibold tracking-tight sm:text-base md:text-lg whitespace-nowrap">
            Syt Solutions
          </h3>
        </div>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex min-h-10 min-w-0 flex-1 items-center justify-center gap-1 px-0.5 text-center text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 sm:min-h-0 sm:w-auto sm:flex-none sm:px-0"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-xs !cursor-pointer sm:text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
