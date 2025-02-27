import { Router } from "express";

import { CidadesController } from './../controllers'

export const router = Router();

// Test Route
router.get('/', (req, res) => {
    return res.send('✅ Api OK')
})

// ============= ROUTES ============= 
// * GET ALL CIDADES
router.get('/cidades',  CidadesController.getAllValidation, CidadesController.getAll)

// * GET BY ID 
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById)

// * UPDATE BY ID 
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById)

// * POST CIDADES 
router.post('/cidades',CidadesController.createValidation,  CidadesController.create)
//  ================================= 
