import * as create  from './Create'
import * as getAll from './getAll'
import * as GetById from './GetById'
import * as UpdateById from './UpdateById'

export const CidadesController = {
    ...create,
    ...getAll,
    ...GetById,
    ...UpdateById
}