import type { FC } from 'react';

import styles from './CompanyLogo.module.scss';

const CompanyLogo: FC = () => {
    return (
        <a className={styles.companyLogoLink} href="/">
            <img className={styles.companyLogo} src="/assets/company-logo-public.svg" alt="logo"/>
        </a>
    );
}

export default CompanyLogo;
