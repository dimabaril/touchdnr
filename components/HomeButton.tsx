import Link from "next/link";
import Image from "next/image";
import styles from "./HomeButton.module.css";

export default function HomeButton() {
  return (
    <Link href="/" aria-label="Go home">
      <div className={styles.outer}>
        <div className={styles.button}>
          <Image
            src="/images/home.svg"
            alt="Home Icon"
            width={32}
            height={32}
            className={styles.icon}
          />
        </div>
      </div>
    </Link>
  );
}
