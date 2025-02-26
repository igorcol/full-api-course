import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface ICidade {
    nome?: string;
}

const bodyValidation: yup.Schema<ICidade> =  yup.object().shape({
    nome: yup.string().required()
})

// Criar Cidade
export const create = async (req: Request<{},{},ICidade>, res: Response) => {
    const DATA = req.body
    let validatedData : ICidade | undefined = undefined

    try {
        await bodyValidation.validate(DATA)
    }
    catch (error) {
        const yupError = error as yup.ValidationError
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message
            }
        })
    }

    console.log(validatedData)
    return res.send(validatedData)
}