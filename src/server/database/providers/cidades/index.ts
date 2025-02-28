import * as create from './Create'
import { deleteById } from './deleteById'
import { getById } from './getById'

export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...getById
}