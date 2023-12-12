import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './HeaderLogo.module.scss'

/** компонент логотипа хэдера CRM */
const HeaderLogo: FC = () => (
  <Link
    className={styles.logo}
    href='/'
  >
    <span className={styles.logo__logo}>
      <Image
        alt='Yamaguchi logo'
        fill
        loading='eager'
        src={'/assets/logo-full.svg'}
      />
    </span>
  </Link>
)

export default HeaderLogo
