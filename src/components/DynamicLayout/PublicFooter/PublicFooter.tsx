import type { FC } from 'react';

import Container from '@/src/components/DynamicLayout/Container/Container';

import styles from './PublicFooter.module.scss'

/* Внешний футер */
const PublicFooter: FC = () => (
   <div className={styles.footer}>

        <div className={styles.footer__top}>
            <Container>
                <div className={styles.footer__topWrapper}>
                    <div className={styles.footer__topText}>
                        Yamaguchi App — это скидки, бонусы, акции и многое другое!
                        <p>online-тренировки <span>СПЕШИ</span></p>
                    </div>
                    <div className={styles.footer__topPhone}>
                        <img src="" alt="Yamaguchi App" />
                    </div>
                </div>
            </Container>
        </div>

        
   </div>
);

export default PublicFooter;