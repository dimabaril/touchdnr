import Industries from "@/app/industry/Industries";
import Companies from "@/app/industry/Companies";

import styles from "./IndustryPage.module.css";

export default function IndustryPage() {
  return (
    <main className={styles.main}>
      <Industries />
      <div className={styles.infoBlock}>
        <ul className={styles.infoList}>
          <li>
            Машиностроительный комплекс представлен предприятиями, производящими
            широкий спектр продукции от горного оборудования до автомобильных
            компонентов.
          </li>
          <li>
            Отрасль обладает уникальными компетенциями в области тяжелого
            машиностроения и производства специализированного оборудования.
          </li>
        </ul>
      </div>
      <Companies />
    </main>
  );
}
