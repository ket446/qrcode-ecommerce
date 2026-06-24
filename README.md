# 🎙️ Podcast Manager API

Projeto desenvolvido durante o desafio da DIO utilizando Node.js e TypeScript sem frameworks.

## Objetivo

Criar uma API REST simples para gerenciamento e consulta de podcasts.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- HTTP Nativo
- TSX

---

## Estrutura do Projeto

```bash
src/
├── data/
├── models/
├── routes.ts
└── server.ts
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/podcast-manager-api.git
```

Entre na pasta:

```bash
cd podcast-manager-api
```

Instale as dependências:

```bash
npm install
```

---

## Executar em Desenvolvimento

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Executar Produção

```bash
npm start
```

---

## Endpoints

### Listar todos os podcasts

```http
GET /api/podcasts
```

Resposta:

```json
[
  {
    "id": 1,
    "title": "Tech Talks",
    "category": "Tecnologia",
    "host": "João Silva"
  }
]
```

---

### Buscar por categoria

```http
GET /api/podcasts/category/Tecnologia
```

Resposta:

```json
[
  {
    "id": 1,
    "title": "Tech Talks",
    "category": "Tecnologia",
    "host": "João Silva"
  }
]
```

---

## Melhorias Futuras

- CRUD completo
- Banco de dados PostgreSQL
- Docker
- Swagger
- Testes automatizados
- Deploy na Render

---

## Autor

Desenvolvido como projeto prático da DIO.
