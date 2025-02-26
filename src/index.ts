import { server } from "./server/Server";

// Env variables
const PORT = process.env.PORT || 3030

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}        
    ===========================
    `);
})