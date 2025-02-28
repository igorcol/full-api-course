import { count } from './Count'
import * as create from './Create'
import { deleteById } from './deleteById'
import { getAll } from './getAll'
import { getById } from './getById'
import { updateById } from './updateById'

export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...getById,
    ...updateById,
    ...getAll,
    ...count,
}