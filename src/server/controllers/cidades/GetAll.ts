/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

// Schema do Query
interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}
// Schema da Validação do Query
const queryValidation: yup.ObjectSchema<IQueryProps> = yup.object().shape({
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string()
})


//* Validação para todas as propriedades da controller
export const getAllValidation = validation((getSchema) => ({
    query: getSchema(queryValidation)
}));


//* Criar Cidade
export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1) // ! DADO MOCKADO, REMOVER APÓS IMPLEMENTAÇÃO DO DB

    const DATA = req.query
    console.log('GET | Cidades:', DATA)

    return res.status(StatusCodes.OK).json([
        {
            id: 1,
            nome: 'Sorocaba', // ! DADO MOCKADO, REMOVER APÓS IMPLEMENTAÇÃO DO DB
        }
    ])
}