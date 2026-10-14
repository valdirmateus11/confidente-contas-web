import React from 'react'
import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/ui/ContactForm'
import { Icons } from '../components/ui/icons'
import { MetaHelper } from '../components/layout/MetaHelper'
import { COMPANY_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/company'

export const ContactPage: React.FC = () => {
  return (
    <>
      <MetaHelper
        title="Contactos e Agendamento de Consultoria"
        description="Entre em contacto com a Confidente Contas em Luanda, Angola. Atendimento presencial sob agendamento e consultoria remota. Fale via WhatsApp Business ou formulário oficial."
      />

      {/* Hero da Página de Contactos */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-surface-subtle border-b border-surface-border">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              CANAIS DE ATENDIMENTO
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Fale com a nossa equipa e coloque as suas contas em ordem.
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Disponibilizamos múltiplos canais para responder a dúvidas e avaliar as necessidades da sua empresa em Luanda e em todo o território angolano.
            </p>
          </div>
        </Container>
      </section>

      {/* Conteúdo Principal: Contactos Directos e Formulário */}
      <section className="py-14 sm:py-20 bg-surface-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Coluna da Esquerda: Dados de Contacto Oficiais */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="INFORMAÇÕES OFICIAIS"
                title="Canais Directos de Comunicação"
                subtitle="Escolha o meio mais conveniente para a sua equipa."
              />

              {/* Cards de Contacto */}
              <div className="space-y-4">
                {/* WhatsApp Prioritário */}
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de falar com um consultor da Confidente Contas.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-surface-border bg-surface-subtle hover:border-cyan hover:bg-cyan-tint/30 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/15 text-navy group-hover:text-cyan group-hover:bg-navy flex items-center justify-center shrink-0 transition-colors">
                    <Icons.WhatsApp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                      WhatsApp Business (Prioritário)
                    </span>
                    <span className="text-base font-heading font-bold text-navy group-hover:text-cyan transition-colors block mt-0.5">
                      {COMPANY_CONFIG.contact.whatsappDisplay}
                    </span>
                    <span className="text-xs text-text-muted block mt-1">
                      Mensagens e pedidos de proposta com resposta no próprio dia útil.
                    </span>
                  </div>
                </a>

                {/* E-mail Institucional */}
                <a
                  href={getMailtoUrl('Pedido de Informações - Confidente Contas')}
                  className="p-5 rounded-xl border border-surface-border bg-surface-subtle hover:border-navy transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                    <Icons.Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                      Correio Electrónico
                    </span>
                    <span className="text-base font-heading font-bold text-navy break-all block mt-0.5">
                      {COMPANY_CONFIG.contact.email}
                    </span>
                    <span className="text-xs text-text-muted block mt-1">
                      Envio de documentos formais, pedidos de proposta e esclarecimentos.
                    </span>
                  </div>
                </a>

                {/* Linha Telefónica Adicional */}
                {COMPANY_CONFIG.contact.phoneSecondaryDisplay && (
                  <div className="p-5 rounded-xl border border-surface-border bg-surface-subtle flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                      <Icons.Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                        Linha Telefónica Alternativa
                      </span>
                      <a
                        href={`tel:${COMPANY_CONFIG.contact.phoneSecondaryRaw}`}
                        className="text-base font-heading font-bold text-navy hover:text-cyan transition-colors block mt-0.5"
                      >
                        {COMPANY_CONFIG.contact.phoneSecondaryDisplay}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Localização e Horário */}
              <div className="p-6 rounded-2xl bg-surface-subtle border border-surface-border space-y-4">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-navy">
                  Localização e Atendimento
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-text-muted">
                  <div className="flex items-start gap-3">
                    <Icons.MapPin className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-main block">Endereço de Referência:</strong>
                      <span>{COMPANY_CONFIG.location.generalLocation}</span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {COMPANY_CONFIG.location.attendanceMode}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icons.Clock className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-main block">Horário de Expediente:</strong>
                      <span>{COMPANY_CONFIG.location.businessHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-border text-xs text-slate-500">
                  <span className="font-semibold text-navy">Dados Oficiais:</span> {COMPANY_CONFIG.legal.legalName} &bull; NIF {COMPANY_CONFIG.legal.nif}.
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário Institucional com Validação e Encaminhamento WhatsApp */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
