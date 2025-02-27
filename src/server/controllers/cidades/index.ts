import * as create  from './Create'
import * as getAll from './getAll'
import * as GetById from './GetById'

export const CidadesController = {
    ...create,
    ...getAll,
    ...GetById
}