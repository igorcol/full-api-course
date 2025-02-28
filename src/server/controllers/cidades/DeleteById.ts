
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";


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

//* Deletar Cidade
export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    const DATA = req.params
    console.log('DELETE BY ID | Cidade:', DATA)

    if (!DATA.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro ID precisa ser informado.'
            }
        })
    }

    const result = await CidadesProvider.deleteById(DATA.id);

    if( result instanceof Error ) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.NO_CONTENT).send();
}