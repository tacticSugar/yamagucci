import type { FC } from 'react';

import styles from './SubscribeBlock.module.scss';

const SubscribeBlock: FC = () => {
    return (
        <div className={styles.subscribeBlock}>
            <span className={styles.subscribeBlock__title}>Узнавайте об&nbsp;акциях первым!</span>

        </div>
    );
}

export default SubscribeBlock;
