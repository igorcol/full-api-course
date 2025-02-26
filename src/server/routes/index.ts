import { Router } from "express";
import { StatusCodes } from 'http-status-codes'

export const router = Router();


router.get('/', (req, res) => {
    return res.send('Olá Dev')
})


router.post('/teste', (req, res) => {
    return res.status(StatusCodes.CREATED).json(req.body)
})
