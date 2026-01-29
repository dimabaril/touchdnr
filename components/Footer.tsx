"use client";

import HomeButton from "./HomeButton";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer className={styles.footer}>
      <HomeButton />
    </footer>
  );
}
