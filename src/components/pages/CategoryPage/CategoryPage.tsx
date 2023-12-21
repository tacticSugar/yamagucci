import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { FetchCategoryOriginalResult } from '@/src/api/useFetchCategory/_types'
import useFetchCategory from '@/src/api/useFetchCategory/useFetchCategory'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import TabsUnderline from '@/src/components/atoms/TabsUnderline/TabsUnderline'
import Form from '@/src/components/Form/Form'
import { categoryFormCfg } from '@/src/constants/AdminFormConfigurations/categoryFormCfg'
import { IconSave, IconTrash } from '@/src/constants/icons'

import styles from './CategoryPage.module.scss'

/** страница тестовая */
const CategoryPage: FC<FetchCategoryOriginalResult> = ({ data }) => {
  /** методы из формы */
  const formMethods = useForm({
    defaultValues: { ...data },
    mode: 'onChange'
  })

  // eslint-disable-next-line no-console
  console.log('initialValues', data)

  /** обработчик сабмита */
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log('SENT DATA', data)
  }

  /** заглавия табов */
  const tabTitles = categoryFormCfg?.categoryTabs?.map((tab) => tab.tabTitle)
  /** наполнение табов */
  const tabPanels = categoryFormCfg?.categoryTabs?.map((tab, index) => (
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
  const { query: { categoryId } } = useRouter()
  /** получение данных */
  const { data } = useFetchCategory({ categoryId: categoryId?.toString() })

  if (!data) return null

  return (
    <CategoryPage data={data?.data} />
  )
}

export default memo(Wrapper)
