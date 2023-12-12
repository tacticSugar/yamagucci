import { FC, useEffect, useState } from 'react'

/** */
const scripts = ['/assets/testCss/gsap.min-new.js', '/assets/testCss/ScrollTrigger.min.js', '/assets/testCss/ScrollMagic.min.js', '/assets/testCss/swiper.min.js', '/assets/testCss/script.js']
/** */
const styles = ['/assets/testCss/styles.css', '/assets/testCss/swiper.min.css']

/** домашняя страница */
const Wysiwyg: FC = () => {
  /** */
  const [htmlContent, setHtmlContent] = useState('')

  console.log('htmlContent', htmlContent)
  useEffect(() => {
    // fetch HTML content from the API route
    fetch('/api/getHtml')
      .then((response) => response.json())
      .then((data) => {
        setHtmlContent(data.htmlContent)

        scripts.forEach(src => {
          /** */
          const element = document.createElement('script')
          element.src = src
          document.body.appendChild(element)
        })
        styles.forEach(src => {
          /** */
          const element = document.createElement('link')
          element.rel = 'stylesheet'
          element.href = src
          document.head.appendChild(element)
        })
      })
      .catch((error) => {
        console.error('Error fetching HTML content:', error)
      })
  }, [])

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ maxWidth: '1280px', overflow: 'hidden' }}
      />
    </>
  )
}

// ts-prune-ignore-next
export default Wysiwyg
