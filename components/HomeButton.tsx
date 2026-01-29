import Link from "next/link";
import Image from "next/image";

export default function HomeButton() {
  return (
    <Link href="/" aria-label="Go home">
      <div className="flex justify-center items-center w-[103px] h-[103px] rounded-[25px] bg-[#FFFFFF99] shadow-[2px_-2px_0px_1px_#FFFFFF85_inset]">
        <div
          className="flex justify-center items-center w-[74px] h-[74px] rounded-full"
          style={{
            border: "1px solid #FFEFBB",
            background:
              "radial-gradient(69.31% 57.53% at 30.69% 60.4%, rgba(210, 147, 88, 0.68) 49.32%, rgba(237, 181, 135, 0.68) 100%)",
            boxShadow:
              "-1px 4px 6.6px 0px #FFEFBB, 1px -2px 1px 2px #EAC991 inset, 2px -3px 0px 2px #FFEFBB inset",
          }}
        >
          <Image
            src="/images/home.svg"
            alt="Home Icon"
            width={32}
            height={32}
            style={{ transform: "translateY(-2px)" }}
          />
        </div>
      </div>
    </Link>
  );
}
