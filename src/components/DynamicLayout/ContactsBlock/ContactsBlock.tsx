import type { FC } from 'react'

import styles from './ContactsBlock.module.scss'

/** блок с контактами */
const ContactsBlock: FC = () => (
  <div className={styles.contactsBlock}>
    <div className={styles.contactsBlock__wrapper}>
      <div className={styles.contactsBlock__title}>
        Контакты
      </div>
      <div className={styles.contactsBlock__phones}>
        <a href='tel:+78003331281'>
          8 800 333-12-81
        </a>
        <a href='tel:+74956468096'>
          +7 495 646-80-96
        </a>
      </div>
      <div className={styles.contactsBlock__worktime}>
        Часы работы офиса:
        <br />
        пн.–пт. с 9:00 до 19:00
      </div>
      <div className={styles.contactsBlock__worktime}>
        Часы работы павильона
        в ТЦ «АФИМолл Сити»:
        <br />
        Ежедневно с 10:00 до 22:00
      </div>
    </div>
  </div>
)

export default ContactsBlock
