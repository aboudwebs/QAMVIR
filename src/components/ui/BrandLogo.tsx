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
        {/* Vector trace of the supplied white monogram; transparent background */}
        <svg
          viewBox="0 0 914 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105 text-neutral-900 dark:text-white"
          role="img"
          aria-label="ABOUDWEB logo"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M 913,29 L 889,29 L 888,30 L 847,30 L 846,29 L 777,29 L 774,30 L 773,29 L 771,30 L 696,187 L 691,195 L 678,225 L 643,295 L 637,310 L 616,351 L 603,381 L 580,426 L 574,441 L 480,637 L 477,636 L 462,602 L 454,588 L 453,583 L 448,575 L 438,551 L 418,511 L 411,493 L 400,472 L 357,377 L 349,363 L 345,351 L 331,324 L 330,319 L 322,304 L 321,299 L 316,291 L 312,280 L 310,278 L 306,267 L 303,263 L 297,248 L 295,246 L 294,241 L 289,233 L 271,193 L 254,205 L 235,223 L 213,252 L 199,279 L 190,303 L 188,312 L 190,321 L 192,323 L 256,463 L 267,484 L 301,559 L 315,586 L 319,597 L 331,620 L 334,629 L 336,631 L 412,793 L 414,794 L 536,794 L 555,758 L 562,741 L 593,679 L 595,679 L 691,794 L 851,794 L 853,793 L 805,736 L 789,715 L 775,700 L 768,690 L 679,585 L 672,575 L 655,556 L 655,553 L 859,138 L 906,46 Z"
            fill="currentColor"
          />
          <path
            d="M 390,1 L 372,1 L 371,0 L 329,1 L 320,3 L 302,4 L 253,15 L 218,27 L 184,43 L 159,58 L 134,76 L 109,98 L 90,118 L 63,152 L 48,175 L 37,195 L 22,230 L 16,247 L 15,254 L 13,257 L 4,297 L 0,332 L 0,381 L 4,416 L 10,446 L 12,449 L 19,475 L 28,498 L 30,500 L 31,505 L 43,529 L 63,561 L 79,582 L 103,609 L 131,634 L 163,657 L 183,669 L 229,690 L 232,690 L 256,699 L 277,703 L 281,705 L 292,706 L 296,708 L 316,709 L 324,711 L 324,708 L 304,669 L 300,658 L 295,650 L 291,639 L 289,637 L 285,626 L 280,618 L 254,561 L 231,546 L 216,534 L 202,521 L 186,503 L 175,488 L 160,460 L 151,438 L 147,425 L 147,421 L 145,418 L 141,398 L 138,370 L 138,340 L 141,314 L 145,295 L 148,288 L 148,284 L 150,282 L 154,268 L 163,247 L 175,226 L 198,196 L 227,169 L 251,153 L 273,142 L 278,141 L 280,139 L 286,138 L 297,133 L 306,132 L 314,129 L 341,125 L 377,125 L 410,130 L 445,142 L 477,160 L 500,178 L 525,204 L 545,233 L 558,260 L 564,276 L 565,283 L 567,286 L 568,294 L 570,297 L 571,307 L 573,311 L 575,334 L 576,334 L 585,316 L 586,311 L 597,291 L 622,236 L 630,222 L 634,211 L 658,163 L 651,150 L 625,116 L 600,91 L 579,73 L 545,50 L 506,30 L 468,16 L 427,6 L 398,3 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white font-sans leading-none">
            {language === "ar" ? "ABOUDWEB" : "ABOUDWEB"}
          </span>
          <span className="text-[10px] tracking-widest text-neutral-500 dark:text-neutral-400 font-mono uppercase mt-1">
            {language === "ar" ? "تصميم وتطوير ويب" : "Web Development"}
          </span>
        </div>
      )}
    </div>
  );
};
