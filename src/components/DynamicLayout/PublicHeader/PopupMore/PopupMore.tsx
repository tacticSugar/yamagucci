import cn from 'classnames'
import Link from 'next/link'
import { memo } from 'react'

import { moreArray } from '@/src/constants/listMorePopup'

import { moreArrayTypes } from './_types'
import styles from './PopupMore.module.scss'

/** popup Ещё, в header */
const PopupMore = (): JSX.Element => (
  <div
    className={cn(
      styles.popupMore

    )}
  >
    <ul className={styles.popupMore__list}>
      {moreArray.map((item: moreArrayTypes) => (
        <li key={item.id}>
          <Link
            className={
              styles.popupMore__item
            }
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}

      <li className={styles.popupMore__item}>
        Письмо директору
      </li>
    </ul>
  </div>
)

export default memo(PopupMore)
