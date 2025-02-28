import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";


export const getAll = async ( page: number, limit: number, filter: string, id = 0 ): Promise<ICidade[] | Error> => {

    try {
        const result = await Knex(ETableNames.cidade)
            .select('*')
            .where('id', Number(id))
            .orWhere('nome', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit)

        if (id > 0 && result.every(item => item.id !== id)) { // Busca um id especifico que estaja fora do alcance da pagina e do limite atual
            const resultById = await Knex(ETableNames.cidade)
                .select('*')
                .where('id', '=', id)
                .first();

            if(resultById) return [...result, resultById]
        }

        return result
    }
    catch (error) {
        console.log('🔴 Error ao consultar registros de cidade.', error)
        return new Error('🔴 Error ao consultar registros de cidade.')
    }

    return []
}