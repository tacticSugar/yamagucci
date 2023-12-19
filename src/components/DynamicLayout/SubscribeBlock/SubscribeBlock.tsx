import type { FC } from 'react';

import styles from './SubscribeBlock.module.scss';

const SubscribeBlock: FC = () => {
    return (
        <div className={styles.subscribeBlock}>
            <span className={styles.subscribeBlock__title}>Узнавайте об&nbsp;акциях первым!</span>
            <form id="form-subscribe" action="/site/ajax/set-subscribe-form">
                <input 
                    type="text" 
                    className={styles.subscribeBlock__input}
                    id="subscribeform-email" 
                    placeholder="name@domenname.ru"
                    required
                />
                <span className={styles.subscribeBlock__subTitle}>Введите ваш E-mail</span>
                <button 
                    className={styles.subscribeBlock__submitBtn}
                    type="submit"
                >
                    подписаться
                </button>
            </form>
        </div>
    );
}

export default SubscribeBlock;
