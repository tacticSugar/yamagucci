import cn from 'classnames'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface ContainerTypes {
  /** доп класс на враппер */
  className?: string
  /** варианты */
  variant?: 'sm' | 'md' | 'xl' | 'full'
}

/** компонент контейнера */
const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>> & ContainerTypes> = ({
  children,
  className,
  variant = 'xl',
  ...rest
}) => (
  <section
    className={cn(className, styles.container, variant && styles[variant])}
    {...rest}
  >
    {children}
  </section>
)

export default Container
