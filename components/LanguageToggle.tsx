"use client";

import { useState } from "react";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const [lang, setLang] = useState("RU");

  return (
    <div className={styles.toggle}>
      <button
        className={lang === "RU" ? styles.active : styles.inactive}
        onClick={() => setLang("RU")}
      >
        РУС
      </button>
      <button
        className={lang === "EN" ? styles.active : styles.inactive}
        onClick={() => setLang("EN")}
      >
        ENG
      </button>
    </div>
  );
}
