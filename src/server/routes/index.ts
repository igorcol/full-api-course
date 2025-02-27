import { Router } from "express";

import { CidadesController } from './../controllers'

export const router = Router();

// Test Route
router.get('/', (req, res) => {
    return res.send('✅ Api OK')
})

// ============= ROUTES ============= 

// * CIDADES
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll)                // * GET ALL CIDADES
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById)          // * GET BY ID 
router.post('/cidades', CidadesController.createValidation, CidadesController.create)               // * POST CIDADES 
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById)    // * UPDATE BY ID 
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById) // * DELETE BY ID 

//  ================================= 
