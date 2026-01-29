"use client";

import SelectableListItem from "./SelectableListItem";
import styles from "./Companies.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.title}>{companiesTitle}</h2>
      <ul className={styles.list}>
        {companies.map((item) => (
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
