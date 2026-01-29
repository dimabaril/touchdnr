import Image from "next/image";
import styles from "./StepCard.module.css";

export interface StepCardProps {
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
  label?: string; // основная надпись с цифрой
  text?: string; // основной текст
  deadline?: string; // срок рассмотрения
  index?: number; // номер шага
}

export default function StepCard({
  image,
  imageAlt = "",
  imagePosition = "top",
  label,
  text,
  deadline,
  index,
}: StepCardProps) {
  return (
    <div className={styles.card}>
      {image && imagePosition === "top" && (
        <Image
          className={styles.cardImage}
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
        />
      )}

      <div className={styles.cardContent}>
        {label && (
          <div className={styles.cardLabel}>
            <div className={styles.cardIndex}>
              {typeof index === "number" ? `${index + 1}` : ""}
            </div>
            <div className={styles.cardLabelText}>{label}</div>
          </div>
        )}

        {text && <div className={styles.cardText}>{text}</div>}

        {deadline && <div className={styles.cardDeadline}>{deadline}</div>}
      </div>

      {image && imagePosition === "bottom" && (
        <Image
          className={styles.cardImage}
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
        />
      )}
    </div>
  );
}
