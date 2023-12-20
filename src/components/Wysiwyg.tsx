import { FC, useEffect, useState } from 'react'

/** домашняя страница */
const Wysiwyg: FC = ({landingName}) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        // Load the HTML content based on the product name
        const response = await fetch(`/${landingName}/index.html`);
        if (response.ok) {
          const htmlContent = await response.text();
          // Process the HTML content, e.g., extract styles and scripts
          processHtmlContent(htmlContent);
        }
      } catch (error) {
        console.error('Error fetching HTML content', error);
      }
    };

    fetchHtmlContent();
  }, []);

  const processHtmlContent = (htmlContent: string) => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const styles = doc.querySelectorAll('link[rel="stylesheet"]');
    const scripts = doc.querySelectorAll('script');
    const scriptSrcs = Array.from(scripts).map(script => script.getAttribute('src')).filter(Boolean);
    const content = doc.querySelector('body')?.innerHTML;

    setHtmlContent(content)
    scriptSrcs?.forEach(src => {
      /** */
      const element = document.createElement('script')
      element.src = src
      element.async = false
      element.defer = true
      document.body.appendChild(element)
    })
    styles.forEach(src => {
      /** */
      const element = document.createElement('link')
      element.rel = 'stylesheet'
      element.href = src.href
      document.head.appendChild(element)
    })

  };

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ maxWidth: '1920px', overflow: 'hidden', margin: '0 auto' }}
      />
    </>
  )
}

// ts-prune-ignore-next
export default Wysiwyg
