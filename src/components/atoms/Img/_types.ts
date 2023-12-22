export type ImgTypes = {
  /** описание */
  alt?: string
  /** класс на картинку */
  imgClassname?: string
  /** массив фоток с указанием размеров в виде ключей */
  photos?: {
    [key: string]: string
  }
  /** одна картинка с адресом */
  src?: string
}
