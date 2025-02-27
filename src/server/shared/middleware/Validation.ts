import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup";

// * MIDDLEWARE DE VALIDAÇÃO GENÉRICO

type TProperty = 'body' | 'header' | 'params' | 'query'

type TGetSchema = <T extends Maybe<AnyObject>>(schema:ObjectSchema<T>) => ObjectSchema<T> // Retorna um unico schema

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAllSchemas = Record<TProperty, ObjectSchema<any>>

type TGetAllSchemas = (getSchema : TGetSchema) => Partial<TAllSchemas> // Retorna todos os schemas

type TValidation = (getAllSchemas:TGetAllSchemas) => RequestHandler;

// * VALIDAÇÃO
/**
 * Middleware de validação genérico.
 * 
 * @param field - O campo que será validado ('body', 'header', 'params' ou 'query').
 * @param scheme - O esquema Yup que será usado para validação.
 * @returns RequestHandler - Middleware de validação.
 * 
*/
export const validation: TValidation = (getAllSchemas) => (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {} // Lista de erro

    // Logica de validação e erros
    Object.entries(schemas).forEach(([key, schema]) =>  {
        try {
            const DATA = req[key as TProperty]
            schema.validateSync(DATA, { abortEarly: false })
        }
        catch (err) {
            const yupError = err as ValidationError
            const errors: Record<string, string> = {}
    
            yupError.inner.forEach(error => {
                if (!error.path) return
                errors[error.path] = error.message
            });
            
            errorsResult[key] = errors
        }
    });
    
    if (Object.entries(errorsResult).length === 0) { // Se NÃO tiver erros
        return next()
    }
    else { // Se tiver erros
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
    }

;}



