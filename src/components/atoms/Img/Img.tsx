import cn from 'classnames'
import type { FC } from 'react'

import { ImgTypes } from './_types'
import styles from './Img.module.scss'

/** кастомный компонент Img */
const Img: FC<ImgTypes> = ({ alt, height, imgClassname, photos, src, width }) => {
  if (photos) {
    /** генерация тегов source */
    const sourceTags = Object.entries(photos)?.map(([size, url]) => (
      <source
        key={size}
        media={`(max-width: ${size}px)`}
        srcSet={url?.toString()}
      />
    ))

    return (
      <picture>
        {sourceTags}
        <img
          alt={alt}
          className={cn(styles.img, imgClassname)}
          height={height}
          src={photos.original}
          width={width}
        />
      </picture>
    )
  } else if (src) {
    return (
      <img
        alt={alt}
        className={cn(styles.img, imgClassname)}
        height={height}
        src={src}
        width={width}
      />
    )
  } else {
    return null
  }
}

export default Img
