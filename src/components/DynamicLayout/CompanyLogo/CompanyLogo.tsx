import type { FC } from 'react'

import styles from './CompanyLogo.module.scss'

/** отображает логотип компании */
const CompanyLogo: FC = () => (
  <a
    className={styles.companyLogoLink}
    href='/'
  >
    <img
      alt='logo'
      className={styles.companyLogo}
      src='/assets/company-logo-public.svg'
    />
  </a>
)

export default CompanyLogo
