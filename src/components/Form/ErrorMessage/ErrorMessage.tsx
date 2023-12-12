import { FC } from 'react'

import { ErrorMessageTypes } from './_types'

/** сообщение об ошибке для полей формы */
const ErrorMessage: FC<ErrorMessageTypes> = ({ error }) => {
  if (!error) return null

  return (
    <div className=''>
      <p className=''>
        {error}
      </p>
    </div>
  )
}

export default ErrorMessage
