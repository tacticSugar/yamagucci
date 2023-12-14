import cn from 'classnames'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'

import { ButtonIconTypes } from './_types'
import styles from './ButtonIcon.module.scss'

/** компонент кнопки с иконкой */
const ButtonIcon: React.FC<ButtonIconTypes> = ({
  as: Tag = 'button',
  className,
  colorVariant,
  disabled,
  icon: Icon,
  iconWrapperClassName,
  label,
  labelClassName,
  onClick,
  paddingVariant = 'wide',
  type,
  withIcon = true
}) => (
  <Tag
    className={cn(styles.wrapper, styles[`color_${colorVariant}`], styles[`padding_${paddingVariant}`], className)}
    disabled={disabled}
    onClick={onClick}
    title={label}
    {...{
      ...Object.assign({}, Tag === 'button' && { type: type || 'button' })
    }}
  >
    {withIcon && (
      <IconWrapper
        IconComponent={Icon}
        wrapperClassname={cn(styles.iconWrapper, iconWrapperClassName)}
      />
    )}
    <span className={cn(styles.labelClassName, labelClassName)}>
      {label}
    </span>
  </Tag>
)

export default ButtonIcon
