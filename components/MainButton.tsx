import Link from "next/link";
import Image from "next/image";
import styles from "./MainButton.module.css";

interface MainButtonProps {
  href: string;
  label: string;
  icon: string;
  width: number;
  height: number;
}

export default function MainButton({
  href,
  label,
  icon,
  width,
  height,
}: MainButtonProps) {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.button}>
        <div className={styles.label}>{label}</div>
        <Image
          src={icon}
          alt={`${icon}`}
          width={width}
          height={height}
          className={styles.icon}
        />
      </div>
    </Link>
  );
}
