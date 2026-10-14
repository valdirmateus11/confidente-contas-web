import React from 'react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Icons } from '../components/ui/icons'
import { Link } from '../components/layout/Router'
import { MetaHelper } from '../components/layout/MetaHelper'
import { getServiceBySlug, SERVICES_DATA } from '../config/services'
import { getWhatsAppUrl } from '../config/company'
import { NotFoundPage } from './NotFoundPage'

export const ServiceDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const service = getServiceBySlug(slug)

  if (!service) {
    return <NotFoundPage />
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug)

  return (
    <>
      <MetaHelper
        title={`${service.title} em Angola`}
        description={service.shortDescription}
      />

      {/* Header e Breadcrumb */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-16 bg-surface-subtle border-b border-surface-border">
        <Container>
          {/* Breadcrumb de Navegação */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-text-muted">
              <li>
                <Link href="/" className="hover:text-navy transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li>
                <Link href="/servicos" className="hover:text-navy transition-colors">
                  Serviços
                </Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-navy font-semibold truncate" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Detalhes Estruturados do Serviço */}
      <section className="py-16 sm:py-20 bg-surface-white border-b border-surface-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Coluna Principal de Conteúdo */}
            <div className="lg:col-span-8 space-y-12">
              {/* Visão Geral */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy">
                  Visão Geral do Serviço
                </h2>
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* 1. Em que consiste */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-navy">
                  1. Em que consiste a nossa actuação
                </h3>
                <div className="p-6 rounded-xl bg-surface-subtle border border-surface-border">
                  <ul className="space-y-3 text-sm text-text-main">
                    {service.whatItDoes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icons.CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Que necessidades pode ajudar a tratar */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-navy">
                  2. Necessidades que este serviço ajuda a resolver
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.needsItSolves.map((need, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-surface-border bg-surface-white space-y-2"
                    >
                      <span className="w-6 h-6 rounded bg-navy/5 text-navy font-heading font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {need}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Em que situações é relevante */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-navy">
                  3. Em que situações é mais relevante
                </h3>
                <ul className="space-y-2.5 text-sm text-text-muted">
                  {service.whenRelevant.map((situation, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0"></span>
                      <span>{situation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Informações que pode fornecer no primeiro contacto */}
              <div className="p-6 rounded-xl bg-cyan-tint border border-cyan/30 space-y-3">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-navy">
                  4. Informações úteis para iniciar a conversa:
                </h3>
                <p className="text-xs text-text-muted">
                  Para que possamos compreender rapidamente a sua necessidade, pode partilhar connosco:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-navy">
                  {service.informationToProvide.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icons.CheckCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar de Acção e Navegação */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Card de Conversão Direta */}
              <div className="p-6 rounded-2xl bg-navy text-surface-white space-y-5 shadow-lg">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-cyan">
                  CONSULTORIA DEDICADA
                </span>
                <h3 className="text-xl font-heading font-bold text-surface-white">
                  Precisa de apoio em {service.title}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Converse directamente com os nossos consultores. Avaliamos o estado documental da sua empresa e apresentamos uma proposta transparente.
                </p>

                <div className="space-y-2.5 pt-1">
                  <Button
                    variant="secondary"
                    size="md"
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    fullWidth
                    leadingIcon={<Icons.WhatsApp className="w-4 h-4" />}
                  >
                    Pedir Proposta no WhatsApp
                  </Button>

                  <Button
                    variant="white"
                    size="md"
                    href="/contactos"
                    fullWidth
                  >
                    Usar Formulário Institucional
                  </Button>
                </div>
              </div>

              {/* Outros Serviços */}
              <div className="p-6 rounded-xl bg-surface-subtle border border-surface-border space-y-3">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-navy">
                  Outras Especialidades
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={s.path}
                        className="text-text-muted hover:text-navy font-medium block py-1 border-b border-surface-border/40 hover:border-cyan transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
