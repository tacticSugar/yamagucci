import cn from 'classnames'
import { memo, useId } from 'react'
import ContentLoader from 'react-content-loader'

import styles from './LoaderQuery.module.scss'

/** ванианты темы */
const themeVariants = {
  grayDark: {
    bg: '#e4e1f4',
    fg: '#eeecf8'
  },
  grayLight: {
    bg: '#f5f6f7',
    fg: '#eee'
  },
  purple: {
    bg: '#705fe4',
    fg: '#D4D0F5'
  },
  white: {
    bg: '#fff',
    fg: '#f5f6f7'
  }
}

type LoaderQueryThemeType = 'grayLight' | 'grayDark' | 'purple' | 'white'
interface LoaderQuery {
  /** дочерний элемент */
  as?: string
  /** дочерний элемент */
  children?: any
  /** дополнительный класс */
  className?: string
  /** флаг загрузки */
  isAjax?: boolean
  /** флаг отсутствия данных */
  isEmpty?: boolean
  /** флаг */
  isEmptyOnError?: boolean
  /** флаг */
  isError?: boolean
  /** флаг */
  isIdle?: boolean
  /** флаг загрузки */
  isLoading?: boolean
  /** флаг */
  loadingOnAjax?: boolean
  /** флаг */
  theme?: LoaderQueryThemeType
}

/** компонент анимации лоадера */
const LoaderQuery: React.FC<LoaderQuery> = ({
  as: Component = 'div',
  children,
  className,
  isAjax,
  isEmpty,
  isEmptyOnError,
  isError,
  isIdle,
  isLoading,
  loadingOnAjax,
  theme = 'grayLight'
}) => {
  /**
   * уникальный ключ. обязательно должен быть,
   * иначе криво работает гидротация из ssr в клиент
   * https://github.com/danilowoz/react-content-loader#server-side-rendering-ssr---match-snapshot
   */
  const uniqueKey = useId()

  if (isLoading || isIdle || (loadingOnAjax ? isAjax : isEmpty)) {
    return (
      // @ts-ignore
      <Component className={cn(className, styles.component)}>
        <ContentLoader
          backgroundColor={themeVariants[theme].bg}
          className={styles.contentLoader}
          foregroundColor={themeVariants[theme].fg}
          uniqueKey={uniqueKey}
        >
          <rect
            height='100%'
            width='100%'
          />
        </ContentLoader>
      </Component>
    )
  } else if ((isError && isEmptyOnError) || !children) {
    return null
  } else {
    return children
  }
}

export default memo(LoaderQuery)
