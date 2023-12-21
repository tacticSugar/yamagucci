import { useWindowSize } from '@reactuses/core'
import { useCallback, useMemo } from 'react'

/** todo: добавить комментарий */
const useModalWrapper = ({ handleClose, onBeforeClose }: {
  [key: string]: any
}): any => {
  /** todo: добавить комментарий */
  const handleClosePopup = useCallback(() => {
    onBeforeClose?.()
    handleClose?.()
  }, [handleClose, onBeforeClose])
  /** todo: добавить комментарий */
  const { height: vh } = useWindowSize()
  // popup max height
  /** todo: добавить комментарий */
  const maxHeight = useMemo(() => vh, [vh])

  return {
    handleClosePopup,
    maxHeight
  }
}

export default useModalWrapper
