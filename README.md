# Node.js TypeScript Boilerplate

Boilerplate para projetos Node.js com TypeScript.

## Características

- Projeto configurado como módulo ESM (`type: module`).
- TypeScript com alvo ES2024 e verificação estrita (`strict`).
- Execução em desenvolvimento com `tsx`.
- Compilação para distribuição com `tsdown`.
- Formatação e lint com Biome.
- Código-fonte localizado em `src`.

## Requisitos

- Node.js
- npm

## Instalação

```bash
npm install
```

## Scripts

| Comando             | Descrição                                                    |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | Executa o servidor em desenvolvimento.                       |
| `npm run dev:watch` | Executa o servidor em desenvolvimento observando alterações. |
| `npm run build`     | Compila o código de `src` para distribuição.                 |
| `npm start`         | Executa o arquivo compilado `dist/src/server.js`.            |
| `npm run typecheck` | Verifica os tipos sem emitir arquivos.                       |
| `npm run lint`      | Executa as verificações do Biome.                            |
| `npm run format`    | Formata os arquivos com o Biome.                             |

## Estrutura

```text
src/
└── server.ts
```

O arquivo `src/server.ts` é o ponto de entrada atual e imprime `Server is running...` no console.
# gerenciador-de-podcasts
