import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import CategoriesModal from './CategoriesModal/CategoriesModal'
import { CustomCheckbox } from './CustomCheckbox/CustomCheckbox'
import CustomInput from './CustomInput/CustomInput'
import CustomRadio from './CustomRadio/CustomRadio'
import CustomSearch from './CustomSearch/CustomSearch'
import CustomSelect from './CustomSelect/CustomSelect'
import CustomTextarea from './CustomTextarea/CustomTextarea'
import styles from './Form.module.scss'
import RentAndSizeVariants from './RentAndSizeVariants/RentAndSizeVariants'
import SearchAdditionalProduct from './SearchAdditionalProduct/SearchAdditionalProduct'

/** рендерит ckeditor lazy */
const Ckeditor = dynamic(() => import('./Ckeditor/Ckeditor'), { ssr: false })

/** рендерит отдельный инпут */
const _renderInput = (inputProps: any) => {
  switch (inputProps.type) {
    case 'select':
      return (
        <CustomSelect
          key={inputProps.name}
          {...inputProps}
        />
      )
    case 'checkbox':
      return (
        <CustomCheckbox
          {...inputProps}
          key={inputProps.name}
        />
      )
    case 'radio':
      return (
        <CustomRadio
          {...inputProps}
          key={inputProps.name}
        />
      )
    case 'search':
      return (
        <CustomSearch
          {...inputProps}
          key={inputProps.name}
        />
      )
    case 'textarea':
      return (
        <CustomTextarea
          {...inputProps}
          key={inputProps.name}
        />
      )
    default:
      return (
        <CustomInput
          {...inputProps}
          key={inputProps.name}
        />
      )
  }
}

/** создает группу инпутов */
const _createInputGroup = (group: any, index) => (
  <div
    className={styles.groupWrapper}
    key={index}
    style={{ maxWidth: group?.widthNumber + '%', width: group?.widthNumber + '%', ...group?.cfgStyles }}
  >
    {group?.groupTitle && (
      <h3 className={styles.groupTitle}>
        {group?.groupTitle}
      </h3>
    )}
    <div
      className={styles.groupItems}
      style={{ ...group?.cfgGroupStyles }}
    >
      {group?.inputs?.map((inputProps: any) => (
        _renderInput(inputProps)
      ))}
    </div>
  </div>
)

/** компонент отрисовки инпутов */
const Form: FC<any> = ({ formContent }) => (
  formContent?.map((item, index) => {
    switch (item?.type) {
      case 'group':
        return _createInputGroup(item, index)
      case 'searchAdditionalProduct':
        return (
          <SearchAdditionalProduct
            {...item}
            key={index}
          />
        )
      case 'categoriesModal':
        return (
          <CategoriesModal
            {...item}
            key={index}
          />
        )
      case 'ckeditor':
        return (
          <Ckeditor
            {...item}
            key={index}
          />
        )
      case 'rent':
        return (
          <RentAndSizeVariants
            {...item}
            key={index}
          />
        )
      case 'size':
        return (
          <RentAndSizeVariants
            {...item}
            key={index}
          />
        )
      case 'search':
      case 'text':
      case 'number':
      case 'checkbox':
      case 'textarea':
      case 'radio':
      case 'select':
      case 'password':
      case 'email':
        return _renderInput(item)
      default:
        return ''
    }
  })
)

export default Form
