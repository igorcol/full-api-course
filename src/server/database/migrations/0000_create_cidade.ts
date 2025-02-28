import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {
    return knex.schema
        .createTable(ETableNames.cidade, table => {
            table.bigIncrements('id').primary().index();
            table.string('nome', 150).checkLength('<=', 100).index().notNullable();

            table.comment('Tabela para armazenar cidades.')
        })
        .then(()  => {
            console.log(`# Created table - ${ETableNames.cidade}`)
        })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.cidade)
    .then(()  => {
        console.log(`# Dropped table - ${ETableNames.cidade}`)
    })
}

