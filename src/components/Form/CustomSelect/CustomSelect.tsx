import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import React, { FC, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import useFetchOptions from '@/src/api/useFetchOptions/useFetchOptions'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import { CustomInputTypes } from '@/src/components/Form/_types'
import times from '@/src/lib/times'
import useOutsideClick from '@/src/lib/useOutSideClick'

import styles from './CustomSelect.module.scss'

/** кастомный селект */
const CustomSelect:FC<CustomInputTypes> = ({
  cfgStyles,
  label,
  name,
  optionsApi,
  valueProps,
  widthNumber = '20'
}) => {
  /** достаем опшны */
  const { data: options, isLoading } = useFetchOptions({ optionsApi })

  /** стейт для открытия опшнов */
  const [isOpen, toggleOpen] = useToggle(false)
  /** стейт поиска */
  const [searchValue, setSearchValue] = useState('')
  /** нужен ли поиск для опций */
  const showSearchField = options?.data?.length > 7
  /** отфильтрованные опции */
  const filteredOptions = options?.data?.filter((item) =>
    item?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())
  )
  /** контекст формы */
  const {
    getValues,
    setValue
  } = useFormContext()
  /** текущая опция */
  const currentOption = getValues(name)
  /** реф для закрытия опшнов */
  const selectRef = useRef(null)
  // console.log('currentOption', currentOption)
  // console.log('options', options)

  useOutsideClick(selectRef, () => {
    toggleOpen(false)
  })

  /** обработчик выбора опции */
  const handlePickOption = (item) => {
    setValue(name, item.id)
    toggleOpen(false)
  }

  return (
    <div
      className={cn(styles.select__wrapper, isOpen && styles.open)}
      ref={selectRef}
      style={{ maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles }}
    >
      <label
        className={styles.select__label}
      >
        {label}
      </label>
      <div
        className={styles.select__trigger}
        onClick={() => toggleOpen(true)}
      >
        <LoaderQuery
          className={styles.loaderInput}
          isLoading={isLoading}
        >
          <span>
            {options?.data?.find((item) => item?.id === (currentOption?.id || currentOption || valueProps))?.name || label}
          </span>
        </LoaderQuery>
        <div className={styles.arrow} />
      </div>
      <div className={cn(styles.options, isOpen && styles.open)}>
        {showSearchField && (
          <input
            className={styles.searchField}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Поиск...'
            type='text'
            value={searchValue}
          />
        )}
        {isLoading
          ? times(4).map((index) => (
            <LoaderQuery
              className={styles.loaderOptions}
              isLoading={isLoading}
              key={index}
            />
          ))
          : (showSearchField ? filteredOptions : options?.data)?.map((item) => (
            <div
              className={styles.optionContainer}
              key={item.id}
              onClick={() => handlePickOption(item)}
            >
              <div
                className={cn(styles.option, currentOption === item.id && styles.selected)}
                dangerouslySetInnerHTML={{ __html: item.name }}
                data-value={item.id}
              />
            </div>
          ))}
      </div>
    </div>

  )
}

export default CustomSelect
