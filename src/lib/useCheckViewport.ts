import { useEffect, useState } from 'react'

// ts-prune-ignore-next
export const WIDTH_MOBILE = 320
// ts-prune-ignore-next
export const WIDTH_TABLET = 768
// ts-prune-ignore-next
export const WIDTH_DESKTOP = 1025
// ts-prune-ignore-next
export const WIDTH_DESKTOP_LIMIT = 1440

type CheckViewportResult = {
  /** ширина десктопа */
  isDesktop: boolean
  /** ширина мобильника */
  isMobile: boolean
  /** ширина планшета */
  isTablet: boolean
}

/** браузер или нет */
const isBrowser = typeof window !== 'undefined'

/** проверка разрешений экрана */
const checkViewport = (): CheckViewportResult => ({
  isDesktop: isBrowser ? window.innerWidth > WIDTH_DESKTOP : false,
  isMobile: isBrowser ? window.innerWidth < WIDTH_TABLET : false,
  isTablet: isBrowser
    ? window.innerWidth < WIDTH_DESKTOP && window.innerWidth >= WIDTH_TABLET
    : false
})

/** хук получения разрешения экрана */
const useCheckViewport = (): CheckViewportResult => {
  /** разрешения экрана */
  const [viewports, setViewports] = useState<CheckViewportResult>(checkViewport)

  useEffect(() => {
    if (isBrowser) {
      /** функция обновляющая данные при ресайзе окна */
      const handleWindowResize = () => setViewports(checkViewport)

      window.addEventListener('resize', handleWindowResize)
      window.addEventListener('orientationchange', handleWindowResize)
      window.addEventListener('load', handleWindowResize)
      window.addEventListener('reload', handleWindowResize)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
        window.removeEventListener('orientationchange', handleWindowResize)
        window.removeEventListener('load', handleWindowResize)
        window.removeEventListener('reload', handleWindowResize)
      }
    }
  }, [viewports])

  return viewports
}

// ts-prune-ignore-next
export default useCheckViewport
