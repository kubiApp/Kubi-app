# 🚗 KUBI — Aprenda a Ler, Dirija o Futuro

> Plataforma de alfabetização para futuros motoristas de aplicativo. A KUBI usa inteligência artificial e interação por voz para ensinar leitura e escrita de forma acessível e motivadora.

---

## 📱 Telas do Projeto

| Tela | Arquivo | Descrição |
|------|---------|-----------|
| **Boas-vindas** | `KubiWelcome.jsx` | Onboarding com coleta de nome e objetivo por voz. Detecta o nível do usuário. |
| **Home** | `KubiHome.jsx` | Tela principal com acesso rápido, XP, streak e conquistas. |
| **Mapa de Lições** | `KubiMap.jsx` | Trilha visual com nós de progresso. Clique no nó laranja para iniciar um exercício. |
| **Exercício / Feedback** | `KubiExercise.jsx` | Tela de desafio de leitura em voz alta com feedback em tempo real e nota. |
| **IA** | `KubiIA.jsx` | Assistente de voz que ouve, responde e exibe mensagem de erro caso não entenda. |

---

## 🔄 Fluxo de Navegação

```
KubiWelcome
     ↓ Começar agora
KubiHome
     ↓ Continue de Onde Parou      ↓ Botão mic (laranja)
  KubiMap                          KubiIA
     ↓ Clique no nó laranja (0%)     ↓ Enviar → volta para Home
  KubiExercise
     ↓ Concluir → volta para Mapa
```

---

## 🛠️ Tecnologias

- [React 18](https://react.dev/)
- CSS injetado dinamicamente (sem arquivos `.css` externos)
- SVG nativo para o mapa de lições
- Google Fonts — Nunito + Baloo 2

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 16 ou superior

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/kubiApp/kubi-app.git

# 2. Entre na pasta
cd kubi-app

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm start
```

O navegador abrirá automaticamente em `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
kubi-app/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   └── screens/
│       ├── KubiWelcome.jsx
│       ├── KubiHome.jsx
│       ├── KubiMap.jsx
│       ├── KubiExercise.jsx
│       └── KubiIA.jsx
└── package.json
```

---

## 🎨 Identidade Visual

| Elemento | Valor |
|----------|-------|
| Cor primária | `#1a237e` (azul marinho) |
| Cor de destaque | `#f57c00` (laranja) |
| Cor de acento | `#26c6da` (ciano) |
| Sucesso | `#43a047` (verde) |
| Erro | `#ef5350` (vermelho) |
| Fonte título | Baloo 2 |
| Fonte corpo | Nunito |

---

## 🌐 Demo Online

Acesse a versão ao vivo em: [**[https://kubiApp.github.io/Kubi-app](https://kuniApp.github.io/Kubi-app)**](https://kubiapp.github.io/Kubi-app/)

Para publicar:
```bash

npm run deploy
```

---

## 👤 Autor

Feito com 💛 pela equipe KUBI.
