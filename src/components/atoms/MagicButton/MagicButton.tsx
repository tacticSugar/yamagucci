import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { MagicButtonTypes } from './_types'
import { buttonAnim, highlightAnim, highlightContainerAnim, labelAnim } from './animation'
import styles from './MagicButton.module.scss'
import Sparkles from './Sparkles'
import Stars from './Stars'

/** magicButton */
const MagicButton: FC<MagicButtonTypes> = ({ children = 'Button Text', className, hueValue = 0, type = 'button', ...rest }) => {
  /** setHover */
  const [hover, setHover] = useState<boolean>(false)
  /** sparkles */
  const [sparkles] = useState<number[]>(Array(30).fill(0))

  return (
    <div
      className={className}
      style={{ position: 'relative' }}
    >
      <Sparkles
        hover={hover}
        sparkles={sparkles}
      />
      <motion.button
        {...rest}
        animate={hover ? 'anim' : 'init'}
        className={styles.btn}
        initial='init'
        onHoverEnd={() => setHover(false)}
        onHoverStart={() => setHover(true)}
        style={{ filter: `hue-rotate(${hueValue}deg)` }}
        type={type}
        variants={buttonAnim}
        whileTap='tap'
      >
        <motion.div
          animate={hover ? 'anim' : 'init'}
          className={styles.highlightContainer}
          data-testid='highlight'
          variants={highlightContainerAnim}
        >
          <motion.div
            className={styles.highlight}
            variants={highlightAnim}
          />
        </motion.div>
        <Stars hover={hover} />
        <motion.span variants={labelAnim}>
          {children}
        </motion.span>
      </motion.button>
    </div>
  )
}

export default MagicButton
