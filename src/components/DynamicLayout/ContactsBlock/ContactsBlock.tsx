import type { FC } from 'react';

import styles from './ContactsBlock.module.scss';

import Container from '@/src/components/DynamicLayout/Container/Container';

const PublicFooter: FC = () => (
    <div className={styles.footer}>
     
         <div className={styles.footer__footerPublic}>
             <Container>
                 
             </Container>
         </div>
 
    </div>
 );
 
 export default PublicFooter;