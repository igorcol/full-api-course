import express from "express";
import { router } from './routes'
import 'dotenv/config'


// Config
export const server = express();
server.use(express.json())

// Rotas
server.use(router)
