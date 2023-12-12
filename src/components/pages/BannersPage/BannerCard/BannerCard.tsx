import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import Image from 'next/image'
import { FC, forwardRef } from 'react'
import { SortableKnob } from 'react-easy-sort'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import CustomDatePicker from '@/src/components/atoms/CustomDatePicker/CustomDatePicker'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { IconArrowUpDown, IconBox, IconCode, IconEye, IconEyeCrossed, IconSave } from '@/src/constants/icons'

import { BannerCardTypes } from './_types'
import styles from './BannerCard.module.scss'

/** страница баннеров */
const BannerCard: FC<BannerCardTypes> = forwardRef(({ banner, customHolderRef }, ref) => {
  /** стейт открытого кода */
  const [openCode, toggleOpenCode] = useToggle(false)

  return (
    <li
      className={styles.cardBanner}
      // @ts-ignore
      ref={ref}
    >
      <SortableKnob>
        <div
          className={styles.grab}
          ref={customHolderRef}
        >
          <IconWrapper
            IconComponent={IconArrowUpDown}
            iconClassname={styles.iconKnob}
          />
        </div>
      </SortableKnob>
      <Image
        alt='productLogo'
        className={styles.img}
        height={180}
        src={'https://placehold.jp/180x180.png?text=i'}
        width={180}
      />
      <div className={styles.meta}>
        <input
          className={styles.meta__name}
          // eslint-disable-next-line no-console
          onChange={() => console.log('hi')}
          type='text'
          value={banner?.name}
        />
        <div className={styles.meta__calendarAndDelay}>
          <CustomDatePicker
            className={styles.meta__calendar}
            label='Начало показа'
            startDateProps={banner?.date_start}
          />
          <CustomDatePicker
            className={styles.meta__calendar}
            label='Конец показа'
            startDateProps={banner?.date_end}
          />
          <div className={styles.meta__labelWrapper}>
            <span className={styles.meta__label}>
              Задержка
            </span>
            <input
              className={styles.meta__delayInput}
              // eslint-disable-next-line no-console
              onChange={() => console.log('hi')}
              type='text'
              value={banner?.delay}
            />
          </div>
        </div>
        <div className={styles.meta__buttons}>
          <ButtonIcon
            colorVariant={banner?.is_active ? 'blue' : 'gray'}
            icon={banner?.is_active ? IconEye : IconEyeCrossed}
            label={banner?.is_active ? 'Виден' : 'Не виден'}
            paddingVariant={'wide'}
            withIcon={true}
          />
          <ButtonIcon
            colorVariant='black'
            icon={IconCode}
            label={'Код'}
            onClick={() => toggleOpenCode()}
            paddingVariant={'wide'}
            withIcon={true}
          />
          <ButtonIcon
            colorVariant='red'
            icon={IconBox}
            label={'В архив'}
            paddingVariant={'wide'}
            withIcon={true}
          />
        </div>
      </div>
      <div className={cn(styles.htmlCard, openCode && styles.open)}>
        <textarea
          className={styles.textarea}
          // eslint-disable-next-line no-console
          onChange={() => console.log('hi')}
          placeholder='Напишите мне хороший код'
          rows={3}
          value={banner?.html}

        />
        <div className={styles.htmlCard__buttons}>
          <ButtonIcon
            colorVariant='gray'
            label={'Не сохранять'}
            onClick={() => toggleOpenCode(false)}
            paddingVariant={'wide'}
            withIcon={false}
          />
          <ButtonIcon
            colorVariant={'blue'}
            icon={IconSave}
            label={'Сохранить'}
            paddingVariant={'wide'}
            withIcon={true}
          />
        </div>
      </div>
    </li>

  )
})

export default BannerCard
