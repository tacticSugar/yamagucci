import type { FC } from 'react';
import Image from 'next/image'

import Container from '@/src/components/DynamicLayout/Container/Container';

import styles from './PublicFooter.module.scss'
import ContactsBlock from '../ContactsBlock/ContactsBlock';

/* Внешний футер */
const PublicFooter: FC = () => (
   <div className={styles.footer}>
        <div className={styles.footer__footerPublic}>
            <Container>
                <div className={styles.footer__wrapper}>
                    <ContactsBlock />
                    <div className={styles.footer__catalog}>
                        <span>Каталог</span>
                        <ul>
                            <li><a href="/massazhnyie-kresla">Массаж</a></li>
                            <li><a href="/domashnij-fitnes">Спорт</a></li>
                            <li><a href="/kosmetologicheskiye-apparaty">Красота</a></li>
                            <li><a href="/new-products">Новинки</a></li>
                            <li><a href="/gifts.php">Хиты</a></li>
                            <li><a href="/sale">Акции</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer__navigation}>
                        <span>Навигация</span>
                        <ul>
                            <li><a href="/about.php">О компании</a></li>
                            <li><a href="/view.php">Магазины</a></li>
                            <li><a href="/slimness-marathon">Марафон</a></li>
                            <li><a href="/service_center">Сервисный центр</a></li>
                            <li><a href="/showroom">Виртуальный шоурум</a></li>
                            <li><a href="/credit-card-payment.php">Оплата</a></li>
                            <li><a href="/dostavka">Доставка</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer__}>

                    </div>
                </div>
            </Container>
        </div>

   </div>
);

export default PublicFooter;