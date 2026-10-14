/**
 * Configuração tipada dos 5 serviços oficiais da Confidente Contas.
 * Baseada estritamente nas capacidades confirmadas e materiais institucionais da empresa.
 */

export interface ServiceDetail {
  id: string
  slug: string
  path: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  whatItDoes: string[]
  needsItSolves: string[]
  whenRelevant: string[]
  informationToProvide: string[]
  features: string[]
  whatsappMessage: string
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'contabilidade',
    slug: 'contabilidade',
    path: '/servicos/contabilidade',
    title: 'Contabilidade',
    category: 'Gestão Contabilística',
    shortDescription:
      'Organização documental, parametrização e lançamento em software Primavera, e elaboração de relatórios financeiros em conformidade com as normas contabilísticas aplicáveis em Angola.',
    fullDescription:
      'A contabilidade estruturada é a base da segurança empresarial. Apoiamos a sua empresa na recolha, classificação e registo metódico de todos os factos patrimoniais, assegurando demonstrações financeiras fidedignas e em dia para suporte à tomada de decisão e relacionamento com a banca e parceiros.',
    whatItDoes: [
      'Organização e arquivo metódico da documentação contabilística e financeira',
      'Parametrização e lançamentos sistemáticos no software Primavera v10',
      'Emissão e conferência de balancetes mensais e trimestrais de verificação',
      'Elaboração de demonstrações de fluxos de caixa e mapas de amortizações',
      'Preparação do fecho de contas e balanço anual de exercício',
    ],
    needsItSolves: [
      'Documentos financeiros dispersos ou sem classificação padronizada',
      'Atrasos na elaboração e entrega de balancetes para instituições financeiras',
      'Falta de visibilidade clara sobre custos, margens e evolução patrimonial',
      'Dificuldade em prestar contas aos sócios ou investidores com base em relatórios fiáveis',
    ],
    whenRelevant: [
      'Empresas em fase de arranque que necessitam de estruturar a sua contabilidade desde o primeiro dia',
      'Sociedades que procuram regularizar exercícios anteriores com documentação pendente',
      'Empresas que necessitam de apresentar demonstrações financeiras para linhas de crédito bancário ou concursos',
      'Gestores que pretendem migrar a contabilidade para uma assessoria com rotinas previsíveis e suporte constante',
    ],
    informationToProvide: [
      'Volume aproximado de documentos mensais (facturas de compras, vendas e recibos)',
      'Regime de tributação actual da empresa (Geral, Simplificado ou Isenção)',
      'Se já utiliza software de facturação certificado e qual',
      'Estado actual dos fechos de contas dos exercícios anteriores',
    ],
    features: [
      'Harmonização Contabilística (IAS/IFRS)',
      'Lançamentos em Software Primavera v10',
      'Emissão de Balancetes Mensais e Trimestrais',
      'Fecho de Contas e Balanço Anual',
    ],
    whatsappMessage:
      'Olá! Gostaria de obter informações sobre os serviços de Contabilidade para a minha empresa.',
  },
  {
    id: 'fiscalidade',
    slug: 'fiscalidade',
    path: '/servicos/fiscalidade',
    title: 'Fiscalidade e Consultoria Tributária',
    category: 'Consultoria Fiscal',
    shortDescription:
      'Acompanhamento preventivo perante a Administração Geral Tributária (AGT), apuramento de impostos devidos e apoio na manutenção da conformidade fiscal da empresa.',
    fullDescription:
      'A complexidade do sistema fiscal em Angola exige rigor e tempestividade. A Confidente Contas acompanha a sua empresa no planeamento e cumprimento do calendário fiscal, prevenindo penalizações, notificações inesperadas e garantindo que o seu NIF permaneça activo e em conformidade.',
    whatItDoes: [
      'Apuramento rigoroso dos impostos aplicáveis (IVA, IRT, Imposto Industrial, IPU e Imposto de Selo)',
      'Apoio no preenchimento e submissão das declarações fiscais no Portal do Contribuinte da AGT',
      'Acompanhamento nos pedidos de certidões de conformidade e não dívida',
      'Apoio documental na regularização de pendências cadastrais ou levantamento de suspensão de NIF',
      'Orientação preventiva sobre a retenção na fonte na contratação de serviços a terceiros',
    ],
    needsItSolves: [
      'Incerteza sobre quais os impostos aplicáveis a cada operação ou factura recebida',
      'Risco de multas, juros de mora e penalizações por atraso no cumprimento de prazos fiscais',
      'Notificações recebidas da AGT que necessitam de resposta fundamentada e regularização',
      'Dificuldade em obter certidões de conformidade necessárias para concursos ou contratações públicas',
    ],
    whenRelevant: [
      'Empresas que pretendem garantir que as suas liquidações de IVA e IRT são feitas dentro do prazo',
      'Negócios que foram recentemente constituídos e precisam de enquadrar as suas obrigações tributárias',
      'Empresas que necessitam de auditar o seu histórico fiscal para sanar discrepâncias com a AGT',
      'Sociedades que realizam pagamentos sujeitos a retenção na fonte e necessitam de mapas claros',
    ],
    informationToProvide: [
      'NIF da empresa e enquadramento fiscal conhecido perante a AGT',
      'Existência ou não de notificações pendentes ou processos em curso',
      'Tipologia de receitas e despesas predominantes na actividade',
      'Prazos ou necessidades imediatas (ex.: certidão urgente para concurso ou renovação de licenças)',
    ],
    features: [
      'Apuramento e Declarações de IVA e IRT',
      'Submissões no Portal do Contribuinte AGT',
      'Imposto Industrial, IPU e Selo',
      'Certidões de Conformidade e Gestão de NIF',
    ],
    whatsappMessage:
      'Olá! Gostaria de apoio na área de Fiscalidade e Obrigações perante a AGT para a minha empresa.',
  },
  {
    id: 'recursos-humanos',
    slug: 'recursos-humanos',
    path: '/servicos/recursos-humanos',
    title: 'Gestão de Recursos Humanos',
    category: 'Capital Humano',
    shortDescription:
      'Estruturação administrativa dos processos de pessoal, conformidade com a legislação laboral angolana, cadastramento institucional e apoio documental aos colaboradores.',
    fullDescription:
      'A gestão adequada das pessoas e dos seus contratos é indispensável para evitar litígios de trabalho e manter uma equipa focada e produtiva. Apoiamos a estruturação de regulamentos, processos de admissão, acompanhamento de carreiras e enquadramento perante a Inspecção Geral do Trabalho (IGT).',
    whatItDoes: [
      'Elaboração e revisão de minutas de contratos de trabalho (por tempo determinado, indeterminado ou estágio)',
      'Organização e manutenção do arquivo individual de processos de funcionários',
      'Elaboração e apoio na estruturação do Regulamento Interno da empresa',
      'Comunicação de admissões e cessações de vínculo aos órgãos competentes',
      'Apoio documental na gestão de férias, dispensas, faltas e regime disciplinar',
    ],
    needsItSolves: [
      'Inexistência ou desactualização de contratos de trabalho formais com os colaboradores',
      'Falta de regras claras de convivência e procedimentos internos formalizados',
      'Dúvidas quanto ao cálculo legal de indemnizações, compensações ou direitos em cessações de contrato',
      'Insegurança jurídica perante eventuais inspecções de trabalho da IGT',
    ],
    whenRelevant: [
      'Empresas a admitir os seus primeiros trabalhadores que precisam de contratos conformes com a LGT',
      'Organizações em crescimento que necessitam de criar políticas claras e um regulamento interno aprovado',
      'Empresas que pretendem organizar os dossiers individuais de pessoal de forma profissional',
      'Negócios que procuram prevenir conflitos laborais através de procedimentos transparentes',
    ],
    informationToProvide: [
      'Número actual de colaboradores e modalidades de contratação existentes',
      'Se a empresa possui regulamento interno ou acordos específicos em vigor',
      'Principais desafios na relação com a equipa (ex.: assiduidade, formalização ou renovações)',
    ],
    features: [
      'Elaboração de Contratos de Trabalho (LGT)',
      'Estruturação de Regulamentos Internos',
      'Dossiers e Arquivo Individual de Pessoal',
      'Apoio em Processos de Admissão e Saída',
    ],
    whatsappMessage:
      'Olá! Gostaria de consultar a Confidente Contas sobre serviços de Gestão de Recursos Humanos.',
  },
  {
    id: 'processamento-salarial',
    slug: 'processamento-salarial',
    path: '/servicos/processamento-salarial',
    title: 'Processamento Salarial',
    category: 'Gestão de Vencimentos & INSS',
    shortDescription:
      'Cálculo mensal e rigoroso de folhas de vencimento, emissão de recibos de ordenado e apuramento pontual das contribuições para o INSS e do imposto do rendimento do trabalho (IRT).',
    fullDescription:
      'O pagamento atempado e exacto dos salários transmite tranquilidade à sua equipa e protege a sociedade contra infracções fiscais e previdenciais. Garantimos o cálculo integral da folha de pagamento, com todas as deduções legais, subsídios e emissão dos respectivos suportes.',
    whatItDoes: [
      'Processamento mensal da folha de salários com discriminação de remunerações base, subsídios e horas extraordinárias',
      'Cálculo exacto das retenções de IRT sobre os rendimentos do trabalho',
      'Apuramento das contribuições devidas à Segurança Social (INSS — parcelas do trabalhador e da entidade empregadora)',
      'Emissão de folhas de pagamento analíticas e recibos de vencimento individuais',
      'Geração de ficheiros e guias para pagamento bancário e submissão nas plataformas competentes',
    ],
    needsItSolves: [
      'Erros recorrentes no cálculo manual de subsídios, descontos de IRT ou percentagens do INSS',
      'Falta de emissão formal de recibos de ordenado aos colaboradores',
      'Atrasos na entrega das folhas de remuneração ao INSS gerando penalidades à empresa',
      'Sobrecarga de tempo da gerência em tarefas administrativas repetitivas de cálculo salarial',
    ],
    whenRelevant: [
      'Empresas que procuram terceirizar o processamento de salários com confidencialidade e segurança',
      'Organizações que enfrentam dificuldades em manter o histórico de pagamentos e recibos organizado',
      'Empresas que sofreram penalidades por atraso na submissão de guias do INSS',
      'Negócios que pretendem libertar tempo da sua equipa administrativa para tarefas de maior valor',
    ],
    informationToProvide: [
      'Número de trabalhadores abrangidos pelo processamento',
      'Frequência de variáveis mensais (ex.: horas extras, comissões, subsídios variáveis)',
      'Situação actual dos cadastros e das guias de liquidação perante o INSS',
    ],
    features: [
      'Processamento de Folha de Pagamento',
      'Emissão de Recibos de Vencimento',
      'Apuramento e Guias Mensais do INSS',
      'Apuramento e Retenção na Fonte de IRT',
    ],
    whatsappMessage:
      'Olá! Gostaria de receber uma proposta para o Processamento Salarial da minha empresa.',
  },
  {
    id: 'consultoria-empresarial',
    slug: 'consultoria-empresarial',
    path: '/servicos/consultoria-empresarial',
    title: 'Consultoria Empresarial',
    category: 'Estratégia & Organização',
    shortDescription:
      'Diagnóstico de rotinas administrativas, estruturação de fluxos internos, apoio à separação de contas e suporte à organização do negócio para expansão sustentável.',
    fullDescription:
      'Muitas empresas promissoras estagnam ou enfrentam crises de liquidez devido à ausência de processos claros e à mistura prejudicial entre despesas pessoais e societárias. A nossa consultoria identifica pontos de estrangulamento operacional e ajuda a definir rotinas que garantem controlo, economia de tempo e estabilidade.',
    whatItDoes: [
      'Diagnóstico detalhado dos fluxos administrativos, de compras e de recebimentos da empresa',
      'Apoio na separação efectiva entre património particular e património societário',
      'Elaboração de procedimentos padronizados para controlo documental e autorizações internas',
      'Estruturação de informação financeira para suporte a decisões estratégicas de investimento',
      'Apoio na preparação de dossiers para relacionamento bancário e processos de financiamento',
    ],
    needsItSolves: [
      'Mistura constante de contas pessoais dos sócios com as despesas da sociedade',
      'Desconhecimento do custo real de operação e dos prazos médios de recebimento e pagamento',
      'Falta de padronização nos procedimentos internos de controlo e validação de despesas',
      'Dificuldade em planear necessidades de tesouraria de curto e médio prazo',
    ],
    whenRelevant: [
      'Empresas em expansão onde os fundadores já não conseguem acompanhar todos os processos informalmente',
      'Sociedades que pretendem reorganizar os seus controlos internos antes de solicitar financiamento bancário',
      'Empresários que pretendem profissionalizar a gestão financeira e administrativa do negócio',
      'Negócios familiares em processo de estruturação de procedimentos e responsabilidades',
    ],
    informationToProvide: [
      'Sector de actividade e principais linhas de negócio',
      'Dimensão actual da operação e principais desafios organizacionais identificados pelos gestores',
      'Objectivos prioritários para a intervenção de consultoria nos próximos 3 a 6 meses',
    ],
    features: [
      'Diagnóstico de Processos e Rotinas',
      'Separação de Contas Pessoais e Societárias',
      'Estruturação de Fluxos Administrativos',
      'Preparação Documental para a Banca',
    ],
    whatsappMessage:
      'Olá! Gostaria de agendar uma consulta sobre Consultoria e Organização Empresarial.',
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug)
}
