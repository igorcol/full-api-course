import { Router } from "express";

import { CidadesController } from './../controllers'

export const router = Router();

// Test Route
router.get('/', (req, res) => {
    return res.send('✅ Api OK')
})

// ============= ROUTES ============= 
router.get('/cidades', // * GET CIDADES
    CidadesController.getAllValidation,
    CidadesController.getAll
)

router.post('/cidades', // * POST CIDADES
    CidadesController.createValidation, 
    CidadesController.create
)
//  ================================= 
