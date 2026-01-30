import styles from "./StatCard.module.css";

interface StatCardProps {
  title: string;
  value: string;
  hint: string;
}

export default function StatCard({ title, value, hint }: StatCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>
          {value.replace(" млн руб", "")}
          <span> млн руб</span>
        </div>
        <div className={styles.hint}>{hint}</div>
      </div>
    </div>
  );
}
