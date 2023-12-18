import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HeaderLogoTypes } from './_types'
import cn from 'classnames'

import styles from './HeaderLogo.module.scss'

/** компонент логотипа хэдера CRM */
const HeaderLogo: FC<HeaderLogoTypes> = ({srcImage, styleLogoImg}) => (
  <Link
    className={styles.logo}
    href='/'
  >
    <span className={cn(styles.logo__logo, styleLogoImg)}>
      <Image
        alt='Yamaguchi logo'
        fill
        loading='eager'
        src={srcImage}
      />
    </span>
  </Link>
)

export default HeaderLogo
