import cn from 'classnames'
import IconTooltip from 'public/assets/icons/tooltip.svg'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { CustomInputTypes } from '@/src/components/Form/_types'
import ErrorMessage from '@/src/components/Form/ErrorMessage/ErrorMessage'

import styles from './CustomInput.module.scss'

/** кастомный инпут */
const CustomInput: FC<CustomInputTypes> = ({ cfgStyles, label, name, placeholder, type, widthNumber = 100 }) => {
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
      className={cn(styles.input__wrapper)}
      style={{ maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles }}
    >
      <div className={styles.input__labelAndTooltip}>
        <label
          className={styles.input__label}
          htmlFor={id}
        >
          {label}
        </label>
        <IconWrapper
          IconComponent={IconTooltip}
          iconClassname={styles.input__tooltip}
        />
      </div>
      <input
        placeholder={placeholder}
        {...register(name)}
        autoComplete='off'
        className={styles.input__input}
        id={id}
        type={type}
      />
      <ErrorMessage error={error} />
    </div>
  )
}

export default React.memo(CustomInput)
