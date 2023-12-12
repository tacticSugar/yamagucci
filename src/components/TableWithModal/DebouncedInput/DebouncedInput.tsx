import { type FC, useEffect, useState } from 'react'

import { DebounceInputTypes } from '@/src/components/TableWithModal/_types'

/** домашняя страница */
const DebouncedInput: FC<DebounceInputTypes> = ({
  debounce = 300,
  onChange,
  value: initialValue,
  ...props
}) => {
  /** стейт значения */
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    /** таймаут */
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <input
      {...props}
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  )
}

export default DebouncedInput
