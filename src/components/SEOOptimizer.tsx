import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  structuredData?: object | object[]
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  structuredData
}) => {
  const location = useLocation()
  const baseUrl = 'https://fansfollow.me'
  const currentUrl = `${baseUrl}${location.pathname}`
  
  useEffect(() => {
    if (title) {
      document.title = title
    }

    const updateOrCreateMeta = (selector: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let tag = document.querySelector(selector) as HTMLMetaElement
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, selector.match(/\[.+="(.+)"\]/)?.[1] || '')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    if (description) {
      updateOrCreateMeta('meta[name="description"]', description)
      updateOrCreateMeta('meta[property="og:description"]', description, true)
      updateOrCreateMeta('meta[name="twitter:description"]', description)
    }

    if (title) {
      updateOrCreateMeta('meta[property="og:title"]', title, true)
      updateOrCreateMeta('meta[name="twitter:title"]', title)
    }

    if (keywords && keywords.length > 0) {
      updateOrCreateMeta('meta[name="keywords"]', keywords.join(', '))
    }

    if (ogImage) {
      updateOrCreateMeta('meta[property="og:image"]', ogImage, true)
      updateOrCreateMeta('meta[name="twitter:image"]', ogImage)
    }

    const finalUrl = canonicalUrl || currentUrl
    updateOrCreateMeta('meta[property="og:url"]', finalUrl, true)

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', finalUrl)

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
    existingSchemas.forEach(tag => tag.remove())

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData]
      dataArray.forEach((data, index) => {
        const scriptTag = document.createElement('script')
        scriptTag.setAttribute('type', 'application/ld+json')
        scriptTag.setAttribute('id', `structured-data-${index}`)
        scriptTag.textContent = JSON.stringify(data)
        document.head.appendChild(scriptTag)
      })
    }

  }, [title, description, keywords, ogImage, canonicalUrl, structuredData, currentUrl])
  
  return null
}

export default SEOOptimizer