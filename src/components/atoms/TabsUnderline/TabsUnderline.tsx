import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, memo, useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import times from '@/src/lib/times'

import { TabsUnderlineTypes } from './_types'
import styles from './TabsUnderline.module.scss'

/** компонент табов с подчёркиваниями */
const TabsUnderline: FC<TabsUnderlineTypes> = ({
  handleChangeSelectedIndex,
  handleClickOnTab,
  isLoading,
  listClassName,
  selectedTabPanelClassName,
  tabPanels,
  tabTitleClassName,
  tabTitles,
  wrapperClassName
}) => {
  /** router */
  const { query, replace } = useRouter()
  /** текущий индекс */
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (query.activeTab) {
      /** получаем индекс активного таба */
      const activeTabIndex = tabTitles.indexOf(query.activeTab)

      if (activeTabIndex !== -1) {
        setSelectedIndex(activeTabIndex)
      }
    }
  }, [query.activeTab, tabTitles])

  /** обработчик переключения таба */
  const handleTabSelect = (index) => {
    setSelectedIndex(index)
    replace({ query: { ...query, activeTab: tabTitles[index] } }, undefined, { shallow: true })
  }

  if (tabTitles || isLoading) {
    return (
      <Tabs
        className={cn(styles.tabs, wrapperClassName)}
        // defaultIndex={defaultIndex ?? 0}
        onSelect={handleChangeSelectedIndex || handleTabSelect}
        selectedIndex={selectedIndex}
        selectedTabClassName={'tab-underline-selected'}
        selectedTabPanelClassName={selectedTabPanelClassName}
      >
        {
          (isLoading || tabTitles?.length > 1) && (
            <TabList className={cn(styles.tabs__list, listClassName)}>
              {
                (isLoading ? times(3) : tabTitles).map((tab, index) => (
                  <LoaderQuery
                    className={styles.loader}
                    isLoading={isLoading}
                    key={index}
                  >
                    <Tab
                      className={cn('tab-underline', tabTitleClassName)}
                      dangerouslySetInnerHTML={{ __html: tab }}
                      {...(handleClickOnTab ? { onClick: () => handleClickOnTab(index) } : {})}
                    />
                  </LoaderQuery>
                ))
              }
            </TabList>
          )
        }
        <div className={styles.tabPanelWrapper}>
          {(isLoading ? times(3) : tabPanels)?.map((data, index) => (
            <LoaderQuery
              className={styles.loaderPanel}
              isLoading={isLoading}
              key={index}
            >
              <TabPanel
                className={styles.panel}
                key={index}
                selectedClassName={data?.props?.panelClassName}
              >
                {data}
              </TabPanel>
            </LoaderQuery>
          )
          )}
        </div>
      </Tabs>
    )
  } else {
    return null
  }
}

export default memo(TabsUnderline)
