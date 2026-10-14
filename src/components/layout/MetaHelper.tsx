import React, { useEffect } from 'react'

export interface MetaHelperProps {
  title: string
  description?: string
}

export const MetaHelper: React.FC<MetaHelperProps> = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = `${title} | Confidente Contas`
    document.title = fullTitle

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', description)
      }
    }
  }, [title, description])

  return null
}
