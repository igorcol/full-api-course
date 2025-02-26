/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

// * CIDADE
// Schema do Body
interface ICidade {
    nome: string;
}
// Schema da Validação do Body
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required()
})


//* Validação para todas as propriedades da controller
export const createValidation = validation((getSchema) => ({
    body: getSchema(bodyValidation)
}));


//* Criar Cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const DATA = req.body
    console.log('POST | Cidade:', DATA)
    return res.status(StatusCodes.CREATED).json(1) // ! teste mockado
}