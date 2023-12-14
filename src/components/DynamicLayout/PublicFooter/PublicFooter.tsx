import type { FC } from 'react';
import Image from 'next/image'

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
                        <picture>
                            <Image src={'/assets/images/PublicFooter/phone.svg'} 
                            alt="Yamaguchi App" 
                            fill 
                            loading='eager'/>
                            <source media="(max-width: 767px)" srcSet="/assets/images/PublicFooter/phone-mob.webp"/>
                        </picture>
                    </div>
                    
                </div>
            </Container>
        </div>


   </div>
);

export default PublicFooter;