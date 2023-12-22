import type { FC } from 'react'

import styles from './SubscribeFormMini.module.scss'

/** блок подписаться на рассылку */
const SubscribeFormMini: FC = () => (
  <div className={styles.subscribeBlock}>
    <span className={styles.subscribeBlock__title}>
      Узнавайте об&nbsp;акциях первым!
    </span>
    <form
      action='/site/ajax/set-subscribe-form'
      id='form-subscribe'
    >
      <input
        className={styles.subscribeBlock__input}
        id='subscribeform-email'
        placeholder='name@domenname.ru'
        required
        type='text'
      />
      <span className={styles.subscribeBlock__subTitle}>
        Введите ваш E-mail
      </span>
      <button
        className={styles.subscribeBlock__submitBtn}
        type='submit'
      >
        подписаться
      </button>
    </form>
  </div>
)

export default SubscribeFormMini
