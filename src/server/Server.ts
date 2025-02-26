import express from "express";
import { router } from './routes'
import 'dotenv/config'

// Server Config
export const server = express();
server.use(express.json())

// Config Routes
server.use(router)
