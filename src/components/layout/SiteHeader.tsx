import React, { useState, useEffect } from 'react'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { Icons } from '../ui/icons'
import { Link } from './Router'
import { useRouter } from './RouterContext'
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../config/company'
import logoOficial from '../../assets/images/logo-oficial.png'

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentPath } = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])


  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Perguntas Frequentes', href: '/perguntas-frequentes' },
    { label: 'Contactos', href: '/contactos' },
  ]

  return (
    <>
      {/* Skip to Content accessible link */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan"
      >
        Saltar para o conteúdo principal
      </a>

      {/* Top Utility Bar (Contact & Hours) */}
      <div className="bg-navy-dark text-slate-300 text-xs py-2 border-b border-navy-light/30 hidden sm:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <Icons.Clock className="w-3.5 h-3.5 text-cyan" />
              <span>{COMPANY_CONFIG.location.businessHours}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icons.MapPin className="w-3.5 h-3.5 text-cyan" />
              <span>{COMPANY_CONFIG.location.generalLocation}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <Icons.Phone className="w-3.5 h-3.5 text-cyan" />
              <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              NIF: <strong className="text-slate-200 font-mono">{COMPANY_CONFIG.legal.nif}</strong>
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-surface-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-3'
            : 'bg-surface-white border-b border-surface-border/60 py-4'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Oficial preservado */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-md"
            aria-label={`${COMPANY_CONFIG.legal.tradeName} - Página Inicial`}
          >
            <img
              src={logoOficial}
              alt={`Logótipo Oficial da ${COMPANY_CONFIG.legal.legalName}`}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              width="180"
              height="48"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-navy font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan'
                      : 'text-text-muted hover:text-navy hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan after:transition-all after:duration-200'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              href={getWhatsAppUrl('Olá! Gostaria de conversar com um consultor da Confidente Contas.')}
              target="_blank"
              leadingIcon={<Icons.WhatsApp className="w-4 h-4" />}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-navy hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </Container>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-surface-border bg-surface-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Navegação Móvel">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-base transition-colors ${
                      isActive
                        ? 'bg-navy/5 text-navy font-bold border-l-4 border-cyan'
                        : 'text-text-main font-medium hover:bg-surface-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
              <Button
                variant="secondary"
                size="md"
                href={getWhatsAppUrl()}
                target="_blank"
                fullWidth
                leadingIcon={<Icons.WhatsApp className="w-5 h-5" />}
              >
                WhatsApp (+244 936 983 501)
              </Button>
              <div className="text-xs text-center text-text-muted mt-2">
                Atendimento: {COMPANY_CONFIG.location.businessHours}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
