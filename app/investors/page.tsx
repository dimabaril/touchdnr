"use client";

import styles from "./InvestorsPage.module.css";

import StepCard, { StepCardProps } from "./StepCard";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function InvestorsPage() {
  const steps: StepCardProps[] = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      imagePosition: "top",
      label: "Официальное обращение",
      text: "Официальное обращение в ГУП ДНР «КРД» посредством электронной почты: info@krdonbass.ru",
      deadline: "Срок рассмотрения: 1 день",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      imagePosition: "bottom",
      label: "Регистрация заявки",
      text: `Регистрация заявки в ГУП ДНР «КРД» \n -Проверка юр. лица заявителя \n -Рассмотрение инвестиционного проекта`,
      deadline: "Срок рассмотрения: до 10 дней",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      imagePosition: "top",
      label: "Консультационная поддержка",
      text: `Консультационная поддержка по финансовым, организационным и земельным вопросам \n -Личная встреча или ВКС для детализации проекта`,
      deadline: "Срок рассмотрения: 1 день",
    },
    {
      label:
        "Определение порядка дальнейшего сопровождения / инвестиционной площадки",
      deadline: "Срок рассмотрения: 7 дней",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      imagePosition: "top",
      label: "Официальное обращение",
      text: "Официальное обращение в ГУП ДНР «КРД» посредством электронной почты: info@krdonbass.ru",
      deadline: "Срок рассмотрения: 1 день",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      imagePosition: "bottom",
      label: "Регистрация заявки",
      text: `Регистрация заявки в ГУП ДНР «КРД» \n -Проверка юр. лица заявителя \n -Рассмотрение инвестиционного проекта`,
      deadline: "Срок рассмотрения: до 10 дней",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      imagePosition: "top",
      label: "Консультационная поддержка",
      text: `Консультационная поддержка по финансовым, организационным и земельным вопросам \n -Личная встреча или ВКС для детализации проекта`,
      deadline: "Срок рассмотрения: 1 день",
    },
    {
      label:
        "Определение порядка дальнейшего сопровождения / инвестиционной площадки",
      deadline: "Срок рассмотрения: 7 дней",
    },
  ];

  return (
    <main className={styles.main}>
      <OverlayScrollbarsComponent className="pb-[153px]">
        <div className={styles.steps}>
          {/* костыль */}
          <div className="w-[184px] shrink-0"></div>
          {steps.map((step, i) => (
            <StepCard key={i} {...step} index={i} />
          ))}
          {/* костыль */}
          <div className="w-[184px] shrink-0"></div>
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}
