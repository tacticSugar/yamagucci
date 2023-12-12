import cn from 'classnames'
import ru from 'date-fns/locale/ru'
import React, { FC, forwardRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { IconArrowLeft, IconArrowRight } from '@/src/constants/icons'

import { CustomDateInputProps, CustomDatePickerTypes } from './_types'
import styles from './CustomDatePicker.module.scss'

registerLocale('ru', ru)

/** возвращает месяц */
const _getMonth = (date) => date.getMonth()

/** возвращает год */
const _getYear = (date) => {
  /** год */
  const year = date.getFullYear()

  return year % 100
}

/** возвращает день */
const _getDay = (date) => {
  /** день */
  const day = date.getDate()

  return day < 10 ? `0${day}` : `${day}`
}

/** календарь - компонент выбора даты */
const CustomDatePicker: FC<CustomDatePickerTypes> = ({ className, label, startDateProps }) => {
  /** начальная дата */
  const [startDate, setStartDate] = useState(startDateProps && new Date(startDateProps))
  /** месяцы */
  const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ]
  /** кастомный компонент даты */
  const CustomDateInput: FC<CustomDateInputProps> = forwardRef(({ onClick, value }, ref) => {
    /** обрабатывает нажатие */
    const handleClickInput = () => {
      /** подтверждает действие */
      const confirmed = window.confirm('Вы точно хотите изменить дату?')

      if (confirmed) {
        onClick()
      }
    }

    return (
      <button
        onClick={handleClickInput}
        // @ts-ignore
        ref={ref}
        type='button'
      >
        {value || 'Введите дату'}
      </button>
    )
  }
  )
  /** кастомный день */
  const renderDayContents = (day, date) => _getDay(date)

  /** обработчик выбора даты */
  const handleChangeDate = (date) => {
    setStartDate(date)
  }
  /** обработчик закрытия календаря */
  const handleOnCalendarClose = () => {
    // console.log('handleOnCalendarClose startDate', startDate)
  }

  return (
    <div className={cn(styles.labelWrapper, className)}>
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
      <DatePicker
        customInput={<CustomDateInput />}
        dateFormat='dd.MM.yyyy HH:mm'
        isClearable
        locale='ru'
        onCalendarClose={handleOnCalendarClose}
        onChange={handleChangeDate}
        popperPlacement='bottom-start'
        renderCustomHeader={({
          changeMonth,
          date,
          decreaseMonth,
          increaseMonth,
          nextMonthButtonDisabled,
          prevMonthButtonDisabled
        }) => (
          <div
            className={styles.header}
          >
            <select
              className={styles.select}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))}
              value={months[_getMonth(date)]}
            >
              {months.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
            <span className={styles.year}>
              {`‘${_getYear(date)}`}
            </span>
            <div className={styles.buttons}>
              <button
                disabled={prevMonthButtonDisabled}
                onClick={decreaseMonth}
                type='button'
              >
                <IconWrapper IconComponent={IconArrowLeft} />
              </button>
              <button
                disabled={nextMonthButtonDisabled}
                onClick={increaseMonth}
                type='button'
              >
                <IconWrapper IconComponent={IconArrowRight} />
              </button>
            </div>
          </div>
        )}
        renderDayContents={renderDayContents}
        selected={startDate}
        showTimeSelect
        timeCaption=''
        timeFormat='p'
        timeIntervals={60}
      />
    </div>

  )
}

export default CustomDatePicker
