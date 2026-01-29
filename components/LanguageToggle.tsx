"use client";

import { useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState("RU");

  return (
    <div
      className="flex w-[213px] h-[62px] p-[8px_8px_10px_10px] bg-[#9D9D9D4D] rounded-full items-center justify-between font-actay font-bold text-[18px]"
      style={{
        border: "1px solid transparent",
        boxShadow: "1px -1px 0px 2px #FFFFFF63 inset",
        backdropFilter: "blur(2px)",
      }}
    >
      <button
        className={
          "flex-1 h-full rounded-full leading-[45px] transition-colors " +
          (lang === "RU"
            ? "bg-[#FFFFFF99] text-[#737373] shadow-[2px_-2px_0px_1px_#FFFFFF80_inset]"
            : "text-brand-white")
        }
        onClick={() => setLang("RU")}
      >
        РУС
      </button>
      <button
        className={
          "flex-1 h-full rounded-full leading-[45px] transition-colors " +
          (lang === "EN"
            ? "bg-[#FFFFFF99] text-[#737373] shadow-[2px_-2px_0px_1px_#FFFFFF80_inset]"
            : "text-brand-white")
        }
        onClick={() => setLang("EN")}
      >
        ENG
      </button>
    </div>
  );
}
