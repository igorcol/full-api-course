import express from "express";
import 'dotenv/config'
import './shared/services/TanslationsYup'
import { router } from './routes'

// Server Config
export const server = express();
server.use(express.json())

// Config Routes
server.use(router)
