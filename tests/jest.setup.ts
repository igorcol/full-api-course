import supertest from "supertest";
import { Knex } from "../src/server/database/knex";

import { server } from "../src/server/Server";

beforeAll(async () => {
    await Knex.migrate.latest();
});

afterAll(async () => {
    await Knex.destroy();
})

/*
    Esta sequência deve ser executada porque os testes são 
    realizados em um ambiente NODE_ENV = test, usando uma conexão em :memory:.
    Ao terminar o teste, o banco de dados é destruído, portanto, deve ser criado
    sempre que um teste se inicia, realizando a migração logo em seguida.
*/

export const testServer = supertest(server)