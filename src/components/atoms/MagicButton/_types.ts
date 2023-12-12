import { MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

export type MagicButtonTypes = {
  /** children */
  children?: string
  /** className */
  className?: string
  /** hueValue */
  hueValue?: number
  /** type */
  type?: 'button' | 'submit'
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
