type SubcategoryArrayTypes = {
  /** ссылка на страницу категории */
  href: string
  /** id  строки , для key */
  id: number
  /** название строки */
  name: string
}

export type GlobalCategoryArrayTypes = {
  /** ссылка на страницу категории */
  href: string
  /** id  строки , для key */
  id: number
  /** иконка, для глобальной категории  */
  img: string
  /** название строки */
  name: string

  /** ссылка на картинку, для картинки в блоке подкатегорий */
  src: string

  /** массив подкатегорий  */
  subcategories: Array<SubcategoryArrayTypes>
}
