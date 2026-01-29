"use client";

import SelectableListItem from "./SelectableListItem";
import styles from "./Industries.module.css";

import { useState } from "react";

const industries = [
  "Металлургическая промышленность",
  "Машиностроительная промышленность",
  "Химическая промышленность",
  "Легкая промышленность",
  "Промышленность строительных и нерудных материалов",
  "Производство упаковки",
  "Мебельное производство",
  "Угольная промышленность",
  "Медицинские изделия",
];

const industriesTitle = "ОТРАСЛИ";

export default function Industries() {
  const [active, setActive] = useState(industries[0]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{industriesTitle}</h2>
      <ul className={styles.list}>
        {industries.map((item) => (
          <SelectableListItem
            key={item}
            value={item}
            active={active === item}
            onClick={() => setActive(item)}
          />
        ))}
      </ul>
    </div>
  );
}
