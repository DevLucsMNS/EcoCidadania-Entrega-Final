# EcoCidadania - Plataforma Web para ONGs (Projeto Final)

Projeto final da disciplina de Desenvolvimento Front-end, focado na construção de uma plataforma web completa para a ONG fictícia EcoCidadania. O projeto evoluiu de um site HTML estático para uma Single Page Application (SPA) dinâmica, interativa e otimizada, seguindo práticas profissionais de desenvolvimento.

**Aluno:** Lucas Moreira

**https://github.com/DevLucsMNS/EcoCidadania-JS** - **https://github.com/DevLucsMNS/EcoCidadania-CSS** - **https://github.com/DevLucsMNS/projeto-ong-ecocidadania**

---

## 🎯 Visão do Produto (Contexto)

O terceiro setor brasileiro representa uma força econômica e social significativa. No entanto, mais de 820 mil ONGs no país carecem de presença digital adequada. Esta plataforma visa oferecer uma solução profissional e acessível para que ONGs possam gerenciar suas atividades, captar recursos e engajar voluntários.

---

## ✨ Funcionalidades Principais

* **Arquitetura SPA:** Navegação fluida e instantânea sem recarregamento de página (implementado com JavaScript puro).
* **Navegação Dinâmica:** Roteamento baseado em Hash (`#/`) que carrega "views" (templates JS) dinamicamente.
* **Validação de Formulários:** Sistema de verificação de consistência de dados (ex: nome, e-mail) no lado do cliente, com feedback em tempo real.
* **Design Responsivo:** Layouts adaptáveis para mobile, tablets e desktop usando CSS Grid e Flexbox.
* **Acessibilidade (WCAG 2.1 AA):**
    * Navegação completa por teclado com `:focus-visible`.
    * Suporte a leitores de tela com `aria-label` e HTML semântico.
    * Alto contraste de cores (mínimo 4.5:1).
    * Modo Escuro (Dark Mode) com persistência de tema via `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3:** CSS Grid, Flexbox, Variáveis CSS, Media Queries.
* **JavaScript (ES6+):**
    * Manipulação do DOM.
    * Roteamento (SPA) e Eventos.
    * Templates Literais.
    * `localStorage`.
* **Git & GitHub:**
    * Versionamento com Commits Semânticos.
    * Estratégia de branching GitFlow (features, develop, main).
    * Gerenciamento de projeto com Issues, PRs e Releases.
* **Práticas de Otimização:**
    * Minificação de arquivos CSS e JS.
    * Compressão de imagens.

---

## 🚀 Como Executar Localmente

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/DevLucsMNS/EcoCidadania-Entrega-Final.git](https://github.com/DevLucsMNS/EcoCidadania-Entrega-Final.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd EcoCidadania-Entrega-Final
    ```
3.  Como o projeto é estático (HTML/CSS/JS puros), não há dependências. Apenas sirva os arquivos.
4.  A forma mais fácil é com a extensão **"Live Server"** do VS Code.
5.  Clique com o botão direito no `index.html` e selecione "Open with Live Server".

---

## 📈 Processo de Desenvolvimento (Atividades)

* **Atividade 1:** Estruturação HTML e semântica.
* **Atividade 2:** Implementação do Sistema de Design com CSS (Layouts, Componentes).
* **Atividade 3:** Transformação em SPA com JavaScript (Roteamento e Validação).
* **Atividade 4:** Profissionalização (Acessibilidade, Otimização, GitFlow e Documentação).
