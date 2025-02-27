import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Cidades - GetById', () => {

    it('Busca Registro por ID', async () => {

        const res = await testServer 
            .post('/cidades')
            .send({nome: 'Sorocaba'})
        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscada = await testServer
            .get(`/cidades/${res.body}`)
            .send();
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK)
        expect(resBuscada.body).toHaveProperty('nome')
    })

    it('Não busca registro inexistente', async () => {
        const res = await testServer
            .get('/cidades/99999')
            .send();
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res.body).toHaveProperty('errors.default')
    })

})