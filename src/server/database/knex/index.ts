import knex from "knex"
import { development, production, test } from './Enviroments'

const NODE_ENV = process.env.NODE_ENV

// Set environment based on the NODE_ENV variable
const getEnviroment = () => {
    switch (NODE_ENV) {
        case 'production': return production;

        case 'test': return test

        default: return development
    }
}

export const Knex = knex(getEnviroment());