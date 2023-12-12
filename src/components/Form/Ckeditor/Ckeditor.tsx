import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { InputTypes } from '@/src/components/Form/_types'

import styles from './Ckeditor.module.scss'

/** конфигурация эдитора */
const editorConfiguration = {}

/** wysiwyg editor */
const Ckeditor: FC<InputTypes> = ({ label, name }) => {
  /** контекст формы */
  const {
    getValues,
    setValue
  } = useFormContext()
  /** текущие опции */
  const initialData = getValues(name)

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.label}>
        { label }
      </h5>
      <CKEditor
        config={ editorConfiguration }
        data={ initialData }
        editor={ Editor.Editor }
        onChange={ (event, editor) => {
        /** дата */
          const data = editor.getData()
          setValue(name, data)
        } }
      />
    </div>

  )
}

export default Ckeditor
