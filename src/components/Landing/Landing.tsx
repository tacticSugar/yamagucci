import { FC, useEffect, useState } from 'react'

import { LandingTypes } from './_types'

/** домашняя страница */
const Landing: FC<LandingTypes> = ({ landingName }) => {
  /** стейт контента */
  const [htmlContent, setHtmlContent] = useState<string>('')

  /** функция обрабатывает контент */
  const processHtmlContent = (htmlContent: string) => {
    /** парсер */
    const parser = new DOMParser()
    /** парсим контент */
    const doc = parser.parseFromString(htmlContent, 'text/html')
    /** стили */
    const styles = doc.querySelectorAll('link[rel="stylesheet"]')
    /** скрипты */
    const scripts = doc.querySelectorAll('script')
    /** скрипты массив */
    const scriptSrcs = Array.from(scripts).map(script => script.getAttribute('src')).filter(Boolean)
    /** контент */
    const content = doc.querySelector('body')?.innerHTML

    setHtmlContent(content)
    scriptSrcs?.forEach(src => {
      /** тег скрипт */
      const element = document.createElement('script')
      element.src = src
      element.async = false
      element.defer = true
      document.body.appendChild(element)
    })
    styles.forEach((src: HTMLLinkElement) => {
      /** тег линк */
      const element = document.createElement('link')
      element.rel = 'stylesheet'
      element.href = src.href
      document.head.appendChild(element)
    })
  }

  useEffect(() => {
    /** функция fetch HTML */
    const fetchHtmlContent = async () => {
      try {
        /** загружаем контент из папки паблик */
        const response = await fetch(`/landings/${landingName}/index.html`)

        if (response.ok) {
          /** получаем контент */
          const htmlContent = await response.text()
          // process the HTML content, e.g., extract styles and scripts
          processHtmlContent(htmlContent)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching HTML content', error)
      }
    }

    fetchHtmlContent()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ margin: '0 auto', maxWidth: '1920px', overflow: 'hidden' }}

    />
  )
}

// ts-prune-ignore-next
export default Landing
