import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface ICidade {
    nome?: string;
    estado?: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required(),
    estado: yup.string().required()
})

// Criar Cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const DATA = req.body
    let validatedData: ICidade | undefined = undefined

    try {
        validatedData = await bodyValidation.validate(DATA, { abortEarly: false })
    }
    catch (err) {
        const yupError = err as yup.ValidationError
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {
            if (!error.path) return
            errors[error.path] = error.message
        })


        return res.status(StatusCodes.BAD_REQUEST).json({errors})
    }

    console.log(validatedData)
    return res.send(validatedData)
}