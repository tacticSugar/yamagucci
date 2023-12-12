/* eslint-disable import/named */
import { Column } from '@tanstack/react-table'

/** достает имя колонки по айди */
export const getColumnNameById = (column: Column<any, unknown>): string => {
  switch (column?.id) {
    case 'id':
      return 'Айди (ID)'
    case 'model':
      return 'Модель'
    case 'brand':
      return 'Бренд'
    case 'search_keyword':
      return 'Ключевые слова'
    case 'price':
      return 'Цена'
    case 'category':
      return 'Категория'
    case 'qnt':
      return 'Количество'
    case 'popularity':
      return 'Популярность'
    case 'status':
      return 'Статус'
    case 'products_qnt':
      return 'Товары'
    case 'filters_qnt':
      return 'Фильтры'
    case 'name':
      return 'Категории'
    default:
      return 'Поиск'
  }
}
