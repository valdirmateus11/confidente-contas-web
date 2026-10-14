import React from 'react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Icons } from '../components/ui/icons'
import { Link } from '../components/layout/Router'
import { MetaHelper } from '../components/layout/MetaHelper'
import { SERVICES_DATA } from '../config/services'
import { getWhatsAppUrl } from '../config/company'

export const ServicesIndexPage: React.FC = () => {
  return (
    <>
      <MetaHelper
        title="Serviços de Consultoria Contabilística, Fiscal e RH"
        description="Conheça os serviços especializados da Confidente Contas em Contabilidade, Fiscalidade AGT, Recursos Humanos, Processamento Salarial e Consultoria Empresarial em Angola."
      />

      {/* Hero da Página de Serviços */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-surface-subtle border-b border-surface-border">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              ÁREAS DE ESPECIALIZAÇÃO
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Serviços estruturados para a conformidade e estabilidade do seu negócio.
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Disponibilizamos assessoria técnica em cinco vertentes essenciais à gestão empresarial em Angola. Cada serviço é adaptado às dimensões e ao volume documental da sua sociedade.
            </p>
          </div>
        </Container>
      </section>

      {/* Lista Abrangente dos 5 Serviços */}
      <section className="py-16 sm:py-24 bg-surface-white">
        <Container>
          <div className="space-y-16">
            {SERVICES_DATA.map((service, index) => (
              <article
                key={service.id}
                id={service.slug}
                className="p-6 sm:p-10 rounded-2xl border border-surface-border bg-surface-subtle/30 space-y-6 hover:border-navy/30 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-border pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-heading font-bold text-cyan tracking-wider uppercase">
                      Área 0{index + 1} &bull; {service.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
                      {service.title}
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <Link
                      href={service.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy text-surface-white font-heading font-bold text-xs hover:bg-navy-dark transition-colors"
                    >
                      <span>Ver Página Completa</span>
                      <Icons.ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan text-navy font-heading font-bold text-xs hover:bg-cyan-hover transition-colors"
                      title="Conversar sobre este serviço"
                    >
                      <Icons.WhatsApp className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-text-main leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* O que inclui */}
                  <div className="p-5 rounded-xl bg-surface-white border border-surface-border space-y-3">
                    <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-navy">
                      Em que consiste a intervenção:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
                      {service.whatItDoes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Icons.CheckCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Que necessidades ajuda a tratar */}
                  <div className="p-5 rounded-xl bg-surface-white border border-surface-border space-y-3">
                    <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-navy">
                      Necessidades que ajuda a solucionar:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
                      {service.needsItSolves.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  <span className="font-semibold text-text-main">Informações úteis para primeiro contacto: </span>
                  {service.informationToProvide.join('; ')}.
                </div>
              </article>
            ))}
          </div>

          {/* Chamada para Avaliação */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-surface-subtle border border-surface-border text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
              Tem dúvidas sobre qual o enquadramento adequado para o seu negócio?
            </h3>
            <p className="text-sm text-text-muted max-w-2xl mx-auto">
              Contacte a nossa equipa. Ajudamos a diagnosticar se a sua empresa necessita apenas de apoio em obrigações específicas ou de uma assessoria contabilística e fiscal contínua.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="secondary"
                size="md"
                href={getWhatsAppUrl('Olá! Gostaria de uma avaliação para saber que serviços se adequam à minha empresa.')}
                target="_blank"
                leadingIcon={<Icons.WhatsApp className="w-4 h-4" />}
              >
                Esclarecer Dúvidas no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/contactos"
              >
                Preencher Formulário de Contacto
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
