/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";

// * CIDADE
// Schema do Body
interface ICidade {
    nome: string;
    estado: string;
}
// Schema da Validação do Body
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required(),
    estado: yup.string().required().max(2).min(2)
})

// * FILTER
// Schema do Filter
interface IFilter {
    filter?: string;
}
// Schema da Validação do Filter
const fiterValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
    filter: yup.string().optional()
})


//* Validação para todas as propriedades da controller
export const createValidation = validation((getSchema) => ({
    body: getSchema(bodyValidation),
    query: getSchema(fiterValidation)
}));


//* Criar Cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const DATA = req.body
    console.log('POST | Cidade Criada:', DATA)
    return res.send(DATA)
}