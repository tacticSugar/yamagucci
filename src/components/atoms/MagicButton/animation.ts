import { Variants } from 'framer-motion'

import { randomInt } from '@/src/lib/randomInt'

export const buttonAnim: Variants = {
  anim: {
    background: 'radial-gradient(70% 100% at 50% 110%, #b37afd 0%, rgb(77, 19, 212) 100%)',
    boxShadow:
      '0 0 200px 50px rgba(65, 18, 161, 1), 0 2px 0 0 rgb(120, 54, 250) inset, 0 -2px 0 0 rgb(86, 4, 250) inset',
    outline: '7px solid rgba(137, 87, 255, 0.2)',
    scale: 1.2,
    transition: {
      bounce: 0.25,
      duration: 0.5,
      type: 'spring'
    }
  },
  init: {
    background: 'radial-gradient(70% 90% at 50% 100%, rgb(31, 30, 31) 0%, rgb(31, 30, 31) 100%)',
    boxShadow: '0 0 0 0 rgba(66, 18, 161, 0)',
    outline: '7px solid rgba(129, 75, 255, 0)',
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1]
    }
  },
  tap: {
    scale: 1
  }
}

export const labelAnim: Variants = {
  anim: {
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1]
    }
  },
  init: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'white',
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export const svgAnim: Variants = {
  anim: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2
    }
  },
  init: {}
}

export const pathAnim: Variants = {
  anim: (i: number) => ({
    fill: 'white',
    opacity: [null, 0.5, 1, i === 1 ? 1 : (3 - i + 1) / 4],
    scale: [null, 0.5, 1.3, 1],
    transition: {
      duration: 0.1,
      repeat: Infinity,
      repeatDelay: 2.2
    }
  }),
  init: (i: number) => ({
    fill: 'white',
    opacity: (3 - i + 1) / 4,
    transition: {
      duration: 0.1
    }
  })
}

export const highlightContainerAnim: Variants = {
  anim: {
    scaleX: [null, -1],
    scaleY: [null, -1],
    transition: {
      delay: 1.3,
      duration: 0.001,
      ease: 'linear',
      repeat: Infinity,
      repeatDelay: 1.3,
      repeatType: 'reverse'
    }
  },
  init: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.001,
      ease: 'linear'
    }
  }
}

export const highlightAnim: Variants = {
  anim: {
    rotateZ: [null, 65],
    transition: {
      duration: 1.3,
      ease: [0.5, 1, 0.89, 1],
      repeat: Infinity
    }
  },
  init: {
    rotateZ: -65,
    transition: { duration: 0.001, ease: 'linear' }
  }
}

/** sparkleAnim */
export const sparkleAnim: Variants = {
  anim: (i: number) => ({
    fill: 'red',
    opacity: randomInt(30, 60) / 10,
    rotateZ: i % 2 === 0 ? [0, 360] : [-360, 0],
    scale: 1,
    transition: {
      delay: randomInt(1, 10) * -1,
      duration: randomInt(10, 25),
      ease: 'linear',
      opacity: { duration: 1, ease: 'anticipate' },
      repeat: Infinity,
      scale: { duration: 2, ease: 'anticipate' }
    }
  }),
  init: () => ({
    left: `calc(${randomInt(3, 9)} * 10%)`,
    opacity: 0,
    rotateZ: 0,
    scale: 0,
    top: `calc(${randomInt(3, 9)} * 10%)`,
    transformOrigin: `${Math.random() > 0.5 ? randomInt(30, 80) * -10 : randomInt(30, 80) * 10}% ${
      Math.random() > 0.5 ? randomInt(30, 80) * -10 : randomInt(30, 80) * 10
    }%`,
    // transition: { duration: 0.5 },
    width: `calc(${randomInt(3, 9) / 10} * 14px)`
  })
}
