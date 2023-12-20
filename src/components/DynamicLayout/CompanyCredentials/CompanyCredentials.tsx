import type { FC } from 'react';

import styles from './CompanyCredentials.module.scss';

import CompanyLogo from '../CompanyLogo/CompanyLogo';

const CompanyCredentials: FC = () => {
    return (
        <div className={styles.companyCredentials}>
            <div className={styles.companyCredentials__title}>
                <p>Эксклюзивный дистрибьютор массажного оборудования в&nbsp;России и&nbsp;СНГ &copy;&nbsp;ООО
                    &laquo;Нимбус&raquo;, ИНН 9718214936, 2023 . Интернет-магазин.
                    г. Москва.
                    <br/>
                    Обращаем ваше внимание на&nbsp;то, что данный интернет-сайт носит исключительно
                    информационный характер и&nbsp;ни&nbsp;при каких условиях не&nbsp;является
                    публичной офертой, определяемой положениями&nbsp;ч.&nbsp;2&nbsp;ст.&nbsp;437 Гражданского
                    кодекса Российской Федерации.
                </p>
            </div>
            <div className={styles.companyCredentials__bottomBlock}>
                <div className={styles.companyCredentials__links}>
                    <a href="https://www.yamaguchi.ru/return_policy.php" target="_blank">Политика возврата и обмена товара</a>
                    <a href="https://www.yamaguchi.ru/personal-data.php" target="_blank">Политика конфиденциальности</a>
                </div>
                <CompanyLogo/>
            </div>
        </div>
    );
}

export default CompanyCredentials;
