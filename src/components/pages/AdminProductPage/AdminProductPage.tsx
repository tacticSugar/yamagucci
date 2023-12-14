import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { FetchProductOriginalResult } from '@/src/api/useFetchProduct/_types'
import useFetchProduct from '@/src/api/useFetchProduct/useFetchProduct'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import TabsUnderline from '@/src/components/atoms/TabsUnderline/TabsUnderline'
import Form from '@/src/components/Form/Form'
import { productFormConfiguration } from '@/src/constants/AdminFormConfigurations/productFormConfiguration'
import { IconSave, IconTrash } from '@/src/constants/icons'

import styles from './AdminProductPage.module.scss'

/** страница тестовая */
const AdminProductPage: FC<FetchProductOriginalResult> = ({ data }) => {
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
  const tabTitles = productFormConfiguration?.productTabs?.map((tab) => tab.tabTitle)
  /** наполнение табов */
  const tabPanels = productFormConfiguration?.productTabs?.map((tab, index) => (
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
    <AdminProductPage data={data?.data} />
  )
}

export default memo(Wrapper)
