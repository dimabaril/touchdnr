import Link from "next/link";
import Image from "next/image";

interface MainButtonProps {
  href: string;
  label: string;
  icon: string;
  variant: "red" | "orange" | "beige";
  width: number;
  height: number;
}

export function MainButton({
  href,
  label,
  icon,
  width,
  height,
}: MainButtonProps) {
  return (
    <Link href={href} className="block">
      <div
        className="flex gap-[30px] items-center h-[100px] p-[15px] rounded-[25px]"
        style={{
          background: "#8585854D",
          border: "1px solid #D5D5D5",
          boxShadow: "0px 20px 26.1px 0px #00000040",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          className="flex items-center justify-center h-[70px] px-[25px] rounded-[15px] font-actay font-bold text-[20px] leading-none text-white tracking-[0.4px] whitespace-pre-line text-left"
          style={{
            background:
              "radial-gradient(69.31% 57.53% at 30.69% 60.4%, rgba(210, 147, 88, 0.68) 49.32%, rgba(237, 181, 135, 0.68) 100%)" /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
            border: "1px solid #FFFFFF",
            boxShadow: `-1px 4px 6.6px 0px #FFEFBB, 1px -2px 1px 2px #EAC991 inset, 2px -3px 0px 2px #FFEFBB inset`,
            textShadow: "0px 0px 23.2px #0000001A",
          }}
        >
          {label}
        </div>

        <Image
          src={icon}
          alt={`${icon}`}
          width={width}
          height={height}
          style={{
            filter: "drop-shadow(0px 0px 14.9px rgba(0, 0, 0, 0.25))",
          }}
        />
      </div>
    </Link>
  );
}
