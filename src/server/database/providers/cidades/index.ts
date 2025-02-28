import * as create from './Create'
import { deleteById } from './deleteById'
import { getAll } from './GetAll'
import { getById } from './getById'
import { updateById } from './updateById'

export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...getById,
    ...updateById,
    ...getAll,
}