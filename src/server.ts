import * as http from "node:http";
import { app } from "./app";

// Criando um servidor HTTP
const server = http.createServer(app);

const port = process.env.PORT;

// Iniciando o servidor na porta 3333
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});
