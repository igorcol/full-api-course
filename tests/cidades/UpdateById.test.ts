import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"


describe('Cidades - Update By ID', () => {

    it('Atualiza Cidade', async () => {
        const res = await testServer
            .post('/cidades/')
            .send({ nome: 'Sorocaba' })
            
        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        const resUpdated = await testServer
            .put(`/cidades/${res.body}`)
            .send({ nome: 'Soroqueibol'})

        expect(resUpdated.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })

    it('Não atualiza registro inexistente', async () => {
        const res = await testServer
            .put('/cidades/99999')
            .send({ nome: 'Sorocaba' })
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('errors.default')
    })

})