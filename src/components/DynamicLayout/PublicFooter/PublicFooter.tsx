import Link from 'next/link'
import type { FC } from 'react'

import CompanyCredentials from '@/src/components/DynamicLayout/CompanyCredentials/CompanyCredentials'
import ContactsBlock from '@/src/components/DynamicLayout/ContactsBlock/ContactsBlock'
import Container from '@/src/components/DynamicLayout/Container/Container'
import PaymentVariantBlock from '@/src/components/DynamicLayout/PaymentVariantBlock/PaymentVariantBlock'
import SocialMediaLinks from '@/src/components/DynamicLayout/SocialMediaLinks/SocialMediaLinks'
import SubscribeBlock from '@/src/components/DynamicLayout/SubscribeBlock/SubscribeBlock'
import YandexReviewsBlock from '@/src/components/DynamicLayout/YandexReviewsBlock/YandexReviewsBlock'

import styles from './PublicFooter.module.scss'

/** внешний футер сайта */
const PublicFooter: FC = () => (
  <div className={styles.footer}>
    <div className={styles.footer__footerPublic}>
      <Container>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__top}>
            <div className={styles.footer__ContactsWrapper}>
              <ContactsBlock />
              <YandexReviewsBlock />
            </div>
            <div className={styles.footer__catalog}>
              <span>
                Каталог
              </span>
              <ul>
                <div className={styles.footer__navGroup}>
                  <li>
                    <Link href='/massazhnyie-kresla'>
                      Массаж
                    </Link>
                  </li>
                  <li>
                    <Link href='/domashnij-fitnes'>
                      Спорт
                    </Link>
                  </li>
                  <li>
                    <Link href='/kosmetologicheskiye-apparaty'>
                      Красота
                    </Link>
                  </li>
                </div>
                <div className={styles.footer__navGroup}>
                  <li>
                    <Link href='/new-products'>
                      Новинки
                    </Link>
                  </li>
                  <li>
                    <Link href='/gifts.php'>
                      Хиты
                    </Link>
                  </li>
                  <li>
                    <Link href='/sale'>
                      Акции
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className={styles.footer__navigation}>
              <span>
                Навигация
              </span>
              <ul>
                <li>
                  <Link href='/about.php'>
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href='/view.php'>
                    Магазины
                  </Link>
                </li>
                <li>
                  <Link href='/slimness-marathon'>
                    Марафон
                  </Link>
                </li>
                <li>
                  <Link href='/service_center'>
                    Сервисный центр
                  </Link>
                </li>
                <li>
                  <Link href='/showroom'>
                    Виртуальный шоурум
                  </Link>
                </li>
                <li>
                  <Link href='/credit-card-payment.php'>
                    Оплата
                  </Link>
                </li>
                <li>
                  <Link href='/dostavka'>
                    Доставка
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer__subscribeFormLinks}>
              <SubscribeBlock />
              <SocialMediaLinks />
              <PaymentVariantBlock />
            </div>
          </div>

          <div className={styles.footer__bottom}>
            <CompanyCredentials />
          </div>
        </div>
      </Container>
    </div>

  </div>
)

export default PublicFooter
