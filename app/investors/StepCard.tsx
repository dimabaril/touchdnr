import Image from "next/image";

export interface StepCardProps {
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
  label?: string; // основная надпись с цифрой
  text?: string; // основной текст
  deadline?: string; // срок рассмотрения
  index?: number; // номер шага
}

export default function StepCard({
  image,
  imageAlt = "",
  imagePosition = "top",
  label,
  text,
  deadline,
  index,
}: StepCardProps) {
  return (
    <div
      className="flex flex-col justify-between gap-[10px] w-[394px] p-[10px] rounded-[25px] bg-[#FFFFFF33] shadow-[0px_13px_23.5px_0px_#00000026,_0px_40px_67.6px_0px_#00000045]"
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      {image && imagePosition === "top" && (
        <Image
          className="rounded-[20px]"
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
        />
      )}

      <div className="flex flex-col gap-[15px] p-[10px]">
        {label && (
          <div className="flex gap-[10px] items-center font-actay font-bold text-[20px] leading-[1.2] tracking-[-2.3%]">
            <div className="flex-shrink-0 flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF99]  text-[#737373] text-shadow-[0px_0px_23.2px_0px_#0000001A]">
              {typeof index === "number" ? `${index + 1}` : ""}
            </div>
            <div className="text-[#636363] text-shadow-[0px_0px_16.8px_0px_#0000003D]">
              {label}
            </div>
          </div>
        )}

        {text && (
          <div className="bg-[#9D9D9D8A] rounded-[20px] p-[25px_15px_30px_20px] font-sans font-bold text-white text-[16px] leading-[1.5] tracking-[3%]">
            {text}
          </div>
        )}

        {deadline && (
          <div className="self-end p-[15px_25px] bg-[#FFFFFF99] rounded-full shadow-[2px_-2px_0px_1px_#FFFFFF85_inset] text-[#737373] text-shadow-[0px_0px_23.2px_0px_#0000001A] font-actay font-bold text-[14px] leading-[1.5]">
            {deadline}
          </div>
        )}
      </div>

      {image && imagePosition === "bottom" && (
        <Image
          className="rounded-[20px]"
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
        />
      )}
    </div>
  );
}
