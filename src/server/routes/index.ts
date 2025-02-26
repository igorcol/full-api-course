import { Router } from "express";

import { CidadesController } from './../controllers'

export const router = Router();

// Test Route
router.get('/', (req, res) => {
    return res.send('✅ Api OK')
})

// ROUTES
router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create)
