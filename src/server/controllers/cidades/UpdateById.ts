/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


// Schema do Query
interface IParamProps {
    id?: number;
}
interface IBodyProps {
    nome: string;
}
// Schema da Validação do Query
const paramsValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
})
const bodyValidation: yup.ObjectSchema<IBodyProps> = yup.object().shape({
    nome: yup.string().required().min(3)
})


//* Validação para todas as propriedades da controller
export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema(bodyValidation),
    params: getSchema(paramsValidation)
}));

//* Criar Cidade
export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    const PARAM_DATA = req.params
    const BODY_DATA = req.body
    console.log('UPDATE | Cidades params:', PARAM_DATA)
    console.log('UPDATE | Cidades body:', BODY_DATA)
    return res.status(StatusCodes.NOT_IMPLEMENTED).send('UPDATE BY ID | NÃO IMPLEMENTADO')
}