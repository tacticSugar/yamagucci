import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

declare module 'next/app' {
  type AppLayoutProps = AppProps & {
    /** компонент приложения. */
    Component: React.FC
  };
}

declare module 'react-tooltip-lite' {
  export interface TooltipProps {
    /** todo: добавить комментарий */
    children: ReactNode
  }
}
