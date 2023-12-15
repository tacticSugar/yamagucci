import type { FC } from 'react';

import Container from '@/src/components/DynamicLayout/Container/Container';

import styles from './AppFooter.module.scss';

/* Приложение Yamaguchi футер */
const AppFooter: FC = () => (
   <div className={styles.footer}>

        <div className={styles.footer__app}>
            <Container>
                <div className={styles.footer__appWrapper}>
                    <div className={styles.footer__appText}>
                        Yamaguchi App — это скидки, бонусы, акции и многое другое!
                        <p>online-тренировки <span>СПЕШИ</span></p>
                    </div>
                    <div className={styles.footer__appPhone}>
                        <picture>
                            <img src={'/assets/images/PublicFooter/phone.svg'} 
                            alt="Yamaguchi App" 
                            loading='eager'/>
                            <source media="(max-width: 767px)" srcSet="/assets/images/PublicFooter/phone-mob.webp"/>
                        </picture>
                    </div>
                    <div className={styles.footer__appPointsWrapper}>
                        <p className={styles.footer__appPoints}>
                            500<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.19059" cy="8.04753" r="7.66667" fill="white"/>
                                <path d="M5.20215 4.41602H11.5003V6.26293H7.60937V7.10338H9.34215C10.2276 7.10338 10.9055 7.29361 11.3758 7.67406C11.8531 8.04759 12.0918 8.5906 12.0918 9.30308C12.0918 10.0432 11.822 10.6243 11.2824 11.0462C10.7429 11.4682 9.99237 11.6792 9.03087 11.6792H5.20215V4.41602ZM8.86486 9.96714C9.10696 9.96714 9.29373 9.91526 9.42516 9.8115C9.5635 9.70775 9.63267 9.55902 9.63267 9.36534C9.63267 8.99181 9.37673 8.80504 8.86486 8.80504H7.60937V9.96714H8.86486Z" fill="#181818"/>
                            </svg> за регистрацию
                            <span>для новых пользователей</span>
                        </p>
                        <p className={styles.footer__appPointsDescrip}>В этот раз успеешь!</p>
                    </div>

                    <div className={styles.footer__appDownloadWrapper}>
                        <div className={styles.footer__appSvgFooter} >
                            <img src={'/assets/images/PublicFooter/qr-code-ym-redirections.svg'} width="100" height="100"  alt=""/>
                        </div>

                        <div className={styles.footer__appLinkWrapper}>
                            <a target="_blank" href="https://redirect.appmetrica.yandex.com/serve/892766771373673670">
                                <img src={'/assets/images/PublicFooter/ios-link.svg'}/>
                            </a>
                            <a target="_blank" href="https://redirect.appmetrica.yandex.com/serve/892766764125992130">
                                <img src={'/assets/images/PublicFooter/android-link.svg'}/>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
   </div>
);

export default AppFooter;