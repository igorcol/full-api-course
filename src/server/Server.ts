import express from "express";


const server = express();



// Configurações do servidor
server.get('/', (_, res) => {
    return res.send("Olá dev")
});


export { server }