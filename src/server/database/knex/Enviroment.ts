/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Knex } from 'knex'
import path from 'path'

// Configura os ambientes

// * DEVELOPMENT
export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys = ON')
            done();
        }
    }
};

// * TEST
export const test: Knex.Config = {
    ...development,
    connection: ':memory:'
};

// * PRODUCTION
export const production: Knex.Config = {
    ...development,  // ! trocar após implementação do DB
};