/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import * as yup from 'yup'

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";

// Schema do Query
interface IQueryProps {
    id?: number;
    page?: number;
    limit?: number;
    filter?: string;
}
// Schema da Validação do Query
const queryValidation: yup.ObjectSchema<IQueryProps> = yup.object().shape({
        id: yup.number().integer().default(0),
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string()
})


//* Validação para todas as propriedades da controller
export const getAllValidation = validation((getSchema) => ({
    query: getSchema(queryValidation)
}));


//* Get All Cidades
export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => { 
    const DATA = req.query
    console.log('GET | Cidades:', DATA)

    const page = DATA.page || 1;
    const limit = DATA.limit || 7;
    //const filter: "" = DATA.filter as "" || ""; 
    const filter = DATA.filter || ''; 
    const id = Number(DATA.id); 


    const result = await CidadesProvider.getAll(page, limit, filter, id)
    const count = await CidadesProvider.count(filter)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: { default: result.message }
        })
    }
    else if (count instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: { default: count.message }
        })
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count)
    
    return res.status(StatusCodes.OK).json(result)
}