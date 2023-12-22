import Link from 'next/link'
import type { FC } from 'react'

import styles from './PaymentVariant.module.scss'

/** блок с вариантами оплаты */
const PaymentVariant: FC = () => (
  <div className={styles.PaymentVariantBlock}>
    <span className={styles.PaymentVariantBlock__title}>
      Принимаем к оплате
    </span>
    <div className={styles.PaymentVariantBlock__linkWrapper}>
      <Link
        className={styles.PaymentVariantBlock__link}
        href='/credit-card-payment.php'
      >
        <img
          alt='visa'
          src={'/assets/icons/pay-ico-visa.svg'}
        />
      </Link>
      <Link
        className={styles.PaymentVariantBlock__link}
        href='/credit-card-payment.php'
      >
        <img
          alt='mastercard'
          src={'/assets/icons/pay-ico-mc.svg'}
        />
      </Link>
      <Link
        className={styles.PaymentVariantBlock__link}
        href='/credit-card-payment.php'
      >
        <img
          alt='mir'
          src={'/assets/icons/pay-ico-mir.svg'}
        />
      </Link>
    </div>
  </div>
)

export default PaymentVariant
