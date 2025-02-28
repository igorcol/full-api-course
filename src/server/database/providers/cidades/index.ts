import * as create from './Create'
import { deleteById } from './deleteById'

export const CidadesProvider = {
    ...create,
    ...deleteById
}