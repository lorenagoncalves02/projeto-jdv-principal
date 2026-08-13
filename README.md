# 🎮 Jogo da Velha (Tic-Tac-Toe) - React + Vite

> Projeto desenvolvido como trabalho de refatoração para o curso **Técnico em Desenvolvimento de Sistemas**, evoluindo o tutorial oficial do React para uma arquitetura moderna, responsiva e com escopo visual isolado via **CSS Modules**.

---

## 📖 Visão Geral

Esta aplicação consiste em um sistema interativo do tradicional **Jogo da Velha (Tic-Tac-Toe)** desenvolvido com **React** e impulsionado pelo **Vite**. O projeto foi estruturado para oferecer uma experiência de jogo local moderna, fluida e totalmente responsiva para dois jogadores.

### 🎯 Objetivo do Projeto
O objetivo principal é refatorar o código-fonte modelo disponibilizado no [Tutorial Oficial do React](https://pt-br.react.dev/learn/tutorial-tic-tac-toe), elevando o padrão técnico da aplicação por meio da aplicação de boas práticas de Engenharia de Software e Front-end.

### 🌟 Diferenciais e Melhorias em Relação ao Tutorial do React
- **Arquitetura Modular (CSS Modules):** Em vez de um arquivo CSS global único, cada componente possui seus próprios estilos com escopo local isolado.
- **Metodologia BEM e Variáveis CSS:** Padronização visual com Design System desacoplado e reutilizável.
- **Design Responsivo com Bootstrap:** Integração de utilitários do Bootstrap para adaptação em dispositivos móveis, tablets e desktops.
- **Clean Code e Componentização Estrita:** Separação das responsabilidades dos componentes em pastas dedicadas, facilitando a manutenção e testes.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

| Tecnologia | Finalidade / Papel no Projeto |
| :--- | :--- |
| **React (v18+)** | Biblioteca JavaScript base para criação de componentes reativos e controle de estado (`useState`). |
| **Vite** | Build tool e servidor de desenvolvimento de altíssima performance. |
| **JavaScript (ES6+)** | Lógica de programação imutável, condicionais e cálculo de vencedores. |
| **HTML5 Semântico** | Estruturação da página priorizando acessibilidade (A11y). |
| **CSS Modules** | Estilização isolada por componente para evitar conflitos de escopo global. |
| **Bootstrap** | Framework para utilitários de layout e responsividade. |

---

## 📜 Regras de Negócio

1. **Início da Partida:**
   - O jogo inicia automaticamente assim que o sistema carrega ou quando reiniciado pelo usuário.
   - O tabuleiro começa com 9 posições vazias (`null`), e o jogador **X** faz a primeira jogada.
2. **Alternância de Turnos:**
   - A cada clique em uma casa válida, o sistema calcula o turno atual (`currentMove % 2 === 0`).
   - Turnos pares pertencem ao jogador **X** e turnos ímpares ao jogador **O**.
3. **Jogadas Inválidas:**
   - O sistema bloqueia cliques em quadrados já preenchidos ou caso a partida já tenha um vencedor/empate.
4. **Condição de Vitória:**
   - Ocorre quando 3 símbolos idênticos são alinhados em uma das 8 combinações possíveis (3 horizontais, 3 verticais ou 2 diagonais).
5. **Condição de Empate:**
   - Declarado quando todas as 9 posições são preenchidas sem nenhum vencedor alinhado.
6. **Encerramento e Histórico:**
   - A partida é congelada ao atingir a vitória ou empate.
   - O histórico de jogadas ("Viagem no Tempo") permite selecionar turnos anteriores. Fazer uma nova jogada a partir de um turno passado reescreve o histórico futuro.

---

## 📋 Requisitos Funcionais

- [x] Permitir o início automático de uma nova partida.
- [x] Alternar dinamicamente e automaticamente as vezes entre o Jogador X e Jogador O.
- [x] Validar jogadas e bloquear interações em casas já preenchidas.
- [x] Detectar e exibir imediatamente as condições de vitória ou empate.
- [x] Disponibilizar botão de reinício/reset do tabuleiro.
- [x] Manter o histórico sequencial de jogadas permitindo a navegação entre turnos passados.
- [x] Exibir indicadores de status e turno do jogador atual na interface.

---

## ⚙️ Como Baixar e Executar o Projeto Localmente

Siga o passo a passo abaixo para executar o projeto em sua máquina:

### 1. Pré-requisitos
- **Node.js** (versão 18.0.0 ou superior)
- **npm** ou **yarn** instalado

### 2. Passo a Passo
```bash
# 1. Clone este repositório
git clone [https://github.com/seu-usuario/seu-repositorio-jogo-da-velha.git](https://github.com/seu-usuario/seu-repositorio-jogo-da-velha.git)

# 2. Acesse a pasta do projeto
cd seu-repositorio-jogo-da-velha

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento Vite
npm run dev