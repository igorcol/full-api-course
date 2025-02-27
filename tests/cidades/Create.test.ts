import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Create', () => {

    it('Cria Registro', async () => {
        const res1 = await testServer
            .post('/cidades').
            send({ nome: "Sorocaba" });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof res1.body).toEqual('number')
    })

    it('Não Criar Registro passando number ao inves de string', async () => {
        const res1 = await testServer
            .post('/cidades').
            send({ nome: null });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
    })

});