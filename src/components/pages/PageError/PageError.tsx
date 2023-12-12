import Image from 'next/image'
import Link from 'next/link'

import styles from './PageError.module.scss'

type PageErrorPropsType = {
  /** баннер */
  banner?: string
  /** ссылка кнокпи  */
  buttonLink?: string
  /** текст кнопки */
  buttonText?: string
  /** заголовок */
  title?: string
}

/** страница 404 / 500 */
// ts-prune-ignore-next
export const PageError: React.FC<PageErrorPropsType> = ({
  banner,
  buttonLink,
  buttonText,
  title
}) => (
  <div className={styles.wrapper}>
    <Image
      alt={'banner'}
      className={styles.image}
      src={banner || 'https://placehold.jp/500x500.png?text=i'}
    />
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title || 'Заглавие ошибки'}
      </h1>
      <Link
        className={styles.button}
        href={buttonLink || '/'}
      >
        {buttonText || 'На главную'}
      </Link>
    </div>
  </div>
)
