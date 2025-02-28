import * as count  from './Count'
import * as create from './Create'
import * as deleteById  from './deleteById'
import * as getAll  from './getAll'
import * as getById  from './getById'
import * as updateById  from './updateById'

export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...getById,
    ...updateById,
    ...getAll,
    ...count,
}