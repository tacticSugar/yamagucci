import type { FC } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import Img from '@/src/components/atoms/Img/Img'
import Container from '@/src/components/DynamicLayout/Container/Container'

import styles from './BannerApp.module.scss'

/** блок футера с приложенем Yamaguchi */
const AppFooter: FC = () => (
  <div className={styles.footer}>

    <div className={styles.footer__app}>
      <Container>
        <div className={styles.footer__appWrapper}>
          <div className={styles.footer__appText}>
            Yamaguchi App — это скидки, бонусы, акции и многое другое!
            <p>
              online-тренировки
              {' '}
              <span>
                СПЕШИ
              </span>
            </p>
          </div>
          <div className={styles.footer__appPhone}>
            <Img
              alt='Yamaguchi App'
              src='/assets/images/PublicFooter/phone.svg'
            />
          </div>
          <div className={styles.footer__appPointsWrapper}>
            <p className={styles.footer__appPoints}>
              500
              <IconWrapper IconComponent='/assets/icons/bonusIcon.svg' />
              {' '}
              за регистрацию
              <span>
                для новых пользователей
              </span>
            </p>
            <p className={styles.footer__appPointsDescrip}>
              В этот раз успеешь!
            </p>
          </div>

          <div className={styles.footer__appDownloadWrapper}>
            <div className={styles.footer__appSvgFooter} >
              <Img
                alt=''
                height='100'
                src={'/assets/images/PublicFooter/qr-code-ym-redirections.svg'}
                width='100'
              />
            </div>

            <div className={styles.footer__appLinkWrapper}>
              <a
                href='https://redirect.appmetrica.yandex.com/serve/892766771373673670'
                target='_blank'
              >
                <Img
                  alt='iosApp'
                  src={'/assets/images/PublicFooter/ios-link.svg'}
                />
              </a>
              <a
                href='https://redirect.appmetrica.yandex.com/serve/892766764125992130'
                target='_blank'
              >
                <Img
                  alt='androidApp'
                  src={'/assets/images/PublicFooter/android-link.svg'}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
)

export default AppFooter
