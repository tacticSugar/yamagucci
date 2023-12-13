import cn from 'classnames'
import IconTooltip from 'public/assets/icons/tooltip.svg'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { CustomInputTypes } from '@/src/components/Form/_types'
import ErrorMessage from '@/src/components/Form/ErrorMessage/ErrorMessage'

import styles from './CustomTextarea.module.scss'

/** кастомный инпут */
const CustomTextarea: FC<CustomInputTypes> = ({ cfgStyles, label, name, placeholder, textAreaRows = 10, type, widthNumber = 100 }) => {
  /** контекст формы */
  const {
    formState: { errors },
    register
  } = useFormContext()

  /** ошибки */
  const error = errors[name]?.message as string | undefined

  /** айди */
  const id = `${name}-${type}-${label}`

  return (
    <div
      className={cn(styles.textarea__wrapper)}
      style={{ maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles }}
    >
      <div className={styles.textarea__labelAndTooltip}>
        <label
          className={styles.textarea__label}
          htmlFor={id}
        >
          {label}
        </label>
        <IconWrapper
          IconComponent={IconTooltip}
          iconClassname={styles.textarea__tooltip}
        />
      </div>
      <textarea
        placeholder={placeholder}
        rows={textAreaRows}
        {...register(name)}
        className={styles.textarea__textarea}
        id={id}
      />
      <ErrorMessage error={error} />
    </div>
  )
}

export default React.memo(CustomTextarea)
