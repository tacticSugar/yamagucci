# Моки
В нашем случае моки служат для подмены загружаемых данных.
Используем [MSW](https://mswjs.io/). Он перехватывает запрос апи
и возвращает вместо него те данные, который укажем.

### Как создавать моки?
Создаем папку `__mocks__` внутри папки фетча.
В этой папке создаем файл в формате `mockFetch*.ts`.

> Важно:
> - моки должны начинаться с **mockFetch**...
> - расширение **.ts**
> - не используем экспорт по умолчанию, только **export const**

Там же создаем папку `__demo__` с файлом `demo*.json`.
Копируем в demo*.json успешный вызов апи

Далее создаем моки для тестирования разных вариаций загрузки данных.
Разберем на примере фетча контента новости.



**Для начала создаем мок на успешную загрузку данных:**
> В URL_FETCH_RENT_TYPES указываем путь апи, который перехватываем `'*/rent_types'`.
> Звездочка в начале указывает на то, что перехватывает все апи,
> заканчивающиеся на page

```tsx
import { rest } from 'msw'

import errorData from '@/jest-config/errorData'

import demoRentTypes from './demoRentTypes.json'

/** ссылка на апи */
const URL_FETCH_RENT_TYPES = '*/rent_types'

/** переключатель для моков */
export const dataSwitcherRentTypes = rest.get(URL_FETCH_RENT_TYPES, (req, res, ctx) => {
  /** тип мока */
  const item = req.url.searchParams.get('mockVariant')

  switch (item) {
    case 'errorResponse':
      return res(ctx.json(errorData))
    case 'infiniteLoading':
      return res(ctx.delay('infinite'))
    default:
      return res(ctx.json(demoRentTypes))
  }
})
```
**Добавляем к этим мокам:**
- errorResponse - возвращает ошибку апи
- infiniteLoading - бесконечная загрузка. Используется для проверки лоадеров


Дополнительно создаем моки на разные вариации данных, например:
```tsx
/** без контента */
const withoutContent = rest.get(URL_FETCH_RENT_TYPES, (req, res, ctx) => {
  /** переданы данные */
  const page = req.url.searchParams.get('mockVariant')

  if (page) {
    return res(ctx.json([{
      ...demo[0],
      content: {
        body: null
      }
    }]))
  }
})
```

