import React from 'react'

export type ModalWrapperTypes = {
  /** бекграунд контента */
  bgColor?: string
  /** children component */
  children?: React.ReactNode
  /** extra classname */
  className?: string
  /** задержка перед закрытием */
  closeTimeoutMS?: number
  /** доп класс на секцию */
  contentClassName?: string
  /** функция закрытия попапа */
  handleClose?: () => void
  /** показывает открыт ли попап */
  isOpen?: boolean
  /** высота */
  maxHeight?: string
  /** ф-ия, вызываемая перед закрытием попапа */
  onBeforeClose?: () => void
  /** дополнительный класс подложки */
  overlayClassName?: string
  /** нужно ли блокировать скролл */
  shouldBlockScroll?: boolean
  /** нужно ли закрывать модалку по клику на оверлей */
  shouldCloseOnOverlayClick?: boolean
  /** заглавие */
  title?: string
  /** стиль анимации */
  variantAnimation?: 'fade' | 'toBottom' | 'toTop' | 'toLeft' | 'none' | 'height'
}
