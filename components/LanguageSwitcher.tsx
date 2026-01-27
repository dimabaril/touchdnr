"use client";

export function LanguageSwitcher() {
  return (
    <div
      className="flex w-[231px] h-[68px] p-[10px_10px_13px_13px] bg-[#8585854d] rounded-full items-center justify-between backdrop-blur-sm font-actay font-bold text-xl"
      style={{
        border: "1px solid transparent",
        boxShadow: "1px -1px 0px 2px #FFFFFF63 inset",
      }}
    >
      <button
        className="flex-1 h-full rounded-full bg-[#FFFFFF99] text-[#737373] "
        style={{
          boxShadow: "inset 2px -2px 0px 1px #FFFFFF85 ",
        }}
      >
        РУС
      </button>
      <button className="flex-1 h-full rounded-full text-brand-white">
        ENG
      </button>
    </div>
  );
}
