import Image from "next/image";

import MainButton from "@/components/MainButton";
import styles from "./HomePage.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sloganBlock}>
        <h3 className="sr-only">Возрождаем Донбасс вместе!</h3>
        <p className="sr-only">#ДОНБАССВМЕСТЕ</p>
        <Image
          className={styles.sloganImage}
          src="/images/main-vdv.png"
          alt="slogan"
          width={569}
          height={175}
        />
      </div>
      <Image
        className={styles.logo}
        src="/images/main-logo-dnr.png"
        alt="Logo DNR"
        width={828}
        height={828}
      />
      <div className={styles.infoBlock}>
        <ul className={styles.infoList}>
          <li>
            Регион с богатой промышленной историей и мощным экономическим
            потенциалом. Территория инноваций, передовых технологий и
            перспективных инвестиционных возможностей.
          </li>
          <li>
            Откройте для себя ключевые отрасли промышленности, познакомьтесь с
            ведущими предприятиями региона и узнайте о возможностях для развития
            бизнеса.
          </li>
        </ul>
      </div>
      {/* Navigation */}
      <nav className={styles.nav}>
        <MainButton
          href="/industry"
          label={"Промышленность\nрегиона"}
          icon="/images/icon-industry.svg"
          width={57}
          height={57}
        />
        <MainButton
          href="/investors"
          label="Для инвесторов"
          icon="/images/icon-investors.svg"
          width={65}
          height={57}
        />
        <MainButton
          href="/info"
          label="Информация про регион"
          icon="/images/icon-info.svg"
          width={45}
          height={59}
        />
      </nav>
    </main>
  );
}
