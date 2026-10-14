import React, { useState } from 'react'
import { Button } from './Button'
import { Icons } from './icons'
import { Link } from '../layout/Router'
import { COMPANY_CONFIG } from '../../config/company'

export interface ContactFormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  service: string
  attendanceType: 'Presencial sob agendamento' | 'Consultoria remota'
  description: string
  privacyAccepted: boolean
}

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: 'Contabilidade',
  attendanceType: 'Presencial sob agendamento',
  description: '',
  privacyAccepted: false,
}

export const ContactForm: React.FC<{ initialService?: string }> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    ...INITIAL_FORM_DATA,
    service: initialService || INITIAL_FORM_DATA.service,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [step, setStep] = useState<'form' | 'summary' | 'dispatched'>('form')

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, insira o seu nome completo.'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'O nome deve conter pelo menos 3 caracteres.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira o seu endereço de e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Insira um endereço de e-mail válido (ex: nome@empresa.com).'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, insira o seu número de telefone ou WhatsApp.'
    } else if (formData.phone.trim().replace(/\D/g, '').length < 9) {
      newErrors.phone = 'Insira um número de telefone válido (mínimo de 9 dígitos).'
    }

    if (!formData.service) {
      newErrors.service = 'Por favor, seleccione o serviço pretendido.'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Por favor, descreva brevemente a necessidade da sua empresa.'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'A descrição deve ter pelo menos 10 caracteres para podermos avaliar a sua necessidade.'
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'Deve confirmar que leu e aceita a informação sobre o tratamento de dados.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Limpar erro do campo ao editar
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleProceedToSummary = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setStep('summary')
      window.scrollTo({ top: 300, behavior: 'smooth' })
    }
  }

  /**
   * Constrói a mensagem estruturada e abre o WhatsApp com destino confirmado
   */
  const handleConfirmAndOpenWhatsApp = () => {
    const lines: string[] = [
      'PEDIDO DE CONTACTO — CONFIDENTE CONTAS',
      '',
      `Nome: ${formData.fullName.trim()}`,
    ]

    if (formData.companyName.trim()) {
      lines.push(`Empresa: ${formData.companyName.trim()}`)
    }

    lines.push(`E-mail: ${formData.email.trim()}`)
    lines.push(`Telefone: ${formData.phone.trim()}`)
    lines.push(`Serviço pretendido: ${formData.service}`)
    lines.push(`Modalidade de atendimento: ${formData.attendanceType}`)
    lines.push(`Descrição da necessidade: ${formData.description.trim()}`)
    lines.push('')
    lines.push('Origem: Formulário institucional do website.')

    const structuredMessage = lines.join('\n')
    const targetUrl = `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      structuredMessage
    )}`

    // Abrir o WhatsApp em nova janela/aplicação
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
    setStep('dispatched')
  }

  /**
   * Fallback: Constrói mailto estruturado com os mesmos dados
   */
  const generateMailtoHref = () => {
    const subject = `[Website] Contacto de ${formData.fullName} - ${formData.service}`
    const body = [
      'PEDIDO DE CONTACTO INSTITUCIONAL',
      '--------------------------------',
      `Nome: ${formData.fullName}`,
      formData.companyName ? `Empresa: ${formData.companyName}` : '',
      `E-mail: ${formData.email}`,
      `Telefone: ${formData.phone}`,
      `Serviço: ${formData.service}`,
      `Modalidade: ${formData.attendanceType}`,
      `Descrição: ${formData.description}`,
    ]
      .filter(Boolean)
      .join('\n')

    return `mailto:${COMPANY_CONFIG.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="bg-surface-white rounded-2xl border border-surface-border p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* 1. ESTADO DE PREENCHIMENTO DO FORMULÁRIO */}
      {step === 'form' && (
        <form onSubmit={handleProceedToSummary} noValidate className="space-y-6">
          <div className="border-b border-surface-border pb-4">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
              Formulário de Contacto e Consulta
            </h3>
            <p className="text-sm text-text-muted mt-1">
              Preencha os dados abaixo para estruturar a sua consulta. Na etapa seguinte, poderá rever os dados antes de abrir a conversa no WhatsApp Business oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* 1. Nome Completo */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Nome Completo <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleInputChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                placeholder="Ex: Manuel António"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-text-main placeholder-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-surface-border bg-surface-white'
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-xs text-red-600 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* 2. Nome da Empresa (Opcional) */}
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Nome da Empresa <span className="text-xs font-normal text-text-muted lowercase">(opcional)</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Ex: Minha Empresa, LDA"
                className="w-full rounded-lg border border-surface-border bg-surface-white px-3.5 py-2.5 text-sm text-text-main placeholder-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              />
            </div>

            {/* 3. E-mail */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Endereço de E-mail <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="nome@empresa.com"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-text-main placeholder-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  errors.email ? 'border-red-500 bg-red-50/30' : 'border-surface-border bg-surface-white'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* 4. Número de Telefone / WhatsApp */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Telefone / WhatsApp <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleInputChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="+244 9XX XXX XXX"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-text-main placeholder-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-surface-border bg-surface-white'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-red-600 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* 5. Serviço Pretendido */}
            <div className="space-y-1.5">
              <label htmlFor="service" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Serviço Pretendido <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                aria-invalid={!!errors.service}
                className="w-full rounded-lg border border-surface-border bg-surface-white px-3.5 py-2.5 text-sm text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <option value="Contabilidade">Contabilidade</option>
                <option value="Fiscalidade e Consultoria Tributária">Fiscalidade e Consultoria Tributária</option>
                <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option>
                <option value="Processamento Salarial">Processamento Salarial</option>
                <option value="Consultoria Empresarial">Consultoria Empresarial</option>
                <option value="Outro assunto">Outro assunto</option>
              </select>
            </div>

            {/* 6. Tipo de Atendimento */}
            <div className="space-y-1.5">
              <label htmlFor="attendanceType" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
                Modalidade de Atendimento <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <select
                id="attendanceType"
                name="attendanceType"
                value={formData.attendanceType}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-surface-border bg-surface-white px-3.5 py-2.5 text-sm text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <option value="Presencial sob agendamento">Presencial mediante agendamento (Luanda)</option>
                <option value="Consultoria remota">Consultoria remota (Virtual / Online)</option>
              </select>
            </div>
          </div>

          {/* 7. Descrição da Necessidade */}
          <div className="space-y-1.5">
            <label htmlFor="description" className="block text-xs font-heading font-bold text-navy uppercase tracking-wider">
              Descrição da Necessidade da Empresa <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? 'description-error' : undefined}
              placeholder="Indique sucintamente o momento da sua empresa, desafios contabilísticos, fiscais ou de pessoal que pretende regularizar."
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-text-main placeholder-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                errors.description ? 'border-red-500 bg-red-50/30' : 'border-surface-border bg-surface-white'
              }`}
            />
            {errors.description && (
              <p id="description-error" className="text-xs text-red-600 font-medium">
                {errors.description}
              </p>
            )}
          </div>

          {/* 8. Confirmação de Leitura da Política de Privacidade */}
          <div className="space-y-1 pt-1">
            <div className="flex items-start gap-3">
              <input
                id="privacyAccepted"
                name="privacyAccepted"
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                aria-invalid={!!errors.privacyAccepted}
                aria-describedby={errors.privacyAccepted ? 'privacyAccepted-error' : undefined}
                className="mt-1 h-4 w-4 rounded border-surface-border text-navy focus-visible:ring-2 focus-visible:ring-cyan"
              />
              <label htmlFor="privacyAccepted" className="text-xs text-text-muted leading-relaxed">
                Confirmo que li a{' '}
                <Link href="/politica-de-privacidade" className="text-navy font-semibold underline hover:text-cyan">
                  informação sobre privacidade
                </Link>{' '}
                e compreendo que, ao avançar, estes dados serão estruturados numa mensagem e abertos no meu WhatsApp para validação e envio directo.
              </label>
            </div>
            {errors.privacyAccepted && (
              <p id="privacyAccepted-error" className="text-xs text-red-600 font-medium pl-7">
                {errors.privacyAccepted}
              </p>
            )}
          </div>

          {/* Botão de Avanço */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-surface-border">
            <span className="text-xs text-text-muted">
              Tempo médio de resposta: no próprio dia útil ou em até 24h úteis.
            </span>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              trailingIcon={<Icons.ChevronRight className="w-4 h-4" />}
            >
              Rever Dados e Abrir no WhatsApp
            </Button>
          </div>
        </form>
      )}

      {/* 2. ESTADO DE RESUMO ANTES DO ENCAMINHAMENTO */}
      {step === 'summary' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="border-b border-surface-border pb-4">
            <span className="text-xs uppercase font-heading font-bold text-cyan tracking-wider">
              Passo 2 de 2: Confirmação
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy mt-1">
              Revê os dados da tua mensagem antes de abrir o WhatsApp
            </h3>
            <p className="text-sm text-text-muted mt-1">
              A mensagem abaixo será carregada no WhatsApp para o número oficial da Confidente Contas (+244 936 983 501). Poderá revê-la novamente antes de carregar no botão de envio.
            </p>
          </div>

          <div className="rounded-xl bg-surface-subtle border border-surface-border p-5 space-y-3 font-mono text-xs sm:text-sm text-text-main">
            <div className="font-heading font-bold text-navy text-xs border-b border-surface-border pb-2 uppercase tracking-wider">
              Pré-visualização do Texto Formatado:
            </div>
            <p className="font-bold text-navy">PEDIDO DE CONTACTO — CONFIDENTE CONTAS</p>
            <p><strong>Nome:</strong> {formData.fullName}</p>
            {formData.companyName && <p><strong>Empresa:</strong> {formData.companyName}</p>}
            <p><strong>E-mail:</strong> {formData.email}</p>
            <p><strong>Telefone:</strong> {formData.phone}</p>
            <p><strong>Serviço pretendido:</strong> {formData.service}</p>
            <p><strong>Modalidade:</strong> {formData.attendanceType}</p>
            <p><strong>Descrição:</strong> {formData.description}</p>
            <p className="text-slate-500 text-xs pt-1">Origem: Formulário institucional do website.</p>
          </div>

          <div className="p-4 rounded-lg bg-cyan-tint border border-cyan/30 text-xs sm:text-sm text-navy leading-relaxed flex items-start gap-3">
            <Icons.CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
            <div>
              <strong className="block font-heading">Transparência Total:</strong>
              O website não envia mensagens em seu nome sem a sua acção. Ao carregar no botão abaixo, a conversa oficial do WhatsApp será aberta e terá controlo total para enviar a mensagem.
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setStep('form')}
            >
              Editar Dados
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleConfirmAndOpenWhatsApp}
              leadingIcon={<Icons.WhatsApp className="w-5 h-5" />}
            >
              Confirmar e Abrir no WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* 3. ESTADO DE ENCAMINHAMENTO EXECUTADO / FALLBACK */}
      {step === 'dispatched' && (
        <div className="space-y-6 text-center py-6 animate-in fade-in">
          <div className="w-14 h-14 rounded-full bg-cyan/15 text-cyan border border-cyan/40 mx-auto flex items-center justify-center">
            <Icons.WhatsApp className="w-7 h-7" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
              WhatsApp Aberto com os Seus Dados
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              O WhatsApp foi iniciado com a sua mensagem pré-formatada. <strong>Lembre-se de carregar no botão verde de envio dentro do WhatsApp</strong> para que a nossa equipa receba o seu pedido.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface-subtle border border-surface-border max-w-lg mx-auto text-left text-xs space-y-3">
            <span className="font-heading font-bold text-navy uppercase tracking-wider block">
              O WhatsApp não abriu no seu dispositivo?
            </span>
            <p className="text-text-muted">
              Pode tentar abrir manualmente ou optar pelo envio directo por e-mail com a mesma mensagem:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={generateMailtoHref()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-navy text-surface-white font-heading font-bold text-xs hover:bg-navy-dark transition-colors"
              >
                <Icons.Mail className="w-3.5 h-3.5" />
                <span>Enviar em Alternativa por E-mail</span>
              </a>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="px-4 py-2 rounded-lg border border-surface-border text-navy font-heading font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                Voltar ao Formulário
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
