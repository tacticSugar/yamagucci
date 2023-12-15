import { useToggle } from '@reactuses/core'
import { type FC, useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import useFetchCategories from '@/src/api/useFetchCategories/useFetchCategories'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import ModalWrapper from '@/src/components/atoms/ModalWrapper/ModalWrapper'
import CustomSearch from '@/src/components/Form/CustomSearch/CustomSearch'
import { IconClose, IconPlus } from '@/src/constants/icons'

import { CategoriesModalTypes, Category } from './_types'
import styles from './CategoriesModal.module.scss'
import CategoryCard from './CategoryCard/CategoryCard'

/** компонент категорий с модалкой */
const CategoriesModal: FC<CategoriesModalTypes> = ({
  cfgStyles,
  label,
  name,
  widthNumber
}) => {
  /** все категории */
  const { data: categories, isLoading } = useFetchCategories()

  /** контекст формы */
  const {
    getValues,
    setValue
  } = useFormContext()
  /** достаем текущие опции */
  const currentCategories = getValues(name)
  /** стейт категоий */
  const [mainCategories, setMainCategories] = useState<Category[]>([])
  /** стейт подкатегорий */
  const [subCategories, setSubCategories] = useState<Category[]>([])
  /** стейт новых категоий */
  const [newMainCategories, setNewMainCategories] = useState<Category[]>([])
  /** стейт новых подкатегорий */
  const [newSubCategories, setNewSubCategories] = useState<Category[]>([])
  /** состояние модалки */
  const [isModalIsOpen, toggleModal] = useToggle(false)

  useEffect(() => {
    /** категории */
    const mainCats: Category[] = []
    /** подкатегории */
    const subCats: Category[] = []
    currentCategories.forEach((category) => {
      if (category.parent_id === null) {
        mainCats.push(category)
      } else {
        subCats.push(category)
      }
    })
    setMainCategories(mainCats)
    setSubCategories(subCats)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** обработчик удаления категории */
  const handleDeleteCategory = (categoryId) => {
    /** удаляем опцию */
    const updatedCategories = mainCategories?.filter((product) => product.id !== categoryId)
    setMainCategories(updatedCategories)
    setValue(name, [...subCategories, ...updatedCategories])
  }
  /** обработчик удаления категории */
  const handleDeleteSubCategory = (categoryId) => {
    /** удаляем опцию */
    const updatedSubCategories = subCategories?.filter((product) => product.id !== categoryId)
    setSubCategories(updatedSubCategories)
    setValue(name, [...mainCategories, ...updatedSubCategories])
  }
  /** обработчик удаления категории */
  const handleDeleteNewCategory = (categoryId) => {
    /** удаляем опцию */
    const updatedCategories = newMainCategories?.filter((product) => product.id !== categoryId)
    setNewMainCategories(updatedCategories)
  }
  /** обработчик удаления категории */
  const handleDeleteNewSubCategory = (categoryId) => {
    /** удаляем опцию */
    const updatedSubCategories = newSubCategories?.filter((product) => product.id !== categoryId)
    setNewSubCategories(updatedSubCategories)
  }

  /** сохранить */
  const handleSavePickedCategories = () => {
    setMainCategories([...mainCategories, ...newMainCategories])
    setSubCategories([...subCategories, ...newSubCategories])
    setValue(name, [...mainCategories, ...subCategories, ...newMainCategories, ...newSubCategories])
    toggleModal(false)
  }

  /** связать подкатегорию с родительской категорией */
  const getParentName = (categoryId: number): string | undefined => {
    /** найти родительскую категорию */
    const parentCategory = categories?.data?.find((category) => category.id === categoryId)

    return parentCategory?.name
  }

  /** нажатие по категории или подкатегории */
  const onChange = (category) => {
    if (category?.parent_id) {
      setNewSubCategories([...newSubCategories, category])
    } else {
      setNewMainCategories([...newMainCategories, category])
    }
  }

  /** все айди */
  const collectAllIds = useMemo<number[]>(() => {
    /** все категории */
    const allCategories = [...mainCategories, ...subCategories, ...newMainCategories, ...newSubCategories]
    /** все айди */
    const allIds = allCategories.map(category => category.id)

    return allIds
  }, [mainCategories, newMainCategories, newSubCategories, subCategories])

  return (
    <div style={widthNumber && { maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles }}>
      <ModalWrapper
        className={styles.modal}
        contentClassName={styles.contentClassName}
        handleClose={() => toggleModal(false)}
        isOpen={isModalIsOpen}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={false}
        variantAnimation='toTop'
      >
        <div className={styles.modalContentWrapper}>
          <CustomSearch
            disabledIds={collectAllIds}
            isErasedSearchAfterPick={true}
            isLoading={isLoading}
            items={categories?.data}
            label='Показывать'
            mainOptionClassname={styles.mainOptionClassname}
            maxItems={3000}
            onChange={onChange}
            optionWrapperClassname={styles.optionWrapperClassname}
            placeholder='выберите категорию'
            subOptionClassname={styles.subOptionClassname}
            withCheckboxes={true}
          />
          <div className={styles.selectedCategoriesModal}>
            <div className={styles.selectedCategoriesContainer}>
              <h5 className={styles.label_sm}>
                Выбранные категории
              </h5>
              <ul className={styles.list}>
                {mainCategories.map((category) => (
                  <CategoryCard
                    category={category}
                    key={category.id}
                    onClick={handleDeleteCategory}
                  />
                ))}
                {subCategories.map((category) => (
                  <CategoryCard
                    category={category}
                    getParentName={getParentName}
                    key={category.id}
                    onClick={handleDeleteSubCategory}
                  />
                ))}
              </ul>
              <h5 className={styles.label_sm}>
                Добавить
              </h5>
              <ul className={styles.list}>
                {newMainCategories.map((category) => (
                  <CategoryCard
                    category={category}
                    key={category.id}
                    onClick={handleDeleteNewCategory}
                  />
                ))}
                {newSubCategories.map((category) => (
                  <CategoryCard
                    category={category}
                    getParentName={getParentName}
                    key={category.id}
                    onClick={handleDeleteNewSubCategory}
                  />
                ))}
              </ul>
            </div>
            <div className={styles.buttonsModal}>
              <ButtonIcon
                className={styles.btnModal}
                colorVariant='blue'
                label='Сохранить'
                onClick={handleSavePickedCategories}
                paddingVariant='wide'
                withIcon={false}
              />
              <ButtonIcon
                className={styles.btnModal}
                colorVariant='gray'
                label='Отмена'
                onClick={() => toggleModal(false)}
                paddingVariant='wide'
                withIcon={false}
              />
            </div>
          </div>
          <IconWrapper
            IconComponent={IconClose}
            onClick={() => toggleModal(false)}
            wrapperClassname={styles.closeModalIcon}
          />
        </div>
      </ModalWrapper>
      <h5 className={styles.label}>
        {label}
      </h5>
      <ul className={styles.list}>
        {mainCategories.map((category) => (
          <CategoryCard
            category={category}
            key={category.id}
            onClick={handleDeleteCategory}
          />
        ))}
      </ul>
      <ul className={styles.list}>
        {subCategories.map((category) => (
          <CategoryCard
            category={category}
            getParentName={getParentName}
            key={category.id}
            onClick={handleDeleteSubCategory}
          />
        ))}
      </ul>
      <ButtonIcon
        colorVariant='blue'
        icon={IconPlus}
        label='Добавить категорию'
        onClick={() => toggleModal(true)}
        paddingVariant='wide'
        withIcon={true}
      />
    </div>
  )
}

export default CategoriesModal
