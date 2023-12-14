import type { FC } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import Img from '@/src/components/atoms/Img/Img'
import Container from '@/src/components/DynamicLayout/Container/Container'

import styles from './ProductHero.module.scss'

type ProductHeroTypes = {}

/** */
const ProductHero: FC<ProductHeroTypes> = ({ gallery, name, slogan_color, slogan_font_size, slogan_text, status }) => (
  <Container
    className={styles.container}
    variant='md'
  >
    <div className={styles.wrapper}>
      <div>
        <Img
          imgClassname={styles.mainImg}
          photos={gallery?.[0].photos}
        />
      </div>
      {/* -------------------------meta------------------------- */}
      <div className={styles.meta}>
        <h1
          className={styles.meta__title}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        <p
          className={styles.meta__slogan}
          dangerouslySetInnerHTML={{ __html: slogan_text }}
          style={{ color: slogan_color, fontSize: slogan_font_size + 'px' }}
        />
        {status?.id === 1 && (
          <p className={styles.meta__status}>
            Есть в наличии
          </p>
        )}
        <ButtonIcon
          colorVariant={'red'}
          label={'КНОПАЧКИ'}
          paddingVariant={'wide'}
          withIcon={false}
        />
      </div>
      {/* -------------------------meta------------------------- */}

    </div>
  </Container>
)

export default ProductHero
