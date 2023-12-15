import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import IconSearch from 'public/assets/icons/search.svg'
import IconTooltip from 'public/assets/icons/tooltip.svg'
import React, { FC, useCallback, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import { CustomCheckbox } from '@/src/components/Form/CustomCheckbox/CustomCheckbox'
import useOutsideClick from '@/src/lib/useOutSideClick'

import { CustomSearchTypes } from './_types'
import styles from './CustomSearch.module.scss'

/** кастомный селект */
const CustomSearch:FC<CustomSearchTypes> = ({
  cfgStyles,
  className,
  closeOnItemClick,
  defaultValueProps,
  disabledIds = [],
  inputWrapperClassName,
  isErasedSearchAfterPick = false,
  isInputChangable,
  isLoading,
  items,
  label,
  mainOptionClassname,
  maxItems = 50,
  name,
  onChange,
  optionWrapperClassname,
  placeholder,
  subOptionClassname,
  widthNumber,
  withCheckboxes,
  withTooltip = true
}) => {
  /** контекст формы */
  const formMethods = useFormContext()
  /** текущая опция */
  const currentOptions = formMethods?.getValues(name)
  /** стейт поиска */
  const [searchValue, setSearchValue] = useState((name ? currentOptions : '') || defaultValueProps || '')
  /** выключатель категорий */
  const [showResults, toggleShowResults] = useToggle(true)
  /** выключатель подкатегорий */
  const [showSubcategories, toggleShowSubcategories] = useToggle(true)
  /** регуйное выражение */
  const regex = useMemo(() => new RegExp(searchValue, 'i'), [searchValue])
  /** стейт для открытия опшнов */
  const [isOpen, toggleOpen] = useToggle(false)
  /** реф для закрытия опшнов */
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => {
    if (withCheckboxes) return

    toggleOpen(false)
  })

  /** обработчик выбора опции */
  const handlePickOption = (e, item) => {
    if (onChange) {
      e.stopPropagation()
      onChange(item)
      !isErasedSearchAfterPick && setSearchValue(item?.item_id || item?.name || item || '')
      closeOnItemClick && toggleOpen(false)
    } else {
      formMethods?.setValue(name, item.id)
      toggleOpen(false)
    }
  }

  /** обработчик ввода значения */
  const handleInputValue = (e) => {
    if (e.target.value === '') {
      if (onChange) { onChange('') }

      setSearchValue('')
    } else {
      if (onChange && isInputChangable) { onChange({ name: e.target.value }) }

      setSearchValue(e.target.value)
    }
  }

  /** отфильтрованные опции */
  const filteredItems = useMemo(() => {
    if (searchValue?.length < 1) return items

    return items?.reduce((acc, { ...item }) => {
      item.subcategories = item?.subcategories?.reduce((subAcc, subcategory) => {
        if (regex.test(subcategory?.name)) {
          subAcc.push(subcategory)
        }

        return subAcc
      }, [])

      if (item.subcategories?.length > 0) {
        acc.push(item)

        return acc
      }
      if (regex.test(item?.name || item?.title)) {
        acc.push(item)
      }

      return acc
    }, [])
  }, [items, searchValue?.length, regex])

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
      <div className={styles.inputWithCheckboxes}>
        <div
          className={cn(styles.input__wrapper, inputWrapperClassName, withCheckboxes && styles.input__withCheckboxes)}
          onClick={() => toggleOpen(true)}
          ref={selectRef}
        >
          <input
            className={styles.input__input}
            onChange={handleInputValue}
            placeholder={placeholder}
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
              items?.length && (showResults || showSubcategories) && (
                <div className={cn(styles.options, optionWrapperClassname, isOpen && styles.open)}>
                  {filteredItems.slice(0, maxItems)?.map((item, index) => (
                    <React.Fragment key={index}>
                      {showResults && (
                        <div
                          className={cn(styles.option, mainOptionClassname, disabledIds.includes(item.id) && styles.disabled)}
                          dangerouslySetInnerHTML={{ __html: item?.name?.replace(regex, markedSpan) || item?.title?.replace(regex, markedSpan) }}
                          data-value={item.id}
                          onClick={(e) => handlePickOption(e, item)}
                        />
                      )}
                      {!!item?.subcategories?.length && showSubcategories && (
                        item?.subcategories?.map(subCategory => (
                          <div
                            className={cn(styles.option, subOptionClassname, disabledIds.includes(subCategory.id) && styles.disabled)}
                            dangerouslySetInnerHTML={{ __html: `---${subCategory?.name?.replace(regex, markedSpan)}` }}
                            data-value={item.id}
                            key={subCategory?.id}
                            onClick={(e) => handlePickOption(e, subCategory)}
                          />
                        ))
                      )}
                    </React.Fragment>
                  )
                  )}
                </div>
              )
            )}
        </div>
        {withCheckboxes && (
          <div className={styles.checkboxes}>
            <CustomCheckbox
              checked={showResults}
              label='Категории'
              onChange={toggleShowResults}
            />
            <CustomCheckbox
              checked={showSubcategories}
              label='Подкатегории'
              onChange={toggleShowSubcategories}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomSearch
