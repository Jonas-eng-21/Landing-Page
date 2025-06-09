# Landing Page - Conecta Saúde

![image](https://github.com/user-attachments/assets/89e3e657-b294-48a5-b20e-69da9e2de57f)


> Projeto de landing page responsiva desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor front-end.

---

## 📄 Sobre o Projeto

**Conecta Saúde** é uma landing page para uma plataforma fictícia de telemedicina. O objetivo principal do projeto é apresentar os serviços e benefícios da plataforma de forma clara, moderna e convincente, guiando o usuário desde a descoberta até a chamada para ação final.

A página foi construída com foco em uma experiência de usuário fluida, design limpo e interações que reforçam a imagem de uma empresa de tecnologia inovadora e confiável no setor da saúde.

---

## ✨ Funcionalidades

- **Design Totalmente Responsivo:** A interface se adapta perfeitamente a desktops, tablets e dispositivos móveis.
- **Carrossel Interativo na Seção Hero:** Um slider dinâmico e automático, construído com **Swiper.js**, para apresentar os principais atrativos da plataforma.
- **Componentes Reutilizáveis:** Criação de componentes de UI modulares, como cards interativos e modais, para um código mais limpo e organizado.
- **Animações e Micro-interações:** Diversos efeitos de `hover` e animações customizadas (cards em leque, foco com blur, etc.) para criar uma experiência mais engajante.
- **Navegação "Sticky" e Suave:** O header acompanha a rolagem da página, e os links internos navegam suavemente entre as seções.
- **Design System Aplicado:** Cores e tipografia consistentes aplicadas em todo o projeto para reforçar a identidade da marca.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias de ponta do ecossistema front-end:

- **Vite:** Ambiente de desenvolvimento extremamente rápido que oferece Hot Module Replacement (HMR) instantâneo.
- **React:** Biblioteca para construção da interface de usuário baseada em componentes.
- **TypeScript:** Adiciona tipagem estática ao JavaScript, aumentando a segurança e a manutenibilidade do código.
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável. Neste projeto, o design system foi aplicado usando o sistema de **valores arbitrários** do Tailwind diretamente nas classes JSX.
- **Swiper.js:** Biblioteca moderna para a criação de carrosséis e sliders.
- **Lucide React:** Biblioteca de ícones SVG, leve e de fácil customização.

---

## 🏗️ Arquitetura e Boas Práticas

Para garantir um código limpo, escalável e de fácil manutenção, o projeto foi estruturado seguindo as seguintes práticas:

1.  **Arquitetura de Componentes:** A estrutura de pastas foi organizada para separar as responsabilidades:
    - `src/components/layout/`: Para componentes estruturais (Header, Footer).
    - `src/components/sections/`: Para as grandes seções da página (Hero, Features, etc.).
    - `src/components/ui/`: Para componentes de UI genéricos e reutilizáveis (Modal, Cards Animados, etc.).

2.  **Código Limpo:** Utilização de componentes funcionais, componentização de elementos repetidos e organização de dados em arrays para deixar o código JSX mais declarativo e legível.

3.  **Acessibilidade (a11y):** Uso de tags HTML semânticas (`<header>`, `<main>`, `<section>`, `<footer>`) e atributos `aria-label` em elementos interativos para melhorar a acessibilidade.

4.  **Estilização Consistente:** Embora a configuração do `tailwind.config.ts` tenha sido abandonada por desafios de build, o design system (cores e tipografia) foi mantido e aplicado de forma consistente através dos valores arbitrários do Tailwind, garantindo a coesão visual.

---

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- **Node.js:** É necessário ter o Node.js instalado (versão 18 ou superior recomendada). Você pode baixá-lo [aqui](https://nodejs.org/).
- **Gerenciador de Pacotes:** `npm` (que já vem com o Node.js) ou `yarn`.

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Jonas-eng-21/Landing-Page.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd NOME_DO_REPOSITORIO
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

---

## ✍️ Autor

Feito por **Jonas Soares** 👋

- **LinkedIn:** [jonas-soares-824a8a361](https://www.linkedin.com/in/jonas-soares-824a8a361/)
- **GitHub:** [Jonas-eng-21](https://github.com/Jonas-eng-21)
