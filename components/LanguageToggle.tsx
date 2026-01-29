"use client";

export function LanguageToggle() {
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
        className="flex-1 h-full rounded-full bg-[#FFFFFF99] text-[#737373] leading-[45px]"
        style={{
          boxShadow: "2px -2px 0px 1px #FFFFFF80 inset",
        }}
      >
        РУС
      </button>
      <button className="flex-1 h-full rounded-full text-brand-white leading-[45px]">
        ENG
      </button>
    </div>
  );
}
