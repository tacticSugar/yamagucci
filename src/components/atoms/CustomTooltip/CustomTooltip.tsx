import type { FC } from 'react'
import { Tooltip } from 'react-tooltip'

type TooltipTypes = {
  /** видимый элемент, на который надо навести */
  children: JSX.Element | Array<JSX.Element>
  /** что внутри тултипа */
  content: string
  /** id */
  id: string
  /** куда выводится */
  place?: 'top' | 'top-start' | 'top-end' | 'right'| 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  /** подсказка нативная при долгом наведении */
  title: string
}

/** компонент тултипа */
const CustomTooltip: FC<TooltipTypes> = ({ children, content, id, place = 'top', title }) => (
  <>
    <a
      data-tooltip-html={content}
      data-tooltip-id='search_keywords'
      data-tooltip-place={place}
      title={title}
    >
      {children}
    </a>
    <Tooltip id={id} />
  </>
)

export default CustomTooltip
