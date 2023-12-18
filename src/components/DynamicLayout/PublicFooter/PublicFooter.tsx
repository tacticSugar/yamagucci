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
                <ContactsBlock />
            </Container>
        </div>

   </div>
);

export default PublicFooter;