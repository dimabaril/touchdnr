import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={84}
          height={118}
          className={styles.logo}
        />
        <h1 className={styles.title}>Донецкая Народная Республика</h1>
      </div>
      <div>
        <LanguageToggle />
      </div>
    </header>
  );
}
