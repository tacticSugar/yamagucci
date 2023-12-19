import type { FC } from 'react';

import styles from './PaymentVariantBlock.module.scss';

const PaymentVariantBlock: FC = () => {
    return (
        <div className={styles.PaymentVariantBlock}>
            <span className={styles.PaymentVariantBlock__title}>Принимаем к оплате</span>
            <div className={styles.PaymentVariantBlock__linkWrapper}>
                <a className={styles.PaymentVariantBlock__link} href="/credit-card-payment.php">
                    <img src={'/assets/icons/pay-ico-visa.svg'} alt="visa" />
                </a>
                <a className={styles.PaymentVariantBlock__link} href="/credit-card-payment.php">
                    <img src={'/assets/icons/pay-ico-mc.svg'} alt="mastercard" />
                </a>
                <a className={styles.PaymentVariantBlock__link} href="/credit-card-payment.php">
                    <img src={'/assets/icons/pay-ico-mir.svg'} alt="mir" />
                </a>
            </div>
        </div>
    );
}

export default PaymentVariantBlock;
