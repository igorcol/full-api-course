import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


// Schema do Query
interface IParamProps {
    id?: number;
}
// Schema da Validação do Query
const queryValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
})


//* Validação para todas as propriedades da controller
export const getByIdValidation = validation((getSchema) => ({
    params: getSchema(queryValidation)
}));

//* Criar Cidade
export const getById = async (req: Request<IParamProps>, res: Response) => {
    const DATA = req.params
    console.log('GET | Cidades:', DATA)

    if(Number(DATA.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado.'
        }
    })

    return res.status(StatusCodes.OK).json({
        id: DATA.id,
        nome: 'Sorocaba'
    })
}