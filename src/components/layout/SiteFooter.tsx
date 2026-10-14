import React from 'react'
import { Container } from './Container'
import { Icons } from '../ui/icons'
import { Link } from './Router'
import { COMPANY_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../../config/company'
import { SERVICES_DATA } from '../../config/services'
import logoOficial from '../../assets/images/logo-oficial.png'

const CURRENT_YEAR = new Date().getFullYear()

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-navy text-slate-300 border-t border-navy-light/40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé Institucional
      </h2>

      {/* Slogan Banner Strip */}
      <div className="bg-navy-dark border-b border-navy-light/20 py-8">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan font-heading font-semibold mb-1">
              Missão e Propósito
            </p>
            <p className="text-xl sm:text-2xl font-heading font-bold text-surface-white">
              “{COMPANY_CONFIG.legal.slogan}”
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de agendar uma consultoria com a Confidente Contas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan text-navy font-heading font-bold text-sm hover:bg-cyan-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              <span>Solicitar Consulta</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Footer Columns */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Coluna 1: Identidade e Marca */}
            <div className="space-y-4">
              <div className="bg-surface-white p-2.5 rounded-lg inline-block">
                <img
                  src={logoOficial}
                  alt={`Logótipo Oficial da ${COMPANY_CONFIG.legal.tradeName}`}
                  className="h-10 w-auto object-contain"
                  width="160"
                  height="40"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Consultoria angolana especializada em Contabilidade, Fiscalidade, Processamento Salarial, Gestão de RH e Consultoria Empresarial.
              </p>
              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <div>
                  Denominação: <span className="text-slate-200">{COMPANY_CONFIG.legal.legalName}</span>
                </div>
                <div>
                  NIF: <span className="text-slate-200 font-mono font-bold">{COMPANY_CONFIG.legal.nif}</span>
                </div>
              </div>
            </div>

            {/* Coluna 2: Áreas de Actuação */}
            <div>
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-surface-white mb-4">
                Áreas de Actuação
              </h3>
              <ul className="space-y-2 text-sm">
                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.path}
                      className="text-slate-300 hover:text-cyan transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Navegação e Suporte */}
            <div>
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-surface-white mb-4">
                Institucional
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-cyan transition-colors">
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nos" className="hover:text-cyan transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-cyan transition-colors">
                    Todos os Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/perguntas-frequentes" className="hover:text-cyan transition-colors">
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="/contactos" className="hover:text-cyan transition-colors">
                    Contactos & Agendamento
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidade" className="hover:text-cyan transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Localização, Horário e Contactos */}
            <div>
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-surface-white mb-4">
                Atendimento
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <Icons.MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <p className="text-slate-300 leading-snug">
                    {COMPANY_CONFIG.location.generalLocation}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Icons.Clock className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">{COMPANY_CONFIG.location.businessHours}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {COMPANY_CONFIG.location.attendanceMode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Icons.WhatsApp className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan transition-colors font-medium"
                  >
                    {COMPANY_CONFIG.contact.whatsappDisplay}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Icons.Mail className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <a
                    href={getMailtoUrl('Contacto - Confidente Contas')}
                    className="hover:text-cyan transition-colors break-all"
                  >
                    {COMPANY_CONFIG.contact.email}
                  </a>
                </div>

                {/* Redes Sociais Oficiais (Apenas canais confirmados: LinkedIn e Facebook) */}
                <div className="pt-2">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Canais Digitais Oficiais
                  </span>
                  <div className="flex items-center gap-2">
                    {COMPANY_CONFIG.social.linkedin && (
                      <a
                        href={COMPANY_CONFIG.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-navy-light text-slate-300 hover:text-cyan hover:bg-navy-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        aria-label="Página Oficial da Confidente Contas no LinkedIn"
                      >
                        <Icons.LinkedIn className="w-4 h-4" />
                      </a>
                    )}

                    {COMPANY_CONFIG.social.facebook && (
                      <a
                        href={COMPANY_CONFIG.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-navy-light text-slate-300 hover:text-cyan hover:bg-navy-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        aria-label="Página Oficial da Confidente Contas no Facebook"
                      >
                        <Icons.Facebook className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Legal Notice */}
          <div className="mt-12 pt-8 border-t border-navy-light/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {CURRENT_YEAR} {COMPANY_CONFIG.legal.legalName}. Todos os direitos reservados.
            </p>
            <p className="text-slate-400">
              Luanda &bull; Angola
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
