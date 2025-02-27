import { Knex } from "./server/database/knex";
import { server } from "./server/Server";

// Env variables
const PORT = process.env.PORT || 3030
const ENV = process.env.NODE_ENV

const startServer = () => {
    server.listen(PORT, () => {
        console.log(`
        ===========================
        ✅ API ONLINE           
        ⚡ Port: ${PORT}          
        ⚡ Env: ${ENV}      
        ===========================
        `);
    })
}

// Faz as migrations antes de iniciar o server em produção
if (process.env.IS_LOCALHOST !== 'true') { // * EM PRODUÇÃO
    Knex.migrate.latest().then(() => {
        Knex.seed.run().then(() => {
            startServer()    
        })
        .catch(console.log);
    })
    .catch(console.log);
}
else { // * LOCALHOST
    startServer();
}