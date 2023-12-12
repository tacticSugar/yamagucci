import { useRouter } from 'next/router'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import useFetchOptions from '@/src/api/useFetchOptions/useFetchOptions'
import useFetchRentTypes from '@/src/api/useFetchRentTypes/useFetchRentTypes'
import useFetchSizeTypes from '@/src/api/useFetchSizeTypes/useFetchSizeTypes'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import TableListWithBorboza from '@/src/components/Form/TableListWithBorboza/TableListWithBorboza'
import { BORBOZA_PRODUCTS_API } from '@/src/constants/constants'
import times from '@/src/lib/times'

import { RentAndSizeVariantsTypes } from './_types'
import styles from './RentAndSize.module.scss'

/** компонент отрисовки списка вариантов размеров или аренды */
const RentAndSizeVariants: FC<RentAndSizeVariantsTypes> = ({ mockVariant, name }) => {
  /** варианты аренды */
  const { data: rentTypes, isLoading: isLoadingRents } = useFetchRentTypes({ mockVariant, name })
  /** варианты размеров */
  const { data: sizeTypes, isLoading: isLoadingSizes } = useFetchSizeTypes({ mockVariant, name })
  /** список айди борбозы */
  const { data: borbozaIds } = useFetchOptions({ optionsApi: BORBOZA_PRODUCTS_API })
  /** урл для айди товара */
  const { query } = useRouter()
  /** методы формы */
  const formMethods = useFormContext()
  /** изначальные значения */
  const defaultOptions = formMethods?.getValues(name)

  /** изначальные значения */
  const initialOptions = (name === 'rent' ? rentTypes : sizeTypes)?.data?.map((type) => {
    /** находить опцию */
    const option = defaultOptions?.find((opt) => opt[name === 'rent' ? 'rent_id' : 'size_id'] === type.id)

    if (option) {
      return { ...option, isChecked: !!option.borboza_id }
    } else {
      /** по умолчанию */
      const baseOption = {
        borboza_id: '',
        isChecked: false,
        price: '',
        price_preorder: '',
        price_promotion: '',
        product_id: +query?.productId
      }

      return name === 'rent'
        ? { ...baseOption, rent_id: type.id, rent_type: type }
        : { ...baseOption, size: type, size_id: type.id }
    }
  })

  if (isLoadingRents || isLoadingSizes) {
    return times(5).map((_, index) => (
      <LoaderQuery
        className={styles.loaderRow}
        isLoading={isLoadingRents || isLoadingSizes}
        key={index}
      />
    ))
  }

  if (!rentTypes?.data?.length && !sizeTypes?.data?.length) return null

  return (
    <TableListWithBorboza
      borbozaIds={borbozaIds}
      initialOptions={initialOptions}
      name={name}
      optionTypes={name === 'rent' ? rentTypes : sizeTypes}
    />
  )
}

export default RentAndSizeVariants
