import cn from 'classnames'
import { memo } from 'react'
import ReactModal from 'react-modal'

import { ModalWrapperTypes } from '@/src/components/atoms/ModalWrapper/_types'

import styles from './ModalWrapper.module.scss'
import useModalWrapper from './useModalWrapper'

/** общий компонент обертки модалки */
const ModalWrapper: React.FC<ModalWrapperTypes> = ({
  bgColor,
  children,
  className,
  contentClassName,
  handleClose,
  isOpen,
  maxHeight: propsMaxHeight,
  onBeforeClose,
  overlayClassName,
  shouldBlockScroll = true,
  shouldCloseOnOverlayClick = true,
  title,
  variantAnimation = 'fade'
}) => {
  /** todo: добавить комментарий */
  const { handleClosePopup, maxHeight } = useModalWrapper({ handleClose, onBeforeClose })

  return (
    <ReactModal
      className={className}
      closeTimeoutMS={200}
      htmlOpenClassName={shouldBlockScroll && 'ModalWrapper_disableScroll'}
      isOpen={isOpen}
      onRequestClose={handleClosePopup}
      overlayClassName={cn(overlayClassName, `ModalWrapper--${variantAnimation}`)}
      preventScroll={true}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={{ content: { backgroundColor: bgColor }, overlay: { maxHeight: propsMaxHeight || maxHeight } }}
    >
      {title && (
        <h3 className={styles.header}>
          {title}
        </h3>
      )}
      <section className={contentClassName}>
        {children}
      </section>
    </ReactModal>
  )
}

export default memo(ModalWrapper)
