import React, { useEffect } from "react";
import { IconArrowDown, IconLocation } from "@/src/constants/icons";
import IconWrapper from "../atoms/IconWrapper/IconWrapper";
import Link from "next/link";
import styles from "./PublicHeader.module.scss";

function PublicHeader() {
  useEffect(() => {
    testFunction();
  });
  const testFunction = () => {
    console.log("test");
  };
  return (
    <header className={styles.publicHeader}>
      <nav className={styles.publicHeader__navigation}>
        <div className={styles.publicHeader__yourCityBox}>
          <IconWrapper
            IconComponent={IconLocation}
            iconClassname={styles.publicHeader__arrow}
          />
          <p className={styles.publicHeader__yourCity}>Ваш город</p>
          <IconWrapper
            IconComponent={IconArrowDown}
            iconClassname={styles.publicHeader__arrow}
          />
        </div>

        <ul className={styles.publicHeader__list}>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.publicHeader__link}>
              Главная
            </Link>
          </li>
          <li className={styles.publicHeader__moreBox}>
            <p className={styles.publicHeader__more}>Ещё</p>
            <IconWrapper
              IconComponent={IconArrowDown}
              iconClassname={styles.publicHeader__arrow}
            />
          </li>
        </ul>
      </nav>

      <div className="public-header__wrapper public-header__wrapper_bottom"></div>
    </header>
  );
}

export default PublicHeader;
