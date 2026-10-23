# Demonstração de Autenticação Multifator (MFA / TOTP)

Aplicação web estática para demonstração didática de autenticação multifator (2FA) utilizando o protocolo **TOTP (Time-Based One-Time Password / RFC 6238)**, compatível com aplicativos autenticadores de mercado como Google Authenticator, Microsoft Authenticator e Authy.

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
  - [Via GitHub Pages](#via-github-pages)
  - [Execução Local](#execução-local)
  - [Credenciais de Demonstração](#credenciais-de-demonstração)
- [Fluxo da Dinâmica](#fluxo-da-dinâmica)
  - [1. Login Inicial](#1-login-inicial)
  - [2. Configuração do 2FA](#2-configuração-do-2fa)
  - [3. Ativação e Confirmação](#3-ativação-e-confirmação)
  - [4. Novo Login com Desafio TOTP](#4-novo-login-com-desafio-totp)
  - [5. Desativação do 2FA](#5-desativação-do-2fa)
  - [6. Reinício da Dinâmica](#6-reinício-da-dinâmica)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

---

## Visão Geral

O projeto foi construído como um módulo HTML5, CSS3 e JavaScript ES Modules moderno, projetado para execução direta no navegador sem a necessidade de servidores de aplicação. 

A lógica criptográfica (RFC 6238) e a geração de QR Code são executadas no lado do cliente utilizando bibliotecas consolidadas carregadas via CDN.

---

## Tecnologias Utilizadas

- **HTML5 Semântico & CSS3 Modular:** Interface responsiva com tema Dark / Cyber Sentinel.
- **JavaScript Moderno (ES Modules):** Arquitetura desacoplada e modular baseada em Web Standards.
- **[`otplib`](https://github.com/yeojz/otplib):** Biblioteca oficial para geração de segredos e validação de tokens TOTP com tolerância de drift temporal.
- **[`qrcode`](https://github.com/soldair/node-qrcode):** Geração dinâmica de QR Code em formato Data URL para escaneamento com celular.

---

## Como Executar

### Execução Local
Para testar no seu computador com suporte a ES Modules, utilize qualquer servidor web estático:

- **Via npx (Node.js já instalado):**
  ```bash
  npx serve .
  ```
- **Via Python:**
  ```bash
  python -m http.server 3000
  ```
  
### Credenciais de Demonstração

| Campo | Valor Padrão |
| :--- | :--- |
| **Usuário / E-mail** | `alunorural@ufrrj.br` (ou `alunorural`) |
| **Senha** | `senha123` |

*(A interface também disponibiliza um botão prático de **"Preencher dados demo"** na tela de login).*

---

## Fluxo da Dinâmica

1. **Login Inicial:** O participante entra com a conta padrão. Como o 2FA ainda não está ativo, o acesso ao Painel (Dashboard) é imediato.
2. **Configuração do 2FA:** No painel, o participante clica em "Configurar 2FA". É gerada uma chave secreta Base32 e o respectivo QR Code da URI `otpauth://`.
3. **Ativação e Confirmação:** O participante escaneia o QR Code no seu aplicativo autenticador e digita o primeiro código de 6 dígitos para validar a sincronização de horário e ativar a proteção.
4. **Novo Login com Desafio TOTP:** Ao sair da conta e realizar um novo login, o sistema detecta que o 2FA está ativo e exige o código de 6 dígitos gerado em tempo real pelo celular.
5. **Desativação do 2FA:** No painel, o participante pode desativar a camada extra a qualquer momento mediante confirmação do código atual.
6. **Reinício da Dinâmica:** O botão **"Reiniciar Dinâmica"** no topo da tela limpa as credenciais e o estado no `sessionStorage`, retornando a experiência para o estado inicial para o próximo participante.

---

## Estrutura de Arquivos

```text
MFA/
├── css/
│   ├── base.css          # Estilos base, tipografia e reset
│   ├── components.css    # Botões, alertas, inputs, cards e stepper
│   ├── main.css          # Ponto de entrada que agrega os arquivos CSS
│   ├── variables.css     # Paleta de cores, tipografia e espaçamentos
│   └── views.css         # Layout das telas de Login, Desafio, Setup e Dashboard
├── js/
│   ├── components/
│   │   ├── auth.js           # Lógica dos formulários de Login e Desafio TOTP
│   │   ├── mfa-manager.js    # Lógica do Dashboard e do Assistente de Setup (Wizard)
│   │   └── navigation.js     # Gerenciamento de exibição de telas e reinício
│   ├── core/
│   │   ├── api.js            # Camada de serviços simulada client-side
│   │   ├── state.js          # Gerenciamento de estado reativo da aplicação
│   │   └── ui.js             # Funções utilitárias de interface, alertas e máscaras
│   ├── lib/
│   │   ├── qrcode.js         # Integração com a biblioteca de QR Code via CDN
│   │   ├── totp.js           # Integração com a biblioteca otplib via CDN
│   │   └── users.js          # Base de dados em memória e sessionStorage
│   └── main.js           # Ponto de entrada da aplicação
├── fundo.gif             # Imagem de fundo temática
├── index.html            # Estrutura HTML principal da página
└── README.md             # Documentação do projeto
```
