import React from 'react'
import { useFormContext } from 'react-hook-form'

import { CustomInputTypes } from '@/src/components/Form/_types'
import ErrorMessage from '@/src/components/Form/ErrorMessage/ErrorMessage'

/** кастомный компонент радио */
const CustomRadio = ({ label, name, options, ...props }: CustomInputTypes) => {
  /** контекст формы */
  const {
    formState: { errors },
    register
  } = useFormContext()

  /** ошибки */
  const error = errors[name]?.message as string | undefined

  return (
    <div className=''>
      <div className=''>
        <label>
          {label}
        </label>
        <section className=''>
          {options?.map(({ desc, value }) => (
            <label
              className=''
              key={value}
            >
              <input
                {...register(name)}
                {...props}
                type='radio'
                value={value}
              />
              {desc}
            </label>
          ))}
        </section>
      </div>
      <ErrorMessage error={error} />
    </div>
  )
}

export default React.memo(CustomRadio)
