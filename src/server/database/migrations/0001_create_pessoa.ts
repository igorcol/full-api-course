import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {
    return knex.schema
        .createTable(ETableNames.pessoa, table => {
            table.bigIncrements('id').primary().index();
            table.string('nomeCompleto').index().notNullable();
            table.string('email').unique().notNullable();

            table.bigInteger('cidadeId')
                .index()
                .notNullable()
                .references('id').inTable(ETableNames.cidade)
                .onUpdate('CASCADE')
                .onDelete('RESTRICT'); // quando apagar uma cidade, caso esteja vinculada a uma pessoa, não apaga
                // ? DEPOIS TROCAR PARA SET NULL (trocar para .nullable())

            table.comment('Tabela para armazenar pessoas.')
        })
        .then(()  => {
            console.log(`# Created table - ${ETableNames.pessoa}`)
        })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.pessoa)
    .then(()  => {
        console.log(`# Dropped table - ${ETableNames.pessoa}`)
    })
}

