
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


// Schema do Query
interface IParamProps {
    id?: number;
}
// Schema da Validação do Query
const deleteValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
})


//* Validação para todas as propriedades da controller
export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema(deleteValidation)
}));

//* Criar Cidade
export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    const DATA = req.params
    console.log('DELETE BY ID | Cidade:', DATA)
    return res.status(StatusCodes.NOT_IMPLEMENTED).send('DELETE BY ID | NÃO IMPLEMENTADO')
}