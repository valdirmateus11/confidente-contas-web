import React from 'react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Icons } from '../components/ui/icons'
import { Link } from '../components/layout/Router'
import { MetaHelper } from '../components/layout/MetaHelper'
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company'
import { SERVICES_DATA } from '../config/services'

export const HomePage: React.FC = () => {
  const commonNeeds = [
    {
      title: 'Documentação financeira desorganizada',
      description:
        'Facturas de compras, vendas e comprovativos de despesas espalhados, dificultando a conciliação bancária e a elaboração de demonstrações fidedignas.',
    },
    {
      title: 'Insegurança perante os prazos da AGT',
      description:
        'Incerteza sobre liquidações mensais de IVA, retenções de IRT ou submissões no Portal do Contribuinte, gerando receio de coimas e notificações tributárias.',
    },
    {
      title: 'Processamento salarial complexo ou manual',
      description:
        'Cálculo de subsídios, descontos legais e guias do INSS feito sem software certificado, com riscos de erros nos recibos e no pagamento a trabalhadores.',
    },
    {
      title: 'Mistura entre contas pessoais e empresariais',
      description:
        'Despesas dos sócios e da empresa geridas em conjunto, o que distorce a rentabilidade real e compromete a transparência exigida pela banca.',
    },
  ]

  const approachMoments = [
    {
      number: '01',
      title: 'Compreender a necessidade',
      description:
        'Ouvimos o gestor para identificar os desafios imediatos da empresa, o sector de actividade, o volume documental e as prioridades operacionais.',
    },
    {
      number: '02',
      title: 'Analisar a situação documental',
      description:
        'Examinamos o histórico contabilístico, as obrigações fiscais perante a AGT e a situação previdenciária junto do INSS para mapear eventuais pendências.',
    },
    {
      number: '03',
      title: 'Definir o acompanhamento adequado',
      description:
        'Apresentamos uma proposta clara e proporcional à dimensão da actividade, especificando as rotinas mensais, os prazos e os canais de reporte.',
    },
    {
      number: '04',
      title: 'Organizar o trabalho e acompanhar',
      description:
        'Iniciamos os lançamentos no software Primavera, submetemos declarações atempadamente e fornecemos relatórios mensais para suporte à gestão.',
    },
  ]

  return (
    <>
      <MetaHelper
        title="Contabilidade, Fiscalidade e RH em Angola"
        description="Confidente Contas — Consultoria especializada em Contabilidade, Fiscalidade, Recursos Humanos, Processamento Salarial e Gestão Empresarial em Luanda, Angola. Sua Empresa em Ordem, Sua Mente em Paz!"
      />

      {/* 1. Hero Section */}
      <section
        id="hero"
        className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 bg-gradient-to-b from-surface-subtle via-surface-white to-surface-white border-b border-surface-border/50"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-navy text-xs sm:text-sm font-heading font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan inline-block"></span>
              <span>{COMPANY_CONFIG.legal.slogan}</span>
            </div>

            {/* Título Principal Institucional e Específico */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-navy tracking-tight leading-[1.12]">
              Organização contabilística e tranquilidade na gestão da sua empresa.
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Apoio profissional e rigoroso em Contabilidade, Fiscalidade, Processamento Salarial e Recursos Humanos para empresas em Angola. Prevenção de inconformidades legais e informação financeira clara para quem decide.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Button
                variant="secondary"
                size="lg"
                href={getWhatsAppUrl('Olá! Gostaria de falar com a equipa da Confidente Contas sobre a minha empresa.')}
                target="_blank"
                leadingIcon={<Icons.WhatsApp className="w-5 h-5" />}
              >
                Falar no WhatsApp Business
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/contactos"
                trailingIcon={<Icons.ChevronRight className="w-4 h-4" />}
              >
                Solicitar Proposta por Formulário
              </Button>
            </div>

            {/* Pilares Institucionais de Rigor */}
            <div className="pt-8 sm:pt-12 border-t border-surface-border/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-3.5 rounded-lg bg-surface-white border border-surface-border">
                <span className="text-xs font-heading font-bold text-navy block">Conformidade AGT</span>
                <span className="text-xs text-text-muted mt-0.5 block">IVA, IRT, Imposto Industrial e Selo</span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-white border border-surface-border">
                <span className="text-xs font-heading font-bold text-navy block">Software Primavera v10</span>
                <span className="text-xs text-text-muted mt-0.5 block">Lançamentos estruturados e seguros</span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-white border border-surface-border">
                <span className="text-xs font-heading font-bold text-navy block">Segurança Social (INSS)</span>
                <span className="text-xs text-text-muted mt-0.5 block">Mapas mensais e folhas de vencimento</span>
              </div>
              <div className="p-3.5 rounded-lg bg-surface-white border border-surface-border">
                <span className="text-xs font-heading font-bold text-navy block">Atendimento Dedicado</span>
                <span className="text-xs text-text-muted mt-0.5 block">Presencial em Luanda & remoto</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Apresentação da Empresa */}
      <section className="py-16 sm:py-20 bg-surface-white border-b border-surface-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionHeading
                badge="QUEM SOMOS"
                title="Uma consultoria angolana orientada à disciplina e segurança do seu negócio."
              />
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A <strong>{COMPANY_CONFIG.legal.legalName}</strong> é uma sociedade por quotas unipessoal sediada em Luanda, constituída para prestar assessoria técnica contínua a micro, pequenas e médias empresas.
              </p>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                Acreditamos que uma gestão eficiente começa na organização pontual dos documentos e na compreensão das obrigações fiscais perante a AGT e o INSS. O nosso papel é fornecer o rigor técnico necessário para que os gestores possam concentrar a sua energia na actividade comercial, com total tranquilidade.
              </p>
              <div className="pt-2">
                <Link
                  href="/sobre-nos"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-navy hover:text-cyan transition-colors"
                >
                  <span>Conhecer o posicionamento completo da empresa</span>
                  <Icons.ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-surface-subtle p-6 sm:p-8 rounded-2xl border border-surface-border space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-navy block">
                Princípios de Actuação
              </span>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Icons.CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-navy">Rigor Técnico e Legalidade</h4>
                    <p className="text-xs text-text-muted mt-0.5">Tratamento contabilístico e fiscal rigorosamente enquadrado na lei vigente em Angola.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icons.CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-navy">Confidencialidade Estrita</h4>
                    <p className="text-xs text-text-muted mt-0.5">Sigilo absoluto e protecção integral de dados patrimoniais e salariais de cada cliente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icons.CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-navy">Proximidade no Atendimento</h4>
                    <p className="text-xs text-text-muted mt-0.5">Comunicação ágil e canais directos para esclarecimento de dúvidas da gerência.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Serviços Principais (5 Áreas Confirmadas) */}
      <section id="servicos" className="py-16 sm:py-24 bg-surface-subtle">
        <Container>
          <SectionHeading
            badge="ESPECIALIDADES DE CONSULTORIA"
            title="As cinco áreas de apoio técnico da Confidente Contas"
            subtitle="Soluções estruturadas para responder a cada fase e necessidade da rotina societária, fiscal e administrativa em Angola."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service, index) => (
              <article
                key={service.id}
                className={`rounded-xl border border-surface-border bg-surface-white p-6 sm:p-7 flex flex-col justify-between hover:border-navy/40 transition-all duration-200 hover:shadow-sm ${
                  index === 0 || index === 1 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-3.5">
                  <span className="inline-block px-2.5 py-1 rounded bg-navy/5 text-navy text-[11px] font-heading font-semibold uppercase tracking-wider">
                    {service.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-navy">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-surface-border/60">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Pontos Centrais:
                    </span>
                    <ul className="space-y-1.5 text-xs text-text-main">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-surface-border flex items-center justify-between">
                  <Link
                    href={service.path}
                    className="text-xs font-heading font-bold text-navy hover:text-cyan transition-colors inline-flex items-center gap-1"
                  >
                    <span>Ver Detalhes do Serviço</span>
                    <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-surface-subtle hover:bg-cyan/15 text-navy hover:text-cyan transition-colors"
                    title="Conversar sobre este serviço"
                    aria-label={`Conversar sobre ${service.title} no WhatsApp`}
                  >
                    <Icons.WhatsApp className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Necessidades Empresariais Reconhecíveis */}
      <section className="py-16 sm:py-24 bg-surface-white">
        <Container>
          <SectionHeading
            badge="SITUAÇÕES COMUNS"
            title="Desafios que muitas empresas enfrentam no dia a dia"
            subtitle="Na ausência de rotinas e acompanhamento técnico contínuo, pequenas falhas administrativas acumulam-se e transformam-se em encargos maiores."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonNeeds.map((need, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-surface-border bg-surface-subtle/40 space-y-3"
              >
                <div className="w-7 h-7 rounded-lg bg-navy/10 text-navy font-heading font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-heading font-bold text-navy">
                  {need.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {need.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-cyan-tint border border-cyan/30 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-navy leading-relaxed">
              <strong>Prevenir é mais económico do que regularizar em litígio:</strong> Se a sua empresa se identifica com alguma destas situações, podemos avaliar o estado documental dos seus processos.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Abordagem de Trabalho em Quatro Momentos */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-y border-surface-border">
        <Container>
          <SectionHeading
            badge="METODOLOGIA PROPOSTA"
            title="Como organizamos a comunicação e o acompanhamento"
            subtitle="Uma estrutura transparente em quatro momentos concebida para que o cliente compreenda cada passo do processo técnico."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachMoments.map((m) => (
              <div
                key={m.number}
                className="bg-surface-white p-6 rounded-xl border border-surface-border space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xl font-heading font-extrabold text-cyan">
                    {m.number}
                  </span>
                  <h3 className="text-base font-heading font-bold text-navy">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Chamada para Contacto e Conversão */}
      <section className="py-16 sm:py-24 bg-surface-white">
        <Container>
          <div className="rounded-2xl bg-navy text-surface-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
              aria-hidden="true"
            ></div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-block text-xs uppercase tracking-widest font-heading font-bold px-3 py-1 rounded-full bg-cyan/15 text-cyan border border-cyan/30">
                INICIAR CONVERSA
              </span>

              <h2 className="text-2xl sm:text-4xl font-heading font-bold tracking-tight leading-tight">
                Apresente a necessidade da sua empresa à Confidente Contas.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Estamos disponíveis para agendar uma sessão de avaliação em Luanda ou por consultoria remota. Fale connosco pelo WhatsApp ou utilize o formulário institucional detalhado.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  href={getWhatsAppUrl('Olá! Gostaria de apresentar a necessidade da minha empresa à Confidente Contas.')}
                  target="_blank"
                  leadingIcon={<Icons.WhatsApp className="w-5 h-5" />}
                >
                  Contactar via WhatsApp (+244 936 983 501)
                </Button>

                <Button
                  variant="white"
                  size="lg"
                  href="/contactos"
                  trailingIcon={<Icons.ChevronRight className="w-4 h-4" />}
                >
                  Abrir Formulário de Contacto
                </Button>
              </div>

              <div className="pt-6 border-t border-navy-light/40 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Icons.Clock className="w-4 h-4 text-cyan" />
                  <span>{COMPANY_CONFIG.location.businessHours}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Icons.MapPin className="w-4 h-4 text-cyan" />
                  <span>{COMPANY_CONFIG.location.generalLocation}</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
