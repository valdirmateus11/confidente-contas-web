import React from 'react'
import { Container } from '../components/layout/Container'
import { Link } from '../components/layout/Router'
import { MetaHelper } from '../components/layout/MetaHelper'
import { getWhatsAppUrl } from '../config/company'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaHelper
        title="Página Não Encontrada (404)"
        description="A página solicitada não foi localizada. Regresse à página inicial da Confidente Contas ou consulte as nossas áreas de consultoria."
      />

      <section className="py-20 sm:py-32 bg-surface-white text-center">
        <Container size="narrow">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-heading font-bold px-3 py-1 rounded-full bg-navy/5 text-navy border border-navy/15">
              CÓDIGO DE ERRO 404
            </span>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight">
              A página que procura não foi localizada.
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-md mx-auto leading-relaxed">
              O endereço pode ter sido digitado incorrectamente ou o conteúdo ter sido reorganizado no âmbito da nossa plataforma institucional.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/"
                className="inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-lg px-6 py-3 text-sm bg-navy text-surface-white hover:bg-navy-dark shadow-sm"
              >
                Voltar à Página Inicial
              </Link>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-lg px-6 py-3 text-sm border-2 border-navy text-navy hover:bg-navy hover:text-surface-white"
              >
                Explorar Todos os Serviços
              </Link>
            </div>

            <div className="pt-8 border-t border-surface-border max-w-sm mx-auto text-xs text-text-muted">
              <p>
                Precisa de assistência imediata? Fale com a nossa equipa através do{' '}
                <a
                  href={getWhatsAppUrl('Olá! Encontrei uma ligação quebrada no website e preciso de apoio.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-bold hover:text-cyan underline"
                >
                  WhatsApp Business oficial
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
