import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Icons } from '../components/ui/icons'
import { MetaHelper } from '../components/layout/MetaHelper'
import { getWhatsAppUrl } from '../config/company'

interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Que serviços presta a Confidente Contas?',
      answer:
        'A Confidente Contas presta assessoria técnica especializada em cinco áreas nucleares: Contabilidade (organização documental e fecho de contas no software Primavera v10), Fiscalidade e Consultoria Tributária (apuramento de impostos e obrigações perante a AGT), Gestão de Recursos Humanos (contratos de trabalho e apoio documental), Processamento Salarial (folhas de pagamento e guias do INSS) e Consultoria Empresarial (estruturação de processos e organização financeira).',
    },
    {
      id: 'faq-2',
      question: 'A consultoria atende empresas em Luanda?',
      answer:
        'Sim. A Confidente Contas está sediada em Luanda, com localização de referência no Bairro Rocha, Campo do Interclub, e atende presencialmente empresários e sociedades mediante agendamento prévio.',
    },
    {
      id: 'faq-3',
      question: 'É possível receber consultoria remotamente a partir de outras províncias?',
      answer:
        'Sim. Disponibilizamos consultoria remota através de canais digitais (reuniões virtuais, correio electrónico e WhatsApp), permitindo o envio digital de extractos, facturas e ficheiros contabilísticos para empresas sediadas em qualquer ponto de Angola.',
    },
    {
      id: 'faq-4',
      question: 'Como funciona o atendimento presencial sob agendamento?',
      answer:
        'Para garantir que a equipa técnica dedique tempo exclusivo à análise dos seus documentos, o atendimento presencial em Luanda é articulado previamente. Basta contactar-nos via WhatsApp ou formulário, indicar o tema a tratar e combinamos o dia e a hora mais adequados.',
    },
    {
      id: 'faq-5',
      question: 'Que informações devo fornecer para iniciar uma conversa ou pedir proposta?',
      answer:
        'Para uma avaliação inicial útil, sugerimos que indique: a denominação e o NIF da sua empresa (se já estiver constituída), o sector de actividade, o regime fiscal em que se encontra, o número aproximado de trabalhadores e os desafios específicos que pretende regularizar.',
    },
    {
      id: 'faq-6',
      question: 'Como posso saber qual é o serviço mais adequado à minha necessidade?',
      answer:
        'Se tiver dúvidas sobre o enquadramento, não precisa de se preocupar. No primeiro contacto, a nossa equipa realiza uma triagem gratuita para identificar se a sua necessidade é pontual (ex.: regularização de certidão de não dívida perante a AGT) ou se beneficiará de um plano contínuo de assessoria contabilística e fiscal.',
    },
    {
      id: 'faq-7',
      question: 'O envio do formulário no website envia uma mensagem automática definitiva?',
      answer:
        'Não. O formulário do nosso website organiza os seus dados e abre o WhatsApp Business com a mensagem estruturada pronta para revisão. A mensagem só é enviada quando você confirma e clica em enviar dentro do WhatsApp. Também disponibilizamos envio alternativo por e-mail.',
    },
  ]

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <MetaHelper
        title="Perguntas Frequentes sobre Consultoria Contabilística e Fiscal"
        description="Esclareça as dúvidas mais frequentes sobre os serviços da Confidente Contas em Luanda: atendimento presencial e remoto, modalidades de assessoria e processo de contacto."
      />

      {/* Hero da Página FAQ */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-surface-subtle border-b border-surface-border">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              ESCLARECIMENTO DE DÚVIDAS
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Perguntas Frequentes
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Encontre respostas directas sobre as nossas modalidades de atendimento, canais de comunicação e a forma como apoiamos a sua empresa.
            </p>
          </div>
        </Container>
      </section>

      {/* Lista de Acordéons Acessíveis */}
      <section className="py-16 sm:py-20 bg-surface-white">
        <Container size="narrow">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id

              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-surface-border bg-surface-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-navy hover:text-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-cyan text-navy' : 'text-navy'
                      }`}
                      aria-hidden="true"
                    >
                      &darr;
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-text-muted leading-relaxed border-t border-surface-border/50 pt-4 animate-in fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Chamada para Questões Específicas */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-navy">
              A sua dúvida não está listada acima?
            </h3>
            <p className="text-xs sm:text-sm text-text-muted max-w-lg mx-auto">
              Fale directamente com os nossos consultores pelo WhatsApp. Teremos todo o gosto em prestar o esclarecimento necessário sobre o seu caso.
            </p>
            <div className="pt-1">
              <Button
                variant="secondary"
                size="md"
                href={getWhatsAppUrl('Olá! Tenho uma dúvida sobre os serviços da Confidente Contas e gostaria de um esclarecimento.')}
                target="_blank"
                leadingIcon={<Icons.WhatsApp className="w-4 h-4" />}
              >
                Colocar Dúvida no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
