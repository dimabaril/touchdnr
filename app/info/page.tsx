import styles from "./InfoPage.module.css";
import StatCard from "./StatCard";

export default function InfoPage() {
  const stats = [
    {
      title: "Объем производства",
      value: "75 509,55 млн руб",
      hint: "+ 4 863,33 млн руб. (6,9%) к 2024",
    },
    {
      title: "Объем реализации",
      value: "75 509,55 млн руб",
      hint: "+ 4 863,33 млн руб. (6,9%) к 2024",
    },
    {
      title: "Уплаченные налоги",
      value: "75 509,55 млн руб",
      hint: "+ 4 863,33 млн руб. (6,9%) к 2024",
    },
    {
      title: "Среднесписочная численность",
      value: "75 509,55 млн руб",
      hint: "+ 4 863,33 млн руб. (6,9%) к 2024",
    },
    {
      title: "Среднемесячная зарплата",
      value: "75 509,55 млн руб",
      hint: "+ 4 863,33 млн руб. (6,9%) к 2024",
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className="sr-only">Информация о регионе</h1>

      <div className={styles.statsRow}>
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </main>
  );
}
