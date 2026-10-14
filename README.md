# Confidente Contas — Website Institucional

Aplicação web institucional da **Confidente Contas — Prestação de Serviços (SU), LDA**, consultoria angolana especializada em Contabilidade, Fiscalidade e Consultoria Tributária, Gestão de Recursos Humanos, Processamento Salarial e Consultoria Empresarial.

> **Slogan Institucional:** *“Sua Empresa em Ordem, Sua Mente em Paz!”*

---

## 1. Stack Tecnológica e Decisões de Arquitectura

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Build:** [Vite 8](https://vite.dev/)
- **Estilos e Design Tokens:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (CSS compilado: ~7.4 kB gzipped)
- **Roteamento:** Router cliente nativo tipado (`Router.tsx` / `RouterContext.ts`) com suporte duplo a HTML5 History API e Hash Routing (`#/rota`) como fallback universal em servidores estáticos sem dependência de reescritas de URL no backend.
- **Qualidade de Código:** [Oxlint](https://oxc.rs/) e TypeScript Compiler (`tsc -b`) com 0 erros e 0 avisos.
- **Acessibilidade e SEO:** WCAG 2.1 AA (contraste calibrado, navegação por teclado, estados de foco nativos, links de salto para conteúdo, marcação Schema.org JSON-LD, `sitemap.xml` e `robots.txt`).

---

## 2. Mapa de Páginas e Rotas Implementadas

| Rota | Componente | Descrição e Propósito |
| :--- | :--- | :--- |
| `/` | `HomePage` | Proposta de valor, hero com slogan, apresentação, 5 serviços, necessidades empresariais, abordagem em 4 momentos e chamada para contacto |
| `/sobre-nos` | `AboutPage` | Quem é a empresa, posicionamento preventivo, rigor técnico (Primavera v10), clareza e processo de início de relação |
| `/servicos` | `ServicesIndexPage` | Visão geral comparativa e detalhada das 5 áreas de actuação com requisitos de contacto |
| `/servicos/contabilidade` | `ServiceDetailPage` | Fecho de contas, balancetes, software Primavera v10 e harmonização contabilística |
| `/servicos/fiscalidade` | `ServiceDetailPage` | Apoio perante a AGT, apuramento de IVA, IRT, Imposto Industrial, IPU, Selo e certidões |
| `/servicos/recursos-humanos` | `ServiceDetailPage` | Contratos de trabalho (LGT), regulamentos internos, arquivo de pessoal e processos de admissão |
| `/servicos/processamento-salarial`| `ServiceDetailPage` | Folhas de pagamento analíticas, recibos de vencimento, guias do INSS e retenções |
| `/servicos/consultoria-empresarial`| `ServiceDetailPage` | Separação de contas pessoais e societárias, diagnóstico de rotinas e suporte à banca |
| `/contactos` | `ContactPage` | Canais directos, horários, localização e formulário institucional com encaminhamento WhatsApp |
| `/perguntas-frequentes` | `FaqPage` | 7 respostas essenciais sobre atendimento presencial em Luanda, consultoria remota e modalidades |
| `/politica-de-privacidade` | `PrivacyPolicyPage` | Descrição transparente do fluxo de dados e confirmação do encaminhamento para WhatsApp |
| `/*` (Qualquer rota inválida) | `NotFoundPage` | Página de erro 404 personalizada com recuperação para a homepage e serviços |

---

## 3. Funcionamento do Formulário e Ponte para WhatsApp

O website adota um fluxo transparente de submissão comercial sem retenção indevida de dados no servidor:

1. **Preenchimento:** O utilizador preenche os campos com validação em tempo real (Nome, Empresa opcional, E-mail, Telefone, Serviço, Tipo de Atendimento, Descrição da Necessidade e Aceitação de Privacidade).
2. **Revisão / Resumo:** O sistema apresenta um ecrã de revisão com a pré-visualização exacta da mensagem que será partilhada.
3. **Encaminhamento Seguro:** Ao carregar em *"Confirmar e Abrir no WhatsApp"*, o navegador abre o link formatado em padrão internacional E.164 (`https://wa.me/244936983501?text=...`) com codificação percentual estrita dos caracteres (`encodeURIComponent`).
4. **Controlo do Utilizador:** A mensagem é pré-carregada na conversa oficial do WhatsApp, cabendo ao utilizador rever e carregar no botão de envio.
5. **Fallback:** Caso o WhatsApp não esteja instalado ou não abra no dispositivo, é disponibilizado um botão imediato de envio alternativo por e-mail (`mailto:confidentecontas@gmail.com`) com os mesmos dados estruturados.

---

## 4. Dados Institucionais Confirmados (Configuração Centralizada)

Todos os componentes consomem a fonte única de verdade em `src/config/company.ts`:

- **Denominação:** Confidente Contas — Prestação de Serviços (SU), LDA
- **NIF Oficial:** `5002788446`
- **WhatsApp Business:** `+244 936 983 501`
- **Linha Telefónica Adicional:** `+244 928 041 980`
- **E-mail:** `confidentecontas@gmail.com`
- **Localização Pública Autorizada:** Bairro Rocha, Campo do Interclub, Luanda, Angola
- **Modalidade:** Atendimento presencial mediante agendamento e consultoria remota disponível
- **Horário:** Segunda a sexta-feira, das 08h00 às 17h00
- **Redes Sociais Oficiais:**
  - Facebook: `https://www.facebook.com/share/1e4V2tEm71/`
  - LinkedIn: `https://www.linkedin.com/company/confidente-contas`
  - *(Instagram inexistente e expressamente omitido conforme regras da empresa)*

---

## 5. Comandos de Manutenção

No terminal (Windows PowerShell):

```powershell
# Garantir acesso ao Node.js
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Executar linter
npm run lint

# Compilar para produção (TypeScript + Vite)
npm run build

# Pré-visualizar build estático
npm run preview
```
