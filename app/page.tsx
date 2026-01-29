import Image from "next/image";

import { MainButton } from "@/components/MainButton";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="absolute top-[190px] left-[53px]">
        <h3 className="sr-only">Возрождаем Донбасс вместе!</h3>
        <p className="sr-only">#ДОНБАССВМЕСТЕ</p>

        <Image
          className=" "
          src="/images/main-vdv.png"
          alt="slogan"
          width={569}
          height={175}
          style={{
            filter: "drop-shadow(0px 10px 16.9px rgba(0, 0, 0, 0.25))",
          }}
        />
      </div>
      <Image
        className="absolute z-10 top-[34px] left-[546px]"
        src="/images/main-logo-dnr.png"
        alt="Logo DNR"
        width={828}
        height={828}
      />

      <div
        style={{
          position: "absolute",
          width: "650px",
          right: "52px",
          bottom: "246px",
          padding: "25px 0px",
          borderRadius: "25px",
          background: "rgba(157, 157, 157, 0.3)",
          backdropFilter: "blur(2px)",
        }}
      >
        <ul className="rounded-[20px] w-[430px] mx-auto font-sans font-medium text-[18px] text-white bg-[rgba(157,157,157,0.3)] list-disc p-[30px_25px_40px_50px] leading-[150%] tracking-[0.54px] [text-shadow:0px_0px_23.2px_#0000001A]">
          <li>
            Регион с богатой промышленной историей и мощным экономическим
            потенциалом. Территория инноваций, передовых технологий и
            перспективных инвестиционных возможностей.
          </li>
          <li>
            Откройте для себя ключевые отрасли промышленности, познакомьтесь с
            ведущими предприятиями региона и узнайте о возможностях для развития
            бизнеса.
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <nav className="absolute w-[1446px]  bottom-[98px] flex justify-between  left-1/2  -translate-x-1/2 ">
        <MainButton
          href="/industry"
          label={"Промышленность\nрегиона"}
          icon="/images/icon-industry.svg"
          variant="red"
          width={57}
          height={57}
        />
        <MainButton
          href="/investors"
          label="Для инвесторов"
          icon="/images/icon-investors.svg"
          variant="orange"
          width={65}
          height={57}
        />
        <MainButton
          href="/info"
          label="Информация про регион"
          icon="/images/icon-info.svg"
          variant="beige"
          width={45}
          height={59}
        />
      </nav>
    </main>
  );
}
