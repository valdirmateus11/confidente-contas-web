import React from 'react'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { useRouter } from './components/layout/RouterContext'
import { RouterProvider } from './components/layout/Router'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesIndexPage } from './pages/ServicesIndexPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { NotFoundPage } from './pages/NotFoundPage'

const AppContent: React.FC = () => {
  const { currentPath } = useRouter()

  const renderCurrentRoute = () => {
    // Normalizar rota removendo trailing slashes (excepto '/')
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath

    if (normalized === '/' || normalized === '') {
      return <HomePage />
    }

    if (normalized === '/sobre-nos') {
      return <AboutPage />
    }

    if (normalized === '/servicos') {
      return <ServicesIndexPage />
    }

    if (normalized.startsWith('/servicos/')) {
      const slug = normalized.replace('/servicos/', '').trim()
      return <ServiceDetailPage slug={slug} />
    }

    if (normalized === '/contactos') {
      return <ContactPage />
    }

    if (normalized === '/perguntas-frequentes') {
      return <FaqPage />
    }

    if (normalized === '/politica-de-privacidade') {
      return <PrivacyPolicyPage />
    }

    return <NotFoundPage />
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-white selection:bg-cyan selection:text-navy">
      <SiteHeader />
      <main id="conteudo-principal" className="flex-1 focus:outline-none">
        {renderCurrentRoute()}
      </main>
      <SiteFooter />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  )
}

export default App
