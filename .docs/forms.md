# Формы

## react-hook-form
Для работы с формами используем https://legacy.react-hook-form.com/get-started

Любой инпут/чекбокс и другие элементы в идеале должны использоваться в форме.

Уже есть компоненты на все базовые элементы формы. Используем их.

## Использование формы
В админке каждая редактируемая сущность является формой распределенной на табы.
Конфигурация табов и полей формы настраивается в файлах каждой формы для каждой сущности. Файлы лежат в папке /constants/formConfigurations

Для сохранения стейта измененных полей при переключении табов компонент табов оборачивается в FormProvider, куда передаются все методы формы.

```tsx
import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import useFetchProduct, { ResultProduct } from '@/src/api/useFetchProduct/useFetchProduct'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import TabsUnderline from '@/src/components/atoms/TabsUnderline/TabsUnderline'
import Form from '@/src/components/Form/Form'
import { formTabs } from '@/src/constants/formConfigurations/productFormConfiguration'
import { IconSave, IconTrash } from '@/src/constants/icons'

import styles from './ProductPage.module.scss'

/** страница тестовая */
const ProductPage: FC<ResultProduct> = ({ data }) => {
  /** методы из формы */
  const formMethods = useForm({
    defaultValues: { ...data },
    mode: 'onChange'
  })

  /** обработчик сабмита */
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log('SENT DATA', data)
  }

  /** заглавия табов */
  const tabTitles = formTabs?.productTabs?.map((tab) => tab.tabTitle)
  /** наполнение табов */
  const tabPanels = formTabs?.productTabs?.map((tab, index) => (
    <Form
      formContent={tab?.tabContent}
      key={index}
      panelClassName={tab?.panelClassName}
    />
  ))

  return (
    <FormProvider {...formMethods}>
      <form
        className={styles.form}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <TabsUnderline
          tabPanels={tabPanels}
          tabTitles={tabTitles}
        />
        <div className={styles.formButtons}>
          <ButtonIcon
            colorVariant='transparentBlue'
            icon={IconSave}
            label='сохранить'
            paddingVariant='slim'
            type='submit'
            withIcon={true}
          />
          <ButtonIcon
            colorVariant='transparentRed'
            icon={IconTrash}
            label='удалить'
            paddingVariant='slim'
            withIcon={true}
          />
        </div>
      </form>
    </FormProvider>
  )
}

/** врапер для получения первоначальных данных хук-формы */
const Wrapper: FC = () => {
  /** айди продукта из урла */
  const { query: { productId } } = useRouter()
  /** получение данных */
  const { data } = useFetchProduct({ productId: productId?.toString() })

  if (!data) return null

  return (
    <ProductPage data={data?.data} />
  )
}

export default memo(Wrapper)
```

## Form.tsx
В компонент формы приходят названия типов подключаемых блоков из конфигурации, где по swtich/case выводятся те или иные компоненты:
  -инпуты, чекбоксы, радио и тп...
  -группа инпутов, чекбоксов со своим заголовком
  -кастомные компоненты

## Получение данных
На странице сущности получаем данные во Wrapper (нужно для стейта при работе с hook-form) через апи.
Передаем по пропсам на страницу в настройки формы
```tsx
/** методы из формы */
  const formMethods = useForm({
    defaultValues: { ...data },
    mode: 'onChange'
  })
```
Теперь можем использовать первоначальные значения в любом месте сущности.

## Сохранение данных
В каждом отдельном компоненте можем достать первоначальные данные по ключу из конфигурации через getValues, а сохранить измененный стейт через setValue, которые достаем из useFormContext
```tsx
  /** контекст формы */
  const {
    getValues,
    setValue
  } = useFormContext()

  /** достаем текущие опции */
  const currentCategories = getValues(name)

 /** обработчик удаления категории */
  const handleDeleteCategory = (categoryId) => {
    /** удаляем опцию */
    const updatedCategories = mainCategories?.filter((product) => product.id !== categoryId)
    setMainCategories(updatedCategories)
    setValue(name, [...subCategories, ...updatedCategories])
  }
```

