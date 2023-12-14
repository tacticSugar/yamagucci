import cn from 'classnames'
import type { FC } from 'react'

import styles from './Img.module.scss'

type ImgTypes = {}

/** */
const Img: FC<ImgTypes> = ({ imgClassname, photos, src, title }) => {
  if (photos) {
    /** */
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
          alt={title}
          className={cn(styles.img, imgClassname)}
          src={photos.original}
        />
      </picture>
    )
  } else if (src) {
    return (
      <img
        alt={title}
        className={cn(styles.img, imgClassname)}
        src={src}
      />
    )
  } else {
    return null
  }
}

export default Img
