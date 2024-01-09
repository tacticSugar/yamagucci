import Image from 'next/image'
import Link from 'next/link'

import styles from './PageError.module.scss'

/** страница 404 / 500 */
// ts-prune-ignore-next
export const PageError: React.FC = () => (
  <div className={styles.wrapper}>
    <Image
      alt={'banner'}
      className={styles.image}
      height={500}
      src={'https://placehold.jp/500x500.png?text=i'}
      width={500}
    />
    <div className={styles.container}>
      <h1 className={styles.title}>
        Такой страницы не существует или возникла ошибка
      </h1>
      <Link
        className={styles.button}
        href={'/'}
      >
        На главную
      </Link>
    </div>
  </div>
)
