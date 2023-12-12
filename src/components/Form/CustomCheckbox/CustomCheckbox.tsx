import cn from 'classnames'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { CustomInputTypes } from '@/src/components/Form/_types'
import ErrorMessage from '@/src/components/Form/ErrorMessage/ErrorMessage'

import styles from './CustomCheckbox.module.scss'

/** компонент кастомного чекбокса */
export const CustomCheckbox: FC<CustomInputTypes> = ({ cfgStyles, checked, label, labelClassName, name, onChange, widthNumber }) => {
  /** контекст формы */
  const data = useFormContext()

  /** ошибки */
  const error = data?.formState?.errors[name]?.message as string | undefined

  return (
    <>
      <label
        className={cn(styles.wrapper, labelClassName)}
        style={{ maxWidth: widthNumber + '%', width: widthNumber + '%', ...cfgStyles }}
      >
        <input
          checked={checked}
          onChange={onChange}
          type='checkbox'
          {...(!checked && !onChange && data?.register(name))}
        />
        <span className={styles.checkmark} />
        {label}
      </label>
      <ErrorMessage error={error} />
    </>
  )
}
