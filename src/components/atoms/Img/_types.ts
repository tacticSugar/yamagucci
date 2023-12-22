export type ImgTypes = {
  /** описание */
  alt?: string
  /** высота картинки */
  height?: string
  /** класс на картинку */
  imgClassname?: string
  /** массив фоток с указанием размеров в виде ключей */
  photos?: {
    [key: string]: string
  }
  /** одна картинка с адресом */
  src?: string
  /** ширина картинки */
  width?: string
}
