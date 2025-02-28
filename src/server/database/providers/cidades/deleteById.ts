import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"


export const deleteById = async (id: number): Promise<void | Error> => {

    try {
        const result = await Knex(ETableNames.cidade)
            .where('id', '=', id)
            .del()

        if (result > 0) return;

        return new Error('🔴 Erro ao apagar registro de cidade.')
    }
    catch (error) {
        console.log('🔴 Erro ao apagar registro de cidade.', error)
        return new Error('🔴 Erro ao apagar registro de cidade.')
    }

}