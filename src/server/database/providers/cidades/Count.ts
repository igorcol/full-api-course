

import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";


// Faz uma contagem de quantos registro ainda restam no banco
export const count = async (filter: string): Promise<number | Error> => {
    try {
        const [{ count }] = await Knex(ETableNames.cidade)
            .where('nome', 'like', `%${filter}%`)
            .count<[{ count: number }]>('* as count');

        if (Number.isInteger(Number(count))) return Number(count)

        return new Error('🔴 Erro ao consultar a quantidade total de registros.')
    }
    catch (error) {
        console.log('🔴 Erro ao consultar a quantidade total de registros.', error)
        return new Error('🔴 Erro ao consultar a quantidade total de registros.')
    }
}