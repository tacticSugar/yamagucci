import arrayMove from 'array-move'
import cn from 'classnames'
import Image from 'next/image'
import React, { FC, useCallback, useMemo, useRef, useState } from 'react'
import SortableList, { SortableItem, SortableKnob } from 'react-easy-sort'
import { useFormContext } from 'react-hook-form'

import useFetchProducts from '@/src/api/useFetchProducts/useFetchProducts'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { InputTypes } from '@/src/components/Form/_types'
import CustomSearch from '@/src/components/Form/CustomSearch/CustomSearch'
import { IconDnd, IconExternalLink, IconMinusCircle } from '@/src/constants/icons'

import styles from './SearchAdditionalProduct.module.scss'

/** кастомный селект */
const SearchAdditionalProduct:FC<InputTypes> = ({
  label,
  listTitle,
  name,
  placeholder,
  widthNumber
}) => {
  /** контекст формы */
  const {
    getValues,
    setValue
  } = useFormContext()
  /** текущие опции */
  const currentAdditionalProducts = getValues(name)
  /** достаем опшны */
  const { data: products, isLoading } = useFetchProducts()

  /** стейт дополнительных продуктов лендинга */
  const [selectedProducts, setSelectedProducts] = useState(currentAdditionalProducts)
  /** реф на кноб */
  const customHolderRef = useRef(null)

  /** обработчик выбора опции */
  const handleInputChange = useCallback((selectedProduct) => {
    /** добавляем опцию */
    const updatedProducts = [...selectedProducts, selectedProduct]
    setSelectedProducts(updatedProducts)
    setValue(name, updatedProducts)
  }, [name, selectedProducts, setValue])

  /** обработчик удаления опции */
  const handleDeleteProduct = (productId) => {
    /** удаляем опцию */
    const updatedProducts = selectedProducts?.filter((product) => product.id !== productId)
    setSelectedProducts(updatedProducts)
    setValue(name, updatedProducts)
  }

  /** функция сортировки */
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    /** стейт */
    setSelectedProducts((array) => arrayMove(array, oldIndex, newIndex))

    /** меняем местами */
    const updatedProducts = arrayMove(selectedProducts, oldIndex, newIndex)

    setValue(name, updatedProducts)
  }

  /** фильтрует товары для поиска, чтобы не выдавать выбранные */
  const leftProductsToPick = useMemo(() => products?.data?.filter((product) => !selectedProducts?.some((selectedProduct) => selectedProduct?.id === product?.id)), [products, selectedProducts])

  return (
    <div
      className={styles.search}
      style={widthNumber && { maxWidth: widthNumber + '%', width: widthNumber + '%' }}
    >
      <CustomSearch
        inputWrapperClassName={styles.customSearch}
        isErasedSearchAfterPick={true}
        isLoading={isLoading}
        items={leftProductsToPick}
        label={label}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {!!selectedProducts?.length && listTitle && (
        <h5 className={styles.listTitle}>
          {listTitle}
        </h5>
      )}
      {!!selectedProducts?.length && (
        <SortableList
          className={styles.list}
          customHolderRef={customHolderRef}
          draggedItemClassName={styles.dragged}
          onSortEnd={onSortEnd}
        >
          {selectedProducts?.map(product => (
            <SortableItem
              key={product?.id}
            >
              <li className={styles.cardAdditionalProduct}>
                <div className={styles.flexCol}>
                  <span className={styles.product__id}>
                    {product?.id}
                  </span>
                  <SortableKnob>
                    <div
                      className={styles.grab}
                      ref={customHolderRef}
                    >
                      <IconWrapper
                        IconComponent={IconDnd}
                        iconClassname={styles.iconKnob}
                      />
                    </div>
                  </SortableKnob>
                </div>
                <Image
                  alt={product?.name}
                  className={styles.product__img}
                  height={100}
                  src={product?.photo}
                  width={100}
                />
                <div className={styles.flexCol}>
                  <span
                    className={styles.product__name}
                    dangerouslySetInnerHTML={{ __html: product?.name }}
                  />
                  <span className={styles.product__price}>
                    {product?.price}
                  </span>
                </div>
                <div className={cn(styles.flexCol, styles.marginLeft)}>
                  <IconWrapper
                    IconComponent={IconMinusCircle}
                    onClick={() => handleDeleteProduct(product?.id)}
                    wrapperClassname={styles.product__delete}
                  />
                  <a
                    href={`https://www.yamaguchi.ru/${product?.url}`}
                    target='_blank'
                  >
                    <IconWrapper IconComponent={IconExternalLink} />
                  </a>
                </div>
              </li>
            </SortableItem>
          ))}
        </SortableList>
      )}
    </div>

  )
}

export default React.memo(SearchAdditionalProduct)
