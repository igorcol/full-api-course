import { server } from "./server/Server";

// Env variables
const PORT = process.env.PORT || 3030
const ENV = process.env.NODE_ENV

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}          
    ⚡ Env: ${ENV}      
    ===========================
    `);
})