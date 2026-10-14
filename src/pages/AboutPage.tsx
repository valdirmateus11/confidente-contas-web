import React from 'react'
import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Icons } from '../components/ui/icons'
import { Link } from '../components/layout/Router'
import { MetaHelper } from '../components/layout/MetaHelper'
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company'
import { SERVICES_DATA } from '../config/services'

export const AboutPage: React.FC = () => {
  return (
    <>
      <MetaHelper
        title="Sobre Nós — Posicionamento e Princípios"
        description="Conheça a Confidente Contas — Sociedade angolana especializada em Contabilidade, Fiscalidade, RH e Consultoria Empresarial. Conheça a nossa postura de rigor, método e proximidade."
      />

      {/* Hero da Página Sobre */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-surface-subtle border-b border-surface-border">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              APRESENTAÇÃO INSTITUCIONAL
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Organização, rigor técnico e tranquilidade para o empresário em Angola.
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              A Confidente Contas nasceu com uma missão clara: ajudar sociedades e empresários a estruturar a sua contabilidade, a cumprir pontualmente as suas obrigações fiscais e laborais, e a tomar decisões baseadas em dados fidedignos.
            </p>
          </div>
        </Container>
      </section>

      {/* Quem é a Empresa e Posicionamento */}
      <section className="py-16 sm:py-20 bg-surface-white border-b border-surface-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <SectionHeading
                badge="IDENTIDADE CORPORATIVA"
                title="Quem é a Confidente Contas"
              />
              <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase font-bold tracking-wider">Denominação Registada:</span>
                  <span className="text-navy font-semibold text-sm">{COMPANY_CONFIG.legal.legalName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold tracking-wider">NIF Oficial:</span>
                  <span className="text-navy font-mono font-bold text-sm">{COMPANY_CONFIG.legal.nif}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold tracking-wider">Localização de Referência:</span>
                  <span className="text-text-main font-medium">{COMPANY_CONFIG.location.generalLocation}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-text-muted leading-relaxed">
              <p>
                A <strong>{COMPANY_CONFIG.legal.legalName}</strong> é uma empresa angolana focada em serviços de assessoria contabilística, consultoria tributária, apoio à gestão de recursos humanos e organização empresarial.
              </p>
              <p>
                No ambiente de negócios angolano, muitas organizações deparam-se com um quadro legal dinâmico — desde as liquidações mensais de IVA e retenções na fonte de IRT perante a Administração Geral Tributária (AGT), até aos cadastramentos e mapas obrigatórios da Segurança Social (INSS).
              </p>
              <p>
                O nosso posicionamento assenta na <strong>prevenção e no rigor contínuo</strong>. Não nos limitamos ao fecho de balanços no final do exercício: trabalhamos para que a documentação da empresa esteja em ordem mês a mês, permitindo prever encargos, cumprir prazos e salvaguardar a estabilidade patrimonial da organização.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* A Importância da Organização, do Rigor e da Clareza */}
      <section className="py-16 sm:py-20 bg-surface-subtle border-b border-surface-border">
        <Container>
          <SectionHeading
            badge="VALOR FUNDAMENTAL"
            title="Por que valorizamos a organização e a clareza"
            subtitle="Na contabilidade e na fiscalidade, a falta de método não é apenas um incómodo administrativo: traduz-se em custos desnecessários, notificações fiscais e perda de oportunidades comerciais."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-white border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy font-heading font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-heading font-bold text-navy">Organização Preventiva</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                A classificação metódica de compras, recibos e extractos bancários evita que documentos se percam ou que despesas legítimas deixem de ser dedutíveis no apuramento do imposto.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-white border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy font-heading font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-heading font-bold text-navy">Rigor Técnico</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Utilizamos sistemas profissionais integrados como o software Primavera v10, garantindo que os lançamentos seguem os planos de contas e as normas contabilísticas sem improvisos.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-white border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy font-heading font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-heading font-bold text-navy">Clareza para Decidir</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Relatórios mensais compreensíveis que demonstram o fluxo de caixa, as obrigações a liquidar e o resultado da operação, para que os gestores decidam com serenidade.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Áreas de Actividade Cobertas */}
      <section className="py-16 sm:py-20 bg-surface-white border-b border-surface-border">
        <Container>
          <div className="max-w-3xl mb-12">
            <SectionHeading
              badge="ÂMBITO DE ACTUAÇÃO"
              title="Cinco vertentes de especialização integradas"
              subtitle="Trabalhamos de forma coordenada nas principais exigências regulatórias e operacionais da sua sociedade."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-xl border border-surface-border bg-surface-subtle/30 space-y-3"
              >
                <h3 className="text-base font-heading font-bold text-navy">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="pt-2">
                  <Link
                    href={service.path}
                    className="text-xs font-heading font-bold text-navy hover:text-cyan transition-colors inline-flex items-center gap-1"
                  >
                    <span>Ver escopo completo</span>
                    <Icons.ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Como Iniciar uma Relação Profissional */}
      <section className="py-16 sm:py-20 bg-surface-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <SectionHeading
              badge="PRÓXIMO PASSO"
              title="Como iniciar uma relação profissional com a Confidente Contas"
              subtitle="O primeiro contacto é simples e sem burocracias desnecessárias."
              align="center"
            />

            <div className="p-6 rounded-2xl bg-surface-white border border-surface-border text-left space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
              <p>
                1. <strong>Apresentação do contexto:</strong> Através do formulário ou do WhatsApp, indique-nos a denominação da sua empresa, sector de actividade e as necessidades que pretende tratar.
              </p>
              <p>
                2. <strong>Sessão de alinhamento:</strong> Agendamos uma conversa (presencial mediante agendamento em Luanda ou por via remota) para compreender a situação documental da empresa.
              </p>
              <p>
                3. <strong>Proposta de trabalho:</strong> Apresentamos uma proposta detalhada com o escopo dos serviços, prazos de reporte e honorários aplicáveis.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                href={getWhatsAppUrl('Olá! Gostaria de conversar com a equipa da Confidente Contas para iniciar uma relação profissional.')}
                target="_blank"
                leadingIcon={<Icons.WhatsApp className="w-5 h-5" />}
              >
                Conversar no WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/contactos"
              >
                Preencher Formulário Institucional
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
