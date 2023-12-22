import type { FC } from 'react'

import styles from './YandexReviewsBlock.module.scss'

/** блок с отзывами Yandex */
const YandexReviewsBlock: FC = () => (
  <div className={styles.YandexReviewsBlock}>
    <a
      className={styles.YandexReviewsBlock__link}
      href='https://market.yandex.ru/business--yamaguchi/918074/reviews'
      target='_blank'
    >
      <img
        alt='отзывы Yandex'
        src='/assets/images/YandexReviewsBlock/yandex-reviews.webp'
      />
    </a>
  </div>
)

export default YandexReviewsBlock
