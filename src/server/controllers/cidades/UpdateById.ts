/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { CidadesProvider } from "../../database/providers/cidades";

// * SCHEMAS
// Schema do Query
interface IParamProps {
    id?: number;
}
interface IBodyProps extends Omit<ICidade, 'id'> {}

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

//* Update By Id
export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    const PARAM_DATA = req.params
    const BODY_DATA = req.body
    console.log('UPDATE | Cidades params:', PARAM_DATA)
    console.log('UPDATE | Cidades body:', BODY_DATA)

    if (!PARAM_DATA.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro ID precisa ser informado.'
            }
        })
    }

    const result = await CidadesProvider.updateById(PARAM_DATA.id, BODY_DATA)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
}