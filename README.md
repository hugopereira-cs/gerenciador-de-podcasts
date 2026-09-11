# 🎙️ Gerenciador de Podcasts

API HTTP para listar e filtrar episódios de podcasts. O projeto foi desenvolvido com Node.js, TypeScript e o módulo HTTP nativo do Node.js.

## ✨ Funcionalidades

- 📚 Listagem de todos os episódios cadastrados
- 🔎 Filtro de episódios pelo nome exato do podcast
- 🧩 Respostas em JSON

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Módulo `http` nativo do Node.js
- `tsx` para desenvolvimento
- Biome para lint e formatação

## 🚀 Como executar

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

O servidor utiliza a variável `PORT`. Para executar localmente, crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

### Desenvolvimento

```bash
npm run start:dev
```

O servidor será iniciado na porta definida em `PORT`.

## 📡 Endpoints

### Listar episódios

```http
GET /api/list
```

Retorna todos os episódios cadastrados.

### Filtrar episódios por podcast

```http
GET /api/episodes?p=flow
```

O parâmetro `p` recebe o nome do podcast. O filtro compara o valor informado com o campo `podcastName`.

Quando há resultados, a API responde com `200`. Quando nenhum episódio é encontrado, responde com `204`.

Todas as respostas possuem o tipo de conteúdo `application/json`.

### Exemplo de resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```

## 🧪 Scripts disponíveis

| Comando               | Descrição                                             |
| --------------------- | ----------------------------------------------------- |
| `npm run start:dev`   | Inicia o servidor em modo de desenvolvimento.         |
| `npm run start:watch` | Inicia o servidor observando alterações nos arquivos. |
| `npm run dist`        | Gera a versão compilada em `dist`.                    |
| `npm run start:dist`  | Gera a versão compilada e inicia o servidor.          |
| `npm run typecheck`   | Verifica os tipos TypeScript sem gerar arquivos.      |
| `npm run lint`        | Executa a verificação do Biome.                       |
| `npm run format`      | Formata os arquivos com o Biome.                      |

## 🗂️ Estrutura principal

```text
src/
├── app.ts                         # Encaminhamento das requisições
├── server.ts                      # Criação e inicialização do servidor HTTP
├── controllers/                  # Tratamento das respostas HTTP
├── models/                       # Interfaces dos dados e da resposta
├── repositories/                 # Leitura dos episódios em podcasts.json
├── routes/                       # Rotas da API
├── services/                     # Listagem e filtragem dos episódios
└── utils/                        # Métodos HTTP, status e tipos de conteúdo
```

Os episódios são armazenados em `src/repositories/podcasts.json`.
