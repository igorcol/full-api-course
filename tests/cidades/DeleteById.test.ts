import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - DeleteById', () => {

    it('Apaga registro de cidade', async () => { 

        // ! Cria cidade, apagar depois de implementar o DB
        const res = await testServer
            .post('/cidades')
            .send({ nome: 'SorocabaTeste'})
        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        // * Apaga a cidade criada anteriormente
        const resApagada = await testServer
            .delete(`/cidades/${res.body}`)
            .send()
        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)
    });

    it('Não apaga registro inexistente', async () => {
        const res = await testServer
            .delete('/cidades/99999')
            .send();

        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('errors.default')
    });

})