import * as create  from './Create'
import * as getAll from './getAll'
import * as GetById from './GetById'
import * as UpdateById from './UpdateById'
import * as DeleteById from './DeleteById'

export const CidadesController = {
    ...create,
    ...getAll,
    ...GetById,
    ...UpdateById,
    ...DeleteById
}