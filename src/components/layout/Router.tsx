import React, { useState, useEffect, useCallback } from 'react'
import { RouterContext, useRouter } from './RouterContext'


/**
 * Normaliza o caminho actual a partir do pathname ou hash
 */
function getNormalizedPath(): string {
  if (typeof window === 'undefined') return '/'

  const hash = window.location.hash
  if (hash.startsWith('#/')) {
    return hash.slice(1).split('?')[0] || '/'
  }

  const pathname = window.location.pathname
  return pathname || '/'
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath)

  const navigate = useCallback((to: string, options?: { replace?: boolean; scroll?: boolean }) => {
    if (typeof window === 'undefined') return

    // Se for âncora dentro da mesma página
    if (to.startsWith('#') && !to.startsWith('#/')) {
      const element = document.querySelector(to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    const cleanPath = to.split('#')[0] || '/'
    const hash = to.includes('#') ? `#${to.split('#')[1]}` : ''

    if (options?.replace) {
      window.history.replaceState({}, '', to)
    } else {
      window.history.pushState({}, '', to)
    }

    setCurrentPath(cleanPath)

    if (options?.scroll !== false) {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter()
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href))

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || isExternal) {
      return
    }

    e.preventDefault()
    navigate(href)
  }

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim()

  return (
    <a
      href={href}
      onClick={handleClick}
      className={combinedClasses}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
