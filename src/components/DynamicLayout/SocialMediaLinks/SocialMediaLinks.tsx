import type { FC } from 'react'

import styles from './SocialMediaLinks.module.scss'

/** ссылки на социальные сети */
const SocialMediaLinks: FC = () => (
  <div className={styles.SocialMediaLinks}>
    <span className={styles.SocialMediaLinks__title}>
      Мы&nbsp;в&nbsp;социальных сетях
    </span>
    <div className={styles.SocialMediaLinks__linksWrapper}>
      <a
        className={styles.SocialMediaLinks__link}
        href='https://www.youtube.com/user/Yamaguchichannel'
      >
        <img
          alt='ссылка YouTube канал'
          src={'/assets/icons/sn-ico-you.svg'}
        />
      </a>
      <a
        className={styles.SocialMediaLinks__link}
        href='https://t.me/yamaguchi_ru'
      >
        <img
          alt='ссылка Telegram канал'
          src={'/assets/icons/sn-ico-tg.svg'}
        />
      </a>
      <a
        className={styles.SocialMediaLinks__link}
        href='https://vk.com/yamaguchi'
      >
        <img
          alt='ссылка на Vkontakte'
          src={'/assets/icons/sn-ico-vk.svg'}
        />
      </a>
      <a
        className={styles.SocialMediaLinks__link}
        href='https://www.tiktok.com/@yamaguchi.ru'
      >
        <img
          alt='ссылка на TikTok'
          src={'/assets/icons/sn-ico-tt.svg'}
        />
      </a>
    </div>
  </div>
)

export default SocialMediaLinks
