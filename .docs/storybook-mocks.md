# Сторибук и Моки

Сторибук позволяет тестировать не только компоненты, но и страницы.
Но у нас компоненты самостоятельно подключаются к react-query и загружают данные.
Для того чтобы этого избежать необходимо указать какие MOC данные загружать в апи

Для этого используется StoryTemplate.
Разберем создание историй для модул новостей на главной.

Создает папку `__stories__` внутри Компонента.

> Здесь Template - это функция, принимающая пропсы.
> так же можем принимать sbTitle - заголовок, который выводится в истории или прописывать в вариантах ниже.
> Далее Template возвращает компонент, обернутую в StoryTemplate,
> внутри которого обернуто в QueryClientProvider для загрузки данных

```tsx



import StoryTemplate from '@/.storybook/StoryTemplate'

/** шаблон страницы новости. переиспользуется в разных историях */
const Template: React.FC<any> = ({ sbTitle, mockVariant, name }) => {
  return (
    <StoryTemplate>
      <p className='sb-title'>
        {sbTitle}
      </p>
      <RentVariants mockVariant={mockVariant} name={name}/>
    </StoryTemplate>
  )
}

export default Template
```

Далее используем этот Template создавая истории с разными вариациями данных.

**Успешная загрузка:**
> передаем в msw.handlers массив всех моков, используемых на странице
> с успешно загруженными данными.
```tsx
export default {
  component: RentAndSizeVariants,
  parameters: {
    msw: {
      handlers: [
        dataSwitcherRentTypes,
        dataSwitcherBorbozaIds,
        dataSwitcherSizeTypes
      ]
    }
  },
  title: 'form/rentAndSizeVariants'
}
```

**Бесконечная загрузка:**
> Используется для проверки на бесконечную загрузку.
> Передаем в msw.handlers массив всех моков, используемых на странице
> с бесконечно загружаемыми данными.

```tsx
    <p className='sb-title'>
      Загружает данные
    </p>
    <Template
      mockVariant='infiniteLoading'
      name='size'
    />
```

И так далее. На каждый мок, который был создан, должна быть подготовлена история.
Хэндлеры можно переиспользовать, вынося их в переменные, например:

```tsx
const handlers = [
    dataSwitcherRentTypes,
    dataSwitcherBorbozaIds,
    dataSwitcherSizeTypes
]
```
