import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import escapeRegExp from 'escape-string-regexp'
import IconSearch from 'public/assets/icons/search.svg'
import IconTooltip from 'public/assets/icons/tooltip.svg'
import React, { FC, useCallback, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import useFetchBorbozaIds from '@/src/api/useFetchBorbozaIds/useFetchBorbozaIds'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import useOutsideClick from '@/src/lib/useOutSideClick'

import { BorbozaSearchTypes } from './_types'
import styles from './BorbozaSearch.module.scss'

/** кастомный селект */
const BorbozaSearch:FC<BorbozaSearchTypes> = ({
  cfgStyles,
  className,
  defaultValueProps,
  inputWrapperClassName,
  isLoading,
  label,
  mainOptionClassname,
  name,
  onChange,
  optionWrapperClassname,
  placeholder,
  widthNumber,
  withTooltip = true
}) => {
  /** контекст формы */
  const formMethods = useFormContext()
  /** текущая опция */
  const currentOption = name && formMethods?.getValues(name)

  /** список айди борбозы */
  const { data: borbozaIds } = useFetchBorbozaIds()
  /** стейт поиска */
  const [searchValue, setSearchValue] = useState(defaultValueProps || currentOption || '')
  /** регулярное выражение */
  const regex = useMemo(() => new RegExp(escapeRegExp(searchValue.toString()), 'i'), [searchValue])
  /** стейт для открытия опшнов */
  const [isOpen, toggleOpen] = useToggle(false)
  /** реф для закрытия опшнов */
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => {
    toggleOpen(false)
  })

  /** обработчик выбора опции */
  const handlePickOption = (item) => {
    if (onChange) onChange(item)
    if (name) formMethods?.setValue(name, item.item_id)

    setSearchValue(item?.title)
    toggleOpen(false)
  }

  /** обработчик ввода значения */
  const handleInputValue = (e) => {
    if (e.target.value === '') {
      if (onChange) onChange('')

      setSearchValue('')
    } else {
      setSearchValue(e.target.value)
    }
  }

  /** отфильтрованные опции */
  const filteredItems = useMemo(() => {
    if (searchValue?.length < 1) return borbozaIds?.data

    return borbozaIds?.data?.reduce((acc, { ...item }) => {
      if (regex.test(item?.title)) {
        acc.push(item)
      }

      return acc
    }, [])
  }, [searchValue?.length, borbozaIds?.data, regex])

  /** выделенная маркировка поиска */
  const markedSpan = useCallback((text) => `<span class="${styles.mark}">${text}</span>`, [])

  return (
    <div
      className={cn(styles.search__wrapper, className)}
      style={widthNumber && { maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles } }
    >
      {label && (
        <div className={styles.search__labelAndTooltip}>
          <label className={styles.search__label}>
            {label}
          </label>
          {withTooltip && (
            <IconWrapper
              IconComponent={IconTooltip}
              iconClassname={styles.search__tooltip}
            />
          )}
        </div>
      )}
      <div
        className={cn(styles.input__wrapper, inputWrapperClassName)}
        onClick={() => toggleOpen(true)}
        ref={selectRef}
      >
        <input
          className={styles.input__input}
          onChange={handleInputValue}
          placeholder={ placeholder || 'Подключите товар к системе учета'}
          value={searchValue}
        />
        <IconWrapper
          IconComponent={IconSearch}
        />
        {isLoading
          ? (
            <LoaderQuery
              className={cn(styles.options, isOpen && styles.open)}
              isLoading={isLoading}
            />
          )
          : (
            borbozaIds?.data?.length && (
              <div className={cn(styles.options, optionWrapperClassname, isOpen && styles.open)}>
                {filteredItems.length
                  ? filteredItems?.map((item, index) => (
                    <div
                      className={cn(styles.option, mainOptionClassname)}
                      dangerouslySetInnerHTML={{ __html: item?.title?.replace(regex, markedSpan) }}
                      data-value={item.item_id}
                      key={index}
                      onClick={() => handlePickOption(item)}
                    />
                  )
                  )
                  : (
                    <div
                      className={cn(styles.option, mainOptionClassname)}
                      dangerouslySetInnerHTML={{ __html: 'Ничего не найдено' }}
                    />
                  )}
              </div>
            )
          )}
      </div>
    </div>
  )
}

export default BorbozaSearch
