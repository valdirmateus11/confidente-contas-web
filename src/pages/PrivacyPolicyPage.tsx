import React from 'react'
import { Container } from '../components/layout/Container'
import { MetaHelper } from '../components/layout/MetaHelper'
import { COMPANY_CONFIG } from '../config/company'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <MetaHelper
        title="Política de Privacidade e Tratamento de Dados"
        description="Informação transparente sobre o tratamento de dados pessoais no website da Confidente Contas, fluxo de encaminhamento para WhatsApp e segurança da informação."
      />

      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-surface-subtle border-b border-surface-border">
        <Container size="narrow">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              INFORMAÇÃO LEGAL & PRIVACIDADE
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Transparência total sobre como tratamos as informações fornecidas no nosso website institucional.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-surface-white">
        <Container size="narrow">
          <article className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-text-muted leading-relaxed">
            {/* Aviso prévio */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
              <strong>Nota Institucional:</strong> A presente informação descreve o funcionamento técnico e o fluxo de dados do website da {COMPANY_CONFIG.legal.legalName}. Este documento está sujeito a revisão e actualização jurídica contínua em conformidade com a Lei de Protecção de Dados Pessoais de Angola (Lei n.º 22/11).
            </div>

            {/* 1. Responsável pelo Tratamento */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                1. Entidade Responsável
              </h2>
              <p>
                A entidade responsável pelo tratamento das comunicações remetidas através deste website é a <strong>{COMPANY_CONFIG.legal.legalName}</strong>, com NIF <strong>{COMPANY_CONFIG.legal.nif}</strong>, com sede e referência operacional no Bairro Rocha, Campo do Interclub, Luanda, Angola.
              </p>
            </div>

            {/* 2. Dados Solicitados no Formulário */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                2. Dados Recolhidos no Formulário de Contacto
              </h2>
              <p>
                No formulário disponibilizado no website, solicitamos unicamente os dados estritamente necessários para acolher e avaliar o seu pedido de contacto comercial:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Nome completo:</strong> para identificar o interlocutor;</li>
                <li><strong>Nome da empresa (opcional):</strong> para contextualizar a dimensão da entidade;</li>
                <li><strong>Endereço de e-mail e telefone:</strong> para possibilitar a resposta e o retorno do contacto;</li>
                <li><strong>Serviço pretendido e modalidade de atendimento:</strong> para direcionar a consulta ao consultor responsável;</li>
                <li><strong>Descrição da necessidade:</strong> para compreender o âmbito técnico antes da sessão de acolhimento.</li>
              </ul>
            </div>

            {/* 3. Finalidade e Base do Tratamento */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                3. Finalidade do Tratamento
              </h2>
              <p>
                Os dados fornecidos destinam-se exclusivamente à resposta a pedidos de informação, elaboração de propostas de honorários e agendamento de reuniões técnicas. Não utilizamos os dados para envio de correspondência comercial massificada (spam) nem os partilhamos ou comercializamos com quaisquer terceiros para fins publicitários.
              </p>
            </div>

            {/* 4. Fluxo Técnico de Encaminhamento para WhatsApp */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                4. Fluxo de Encaminhamento para o WhatsApp Business
              </h2>
              <p>
                Para sua maior segurança e transparência, o formulário deste website opera através de um mecanismo de pré-formatação:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Ao preencher o formulário e carregar em "Rever Dados e Abrir no WhatsApp", é-lhe apresentado um resumo claro dos dados;</li>
                <li>Após a sua confirmação expressa, o website abre a aplicação do WhatsApp (ou WhatsApp Web) no seu dispositivo com a mensagem pré-preenchida;</li>
                <li><strong>O website não envia mensagens em seu nome sem a sua confirmação:</strong> cabe ao utilizador rever o texto dentro do WhatsApp e carregar voluntariamente no botão de envio;</li>
                <li>O número de destino oficial da empresa é exclusivamente o <strong>{COMPANY_CONFIG.contact.phoneDisplay}</strong>.</li>
              </ul>
            </div>

            {/* 5. Ausência de Armazenamento Centralizado no Website */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                5. Armazenamento e Segurança da Informação
              </h2>
              <p>
                Este website foi desenhado com arquitectura estática focada na privacidade: <strong>os dados introduzidos no formulário não são armazenados em nenhuma base de dados do website</strong>. A informação apenas transita temporariamente pela memória do seu navegador para gerar a mensagem de destino.
              </p>
            </div>

            {/* 6. Plataformas Externas */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                6. Serviços e Plataformas Externas
              </h2>
              <p>
                Uma vez iniciada a conversa no WhatsApp ou através do envio de mensagem por e-mail, o tratamento das comunicações passa também a reger-se pelas condições de serviço e políticas de privacidade das respectivas plataformas (WhatsApp / Meta Platforms e o seu fornecedor de serviço de correio electrónico).
              </p>
            </div>

            {/* 7. Direitos dos Titulares e Contacto */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                7. Direitos dos Titulares e Esclarecimentos
              </h2>
              <p>
                A qualquer momento, o titular dos dados poderá solicitar o esclarecimento sobre eventuais registos de comunicações ou solicitar a actualização ou eliminação de dados de contacto mantidos no âmbito de propostas comerciais não concretizadas. Para o efeito, poderá contactar directamente através do endereço institucional <strong>{COMPANY_CONFIG.contact.email}</strong>.
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
