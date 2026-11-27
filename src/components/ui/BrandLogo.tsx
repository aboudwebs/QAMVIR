"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "w-9 h-9",
  showText = true,
}) => {
  const { language } = useApp();

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 720 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-label="ABOUDWEB logo"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M360 62 L536 439 L486 439 L360 169 L235 439 L184 439 Z"
            fill="currentColor"
            className="text-neutral-900 dark:text-white"
          />
          <path
            d="M360 269 L446 439 L407 439 L360 346 L313 439 L273 439 Z"
            fill="currentColor"
            className="text-neutral-900 dark:text-white"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white font-sans leading-none">
            ABOUDWEB
          </span>
          <span className="text-[10px] tracking-widest text-neutral-500 dark:text-neutral-400 font-mono uppercase mt-1">
            {language === "ar" ? "تصميم وتطوير ويب" : "Web Development"}
          </span>
        </div>
      )}
    </div>
  );
};
