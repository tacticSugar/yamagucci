import type { FC } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import Img from '@/src/components/atoms/Img/Img'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import Container from '@/src/components/DynamicLayout/Container/Container'

import styles from './ProductHero.module.scss'

type ProductHeroTypes = {}

/** */
const ProductHero: FC<ProductHeroTypes> = ({ gallery, isLoading, name, slogan_color, slogan_font_size, slogan_text, status }) => (
  <Container className={styles.container}>
    <LoaderQuery
      className={styles.loader__img}
      isLoading={isLoading}
    >
      <div>
        <Img
          imgClassname={styles.mainImg}
          photos={gallery?.[0].photos}
        />
      </div>
    </LoaderQuery>

    {/* -------------------------meta------------------------- */}

    <div className={styles.meta}>
      <LoaderQuery
        className={styles.loader__title}
        isLoading={isLoading}
      >
        <h1
          className={styles.meta__title}
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </LoaderQuery>
      <LoaderQuery
        className={styles.loader__slogan}
        isLoading={isLoading}
      >
        <p
          className={styles.meta__slogan}
          dangerouslySetInnerHTML={{ __html: slogan_text }}
          style={{ color: slogan_color, fontSize: slogan_font_size + 'px' }}
        />
      </LoaderQuery>
      <LoaderQuery
        className={styles.loader__title}
        isLoading={isLoading}
      >
        {status?.id === 1 && (
          <p className={styles.meta__status}>
            Есть в наличии
          </p>
        )}
      </LoaderQuery>
      <ButtonIcon
        colorVariant={'red'}
        label={'КНОПАЧКИ'}
        paddingVariant={'wide'}
        withIcon={false}
      />
    </div>
    {/* -------------------------meta------------------------- */}
  </Container>
)

export default ProductHero
