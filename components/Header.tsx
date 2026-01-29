import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Header() {
  return (
    <header className="flex justify-between absolute top-[41px] left-[53px] w-[1815px] h-[118px]">
      <div className="flex gap-[35px] items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={84}
          height={118}
          className=""
          style={{
            filter: "drop-shadow(0px 10px 14.9px rgba(0, 0, 0, 0.25))",
          }}
        />
        <h1
          className="bg-[#ffffff80] border border-white/80 h-[100px] flex items-center px-[40px] rounded-[25px] font-actay font-bold text-[28px] text-[#8B8B8B] leading-[120%] tracking-normal"
          style={{
            boxShadow: "0px 13px 23.5px 0px #00000026",
            backdropFilter: "blur(4px)",
            textShadow: "0px 0px 23.2px #0000001A",
          }}
        >
          Донецкая Народная Республика
        </h1>
      </div>
      <div className="">
        <LanguageToggle />
      </div>
    </header>
  );
}
