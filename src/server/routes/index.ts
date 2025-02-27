import { Router } from "express";

import { CidadesController } from './../controllers'

export const router = Router();

// Test Route
router.get('/', (req, res) => {
    return res.send('✅ Api OK')
})

// ============= ROUTES ============= 
router.get('/cidades', // * GET ALL CIDADES
    CidadesController.getAllValidation,
    CidadesController.getAll
)

router.get('/cidades/:id', // * GET BY ID
    CidadesController.getByIdValidation,
    CidadesController.getById
)

router.post('/cidades', // * POST CIDADES
    CidadesController.createValidation, 
    CidadesController.create
)
//  ================================= 
