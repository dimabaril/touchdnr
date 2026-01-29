"use client";

import { useState } from "react";

const companies = [
  "«Макеевский завод «Лазер»",
  "ДОНФРОСТ, ООО",
  "ЗАВОД КОКСОХИМOОБОРУДОВАНИЕ, ООО",
  "ЭЛЕКТРОЯР ДОНБАСС, ООО",
  "ЯСИНОВАТСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД, НПО, ООО",
  "«Мариупольская машиностроительная компания»",
  "ООО «ЭРЛАЙТ» ARLITE",
];

const companiesTitle = "КОМПАНИИ";

export default function Companies() {
  const [active, setActive] = useState(companies[0]);

  return (
    <div
      className="relative w-[391px] rounded-[25px] p-[10px_50px_10px_10px] bg-[rgba(255,255,255,0.2)] border border-white/80"
      style={{
        backdropFilter: "blur(10px)",
        boxShadow: "0px 13px 23.5px 0px #00000026",
      }}
    >
      <h2
        className="absolute rotate-[90deg] origin-top-left translate-x-[422px] font-actay font-bold text-[80px] leading-[120%] tracking-[0.02em] text-[rgba(255,255,255,0.6)]"
        style={{
          textShadow: "10px 0px 19.8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {companiesTitle}
      </h2>
      <ul className="flex flex-col gap-[10px]">
        {companies.map((item) => (
          <li
            key={item}
            className={
              "p-[20px] rounded-[20px] cursor-pointer font-actay font-bold text-[16px] leading-[120%] tracking-[2%] text-white"
            }
            style={
              active === item
                ? {
                    background:
                      "linear-gradient(88.32deg, rgba(233,85,48,0.68) -9.14%, rgba(191,68,65,0.68) 81.87%)",
                    boxShadow: `
            -1px 4px 13.3px 0px rgba(163,0,0,1),
            1px -2px 1px 1px rgba(205,4,4,0.58) inset,
            2px -3px 0px 1px rgba(255,187,187,1) inset
          `,
                  }
                : {
                    background: "rgba(157,157,157,0.3)",
                  }
            }
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
