import { type FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import CustomSearch from '@/src/components/Form/CustomSearch/CustomSearch'

import { TableListWithBorbozaTypes } from './_types'
import styles from './TableListWithBorboza.module.scss'

/** компонент таблицы со списком вариантов подключений к борбозе (аренда/размеры) */
const TableListWithBorboza: FC<TableListWithBorbozaTypes> = ({ borbozaIds, initialOptions, name, optionTypes }) => {
  /** контекст формы */
  const formMethods = useFormContext()
  /** стейт аренд */
  const [options, setOptions] = useState(initialOptions)

  /** обработчик изменения */
  const handleInputChange = (id: number, field: string, value: any) => {
    /** обновляем стейт */
    const updatedOptions = options?.map((option) => {
      if (option.rent_id === id || option.size_id === id) {
        return { ...option, [field]: field === 'borboza_id' ? value?.item_id : value || '' }
      }

      return option
    })

    setOptions(updatedOptions)
    formMethods?.setValue(name, updatedOptions)
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th__checkbox} />
          <th className={styles.th__name}>
            {name === 'size' ? 'Размер' : 'Аренда'}
          </th>
          <th className={styles.th__id}>
            Borboza Id
          </th>
          <th className={styles.th__price}>
            Цена (₽)
          </th>
          <th className={styles.th__sale}>
            Акция (₽)
          </th>
          <th className={styles.th__preorder}>
            Предзаказ (₽)
          </th>
        </tr>
      </thead>
      <tbody>
        {optionTypes?.data?.map((optionType) => {
          /** дефолтное состояние */
          const option = options?.find(option => option?.rent_id === optionType?.id || option?.size_id === optionType?.id)

          /** проверка на наличие борбозы */
          const isHaveBorbozaId = !!option?.borboza_id

          return (

            <tr key={optionType.id}>
              <td>
                <input
                  checked={option?.isChecked && isHaveBorbozaId}
                  onChange={(e) => handleInputChange(optionType.id, 'isChecked', e.target.checked)}
                  type='checkbox'
                />
              </td>
              <td>
                <span className={styles.nameCell}>
                  {optionType.name}
                </span>
              </td>
              <td>
                <CustomSearch
                  closeOnItemClick={true}
                  defaultValueProps={option?.borboza_id}
                  items={borbozaIds?.data}
                  onChange={(value) => handleInputChange(optionType.id, 'borboza_id', value)}
                />
              </td>
              <td >
                <input
                  className={styles.inputPrice}
                  onChange={(e) => handleInputChange(optionType.id, 'price', e.target.value)}
                  placeholder='0'
                  value={option?.price}
                />
              </td>
              <td>
                <input
                  className={styles.inputPrice}
                  onChange={(e) => handleInputChange(optionType.id, 'price_promotion', e.target.value)}
                  placeholder='0'
                  value={option?.price_promotion}
                />
              </td>
              <td>
                <input
                  className={styles.inputPrice}
                  onChange={(e) => handleInputChange(optionType.id, 'price_preorder', e.target.value)}
                  placeholder='0'
                  value={option?.price_preorder}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableListWithBorboza
