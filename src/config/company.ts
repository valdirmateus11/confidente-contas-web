/**
 * Configuração Centralizada da Confidente Contas
 * Fonte única de verdade para dados corporativos, canais de contacto e parâmetros institucionais.
 */

export interface CompanySocialLinks {
  facebook: string
  linkedin: string
}

export interface CompanyContactInfo {
  phoneDisplay: string
  phoneRaw: string
  phoneSecondaryDisplay?: string
  phoneSecondaryRaw?: string
  email: string
  whatsappDisplay: string
  whatsappNumber: string // Formato E.164 sem '+' ou espaços (ex: 244936983501)
  whatsappDefaultMessage: string
}

export interface CompanyLocationInfo {
  city: string
  province: string
  country: string
  generalLocation: string
  attendanceMode: string
  businessHours: string
}

export interface CompanyLegalInfo {
  tradeName: string
  legalName: string
  nif: string
  slogan: string
}

export interface CompanyConfig {
  legal: CompanyLegalInfo
  location: CompanyLocationInfo
  contact: CompanyContactInfo
  social: CompanySocialLinks
}

export const COMPANY_CONFIG: CompanyConfig = {
  legal: {
    tradeName: 'Confidente Contas',
    legalName: 'Confidente Contas — Prestação de Serviços (SU), LDA',
    nif: '5002788446',
    slogan: 'Sua Empresa em Ordem, Sua Mente em Paz!',
  },
  location: {
    city: 'Luanda',
    province: 'Luanda',
    country: 'Angola',
    // Única localização pública autorizada conforme regras da FASE 3
    generalLocation: 'Bairro Rocha, Campo do Interclub, Luanda, Angola',
    attendanceMode: 'Atendimento presencial mediante agendamento e consultoria remota.',
    businessHours: 'Segunda a sexta-feira, das 08h00 às 17h00',
  },
  contact: {
    phoneDisplay: '+244 936 983 501',
    phoneRaw: '+244936983501',
    phoneSecondaryDisplay: '+244 928 041 980',
    phoneSecondaryRaw: '+244928041980',
    email: 'confidentecontas@gmail.com',
    whatsappDisplay: '+244 936 983 501',
    whatsappNumber: '244936983501',
    whatsappDefaultMessage: 'Olá! Gostaria de obter mais informações sobre os serviços de consultoria da Confidente Contas.',
  },
  social: {
    facebook: 'https://www.facebook.com/share/1e4V2tEm71/',
    linkedin: 'https://www.linkedin.com/company/confidente-contas',
  },
}

/**
 * Constrói o link oficial do WhatsApp com mensagem devidamente codificada para URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || COMPANY_CONFIG.contact.whatsappDefaultMessage
  return `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Constrói o link de e-mail (mailto) com assunto pré-definido
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const email = COMPANY_CONFIG.contact.email
  const params: string[] = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  const query = params.length > 0 ? `?${params.join('&')}` : ''
  return `mailto:${email}${query}`
}
