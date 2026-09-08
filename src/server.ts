import * as http from 'http';

// Criando um servidor HTTP
const server = http.createServer(
  (request: http.IncomingMessage, reponse: http.ServerResponse) => {}
);

const port = process.env.PORT;

// Iniciando o servidor na porta 3333
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`)
})
