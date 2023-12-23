import cn from 'classnames'
import IconEnter from 'public/assets/icons/enter.svg'
import { FC, memo } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import HeaderLogo from '@/src/components/atoms/HeaderLogo/HeaderLogo'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import Container from '@/src/components/DynamicLayout/Container/Container'
import UserInfo from '@/src/components/UserInfo/UserInfo'

import styles from './AdminHeader.module.scss'

type AdminHeaderTypes = {
  /** дополнительный класс */
  className?: string
  /** ф-я выхода */
  handleLogout?: () => void
};

/** компонент хэдера */
const AdminHeader: FC<AdminHeaderTypes> = ({ className, handleLogout }) => (
  <header className={cn(className, styles.header)}>
    <Container>
      <div className={styles.wrapper}>
        <HeaderLogo srcImage={'/assets/logo-full.svg'} />
        <div className={styles.meta__wrapper}>
          <UserInfo />
          <ButtonIcon
            colorVariant='grayDark'
            label='сброс кэша'
            paddingVariant='slim'
            withIcon={false}
          />
          <IconWrapper
            IconComponent={IconEnter}
            iconClassname={styles.iconClassname}
            onClick={handleLogout}
          />
        </div>
      </div>
    </Container>
  </header>
)

export default memo(AdminHeader)
