import arrayMove from 'array-move'
import { type FC, memo, useRef, useState } from 'react'
import SortableList, { SortableItem } from 'react-easy-sort'

import { Banner, FetchBannersResult } from '@/src/api/useFetchBanners/_types'
import useFetchBanners from '@/src/api/useFetchBanners/useFetchBanners'
import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { IconHome, IconPlus, IconTrash } from '@/src/constants/icons'

import BannerCard from './BannerCard/BannerCard'
import styles from './BannersPage.module.scss'

/** страница баннеров */
const BannersPage: FC<FetchBannersResult> = ({ archivedBanners, currentBanners }) => {
  /** стейт банеров */
  const [banners, setBanners] = useState<Banner[]>(currentBanners)

  /** реф */
  const customHolderRef = useRef(null)

  /** функция обработки запроса перемещения */
  const handlePostRequest = (sortedBanners: Array<Banner>) => {
    /** получаем позиции */
    const bannerPositions = sortedBanners?.map((banner) => banner?.id)
    fetch('your-api-endpoint', {
      body: JSON.stringify(bannerPositions),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }

  /** функция сортировки */
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    /** стейт */
    setBanners((array) => arrayMove(array, oldIndex, newIndex))

    /** меняем местами */
    const updatedBanners = arrayMove(banners, oldIndex, newIndex)
    handlePostRequest(updatedBanners)
  }

  /** туду */
  const handleArchiveClick = () => {
    setBanners(archivedBanners)
  }

  return (
    <>
      <div className={styles.headerWrapper}>
        <h1>
          Баннеры
        </h1>
        <div className={styles.headerButtons}>
          <ButtonIcon
            colorVariant={'transparentGray'}
            icon={IconTrash}
            label={'Архив'}
            onClick={handleArchiveClick}
            paddingVariant={'slim'}
            withIcon={true}
          />
          <ButtonIcon
            colorVariant='transparentBlue'
            icon={IconPlus}
            label={'Добавить'}
            paddingVariant={'slim'}
            withIcon={true}
          />
          <IconWrapper IconComponent={IconHome} />
        </div>
      </div>
      <SortableList
        className={styles.list}
        customHolderRef={customHolderRef}
        draggedItemClassName={styles.dragged}
        onSortEnd={onSortEnd}
      >
        {banners?.map(banner => (
          <SortableItem key={banner?.id}>
            <BannerCard
              banner={banner}
              customHolderRef={customHolderRef}
            />
          </SortableItem>
        ))}
      </SortableList>
    </>
  )
}

/** врапер для получения первоначальных данных */
const Wrapper: FC = () => {
  /** получение данных */
  const { data } = useFetchBanners({})

  if (!data) return null

  return (
    <BannersPage {...data } />
  )
}

export default memo(Wrapper)
