import { RefObject, useEffect } from 'react'

/** слушатель клика вне поля */
const useOutsideClick = (
  ref: RefObject<HTMLInputElement>,
  callback: (event: MouseEvent) => void
): void => {
  /** слушатель */
  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) return

    callback(event)
  }

  useEffect(() => {
    document.addEventListener('click', listener)

    return () => document.removeEventListener('click', listener)
    // eslint-disable-next-line
  }, []);
}

export default useOutsideClick
