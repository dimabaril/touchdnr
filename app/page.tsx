"use client";

import Image from "next/image";

import LiquidGlass from "liquid-glass-react";
import { useRef, useState } from "react";
import { MainButton } from "@/components/MainButton";

export default function Home() {
  // User Info Card Controls
  const [displacementScale, setDisplacementScale] = useState(15);
  const [blurAmount, setBlurAmount] = useState(0.01);
  const [saturation, setSaturation] = useState(140);
  const [aberrationIntensity, setAberrationIntensity] = useState(2);
  const [elasticity, setElasticity] = useState(0);
  const [cornerRadius, setCornerRadius] = useState(4);
  const [userInfoOverLight, setUserInfoOverLight] = useState(false);
  const [userInfoMode, setUserInfoMode] = useState<
    "standard" | "polar" | "prominent" | "shader"
  >("standard");

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className=" flex flex-col ">
      <h1
        className="bg-[#FFFFFF99] w-[475px] h-[141px] absolute top-[59px] left-[200px] rounded-[25px] p-[40px] shadow-[0px_13px_23.5px_0px_#00000026] font-actay font-bold text-[32px] text-[#8B8B8B] leading-[120%] tracking-normal"
        style={{ textShadow: "0px 0px 23.2px #0000001A" }}
      >
        Донецкая Народная Республика
      </h1>
      <div className="absolute top-[236px] left-[200px]">
        <h3 className="sr-only">Возрождаем Донбасс вместе!</h3>
        <p className="sr-only">#ДОНБАССВМЕСТЕ</p>

        <Image
          className=" "
          src="/images/main-vdv.png"
          alt="slogan"
          width={477}
          height={147}
          style={{
            filter: "drop-shadow(0px 0px 14.9px rgba(0, 0, 0, 0.25))",
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
          left: "1073px",
          top: "554px",
          padding: "25px 0px",
          position: "relative",
          width: "796px",
          border: "1px solid",
        }}
      >
        <LiquidGlass
          padding="0"
          displacementScale={displacementScale}
          blurAmount={blurAmount}
          saturation={saturation}
          aberrationIntensity={aberrationIntensity}
          elasticity={elasticity}
          cornerRadius={cornerRadius}
          mouseContainer={containerRef}
          overLight={userInfoOverLight}
          mode={userInfoMode}
        >
          <ul className="rounded-[20px] w-[576px] mx-auto font-sans font-medium text-[18px] text-white bg-[#9089854D] list-disc p-[30px_25px_40px_50px] leading-[150%] tracking-[0.54px] shadow-[0px_0px_23.2px_0px_#0000001A]">
            <li>
              Регион с богатой промышленной историей и мощным экономическим
              потенциалом. Территория инноваций, передовых технологий и
              перспективных инвестиционных возможностей.
            </li>
            <li>
              Откройте для себя ключевые отрасли промышленности, познакомьтесь с
              ведущими предприятиями региона и узнайте о возможностях для
              развития бизнеса.
            </li>
          </ul>
        </LiquidGlass>
      </div>

      {/* Navigation */}
      <nav className="absolute w-[1446px]  bottom-[82px] flex justify-between  left-1/2  -translate-x-1/2 ">
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
      {/* <LiquidGlass
        displacementScale={displacementScale}
        blurAmount={blurAmount}
        saturation={saturation}
        aberrationIntensity={aberrationIntensity}
        elasticity={elasticity}
        cornerRadius={cornerRadius}
        mouseContainer={containerRef}
        overLight={userInfoOverLight}
        mode={userInfoMode}
        style={{
          position: "fixed",
          top: "15%",
          left: "43%",
          zIndex: 20,
        }}
      >
        <div className="w-72 text-shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User Info</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-white">Software Engineer</p>
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-white">Email:</span>
                <span className="text-sm">john.doe@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white">Location:</span>
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white">Joined:</span>
                <span className="text-sm">March 2023</span>
              </div>
            </div>
          </div>
        </div>
      </LiquidGlass> */}
    </main>
  );
}
