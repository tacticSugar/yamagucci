import arrayMove from 'array-move'
import { type FC, useEffect, useRef, useState } from 'react'
import SortableList, { SortableItem, SortableKnob } from 'react-easy-sort'
import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import useFetchProductParams from '@/src/api/useFetchProductParams/useFetchProductParams'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import CustomSearch from '@/src/components/Form/CustomSearch/CustomSearch'
import { IconArrowUpDown, IconEye, IconEyeCrossed, IconPlus, IconTrash } from '@/src/constants/icons'
import times from '@/src/lib/times'

import { handleChangeOptionParams, TechParamsListTypes } from './_types'
import styles from './TechParamsList.module.scss'

/** компонент списка технических параметров продукта */
const TechParamsList: FC<TechParamsListTypes> = ({ name }) => {
  /** все характеристики */
  const { data: productParams, isLoading } = useFetchProductParams()
  /** методы формы */
  const formMethods = useFormContext()
  /** изначальные значения */
  const defaultOptions = formMethods?.getValues(name)
  /** реф */
  const customHolderRef = useRef(null)

  /** стейт списка технических параметров */
  const [techOptions, setTechOptions] = useState(defaultOptions)

  /** функция обработки опций */
  const handleChangeOption = ({ actionType, itemId, selectedValue }:handleChangeOptionParams) => {
    if (actionType === 'addNew') {
      /** новый объект */
      const newTechOption = {
        filter: null,
        id: uuidv4(),
        is_active: 1,
        parameter: '',
        product_id: 0,
        sort: techOptions.length + 1,
        value: ''
      }
      setTechOptions([...techOptions, newTechOption])
    } else {
      setTechOptions((options) => {
        if (actionType === 'updateParameter') {
          return options.map((option) =>
            option.id === itemId ? { ...option, parameter: selectedValue?.name } : option
          )
        } else if (actionType === 'updateFilter') {
          return options.map((option) =>
            option.id === itemId ? { ...option, filter: selectedValue?.name } : option
          )
        } else if (actionType === 'updateValue') {
          return options.map((option) =>
            option.id === itemId ? { ...option, value: selectedValue?.name } : option
          )
        } else if (actionType === 'toggleActive') {
          return options.map((option) =>
            option.id === itemId ? { ...option, isActive: !option.isActive } : option
          )
        } else if (actionType === 'delete') {
          return options.filter((option) => option.id !== itemId)
        } else {
          return options
        }
      })
    }
  }

  /** функция сортировки */
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setTechOptions((array) => {
      /** новый массив */
      const newArray = arrayMove(array, oldIndex, newIndex)
      newArray?.forEach((option: any, index) => {
        option.sort = index
      })

      return newArray
    })
  }

  useEffect(() => {
    formMethods?.setValue(name, techOptions)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techOptions])

  if (!productParams && !isLoading) return null

  if (isLoading) {
    return (
      times(5).map((index) => (
        <LoaderQuery
          className={styles.loaderList}
          isLoading={isLoading}
          key={index}
        />
      ))
    )
  }

  return (
    <>
      <div className={styles.headers}>
        <h3 className={styles.headerParameter}>
          Параметр
        </h3>
        <h3 className={styles.headerFilter}>
          Фильтр
        </h3>
        <h3>
          Значение
        </h3>
      </div>
      <SortableList
        className={styles.list}
        customHolderRef={customHolderRef}
        draggedItemClassName={styles.dragged}
        onSortEnd={onSortEnd}
      >
        {techOptions?.map((option) => (
          <SortableItem
            key={option?.id}
          >
            <li className={styles.techCardWrapper}>
              <SortableKnob>
                <div
                  className={styles.grab}
                  ref={customHolderRef}
                >
                  <IconWrapper
                    IconComponent={IconArrowUpDown}
                    iconClassname={styles.grabIcon}
                  />
                </div>
              </SortableKnob>
              <CustomSearch
                closeOnItemClick={true}
                defaultValueProps={option?.parameter}
                items={productParams?.parameters}
                onChange={(selectedItem) => handleChangeOption({ actionType: 'updateParameter', itemId: option.id, selectedValue: selectedItem })}
                widthNumber='30'
              />
              <CustomSearch
                closeOnItemClick={true}
                defaultValueProps={option?.filter}
                items={productParams?.filters}
                onChange={(selectedItem) => handleChangeOption({ actionType: 'updateFilter', itemId: option.id, selectedValue: selectedItem })}
                widthNumber='20'
              />
              <CustomSearch
                closeOnItemClick={true}
                defaultValueProps={option?.value}
                items={productParams?.values}
                onChange={(selectedItem) => handleChangeOption({ actionType: 'updateValue', itemId: option.id, selectedValue: selectedItem })}
                widthNumber='50'
              />
              <IconWrapper
                IconComponent={option?.isActive ? IconEye : IconEyeCrossed}
                onClick={() => handleChangeOption({ actionType: 'toggleActive', itemId: option.id })}
              />
              <IconWrapper
                IconComponent={IconTrash}
                iconClassname={styles.trashIcon}
                onClick={() => handleChangeOption({ actionType: 'delete', itemId: option.id })}
              />
            </li>
          </SortableItem>
        ))}
      </SortableList>
      <ButtonIcon
        className={styles.addTech}
        colorVariant={'transparentBlue'}
        icon={IconPlus}
        label={'Добавить строку тех. хар'}
        onClick={() => handleChangeOption({ actionType: 'addNew' })}
        paddingVariant={'slim'}
        withIcon={true}
      />
    </>
  )
}

export default TechParamsList
